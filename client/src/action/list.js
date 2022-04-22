// list.js --- Redux action for shopping list

// Code:

// Libraries
import axios from 'axios';

// Modules

const addToList = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/item/${id}`);

  dispatch({
    type: 'LIST_ADD_ITEM',
    payload: {
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      quantity,
    },
  });

  localStorage.setItem('listItems', JSON.stringify(getState().list.listItems));
};

const removeFromList = (id) => (dispatch, getState) => {
  dispatch({
    type: 'LIST_REMOVE_ITEM',
    payload: {
      _id: id,
    },
  });

  localStorage.setItem('listItems', JSON.stringify(getState().list.listItems));
};

export { addToList, removeFromList };

// list.js ends here

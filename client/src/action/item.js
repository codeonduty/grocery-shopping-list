// catalogue.js --- Redux action for catalogue

// Code:

// Libraries
import axios from 'axios';

const fetchItem = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'ITEM_REQUEST',
    });

    const { data } = await axios.get(`/api/item/${id}`, { crossDomain: true });

    dispatch({
      type: 'ITEM_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ITEM_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { fetchItem };

// item.js ends here

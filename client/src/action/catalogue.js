// catalogue.js --- Redux action for catalogue

// Code:

// Libraries
import axios from 'axios';

const fetchItems = () => async (dispatch) => {
  try {
    dispatch({
      type: 'CATALOGUE_REQUEST',
    });

    const { data } = await axios.get('/api/item', { crossDomain: true });

    dispatch({
      type: 'CATALOGUE_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'CATALOGUE_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { fetchItems };

// catalogue.js ends here

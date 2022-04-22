// item.js --- Redux reducer for item

// Code:

const initialState = {
  loading: true,
  item: {},
};

// Reducer
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_REQUEST':
      return state;
    case 'ITEM_SUCCESS':
      return { loading: false, item: action.payload };
    case 'ITEM_FAIL':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default itemReducer;

// item.js ends here

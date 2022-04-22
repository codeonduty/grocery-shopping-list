// catalogue.js --- Redux reducer for catalogue

// Code:

const initialState = {
  loading: true,
  items: [],
};

// Reducer
const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATALOGUE_REQUEST':
      return state;
    case 'CATALOGUE_SUCCESS':
      return { loading: false, items: action.payload };
    case 'CATALOGUE_FAIL':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export default catalogueReducer;

// catalogue.js ends here

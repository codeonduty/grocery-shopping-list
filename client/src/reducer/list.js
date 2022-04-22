// list.js --- Redux reducer for shopping list

// Code:

const initialState = {
  listItems: [],
};

// Reducer
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_ADD_ITEM':
      const item = action.payload;

      const existingItem = state.listItems.find((x) => {
        return x._id === item._id;
      });

      if (existingItem) {
        return {
          ...state,
          listItems: state.listItems.map((x) => {
            return x._id === existingItem._id ? item : x;
          }),
        };
      } else {
        return {
          ...state,
          listItems: [...state.listItems, item],
        };
      }

    case 'LIST_REMOVE_ITEM':
      return {
        ...state,
        listItems: state.listItems.filter((x) => {
          return x._id !== action.payload._id;
        }),
      };

    default:
      return state;
  }
};

export default listReducer;

// list.js ends here

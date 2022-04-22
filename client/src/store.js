// store.js --- Redux store

// Code:

// Libraries
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Modules
import catalogueReducer from './reducer/catalogue';
import itemReducer from './reducer/item';
import listReducer from './reducer/list';

const reducer = combineReducers({
  catalogue: catalogueReducer,
  item: itemReducer,
  list: listReducer,
});

const localListItems = localStorage.getItem('listItems')
  ? JSON.parse(localStorage.getItem('listItems'))
  : [];

const initialState = {
  list: { listItems: localListItems },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// store.js ends here

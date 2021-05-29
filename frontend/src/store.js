import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productDetailsReducers,
  productReducers,
} from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productReducers,
  productDetails: productDetailsReducers,
  cart: cartReducers,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = {
  cart: cartItemsFromStorage,
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
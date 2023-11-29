// redux/store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import cropReducer from './reducers/cropReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  crop: cropReducer,
});

const store = createStore(rootReducer);

export default store;

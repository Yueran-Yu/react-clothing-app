import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from "./cart/cart.reducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';  // we will get the local storage on our window browser

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer);

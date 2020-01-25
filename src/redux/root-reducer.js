import {
  combineReducers
} from 'redux';
import {
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import userInfoReducer from './user-info/user-info.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import shippingDetailsReducer from './shipping/shipping.reducer'
import makePaymentDetailsReducer from './payment-details/payment-detail.reducer'
import totalReducer from './total/total.reducer';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'userInfo', 'shipping']
};

const rootReducer = combineReducers({
  user: userReducer,
  userInfo: userInfoReducer,
  cart: cartReducer,
  directory: directoryReducer,
  total: totalReducer,
  shop: shopReducer,
  shipping: shippingDetailsReducer,
  makePaymentDetails: makePaymentDetailsReducer
});

export default persistReducer(persistConfig, rootReducer);
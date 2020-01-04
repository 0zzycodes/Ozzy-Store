import {
  combineReducers
} from 'redux';
import {
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const INITIAL_STATE = {
  show: false
};

const showSideNav = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  showSideNav
});

export default persistReducer(persistConfig, rootReducer);
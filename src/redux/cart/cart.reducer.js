import CartActionTypes from './cart.types';
import {
  addItemToCart,
  removeItemFromCart
} from './cart.utils';
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  discount: 0,
  promo: 0,
  cartTotal: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.ADD_DISCOUNT:
      return {
        ...state,
        discount: action.payload
      };
    case CartActionTypes.ADD_PROMO:
      return {
        ...state,
        promo: action.payload
      };
    case CartActionTypes.ADD_CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => (cartItem.id !== action.payload.id)
        )
      };
    case CartActionTypes.RESET_CART:
      return {
        ...state,
        cartItem: state.cartItems = action.payload
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
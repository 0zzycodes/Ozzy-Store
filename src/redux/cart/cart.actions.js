import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
export const addDiscount = item => ({
  type: CartActionTypes.ADD_DISCOUNT,
  payload: item
});
export const addPromo = item => ({
  type: CartActionTypes.ADD_PROMO,
  payload: item
});
export const addCartTotal = item => ({
  type: CartActionTypes.ADD_CART_TOTAL,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
export const resetCart = item => ({
  type: CartActionTypes.RESET_CART,
  payload: item
});
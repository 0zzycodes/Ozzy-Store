import {
  createSelector
} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartTotalCost = createSelector(
  [selectCart],
  cartTotal => cartTotal.cartTotal
);
export const selectDiscount = createSelector(
  [selectCart],
  discount => discount.discount
);
export const selectPromo = createSelector(
  [selectCart],
  promo => promo.promo
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity,
    0
  )
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
    accumalatedQuantity + cartItem.quantity * cartItem.sale,
    0
  )
);
import {
  createSelector
} from 'reselect';
const selectShipping = state => state.shipping;

export const selectShippingDetails = createSelector(
  [selectShipping],
  shipping => shipping.ShippingDetails
);
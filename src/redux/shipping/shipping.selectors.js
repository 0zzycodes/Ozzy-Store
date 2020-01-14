import {
  createSelector
} from 'reselect';
const selectShipping = state => state.shipping;


export const selectShippingDetails = createSelector(
  [selectShipping],
  shipping => shipping
);
export const selectShippingDetail = createSelector(
  [selectShippingDetails],
  details => details.shippingDetails
);
import {
  createSelector
} from 'reselect';
const selectmakePaymentDetails = state => state.makePaymentDetails;

export const selectMakePaymentHidden = createSelector(
  [selectmakePaymentDetails],
  paymentDetail => paymentDetail.hidden
);
export const selectShippingDetails = createSelector(
  [selectmakePaymentDetails],
  makePaymentDetails => makePaymentDetails
);
export const selectPaymentMethod = createSelector(
  [selectmakePaymentDetails],
  paymentMethod => paymentMethod.paymentMethod
);
export const selectmakePaymentDetail = createSelector(
  [selectmakePaymentDetails],
  details => details.makePaymentDetails
);
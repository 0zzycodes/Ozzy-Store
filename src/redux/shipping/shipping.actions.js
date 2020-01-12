import ShippingActionTypes from './shipping.types';

export const addShippingDetails = details => ({
  type: ShippingActionTypes.SHIPPING_DETAILS,
  payload: details
});
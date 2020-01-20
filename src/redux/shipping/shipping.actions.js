import ShippingActionTypes from './shipping.types';

export const addShippingDetails = details => ({
  type: ShippingActionTypes.SHIPPING_DETAILS,
  payload: details
});
export const addCity = details => ({
  type: ShippingActionTypes.CITY,
  payload: details
});
import ShippingActionTypes from './shipping.types';

const INITIAL_STATE = {
  shippingDetails: {}
};

const shippingDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShippingActionTypes.SHIPPING_DETAILS:
      return {
        ...state,
        shippingDetails: action.payload
      };
    default:
      return state;
  }
};

export default shippingDetailsReducer;
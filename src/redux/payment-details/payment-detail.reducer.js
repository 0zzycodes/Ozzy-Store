const INITIAL_STATE = {
  hidden: true,
  makePaymentDetails: {},
  paymentMethod: 'Direct Bank Transfer'
};

const MakePaymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_MAKE_PAYMENT_DETAILS_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden
      };
    case 'MAKE_PAYMENT_DETAILS':
      return {
        ...state,
        makePaymentDetails: action.payload
      };
    case 'SWITCH_PAYMENT_METHOD':
      return {
        ...state,
        paymentMethod: action.payload
      };
    default:
      return state;
  }
};

export default MakePaymentReducer;
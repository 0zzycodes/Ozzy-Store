const INITIAL_STATE = {
  hidden: true,
  makePaymentDetails: {}
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
    default:
      return state;
  }
};

export default MakePaymentReducer;
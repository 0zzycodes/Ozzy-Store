export const toggleAddMakePayment = () => ({
  type: 'TOGGLE_MAKE_PAYMENT_DETAILS_HIDDEN'
});

export const addMakePayment = details => ({
  type: 'MAKE_PAYMENT_DETAILS',
  payload: details
});
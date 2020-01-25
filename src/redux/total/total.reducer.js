const INITIAL_STATE = {
  total: 0
};

const totalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TOTAL':
      return {
        ...state,
        total: action.payload
      };
    default:
      return state;
  }
};

export default totalReducer;
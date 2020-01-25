import {
  UserActionTypes
} from './user-info.types';
import {
  addToHistory
} from './user-info.utils';
const INITIAL_STATE = {
  userAddress: null,
  userOrderHistory: []
};

const userInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_ADDRESS:
      return {
        ...state,
        userAddress: action.payload
      };
    case UserActionTypes.ADD_USER_ORDER_HISTORY:
      return {
        ...state,
        userOrderHistory: addToHistory(state.userOrderHistory, action.payload)
      };

    default:
      return state;
  }
};

export default userInfoReducer;
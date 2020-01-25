import {
  UserActionTypes
} from './user-info.types';

export const setUserAddress = address => ({
  type: UserActionTypes.SET_USER_ADDRESS,
  payload: address
});
export const addUserOrderHistory = userHistory => ({
  type: UserActionTypes.ADD_USER_ORDER_HISTORY,
  payload: userHistory
});
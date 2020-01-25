import {
  createSelector
} from 'reselect';

const selectUser = state => state.userInfo;

export const selectUserAddress = createSelector(
  [selectUser],
  userInfo => userInfo.userAddress
);
export const selectUserOrderHistory = createSelector(
  [selectUser],
  userInfo => userInfo.userOrderHistory
);
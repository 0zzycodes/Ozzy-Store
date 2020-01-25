import {
  createSelector
} from 'reselect';

export const selectTotal = state => state.total;

export const selectTotalTotal = createSelector(
  [selectTotal],
  total => total.total
);
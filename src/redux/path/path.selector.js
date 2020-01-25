import {
  createSelector
} from 'reselect';

export const selectPath = state => state.path;

export const selectPathPath = createSelector(
  [selectPath],
  path => path.path
);
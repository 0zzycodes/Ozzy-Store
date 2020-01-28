import {
  createSelector
} from 'reselect';

export const selectLocation = state => state.location;

export const selectLocationLocation = createSelector(
  [selectLocation],
  location => location.location
);
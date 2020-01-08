import {
  createSelector
} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
  );
export const selectProduct = (productUrlParam, url) =>
  createSelector(
    [selectCollections],
    collections => {
      let rou;
      if (url.includes('hoodies')) {
        rou = 'hoodies'
      } else if (url.includes('tees')) {
        rou = 'tees'
      } else {
        rou = 'accessories'
      }
      const getRouteArr = collections[rou].items
      const getRouteArrF = getRouteArr.filter((item, index) => item.name === productUrlParam)
      return getRouteArrF
      // return collections ? collections[productUrlParam] : null
    }
  );
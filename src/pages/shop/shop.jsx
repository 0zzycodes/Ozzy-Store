import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
// import loader from '../../components/loader/loader';
// import ProductPage from '../product-page/product-page';

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };
  unsubscribFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      // let menColl = {
      //     id: 1,
      //     title: 'men',
      //     items: []
      //   },
      //   womenColl = {
      //     id: 2,
      //     title: 'women',
      //     items: []
      //   },
      //   unisexColl = {
      //     id: 3,
      //     title: 'unisex',
      //     items: []
      //   };
      // const collectionsArr = [],
      //   mens = [],
      //   womens = [],
      //   unisex = [];
      // // console.log(snapshot.docs);
      // snapshot.docs.forEach(doc => {
      //   console.log(doc.data());
      //   doc.data().id = doc.id;
      //   switch (doc.data().category) {
      //     case 'men':
      //       mens.push(doc.data());
      //       menColl.items = mens;
      //       break;
      //     case 'women':
      //       womens.push(doc.data());
      //       womenColl.items = womens;
      //       break;

      //     default:
      //       unisex.push(doc.data());
      //       unisexColl.items = unisex;
      //       break;
      //   }
      // });
      // collectionsArr.push(menColl);
      // collectionsArr.push(womenColl);
      // collectionsArr.push(unisexColl);
      // console.log(collectionsArr);

      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { isLoading } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={isLoading ? null : CollectionsOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={isLoading ? null : CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);

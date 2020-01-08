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
    const collectionRef = firestore.collection('products');
    collectionRef.onSnapshot(async snapshot => {
      let hoodiesColl = {
          id: 1,
          title: 'hoodies',
          items: []
        },
        teesColl = {
          id: 2,
          title: 'tees',
          items: []
        },
        accessoriesColl = {
          id: 3,
          title: 'accessories',
          items: []
        };
      const collectionsArr = [],
        hoodies = [],
        tees = [],
        accessories = [];
      // console.log(snapshot.docs);
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
        doc.data().id = doc.id;
        switch (doc.data().category) {
          case 'hoodies':
            hoodies.push(doc.data());
            hoodiesColl.items = hoodies;
            break;
          case 'tees':
            tees.push(doc.data());
            teesColl.items = tees;
            break;

          default:
            accessories.push(doc.data());
            accessoriesColl.items = accessories;
            break;
        }
      });
      collectionsArr.push(hoodiesColl);
      collectionsArr.push(teesColl);
      collectionsArr.push(accessoriesColl);
      console.log(collectionsArr);

      const collectionsMap = convertCollectionsSnapshotToMap(collectionsArr);
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

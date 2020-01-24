import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  selectmakePaymentDetail,
  selectMakePaymentHidden
} from '../../redux/payment-details/payment-detail.selector';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { toggleAddMakePayment } from '../../redux/payment-details/payment-detail.action';
import Loader from '../../components/loader/loader';
import ProductPage from '../product-page/product-page';
import MakePayment from '../make-payment/make-payment';

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
      snapshot.docs.forEach(doc => {
        const { category } = doc.data();
        const { id } = doc;

        doc.data().id = id;
        switch (category) {
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
      const collectionsMap = convertCollectionsSnapshotToMap(collectionsArr);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { isLoading } = this.state;
    const { match, makePaymentDetail } = this.props;
    return (
      <div className="shop-page">
        <Helmet>
          <title>Shop | REMEDI</title>
          <meta name="description" content="Remedi Shop" />
        </Helmet>
        {makePaymentDetail.orderId ? <MakePayment /> : null}
        <Route
          exact
          path={`${match.path}`}
          component={isLoading ? Loader : CollectionsOverview}
        />

        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={isLoading ? Loader : CollectionPage}
        />
        <Route
          exact
          path={`/shop/hoodies/:productId`}
          component={isLoading ? Loader : ProductPage}
        />
        <Route
          exact
          path={`/shop/tees/:productId`}
          component={isLoading ? Loader : ProductPage}
        />
        <Route
          exact
          path={`/shop/accessories/:productId`}
          component={isLoading ? Loader : ProductPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
  toggleAddMakePayment: () => dispatch(toggleAddMakePayment())
});
const mapStateToProps = createStructuredSelector({
  makePaymentDetail: selectmakePaymentDetail,
  isHidden: selectMakePaymentHidden
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Homepage from './pages/home/homepage';
import Contact from './pages/contact/contact';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Checkout from './pages/checkout/checkout';
import Header from './components/header/header';
import {
  auth,
  createUserProfileDocument
  // addCollectionAndDocuments
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCartTotal } from './redux/cart/cart.selectors';
import { selectShippingDetail } from './redux/shipping/shipping.selectors';
import Footer from './components/footer/footer';
import CarePage from './pages/care/care-page';
import ResellerPage from './pages/reseller-page/reseller-page';
import PaymentPage from './pages/payment/payment-page';
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    const {
      setCurrentUser
      // collectionsArray
    } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections', collectionsArray);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    const { currentUser, shippingDetails, total } = this.props;
    return (
      <div>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/checkout"
              render={() => (total === 0 ? <Redirect to="/shop" /> : <Checkout />)}
            />
            {/* <Route exact path="/payment" component={PaymentPage} /> */}
            <Route
              exact
              path="/payment"
              render={() =>
                shippingDetails.firstName ? (
                  <PaymentPage />
                ) : (
                  <Redirect to="/checkout" />
                )
              }
            />
            <Route exact path="/care" component={CarePage} />
            <Route exact path="/reseller" component={ResellerPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  total: selectCartTotal,
  shippingDetails: selectShippingDetail
  // collectionsArray: selectCollectionsForPreview
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

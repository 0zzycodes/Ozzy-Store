import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectLocationLocation } from '../../redux/location/location.selectors';
import {
  selectCartItems,
  selectCartTotal,
  selectCartTotalUsd
} from '../../redux/cart/cart.selectors';
import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { selectShippingDetail } from '../../redux/shipping/shipping.selectors';
import ShippingForm from '../../components/shipping-form/shipping-form';
const Checkout = ({ cartItems, total, usdTotal, shippingDetails, loca }) => {
  const tot = loca !== 'Nigeria' ? `${usdTotal}` : `${total}`;
  console.log(total, usdTotal);

  return (
    <div className="checkout-page container">
      <div className="checkout-header">
        {shippingDetails.firstName ? (
          <div className="prev-address">
            <Helmet>
              <title>Checkout | REMEDI</title>
              <meta property="og:title" content="Checkout | Remedi" />
              <meta property="og:type" content="website" />
              <meta
                name="description"
                content="Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat"
              />
              <meta property="og:site_name" content="REMEDI" />
              <meta
                property="og:url"
                content="https://www.remedi.store/checkout"
              />
            </Helmet>
            <h5>{shippingDetails.firstName}</h5>
            <div className="add">
              <p>
                {shippingDetails.address} <br />
                {shippingDetails.city}, {shippingDetails.region},{' '}
                {shippingDetails.country}
              </p>
              <br />
              <p>
                <span>Phone:</span> {shippingDetails.phone}
              </p>
              <p>
                <span>Email:</span> {shippingDetails.email}
              </p>
              <br />
              <Link to="/payment">
                <button className="btn">Place Order</button>
              </Link>
            </div>
          </div>
        ) : null}
        <ShippingForm
          collapse={shippingDetails.firstName ? 'collapse' : '!collapse'}
        />
      </div>
      <div className="product-summary">
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="subtotal">
          <h6>Subtotal</h6>{' '}
          <p>
            {loca !== 'Nigeria' ? `$` : `₦`}
            {tot}
          </p>
        </div>
        <div className="shipping">
          <h6>Shipping</h6> <p>Free</p>
        </div>
        <div className="total">
          <h3>Total</h3>{' '}
          <span>
            {loca !== 'Nigeria' ? `$` : `₦`}
            {tot}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shippingDetails: selectShippingDetail,
  cartItems: selectCartItems,
  loca: selectLocationLocation,
  total: selectCartTotal,
  usdTotal: selectCartTotalUsd
});

export default connect(mapStateToProps)(Checkout);

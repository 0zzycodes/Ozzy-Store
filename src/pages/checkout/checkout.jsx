import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import { selectShippingDetail } from '../../redux/shipping/shipping.selectors';
import ShippingForm from '../../components/shipping-form/shipping-form';
const Checkout = ({ cartItems, total, shippingDetails }) => {
  return (
    <div className="checkout-page container">
      <div className="checkout-header">
        {shippingDetails.firstName ? (
          <div className="prev-address">
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
        <ShippingForm />
      </div>
      <div className="product-summary">
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="subtotal">
          <h6>Subtotal</h6> <p>₦{total}</p>
        </div>
        <div className="shipping">
          <h6>Shipping</h6> <p>Free</p>
        </div>
        <div className="total">
          <h3>Total</h3> <span>₦{total}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shippingDetails: selectShippingDetail,
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);

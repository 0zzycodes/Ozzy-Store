import React from 'react';
import { connect } from 'react-redux';
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
  console.log(shippingDetails);
  const {
    firstName,
    address,
    phone,
    email,
    city,
    region,
    country
  } = shippingDetails;

  return (
    <div className="checkout-page container">
      <div className="checkout-header">
        <div className="prev-address">
          <h5>{firstName}</h5>
          <div className="add">
            <p>
              {address} <br />
              {city}, {region}, {country}
            </p>
            <br />
            <p>
              <span>Phone:</span> {phone}
            </p>
            <p>
              <span>Email:</span> {email}
            </p>
          </div>
        </div>
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

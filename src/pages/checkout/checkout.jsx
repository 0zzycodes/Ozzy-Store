import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import './checkout.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
// import PaystackCheckoutkButton from '../../components/paystack-button/paystack-button';
import ShippingForm from '../../components/shipping-form/shipping-form';
const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page container">
      <div className="checkout-header">
        <ShippingForm />
      </div>
      <div className="product-summary">
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="subtotal">
          <h6>Subtotal</h6> <p>#{total}</p>
        </div>
        <div className="shipping">
          <h6>Shipping</h6> <p>Free</p>
        </div>
        <div className="total">
          <h3>Total</h3> <span>#{total}</span>
        </div>
        {/* <PaystackCheckoutkButton price={total} /> */}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);

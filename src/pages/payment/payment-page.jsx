import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import './payment-page.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Payment from '../../components/payment/payment';
const PaymentPage = ({ cartItems, total }) => {
  const getReference = () => {
    //you can put any unique reference implementation code here
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };
  return (
    <div className="payment-page container">
      <div className="payment-page-header">
        <span>{}</span>
        <Payment total={total} getReference={getReference()} />
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
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(PaymentPage);

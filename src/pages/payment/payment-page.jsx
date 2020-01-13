import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GenerateId } from '../../utils/id-generator';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import './payment-page.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Payment from '../../components/payment/payment';
class PaymentPage extends React.Component {
  state = {
    orderId: `${GenerateId()}`
  };
  render() {
    const { cartItems, total } = this.props;
    return (
      <div className="payment-page container">
        <div className="payment-page-header">
          <span className="order-id">
            ORDER ID: <span className="id">{this.state.orderId}</span>
          </span>
          <Payment total={total} getReference={this.state.orderId} />
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
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(PaymentPage);

import React from 'react';
import { connect } from 'react-redux';
import { selectShippingDetail } from '../../redux/shipping/shipping.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
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
    orderId: `${GenerateId()}`,
  };

  render() {
    const { cartItems, total, currentUser, shippingDetails } = this.props;
    const { firstName, address, city, country, phone, email } = shippingDetails;
    const detail = {
      name: firstName,
      address,
      city,
      country,
      email,
      phone
    };
    return (
      <div className="payment-page container">
        <div className="payment-page-header">
          <span className="order-id">
            ORDER ID: <span className="id">{this.state.orderId}</span>
          </span>
          <Payment
            total={total}
            getReference={this.state.orderId}
            shippingDetails={detail}
            currentUser={currentUser}
            handleShowPaid={this.handleShowPaid}
          />
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
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  total: selectCartTotal,
  shippingDetails: selectShippingDetail
});

export default connect(mapStateToProps)(PaymentPage);

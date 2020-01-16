import React from 'react';
import { PostFetch, structureMessage } from './structure-message';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import { resetCart } from '../../redux/cart/cart.actions';
import mastercard from '../../assets/img/mastercard.png';
import visa from '../../assets/img/visa.png';
import discover from '../../assets/img/discover.png';
import express from '../../assets/img/express.png';
import PaystackCheckoutkButton from '../paystack-button/paystack-button';
import StripeCheckoutButton from '../stripe-button/stripe-button';
import './payment.scss';

class Payment extends React.Component {
  state = {
    paymentMethod: 'Direct Bank Transfer',
    getRef: ''
  };
  handleDirectBankTransfer = () => {
    this.setState({ paymentMethod: 'Direct Bank Transfer' });
  };
  handlePayWithPaystack = () => {
    this.setState({ paymentMethod: 'Pay With Paystack' });
  };
  handlePayWithStripe = () => {
    this.setState({ paymentMethod: 'Pay With Stripe' });
  };
  handleSendMail = resetC => {
    const order = [];
    const { cartItems, getReference, total, shippingDetails } = this.props;
    const { name, address, city, country, email, phone } = shippingDetails;

    const commonMessage = {
      intro: `Dear ${name}`,
      name,
      address,
      city,
      country,
      phone,
      pacel: order,
      total
    };
    const Cardmessage = {
      thank: `Your order ${getReference} is being shipped and will be out for delivery within the next 48 hours`
    };
    const DirectPaymessage = {
      thank: `Thank you for your purchase at Ozzy Store (Order ${getReference})`,
      durInfo: `To complete your order, please make payment before 24 hours then, your order will be out for delivery within the next 48 hours`
    };

    cartItems.forEach(item => {
      const { imageUrl, quantity, size, name, price } = item;
      const info = {
        imageUrl,
        size,
        name,
        quantity,
        price,
        cost: quantity * price
      };
      order.push(info);
    });
    if (this.state.paymentMethod === 'Pay With Paystack') {
      const messageHtml = structureMessage(commonMessage, Cardmessage);
      const messageToSend = {
        email,
        subject: `Your Order ${getReference} is being shipped`,
        html: messageHtml
      };
      PostFetch(messageToSend);
    } else if (this.state.paymentMethod === 'Direct Bank Transfer') {
      this.props.handleShowPaid();
      resetC = [];

      // const messageHtml = structureMessage(commonMessage, DirectPaymessage);
      // const messageToSend = {
      //   email,
      //   subject: `Make payment within 24 hours for your ozzy order #${getReference}`,
      //   html: messageHtml
      // };
      // PostFetch(messageToSend);
    }
  };
  render() {
    const { paymentMethod } = this.state;
    const { getReference } = this.props;
    return (
      <div className="payment">
        <h3 className="title">Payment Methods</h3>
        <div
          id="direct-bank-transfer"
          className={`${
            paymentMethod === 'Direct Bank Transfer'
              ? 'selected'
              : 'not-selected'
          } box`}
          onClick={this.handleDirectBankTransfer}
        >
          <span className="radio">
            <span></span>
          </span>
          <span className="text">Direct Bank Transfer</span>
          {paymentMethod === 'Direct Bank Transfer' ? (
            <div className="info">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                processed until the funds have cleared in our account.
              </p>
            </div>
          ) : null}
        </div>
        <div
          id="pay-with-card"
          className={`${
            paymentMethod === 'Pay With Paystack' ? 'selected' : 'not-selected'
          } box`}
          onClick={this.handlePayWithPaystack}
        >
          <span className="radio">
            <span></span>
          </span>
          <div className="card">
            <span>Credit Card Paystack</span>
            {paymentMethod === 'Pay With Paystack' ? (
              <div className="cards">
                <img src={mastercard} alt="Payment Option" />
                <img src={visa} alt="Payment Option" />
                <img src={express} alt="Payment Option" />
                <img src={discover} alt="Payment Option" />
              </div>
            ) : null}
          </div>
        </div>
        <div
          id="pay-with-card"
          className={`${
            paymentMethod === 'Pay With Stripe' ? 'selected' : 'not-selected'
          } box disable`}
        >
          <span className="radio">
            <span></span>
          </span>
          <div className="card">
            <span>Credit Card Stripe</span>
            {paymentMethod === 'Pay With Stripe' ? (
              <div className="cards">
                <img src={mastercard} alt="Payment Option" />
                <img src={visa} alt="Payment Option" />
                <img src={express} alt="Payment Option" />
                <img src={discover} alt="Payment Option" />
              </div>
            ) : null}
          </div>
        </div>
        {paymentMethod === 'Pay With Paystack' ? (
          <PaystackCheckoutkButton
            price={this.props.total}
            getReference={getReference}
            sendMail={this.handleSendMail.bind(this, this.props.cartItems)}
          />
        ) : paymentMethod === 'Pay With Stripe' ? (
          <StripeCheckoutButton price={this.props.total} />
        ) : (
          <div className="direct">
            <button
              className="pay-now"
              onClick={this.handleSendMail.bind(this, this.props.cartItems)}
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
const mapDispatchToProps = dispatch => ({
  resetCart: item => dispatch(resetCart(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(Payment);

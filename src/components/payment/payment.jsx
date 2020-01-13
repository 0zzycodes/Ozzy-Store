import React from 'react';
import mastercard from '../../assets/img/mastercard.png';
import visa from '../../assets/img/visa.png';
import discover from '../../assets/img/discover.png';
import express from '../../assets/img/express.png';
import PaystackCheckoutkButton from '../paystack-button/paystack-button';
import './payment.scss';

class Payment extends React.Component {
  state = {
    isShow: true,
    paymentMethod: 'Direct Bank Transfer',
    getRef: ''
  };
  handleDirectBankTransfer = () => {
    this.setState({ isShow: true, paymentMethod: 'Direct Bank Transfer' });
  };
  handlePayWithCard = () => {
    this.setState({ isShow: false, paymentMethod: 'Pay With Card' });
  };
  render() {
    const { isShow } = this.state;
    const { currentUser, shippingDetails } = this.props;
    return (
      <div className="payment">
        <h3 className="title">Payment Methods</h3>
        <div
          id="direct-bank-transfer"
          className={`${isShow ? 'selected' : 'not-selected'} box`}
          onClick={this.handleDirectBankTransfer}
        >
          <span className="radio">
            <span></span>
          </span>
          <span className="text">Direct Bank Transfer</span>
          {this.state.paymentMethod === 'Direct Bank Transfer' ? (
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
          className={`${isShow ? 'not-selected' : 'selected'} box`}
          onClick={this.handlePayWithCard}
        >
          <span className="radio">
            <span></span>
          </span>
          <div className="card">
            <span>Credit Card</span>
            {this.state.paymentMethod === 'Pay With Card' ? (
              <div className="cards">
                <img src={mastercard} alt="Payment Option" />
                <img src={visa} alt="Payment Option" />
                <img src={express} alt="Payment Option" />
                <img src={discover} alt="Payment Option" />
              </div>
            ) : null}
          </div>
        </div>

        {this.state.paymentMethod === 'Pay With Card' ? (
          <PaystackCheckoutkButton
            price={this.props.total}
            getReference={this.props.getReference}
          />
        ) : (
          <div className="direct">
            <button className="pay-now">Pay Now</button>
          </div>
        )}
      </div>
    );
  }
}

export default Payment;

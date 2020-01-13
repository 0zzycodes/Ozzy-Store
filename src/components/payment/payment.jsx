import React from 'react';
import paystack from '../../assets/img/paystack.png';
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
            <img src={paystack} className="paystack" alt="Payment Option" />
            <img src={mastercard} alt="Payment Option" />
            <img src={visa} alt="Payment Option" />
            <img src={express} alt="Payment Option" />
            <img src={discover} alt="Payment Option" />
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

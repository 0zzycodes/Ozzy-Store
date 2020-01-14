import React from 'react';
import { Email, Item, renderEmail } from 'react-html-email';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
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
  handleSendMail = () => {
    const order = [];
    const { cartItems, getReference, total } = this.props;
    const {
      name,
      address,
      city,
      country,
      email,
      phone
    } = this.props.shippingDetails;

    const Cardmessage = {
      intro: `Dear ${name}`,
      thank: `Your order ${getReference} is being shipped and will be out for delivery within the next 48 hours`,
      name,
      address,
      city,
      country,
      phone,
      pacel: order,
      total
    };
    const DirectPaymessage = {
      intro: `Dear ${name}`,
      thank: `Thank you for your purchase at Ozzy Store (Order ${getReference})`,
      durInfo: `To complete your order, please make payment before 24 hours and will be out for delivery within the next 48 hours`,
      name,
      address,
      city,
      country,
      phone,
      pacel: order,
      total
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
    if (this.state.paymentMethod === 'Pay With Card') {
      const {
        intro,
        thank,
        name,
        address,
        city,
        country,
        phone,
        pacel,
        total
      } = Cardmessage;
      const messageHtml = renderEmail(
        <Email title="Your Order">
          <div style={{ padding: '15px' }}>
            <Item align="left">
              <p fontSize={12}>{intro},</p>
              <p fontSize={11}>{thank}</p>
            </Item>
            <h4 style={{ fontSize: '16px' }}>
              <span style={{ color: 'orange' }}>{name} </span> <br />
              <br /> {address} <br /> {city}, {country} <br /> Phone: {phone}
            </h4>
            <h3>Package(s)</h3>
            {pacel.map(eachPacel => {
              const { size, name, quantity, price, imageUrl } = eachPacel;
              return (
                <div key={`${size}${name}`}>
                  <Item>
                    <img
                      src={imageUrl}
                      width="65px"
                      height="73.45px"
                      alt="product"
                    />
                    <span style={{ marginLeft: '20px', paddingBottom: '30px' }}>
                      <span>Name: {name}</span>
                    </span>
                  </Item>
                  <p style={{ marginRight: '5px' }}>
                    Size: {size} <br /> Qty: {quantity} <br /> Price: #{price}
                  </p>
                </div>
              );
            })}
            <br />
            <h2>Total: #{total}</h2>
          </div>
        </Email>
      );
      const messageToSend = {
        email,
        subject: '',
        html: messageHtml
      };
      fetch('https://ozzystore-backend.herokuapp.com/order', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageToSend)
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    } else if (this.state.paymentMethod === 'Direct Bank Transfer') {
      const {
        intro,
        thank,
        durInfo,
        name,
        address,
        city,
        country,
        phone,
        pacel,
        total
      } = DirectPaymessage;
      const messageHtml = renderEmail(
        <Email title="Your Order">
          <div style={{ padding: '15px' }}>
            <Item align="left">
              <p fontSize={12}>{intro},</p>
              <p fontSize={11}>
                {thank} <br /> {durInfo}
              </p>
            </Item>
            <h4 style={{ fontSize: '16px' }}>
              <span style={{ color: 'orange' }}>{name} </span> <br />
              <br /> {address} <br /> {city}, {country} <br /> Phone: {phone}
            </h4>
            <h3>Package(s)</h3>
            {pacel.map(eachPacel => {
              const { size, name, quantity, price, imageUrl } = eachPacel;
              return (
                <div key={`${size}${name}`}>
                  <Item>
                    <img
                      src={imageUrl}
                      width="65px"
                      height="73.45px"
                      alt="product"
                    />
                    <span style={{ marginLeft: '20px', paddingBottom: '30px' }}>
                      <span>Name: {name}</span>
                    </span>
                  </Item>
                  <p style={{ marginRight: '5px' }}>
                    Size: {size} <br /> Qty: {quantity} <br /> Price: #{price}
                  </p>
                </div>
              );
            })}
            <br />
            <h2>Total: #{total}</h2>
          </div>
        </Email>
      );
      const messageToSend = {
        email,
        subject: `Make payment within 24 hours for your ozzy order #${getReference}`,
        html: messageHtml
      };
      fetch('https://ozzystore-backend.herokuapp.com/order', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageToSend)
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
    }
  };
  render() {
    const { isShow, paymentMethod } = this.state;
    const { getReference } = this.props;
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
          className={`${isShow ? 'not-selected' : 'selected'} box`}
          onClick={this.handlePayWithCard}
        >
          <span className="radio">
            <span></span>
          </span>
          <div className="card">
            <span>Credit Card</span>
            {paymentMethod === 'Pay With Card' ? (
              <div className="cards">
                <img src={mastercard} alt="Payment Option" />
                <img src={visa} alt="Payment Option" />
                <img src={express} alt="Payment Option" />
                <img src={discover} alt="Payment Option" />
              </div>
            ) : null}
          </div>
        </div>

        {paymentMethod === 'Pay With Card' ? (
          <PaystackCheckoutkButton
            price={this.props.total}
            getReference={getReference}
            sendMail={this.handleSendMail}
          />
        ) : (
          <div className="direct">
            <button className="pay-now" onClick={this.handleSendMail}>
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

export default connect(mapStateToProps)(Payment);

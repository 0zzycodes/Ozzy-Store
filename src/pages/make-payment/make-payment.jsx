import React from 'react';
import './make-payment.scss';
import remove from '../../assets/remove.svg';
const MakePayment = ({ orderId, total, handleShowPaid }) => {
  const date = new Date();
  return (
    <div className="make-payment">
      <div className="container">
        <img src={remove} alt="Close Button" onClick={handleShowPaid} />
        <h6>Thank you. Your order has been received.</h6>
        <br />
        <ul>
          <li>
            <h6>ORDER ID:</h6>
            <strong>{orderId}</strong>
          </li>
          <li>
            <h6>DATE:</h6>
            <strong>{date.toLocaleDateString()}</strong>
          </li>
          <li>
            <h6>TOTAL:</h6>
            <strong>₦{total}</strong>
          </li>
          <li>
            <h6>PAYMENT METHOD:</h6>
            <strong>Direct Transfer</strong>
          </li>
        </ul>
        <div className="our-bank-detail">
          <h2>BANK DETAIL</h2>
          <h3>REMEDI CLOTHING</h3>
          <ul>
            <li>
              <h6>BANK:</h6>
              <strong>Guaranty Trust Bank</strong>
            </li>
            <li>
              <h6>ACCOUNT NUMBER:</h6>
              <strong>1620207873</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;

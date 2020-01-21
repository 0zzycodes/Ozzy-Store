import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectmakePaymentDetail } from '../../redux/payment-details/payment-detail.selector';
import { addMakePayment } from '../../redux/payment-details/payment-detail.action';

import remove from '../../assets/remove.svg';
import './make-payment.scss';
const MakePayment = ({ makePaymentDetail, addMakePayment }) => {
  const { orderId, total, paymentMethod } = makePaymentDetail;
  const handleAddMakePayment = () => {
    const pay = {
      orderId: '',
      total: ''
    };
    addMakePayment(pay);
  };
  const date = new Date();
  return (
    <div className="make-payment">
      <div className="container">
        <img src={remove} alt="Close Button" onClick={handleAddMakePayment} />
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
            <strong>{paymentMethod}</strong>
          </li>
        </ul>
        {paymentMethod === 'Direct Bank Transfer' ? (
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
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  makePaymentDetail: selectmakePaymentDetail
});
const mapDispatchToProps = dispatch => ({
  addMakePayment: details => dispatch(addMakePayment(details))
});
export default connect(mapStateToProps, mapDispatchToProps)(MakePayment);

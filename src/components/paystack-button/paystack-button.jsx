import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCity } from '../../redux/shipping/shipping.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectCartTotal,
  selectCartItemsCount,
  selectPromo
} from '../../redux/cart/cart.selectors';
import PaystackButton from 'react-paystack';

import './paystack-button.scss';

const PaystackCheckoutkButton = ({
  price,
  user,
  getReference,
  sendMail,
  promo,
  enterdCity,
  cartTotal
}) => {
  const newCartTotal =
    enterdCity.toLowerCase() !== 'ibadan'
      ? cartTotal - promo + 200
      : cartTotal - promo;
  const obj = {
    key: 'pk_test_3211d1f3f7d23a949f1971a99ca99a083d4fc0c5',
    email: user ? user.email : user, // customer email
    amount: newCartTotal * 100 //equals NGN100,
  };
  const callback = response => {
    console.log(response); // card charged successfully, get reference here
    sendMail();
  };

  const close = () => {
    console.log('Payment closed');
  };
  return (
    <div>
      {user ? (
        <PaystackButton
          text="Pay Now"
          className="payButton"
          callback={callback}
          close={close}
          disabled={false} /*disable payment button*/
          embed={false} /*payment embed in your app instead of a pop up*/
          reference={getReference}
          email={obj.email}
          amount={obj.amount}
          paystackkey={obj.key}
          tag="button" /*it can be button or a or input tag */
        />
      ) : (
        <Link to="/signin" className="option">
          LOGIN TO PAY
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  cartTotal: selectCartTotal,
  promo: selectPromo,
  itemCount: selectCartItemsCount,
  enterdCity: selectCity
});

export default connect(mapStateToProps)(PaystackCheckoutkButton);

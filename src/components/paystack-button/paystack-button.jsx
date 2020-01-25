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
import { selectTotalTotal } from '../../redux/total/total.selector';
import PaystackButton from 'react-paystack';

import './paystack-button.scss';

const PaystackCheckoutkButton = ({
  total,
  user,
  getReference,
  sendMail,
  promo,
  enterdCity,
  cartTotal
}) => {
  const obj = {
    key: 'pk_live_1b12029750bd8354a13f33f082c8f796e6c60035',
    email: user ? user.email : user, // customer email
    amount: total * 100 //equals NGN100,
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
  total: selectTotalTotal,
  promo: selectPromo,
  itemCount: selectCartItemsCount,
  enterdCity: selectCity
});

export default connect(mapStateToProps)(PaystackCheckoutkButton);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import PaystackButton from 'react-paystack';

import './paystack-button.scss';

const PaystackCheckoutkButton = ({ price, user, getReference }) => {
  const obj = {
    key: 'pk_test_3211d1f3f7d23a949f1971a99ca99a083d4fc0c5',
    email: user ? user.email : user, // customer email
    amount: price * 100 //equals NGN100,
  };
  const callback = response => {
    console.log(response); // card charged successfully, get reference here
  };

  const close = () => {
    console.log('Payment closed');
  };
  // const getReference = () => {
  //   //you can put any unique reference implementation code here
  //   let text = '';
  //   let possible =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

  //   for (let i = 0; i < 15; i++)
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));

  //   return text;
  // };
  user ? console.log('User', user.email) : console.log('User', user);
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
  user: selectCurrentUser
});

export default connect(mapStateToProps)(PaystackCheckoutkButton);

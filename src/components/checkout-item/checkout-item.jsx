import React from 'react';
import { connect } from 'react-redux';
import remove from '../../assets/remove.svg';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './checkout-item.scss';
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, size, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="img-name">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <p className="name">{name}</p>
        <p className="quantity">
          <span className="ctrl add" onClick={() => addItem(cartItem)}>
            +
          </span>{' '}
          {quantity}{' '}
          <span className="ctrl reduce" onClick={() => removeItem(cartItem)}>
            -
          </span>
        </p>
      </div>
      <p>{size}</p>
      <p className="price">₦{price * quantity}</p>
      <img
        src={remove}
        alt="Remove Button"
        onClick={() => clearItem(cartItem)}
        className="remove-btn"
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

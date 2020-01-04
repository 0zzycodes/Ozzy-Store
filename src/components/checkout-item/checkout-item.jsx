import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './checkout-item.scss';
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity === 1 ? null : (
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            &#8722;
          </div>
        )}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#43;
        </div>
      </span>
      <span className="price">#{price * 300}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <div className="icon-trash" style={{ float: 'left' }}>
          <div className="trash-lid" style={{ backgroundColor: 'red' }}></div>
          <div
            className="trash-container"
            style={{ backgroundColor: 'red' }}
          ></div>
          <div className="trash-line-1"></div>
          <div className="trash-line-2"></div>
          <div className="trash-line-3"></div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

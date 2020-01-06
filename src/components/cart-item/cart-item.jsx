import React from 'react';
import { connect } from 'react-redux';
import remove from '../../assets/remove.svg';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './cart-item.scss';
const CartItem = ({ item, clearItem, addItem, removeItem }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
          <span className="quantity">
            {quantity === 1 ? null : (
              <div className="arrow" onClick={() => removeItem(item)}>
                &#8722;
              </div>
            )}
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>
              &#43;
            </div>
          </span>
        </div>
        <img
          src={remove}
          alt="Delete Item"
          className="clear"
          onClick={() => clearItem(item)}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CartItem);

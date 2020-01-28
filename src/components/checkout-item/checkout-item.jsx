import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectLocationLocation } from '../../redux/location/location.selectors';
import remove from '../../assets/remove.svg';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './checkout-item.scss';
const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
  match,
  loca
}) => {
  const { name, imageUrl, size, quantity, sale, usdSale } = cartItem;
  const price = loca !== 'Nigeria' ? `${usdSale}` : `${sale}`;
  return (
    <div className="checkout-item">
      <div className="img-name">
        <div className="image-container">
          <img src={imageUrl} alt="item" />
        </div>
        <p className="name">{name}</p>
        <p className="quantity">
          {match.path === '/payment' ? null : (
            <span className="ctrl add" onClick={() => addItem(cartItem)}>
              +
            </span>
          )}
          {quantity}
          {match.path === '/payment' ? null : (
            <span className="ctrl reduce" onClick={() => removeItem(cartItem)}>
              -
            </span>
          )}
        </p>
      </div>
      <p>{size}</p>
      <p className="price">
        {loca !== 'Nigeria' ? `$` : `₦`}
        {price * quantity}
      </p>
      {match.path === '/payment' ? null : (
        <img
          src={remove}
          alt="Remove Button"
          onClick={() => clearItem(cartItem)}
          className="remove-btn"
        />
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  loca: selectLocationLocation
});
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CheckoutItem)
);

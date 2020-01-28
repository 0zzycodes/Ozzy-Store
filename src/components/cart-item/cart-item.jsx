import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPathPath } from '../../redux/path/path.selector';
import { selectLocationLocation } from '../../redux/location/location.selectors';
import remove from '../../assets/remove.svg';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './cart-item.scss';
const CartItem = ({ item, clearItem, addItem, removeItem, path, location }) => {
  const { imageUrl, sale, name, usdSale, size, quantity } = item;
  const price = location !== 'Nigeria' ? `$${usdSale}` : `₦${sale}`;

  return (
    <div className="cart-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x {price}
          </span>
          <span className="price">{size}</span>
          <span className="quantity">
            {path === '/payment' ? null : quantity === 1 ? null : (
              <div className="arrow" onClick={() => removeItem(item)}>
                &#8722;
              </div>
            )}
            <span className="value">{quantity}</span>
            {path === '/payment' ? null : (
              <div className="arrow" onClick={() => addItem(item)}>
                &#43;
              </div>
            )}
          </span>
        </div>
        {path === '/payment' ? null : (
          <img
            src={remove}
            alt="Delete Item"
            style={{ width: '15px', top: '10px', right: '10px' }}
            className="clear"
            onClick={() => clearItem(item)}
          />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  location: selectLocationLocation,
  path: selectPathPath
});
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

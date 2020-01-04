import React from 'react';
import './cart-item.scss';
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="overlay">
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

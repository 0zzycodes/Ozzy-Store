import React from 'react';
import './history-item.scss';
const HistoryItem = item => {
  return (
    <div className="history-item">
      <div className="img-name">
        <div className="image-container">
          <img src={item.item.imageUrl} alt="item" />
        </div>
        <p className="quantity">{item.item.quantity}</p>
      </div>
      <div className="text">
        <p className="name">{item.item.name}</p>
        <p className="size">{item.item.size}</p>
        <p className="price">₦{item.item.sale * item.item.quantity}</p>
      </div>
    </div>
  );
};

export default HistoryItem;

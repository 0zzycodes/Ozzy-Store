import React from 'react';
import './history-items.scss';
import HistoryItem from '../history-item/history-item';
const HistoryItems = histor => {
  return (
    <div className="history-items">
      <div className="head">
        <h5>{histor.histori.orderId}</h5>
        <h5>Date: {histor.histori.date}</h5>
      </div>
      {histor.histori.items.map(item => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HistoryItems;

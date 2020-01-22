import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addItem } from '../../redux/cart/cart.actions';

import './related-item.scss';

const RelatedItem = ({ item, history }) => {
  const { category, name, stock, sale, price, imageUrl } = item;
  return (
    <div className="related-item">
      <div className="img-container">
        {stock === 0 ? <span className="sold-out">Sold Out</span> : null}
        {sale === price ? null : <span className="sale">Sale</span>}
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => history.push(`/shop/${category}/${name}`)}
        />
      </div>
      <div className="collection-footer">
        <h5
          className="name"
          onClick={() => history.push(`/shop/${category}/${name}`)}
        >
          {name.toUpperCase()}
        </h5>
        <div className="prices">
          {sale === price ? null : (
            <span className="sales-price price">₦{sale}</span>
          )}
          <span
            className="normal-price price"
            style={
              sale === price
                ? { textDecoration: 'none' }
                : { textDecoration: 'line-through' }
            }
          >
            ₦{price}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(RelatedItem));

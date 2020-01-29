import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectLocationLocation } from '../../redux/location/location.selectors';
import { addItem } from '../../redux/cart/cart.actions';

import './related-item.scss';

const RelatedItem = ({ item, history, loca }) => {
  const { category, name, stock, sale, price, usd, usdSale, imageUrl } = item;
  const newpriceSale = loca !== 'Nigeria' ? `$${usdSale}` : `₦${sale}`;
  const newprice = loca !== 'Nigeria' ? `$${usd}` : `₦${price}`;
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
          {newpriceSale === newprice ? null : (
            <span className="sales-price price">{newpriceSale}</span>
          )}
          <span
            className="normal-price price"
            style={
              newpriceSale === newprice
                ? { textDecoration: 'none' }
                : { textDecoration: 'line-through' }
            }
          >
            {newprice}
          </span>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  loca: selectLocationLocation
});
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RelatedItem)
);

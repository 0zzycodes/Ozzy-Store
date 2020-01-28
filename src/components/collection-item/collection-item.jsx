import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import addCart from '../../assets/addCart.svg';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';
import SelectSize from '../select-size/select-size';
import { selectLocationLocation } from '../../redux/location/location.selectors';

const CollectionItem = ({ item, history, location }) => {
  const { category, name, stock, sale, price, usd, usdSale, imageUrl } = item;
  const newpriceSale = location !== 'Nigeria' ? `$${usdSale}` : `₦${sale}`;
  const newprice = location !== 'Nigeria' ? `$${usd}` : `₦${price}`;
  const [isShow, setisShow] = useState(false);
  const handleSelectSize = () => {
    setisShow(!isShow);
  };
  return (
    <div className="collection-item">
      <div className="img-container">
        {stock === 0 ? <span className="sold-out">Sold Out</span> : null}
        {newpriceSale === newprice ? null : <span className="sale">Sale</span>}
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
        {/* <StarRating smaller numberOfStars="5" currentRating={rating} /> */}

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

      {isShow ? (
        <SelectSize
          className="small"
          handleSelectSize={handleSelectSize}
          item={item}
        />
      ) : stock === 0 ? null : (
        <button onClick={handleSelectSize} className="add-btn">
          <img src={addCart} alt="Cart Icon" /> +
        </button>
      )}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  location: selectLocationLocation
});
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);

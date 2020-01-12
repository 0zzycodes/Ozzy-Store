import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import addCart from '../../assets/addCart.svg';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.scss';
import SelectSize from '../select-size/select-size';

const CollectionItem = ({ item, addItem, history, match }) => {
  const { category, name, price, imageUrl } = item;
  const [isShow, setisShow] = useState(false);
  const handleSelectSize = () => {
    setisShow(!isShow);
  };
  return (
    <div className="collection-item">
      <div className="img-container">
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
        <span className="price">#{price}</span>
      </div>

      {isShow ? (
        <SelectSize handleSelectSize={handleSelectSize} item={item} />
      ) : (
        <button onClick={handleSelectSize} className="add-btn">
          <img src={addCart} alt="Cart Icon" /> &#43;
        </button>
      )}

      {/* <button onClick={() => addItem(item)} className="add-btn">
        <img src={addCart} alt="Cart Icon" /> &#43;
      </button> */}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));

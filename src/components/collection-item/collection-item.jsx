import React from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      {/* <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} /> */}
      <div className="image">
        <img src={imageUrl} alt="Product Preview" />
      </div>
      <div className="collection-footer">
        <h3 className="name">{name}</h3>
        <span className="price">#{price * 300}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

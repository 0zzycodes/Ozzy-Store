import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { addItem, removeItem } from '../../redux/cart/cart.actions';
import CustomButton from '../../components/custom-button/custom-button';
import './single-product.scss';
const SingleProduct = ({ item }) => {
  const { name, price, stock, imageUrl, quantity, measurementImage } = item;
  return (
    <div className="single-product">
      <div className="product-details container">
        <div className="left">
          <Carousel>
            <div>
              <img src={imageUrl} alt="product imgs" />
            </div>
            <div>
              <img src={imageUrl} alt="product imgs" />
            </div>
            <div>
              <img src={imageUrl} alt="product imgs" />
            </div>
            <div>
              <img
                src={measurementImage ? measurementImage : imageUrl}
                alt="product imgs"
              />
            </div>
          </Carousel>
        </div>
        <div className="right">
          <h3 className="name">{name}</h3>
          <h4 className="price">#{price}</h4>
          <span>{stock} items in stock</span>
          <span className="quantity">
            {quantity === 1 ? null : (
              <div className="arrow" onClick={() => removeItem(item)}>
                &#8722;
              </div>
            )}
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(item)}>
              &#43;
            </div>
          </span>
          <CustomButton onClick={() => addItem(item)} inverted>
            Cart &#43;
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(SingleProduct);

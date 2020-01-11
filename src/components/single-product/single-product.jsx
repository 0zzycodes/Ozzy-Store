import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../../components/custom-button/custom-button';
import './single-product.scss';
const SingleProduct = ({ item }) => {
  const { name, price, stock, imageUrl, measurementImage } = item;
  const handleDecre = () => {
    document.querySelector('[type=number]').stepDown();
  };
  const handleIncre = () => {
    document.querySelector('[type=number]').stepUp();
  };
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
          <span>{stock ? 'In Stock' : 'Sold Out'} </span>
          <br />
          <button className="btn" onClick={handleDecre}>
            -
          </button>
          <input type="number" name="number" min="0" max="100" value="0" />
          <button className="btn" onClick={handleIncre}>
            +
          </button>
          <br />
          <div class="box">
            <select>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <span className="indc">&#9662;</span>
          </div>
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

export default withRouter(connect(null, mapDispatchToProps)(SingleProduct));

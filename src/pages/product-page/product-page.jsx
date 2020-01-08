import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './product-page.scss';
const ProductPage = ({ match, product }) => {
  console.log(product);
  const { name, price, stock, imageUrl } = product[0];

  return (
    <div className="product-page">
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
          </Carousel>
        </div>
        <div className="right">
          <h3 className="name">{name}</h3>
          <h4 className="price">#{price}</h4>
          <span>{stock} items in stock</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: selectProduct(
      ownProps.match.params.productId,
      ownProps.match.url
    )(state)
  };
};

export default connect(mapStateToProps)(ProductPage);

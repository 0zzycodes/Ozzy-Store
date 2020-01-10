import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { addItem, removeItem } from '../../redux/cart/cart.actions';
import './product-page.scss';
import CustomButton from '../../components/custom-button/custom-button';
const ProductPage = ({ product }) => {
  console.log(product[0]);

  const { name, price, stock, imageUrl, quantity } = product[0];

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
          {/* <span className="quantity">
            {quantity === 1 ? null : (
              <div className="arrow" onClick={() => removeItem(product[0])}>
                &#8722;
              </div>
            )}
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(product[0])}>
              &#43;
            </div>
          </span> */}
          <CustomButton onClick={() => addItem(product[0])} inverted>
            Cart &#43;
          </CustomButton>
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
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import SingleProduct from '../../components/single-product/single-product';
import './product-page.scss';
const ProductPage = ({ product }) => {
  return (
    <div className="product-page">
      <SingleProduct item={product[0]} />
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

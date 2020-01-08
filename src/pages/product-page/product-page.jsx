import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import './product-page.scss';
const ProductPage = () => {
  return <div>Product Page</div>;
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(ProductPage);

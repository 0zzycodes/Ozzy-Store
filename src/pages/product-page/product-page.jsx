import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import './product-page.scss';
const ProductPage = ({ match }) => {
  console.log('Pro', match);

  return (
    <div className="product-page">
      <h3>Product Page</h3>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(ProductPage);

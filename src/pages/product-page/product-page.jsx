import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectProduct } from '../../redux/shop/shop.selector';
import SingleProduct from '../../components/single-product/single-product';
import './product-page.scss';

const ProductPage = ({ product }) => {
  return (
    <div className="product-page container">
      <Helmet>
        <title>{product[0].name} | REMEDI</title>
        <meta
          name="keywords"
          content={`${product[0].category}, ${product[0].name}`}
        />
        <meta name="description" content={`${product[0].name} `} />
        <meta property="og:title" content={`${product[0].name} | REMEDI`} />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content={`Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat ${product[0].name}`}
        />
        <meta property="og:site_name" content="REMEDI" />
        <meta
          property="og:url"
          content={`https://www.remedi.store/${product[0].name}`}
        />
      </Helmet>
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

import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item';

// import ProductPage from '../product-page/product-page';
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.scss';
const CollectionPage = ({ match, collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      {/* <Route path={`${match.path}/:title`} component={ProductPage} /> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

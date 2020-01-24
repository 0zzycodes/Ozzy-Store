import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.scss';
const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page container">
      <Helmet>
        <title>{title} | REMEDI</title>
        <meta name="keywords" content={`${title}`} />
        <meta name="description" content={`Remedi ${title} collection `} />
      </Helmet>
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default withRouter(connect(mapStateToProps)(CollectionPage));

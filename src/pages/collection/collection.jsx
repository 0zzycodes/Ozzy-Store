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
        <meta property="og:title" content={`${title} | REMEDI`} />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content={`Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat Remedi ${title} collection`}
        />
        <meta property="og:site_name" content="REMEDI" />
        <meta property="og:url" content={`https://www.remedi.store/${title}`} />
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

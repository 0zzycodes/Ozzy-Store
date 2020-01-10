import React from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      {items.length === 0 ? null : (
        <div className="head">
          <h3 className="title">{title.toUpperCase()}</h3>
          <span
            className="see-more"
            onClick={() => history.push(`${match.path}/${routeName}`)}
          >
            See more
          </span>
        </div>
      )}
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.name} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);

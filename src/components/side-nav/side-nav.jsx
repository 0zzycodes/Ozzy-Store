import React from 'react';
import { Link } from 'react-router-dom';
import './side-nav.scss';
const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="links">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default SideNav;

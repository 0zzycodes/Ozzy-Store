import React from 'react';
import { Link } from 'react-router-dom';
import './side-nav.scss';
const SideNav = ({ handleToggleSidebar }) => {
  return (
    <div className="side-nav">
      <div className="links">
        <Link to="/shop" className="option" onClick={handleToggleSidebar}>
          SHOP
        </Link>
        <Link to="/contact" className="option" onClick={handleToggleSidebar}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default SideNav;

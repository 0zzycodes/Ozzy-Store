import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../assets/close.svg';
import './side-nav.scss';
const SideNav = ({ handleToggleSidebar }) => {
  return (
    <div className="side-nav" onClick={handleToggleSidebar}>
      <img
        src={close}
        alt="Close Button"
        className="close-btn"
        onClick={handleToggleSidebar}
      />
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

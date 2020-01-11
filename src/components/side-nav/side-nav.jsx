import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import './side-nav.scss';
const SideNav = ({ handleToggleSidebar, history, match }) => {
  const [isShow, setisShow] = useState(false);
  const handleToggleShow = () => {
    setisShow(!isShow);
  };
  return (
    <div className="side-nav">
      <div className="links">
        <div className="drop">
          <div className="controller" onClick={handleToggleShow}>
            <h5 className="opton">SHOP</h5>
            <span className="tog">
              {isShow ? <span> &#8722; </span> : <span> &#43; </span>}
            </span>
          </div>
          {isShow ? (
            <div className="drop-links" onClick={handleToggleSidebar}>
              <h4
                className="drop-link"
                onClick={() => history.push(`${match.url}shop/hoodies`)}
              >
                HOODIES
              </h4>
              <h4
                className="drop-link"
                onClick={() => history.push(`${match.url}shop/tees`)}
              >
                TEES
              </h4>
              <h4
                className="drop-link"
                onClick={() => history.push(`${match.url}shop/accessories`)}
              >
                ACCESSORIES
              </h4>
            </div>
          ) : null}
        </div>
        <Link to="/contact" className="option" onClick={handleToggleSidebar}>
          Contact
        </Link>
        <Link to="/signin" className="option" onClick={handleToggleSidebar}>
          Account
        </Link>
        <div className="but">
          <Link to="/reseller" className="option" onClick={handleToggleSidebar}>
            <CustomButton inverted>BULK ORDER</CustomButton>
          </Link>
          <Link to="/checkout" className="option" onClick={handleToggleSidebar}>
            <CustomButton inverted>Go To Checkout</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideNav);

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import close from '../../assets/close.svg';
import './side-nav.scss';
const SideNav = ({ handleToggleSidebar, history, linkUrl, match }) => {
  console.log(match.url);

  const [isShow, setisShow] = useState(false);
  const handleToggleShow = () => {
    setisShow(!isShow);
  };
  return (
    <div className="side-nav">
      <img
        src={close}
        alt="Close Button"
        className="close-btn"
        onClick={handleToggleSidebar}
      />
      <div className="links">
        <div className="drop">
          <div className="controller" onClick={handleToggleShow}>
            <h3 className="opton">Shop</h3>
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
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default withRouter(SideNav);

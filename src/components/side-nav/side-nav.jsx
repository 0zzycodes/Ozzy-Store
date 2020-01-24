import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button';
import './side-nav.scss';
const SideNav = ({ currentUser, handleToggleSidebar, history, match }) => {
  const [isShow, setisShow] = useState(false);
  const [isAccountShow, setisAccountShow] = useState(false);
  const handleToggleShow = () => {
    setisShow(!isShow);
  };
  const handleToggleAccountShow = () => {
    setisAccountShow(!isAccountShow);
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
        {currentUser ? (
          <div className="drop">
            <div className="controller" onClick={handleToggleAccountShow}>
              <h5 className="opton">Account</h5>
              <span className="tog">
                {isAccountShow ? <span> &#8722; </span> : <span> &#43; </span>}
              </span>
            </div>
            {isAccountShow ? (
              <div className="drop-links" onClick={handleToggleSidebar}>
                <h4
                  className="drop-link"
                  onClick={() => history.push(`/current-user`)}
                >
                  View Profile
                </h4>
                <h4
                  className="drop-link sign-out"
                  onClick={() => auth.signOut()}
                >
                  Logout
                </h4>
              </div>
            ) : null}
          </div>
        ) : (
          <Link to="/signin" className="option" onClick={handleToggleSidebar}>
            Account
          </Link>
        )}
        <div className="but">
          <Link to="/reseller" className="option" onClick={handleToggleSidebar}>
            <CustomButton inverted>BULK ORDER</CustomButton>
          </Link>
          <Link to="/referral" className="option" onClick={handleToggleSidebar}>
            <CustomButton inverted>Referral Program</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default withRouter(connect(mapStateToProps)(SideNav));

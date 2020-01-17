import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import user from '../../assets/user.svg';
import logout from '../../assets/logout.svg';
import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import Logo2 from '../logo2/logo2';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import SideNav from '../side-nav/side-nav';
const Header = ({ currentUser, hidden }) => {
  const [isShow, setisShow] = useState(false);
  const handleToggleSidebar = () => {
    setisShow(!isShow);
  };
  return (
    <>
      {isShow ? <SideNav handleToggleSidebar={handleToggleSidebar} /> : null}
      <div className="container">
        <div className="header">
          <div className="menu">
            <img
              src={isShow ? close : menu}
              alt="Menu-Button"
              className="menu-btn"
              onClick={handleToggleSidebar}
            />
          </div>
          <Link to="/">
            <Logo2 />
          </Link>
          <div className="options">
            {currentUser ? (
              <div className="option user" onClick={() => auth.signOut()}>
                <img src={logout} alt="Logout-Button" />
              </div>
            ) : (
              <Link className="option user" to="/signin">
                {' '}
                <img src={user} alt="User-Button" />
              </Link>
            )}
            <CartIcon />
          </div>
          {hidden ? null : <CartDropdown />}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

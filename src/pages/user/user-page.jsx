import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Loader from '../../components/loader/loader';
import './user-page.scss';
const UserPage = ({ currentUser }) => {
  return (
    <div className="user-page">
      <div className="head">
        <h3>{currentUser ? currentUser.displayName : <Loader />}</h3>
      </div>
      <h2>Page Under Construction</h2>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(UserPage);

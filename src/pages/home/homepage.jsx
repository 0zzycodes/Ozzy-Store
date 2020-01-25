import React from 'react';
import Hero from '../../components/hero/hero';
import './homepage.scss';
import Directory from '../../components/directory/directory';
// import NewArrival from '../new-arrival/new-arrival';
const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="directory-menu">
        <Directory />
      </div>
      {/* <NewArrival /> */}
      <div className="follow-on-insta">
        <h3>Join Us On Instagram</h3>
        <a href="https://www.instagram.com/__remedi/">
          <button className="btn">Follow Us</button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;

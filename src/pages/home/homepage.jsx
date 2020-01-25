import React from 'react';
import Hero from '../../components/hero/hero';
import './homepage.scss';
import Directory from '../../components/directory/directory';
import promo from '../../assets/img/promo.png';
// import NewArrival from '../new-arrival/new-arrival';
const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="directory-menu">
        <Directory />
      </div>
      {/* <NewArrival /> */}
      <div className="promo">
        <img src={promo} alt="Promo" />1
      </div>
      <div className="follow-on-insta">
        <h3>Join Us On Instagram</h3>
        <a target="blank" href="https://www.instagram.com/__remedi/">
          <button className="btn">Follow Us</button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;

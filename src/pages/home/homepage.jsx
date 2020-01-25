import React from 'react';
import Hero from '../../components/hero/hero';
import './homepage.scss';
import Directory from '../../components/directory/directory';
import Countdown from '../../components/countdown/countdown';
const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="directory-menu">
        <Directory />
      </div>
      <div className="promo">
        <h2>USE PROMO CODE: RMD200</h2>
        <h3>To get ₦200 off every item you purchase</h3>
        <h4>Code Valid Until Febuary 8</h4>
        <div className="count">
          <Countdown />
        </div>
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

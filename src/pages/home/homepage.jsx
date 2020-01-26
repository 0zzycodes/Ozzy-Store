import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import Hero from '../../components/hero/hero';
import './homepage.scss';
import Directory from '../../components/directory/directory';
import Countdown from '../../components/countdown/countdown';
const Homepage = ({ match }) => {
  return (
    <div className="homepage">
      <Helmet>
        <title>REMEDI</title>
        <meta property="og:title" content="REMEDI" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat"
        />
        <meta property="og:site_name" content="REMEDI" />
        <meta property="og:url" content="https://www.remedi.store" />
      </Helmet>
      <Hero />
      <div className="directory-menu">
        <Directory />
      </div>
      <div className="promo">
        <h2>USE PROMO CODE: RMD200</h2>
        <h3>To get ₦200 off every item you purchase</h3>
        <h4>Code Valid Until Febuary 8</h4>
        <div className="count">{match.path === '/' ? <Countdown /> : null}</div>
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

export default withRouter(Homepage);

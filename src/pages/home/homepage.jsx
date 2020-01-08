import React from 'react';
import Hero from '../../components/hero/hero';
import './homepage.scss';
import Directory from '../../components/directory/directory';
import NewArrival from '../new-arrival/new-arrival';
const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <div className="directory-menu">
        <Directory />
      </div>
      {/* <NewArrival /> */}
    </div>
  );
};

export default Homepage;

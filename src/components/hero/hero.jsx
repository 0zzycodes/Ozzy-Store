import React from 'react';
import { Link } from 'react-router-dom';
import landing from '../../assets/img/landing.png';

import './hero.scss';
import CustomButton from '../custom-button/custom-button';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-layout">
        <div className="landing-image">
          <img src={landing} alt="HeroImage" />
        </div>
        <div className="content">
          <h1 className="tagline">Feel trendy. Feel authentic.</h1>
          <Link to="/shop" className="option">
            <CustomButton inverted="inverted">SHOP NOW!</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;

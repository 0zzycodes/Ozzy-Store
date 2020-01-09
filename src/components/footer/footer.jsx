import React from 'react';
import ozzy from '../../assets/ozzy.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>
          <img src={ozzy} alt="LOGO" className="logo" />
        </h4>
        <br />
        <a href="https://web.facebook.com/profile.php?id=100013327810283">
          <div className="logo-border">
            <img src={facebook} alt="Facebook Logo" />
          </div>
        </a>
        <a href="https://twitter.com/ozzycodes">
          <div className="logo-border">
            <img src={twitter} alt="Twitter Logo" />
          </div>
        </a>
        <a href="https://www.instagram.com/ozzycodes/">
          <div className="logo-border">
            <img src={instagram} alt="Instagram Logo" />
          </div>
        </a>
      </div>
      <br />
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} Ozzy Store All rights
        reserved | Designed by{' '}
        <a href="https://ozzy-dev.netlify.com"> Ozzy-dev</a>
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import CustomButton from '../../components/custom-button/custom-button';
import pic5 from '../../assets/img/pic5.png';
import './new-arrival.scss';
const NewArrival = () => {
  return (
    <div className="container">
      <div className="new-arrival">
        <div className="image">
          <img src={pic5} alt="New-Arrival" />
        </div>
        <div className="content">
          <div className="text">
            <h1 className="tagline">New Arrivals!</h1>
            <p>We officially launched ozzy-dev hoodie</p>
          </div>
          <CustomButton inverted="inverted">SHOP NOW!</CustomButton>
        </div>
      </div>
    </div>
  );
};
export default NewArrival;

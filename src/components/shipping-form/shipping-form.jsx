import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {
  CountryDropdown,
  RegionDropdown
  // CountryRegionData
} from 'react-country-region-selector';
import { addShippingDetails } from '../../redux/shipping/shipping.actions';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import './shipping-form.scss';

class ShippingForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      address: '',
      city: '',
      country: '',
      region: '',
      zipCode: '',
      phone: '',
      email: '',
      isShow: false
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  handleSubmit = async e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      address,
      city,
      country,
      region,
      zipCode,
      phone,
      email
    } = this.state;
    const billing = {
      firstName,
      lastName,
      address,
      city,
      country,
      region,
      zipCode,
      phone,
      email
    };
    this.props.addShippingDetails(billing);
    this.props.history.push(`/payment`)
  };
  render() {
    const {
      firstName,
      lastName,
      address,
      city,
      country,
      region,
      zipCode,
      phone,
      email
    } = this.state;
    // const {addShippingDetails} = this.props
    const handleToggleShow = () => {
      this.setState({ isShow: !this.state.isShow });
    };
    return (
      <div className="shipping-form">
        <div className="head" onClick={handleToggleShow}>
          <h3 className="title">BILLING DETAILS</h3>
          <span className="tog">
            {this.state.isShow ? <span> &#8722; </span> : <span> &#43; </span>}
          </span>
        </div>
        {this.state.isShow ? (
          <form onSubmit={this.handleSubmit}>
            <div className="name-group">
              <FormInput
                type="text"
                name="firstName"
                value={firstName}
                label="First Name"
                onChange={this.handleChange}
              />
              <FormInput
                type="text"
                name="lastName"
                value={lastName}
                label="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <FormInput
              type="text"
              name="address"
              value={address}
              label="Address"
              onChange={this.handleChange}
            />
            <CountryDropdown
              className="country-drop"
              value={country}
              onChange={val => this.selectCountry(val)}
            />
            <RegionDropdown
              className="region-drop"
              country={country}
              value={region}
              onChange={val => this.selectRegion(val)}
            />
            <FormInput
              type="text"
              name="city"
              value={city}
              label="City"
              onChange={this.handleChange}
            />
            <FormInput
              type="text"
              name="zipCode"
              value={zipCode}
              label="ZIP Code"
              onChange={this.handleChange}
            />
            <FormInput
              type="phone"
              name="phone"
              value={phone}
              label="Phone"
              onChange={this.handleChange}
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              label="Email"
              onChange={this.handleChange}
            />
            <CustomButton type="submit">CONTINUE TO SHIPPING</CustomButton>
          </form>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addShippingDetails: details => dispatch(addShippingDetails(details))
});

export default withRouter(connect(null, mapDispatchToProps)(ShippingForm));

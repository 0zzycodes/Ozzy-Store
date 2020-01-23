import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import loader from '../../assets/loader.gif';
import './request-form.scss';

export default class RequestForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      country: '',
      region: '',
      isSuccess: false,
      isLoading: false
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isSuccess: false });
  };
  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { fullName, email, country, region } = this.state;
    this.setState({ isLoading: true });
    const textStyled = renderEmail(
      <Email title="Country">
        <div style={{ padding: '15px' }}>
          <table style={{ width: '100%', textAlign: 'center' }}>
            <tr>
              <img src="https://i.ibb.co/XZnTp2c/REMEDII.png" alt="Logo" />
            </tr>
          </table>
          <br />
          <br />
          <table style={{ padding: '0px 15px' }}>
            <tr>from: {fullName}</tr>
          </table>
          <br />
          <table style={{ padding: '15px' }}>
            <tr>
              {region} {country} <br /> <br />
              Email: {email}
            </tr>
          </table>
        </div>
      </Email>
    );
    const message = {
      fullName,
      email,
      subject: 'Country',
      html: textStyled
    };
    fetch('https://ozzystore-backend.herokuapp.com/country', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ isLoading: false, isSuccess: true }, () =>
          this.setState({
            fullName: '',
            email: '',
            country: '',
            region: ''
          })
        );
      });
  };
  render() {
    const { fullName, email, isSuccess, country, region } = this.state;
    return (
      <div className="contain" id="request-form">
        <div className="request-form-section">
          <div className="request-form">
            <div className="form">
              {isSuccess ? (
                <span className="success">
                  Request Sent{' '}
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                </span>
              ) : null}
              {isSuccess ? (
                <h1>Thank You!</h1>
              ) : (
                <form onSubmit={this.handleSubmit}>
                  <h3>Tell Us Where Your're From</h3>
                  <FormInput
                    required
                    type="text"
                    name="fullName"
                    value={fullName}
                    label="Full Name"
                    onChange={this.handleChange}
                  />
                  <FormInput
                    required
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
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

                  <CustomButton>
                    SEND
                    {this.state.isLoading ? (
                      <img src={loader} alt="loader" />
                    ) : null}
                  </CustomButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

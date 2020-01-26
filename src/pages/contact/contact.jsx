import React from 'react';
import { Helmet } from 'react-helmet';
import { Email, renderEmail } from 'react-html-email';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import loader from '../../assets/loader.gif';
import './contact.scss';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      isSuccess: false,
      isLoading: false
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isSuccess: false });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, email, comment } = this.state;
    this.setState({ isLoading: true });
    const textStyled = renderEmail(
      <Email title="Contact From Remedi Clothing Online">
        <div style={{ padding: '15px' }}>
          <table style={{ width: '100%', textAlign: 'center' }}>
            <tr>
              <img src="https://i.ibb.co/XZnTp2c/REMEDII.png" alt="Logo" />
            </tr>
          </table>
          <br />
          <br />
          <table style={{ padding: '0px 15px' }}>
            <tr>from: {firstName}</tr>
          </table>
          <br />
          <table style={{ padding: '15px' }}>
            <tr>
              {comment} <br /> <br />
              Email: {email}
            </tr>
          </table>
        </div>
      </Email>
    );
    const message = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: 'Contact From Remedi Clothing Online',
      html: textStyled
    };
    fetch('https://ozzystore-backend.herokuapp.com/sendmail', {
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
            firstName: '',
            lastName: '',
            email: '',
            comment: ''
          })
        );
      });
  };
  render() {
    const { firstName, lastName, email, comment, isSuccess } = this.state;
    return (
      <div className="contain" id="contact">
        <Helmet>
          <title>Contact | REMEDI</title>
          <meta property="og:title" content="Contact | REMEDI" />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Cleaning When your clothes need a wash, don’t simply stick them in the washer as you might do usually; follow these guidelines. Use a gentle cleaning cycle, and opt for an eco-friendly detergent; not only is that better for the environment, it is more gentle for the bamboo fabric too and keeps everything as fresh and neat"
          />
          <meta property="og:site_name" content="REMEDI" />
          <meta property="og:url" content="https://www.remedi.store/contact" />
        </Helmet>
        <div className="contact-section">
          <div className="contact">
            <div className="form">
              {isSuccess ? (
                <span className="success">
                  Message Sent{' '}
                  <span role="img" aria-label="check">
                    ✔
                  </span>
                </span>
              ) : null}
              <form onSubmit={this.handleSubmit}>
                <h3>SEND A MESSAGE</h3>
                <FormInput
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  label="First Name"
                  onChange={this.handleChange}
                />
                <FormInput
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  label="Last Name"
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
                <div className="text-area">
                  <textarea
                    required
                    name="comment"
                    value={comment}
                    id=""
                    onChange={this.handleChange}
                    className={`${comment.length ? 'expand' : null}`}
                    cols="100"
                    rows="1"
                  ></textarea>
                  <label
                    className={`${
                      comment.length ? 'shrink' : ''
                    } form-input-label`}
                  >
                    Write your message.
                  </label>
                </div>
                <CustomButton>
                  SEND MESSAGE{' '}
                  {this.state.isLoading ? (
                    <img src={loader} alt="loader" />
                  ) : null}
                </CustomButton>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <div className="">
                <ul className="info">
                  <li className="">
                    <span className="key-title">Address:</span>
                    <br />
                    <br />
                    <span className="val">
                      226 ifedapo st, Owode Academy,
                      <br /> Ibadan, Oyo State, <br /> Nigeria
                    </span>
                  </li>
                  <li className="">
                    <span className="key-title">Phone:</span>
                    <br />
                    <br />
                    <span className="val">+234 8073656772</span>
                  </li>
                  <li className="">
                    <span className="key-title">Email:</span>
                    <br />
                    <br />
                    <span className="val">
                      officialremediclothing@gmail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

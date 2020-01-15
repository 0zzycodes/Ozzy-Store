import React from 'react';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
// import emailLogo from '../../assets/emailLogo.svg';
import './contact.scss';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      isSuccess: false
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isSuccess: false });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, email, comment } = this.state;
    const message = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: 'Contact From Ozzy Store',
      text: comment
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
        this.setState({ isSuccess: true });
      });
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      comment: ''
    });
  };
  render() {
    const { firstName, lastName, email, comment, isSuccess } = this.state;
    return (
      <div className="contain" id="contact">
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
                <CustomButton>SEND MESSAGE</CustomButton>
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
                    <span className="val">ozzystore@gmail.com</span>
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

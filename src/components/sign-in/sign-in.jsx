import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      error.code === 'auth/wrong-password'
        ? this.setState({
            errorMessage:
              'The password is invalid or the user does not have a password.'
          })
        : error.code === 'auth/user-not-found'
        ? this.setState({
            errorMessage:
              'There is no user record corresponding to this identifier.'
          })
        : this.setState({ errorMessage: 'Wierd' });
    }

    this.setState({ email: '', password: '' });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errorMessage: ''
    });
  };
  render() {
    const { email, password, errorMessage } = this.state;
    const { handleToggleSidebar } = this.props;
    return (
      <div className="sign-in">
        <h3 className="title">LOGIN</h3>
        <span className="title">Sign in with your email and password</span>
        {errorMessage !== '' ? (
          <span className="error">{errorMessage}</span>
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="button" onClick={this.handleSubmit}>
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
        <p>
          {' '}
          Don't have an account?{' '}
          <span onClick={handleToggleSidebar}>Create an account </span>
        </p>
      </div>
    );
  }
}

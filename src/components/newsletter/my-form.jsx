import React from 'react';
import './my-form.scss';

class MyForm extends React.Component {
  state = {
    email: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, isSuccess: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitted({
      EMAIL: this.state.email
    });
    this.setState({ email: '' });
  };
  render() {
    return (
      <div className="newsletter">
        <h2 className="heading">NEWSLETTER</h2>
        <p>
          Subscribe to receive updates, access to exclusive deals, and more.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter email"
            className="form-input"
            onChange={this.handleChange}
          />
          <button className="btn">SUBSCRIBE</button>
        </form>
      </div>
    );
  }
}
export default MyForm;

import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: ''
    };
  }
  editLoginHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //curry to pass this.props login
  handleLoginSubmitForm = properties => e => {
    e.preventDefault();
    properties.login(this.state);
  };
  render() {
    return (
      <form
        className="login-form"
        action=""
        onSubmit={this.handleLoginSubmitForm(this.props)}
      >
        <input
          type="text"
          name="usernameInput"
          onChange={this.editLoginHandler}
          placeholder="username"
          value={this.state.usernameInput}
          required
        />
        <input
          type="password"
          name="passwordInput"
          onChange={this.editLoginHandler}
          placeholder="password"
          value={this.state.passwordInput}
          required
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;

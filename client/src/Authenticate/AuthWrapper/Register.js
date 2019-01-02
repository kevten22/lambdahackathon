import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }
  editRegisterHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //curry to pass this.props registerNewUser/login
  handleRegisterSubmitForm = properties => e => {
    e.preventDefault();
    properties.registerNewUser(this.state);
    properties.login(this.state);
  };
  render() {
    return (
      <div>
        <div>Register Component</div>
        <form action="" onSubmit={this.handleRegisterSubmitForm(this.props)}>
          <input
            type="text"
            name="usernameInput"
            onChange={this.editRegisterHandler}
            placeholder="username"
            value={this.state.usernameInput}
            required
          />
          <input
            type="password"
            name="passwordInput"
            onChange={this.editRegisterHandler}
            placeholder="password"
            value={this.state.passwordInput}
            required
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;

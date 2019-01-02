import React, { Component } from "react";
import Register from "./AuthWrapper/Register";
import Login from "./AuthWrapper/Login";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    //after component mounts, checks localStorage to see if user is there, if it is, changes state of loggedIn to true, if not, loggedIn is set to false
    componentDidMount() {
      if (localStorage.getItem("user") && localStorage.getItem("password")) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    //login function
    login = () => {
      //does an axios call to the database, compare hashed pw with function to unhash pw and set loggedIn to true if it is correct
      // localStorage.setItem("user", response.data)
      // localStorage.setItem("password", response.data)
      this.setState({ loggedIn: true });
    };
    //logout function
    logout = () => {
      // localStorage.removeItem("user")
      // localStorage.removeItem("password")
    };
    //register new user
    registerNewUser = newUser => {
      const registerNewUser = {
        username: newUser.usernameInput,
        password: newUser.passwordInput
      };
      console.log(registerNewUser);
      //axios call to post new user to database
    };

    render() {
      if (this.state.loggedIn) return <App logout={this.logout} />;
      return (
        <div>
          <Register registerNewUser={this.registerNewUser} login={this.login} />
          <Login login={this.login} />
        </div>
      );
    }
  };

export default Authenticate;

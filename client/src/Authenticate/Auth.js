import React, { Component } from 'react';
import Register from './AuthWrapper/Register';
import Login from './AuthWrapper/Login';
import { Container, Row, Col } from 'reactstrap';
import '../index.scss';
import './auth.scss';

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        user: ''
      };
    }
    //after component mounts, checks localStorage to see if user is there, if it is, changes state of loggedIn to true, if not, loggedIn is set to false
    componentDidMount() {
      if (localStorage.getItem('user') && localStorage.getItem('password')) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    //login function
    login = props => {
      //does an axios call to the database, compare hashed pw with function to unhash pw and set loggedIn to true if it is correct
      // localStorage.setItem("user", response.data);
      // localStorage.setItem("password", response.data);

      localStorage.setItem('user', props.usernameInput);
      localStorage.setItem('password', props.passwordInput);
      //
      // const user = {
      //   usernameInput: props.usernameInput,
      //   passwordInput: props.passwordInput
      // }
      // axios.post("http://localhost:login", user).then(response => {
      //   console.log(response.data)
      // })

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
      // console.log(registerNewUser);
      //axios call to post new user to database
      //
      // axios.post("http://localhost:register",registerNewUser).then(response => {
      //   console.log(response.data)
      // })
    };

    render() {
      if (this.state.loggedIn) return <App logout={this.logout} />;
      return (
        <div className="auth">
          <div className="auth-bg-overlay">
            <Container className="auth-container">
              <Row>
                <Col className="auth-container-text" xs="12" md="5">
                  <h1>Built for Data Scientists</h1>
                  <p>Analyze. Share. Collaborate.</p>
                  <Login login={this.login} />
                </Col>
                <Col className="auth-dividers" md="1">
                  <div className="divider-top" />
                  <span>OR</span>
                  <div className="divider-bottom" />
                </Col>
                <Col className="auth-container-form" xs="12" md="5">
                  <h2>Sign Up</h2>
                  <Register
                    registerNewUser={this.registerNewUser}
                    login={this.login}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  };

export default Authenticate;

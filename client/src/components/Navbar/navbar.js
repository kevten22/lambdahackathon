import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { map, logout, upload, download, browser } from 'react-icons-kit/ikons';
import { Container, Row, Col } from 'reactstrap';
import Icon from 'react-icons-kit';
import './navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //view all datasets
  //view own dataset
  //download own dataset
  //upload dataset

  logout = () => {
    localStorage.removeItem('user', 'password');
    window.location.reload();
  };

  render() {
    console.log(this.props);
    return (
      <nav className="navbar">
        <Container className="navbar-container" fluid>
          <Row>
            <p>Hello {this.props.user}</p>
            <Link to="/view-all">
              <Icon size={25} icon={map} />
              Explore Data
            </Link>
            <Link to="/view-own">
              <Icon size={25} icon={browser} />
              View Your Data
            </Link>
            <Link to="/upload">
              <Icon size={25} icon={upload} />
              Upload Dataset
            </Link>
            <Link to="/download">
              <Icon size={25} icon={download} />
              Download Dataset
            </Link>
            <Link onClick={this.logout} to="/">
              <Icon size={25} icon={logout} />
              Logout
            </Link>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Navbar;

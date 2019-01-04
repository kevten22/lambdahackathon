import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { map, logout, upload, download, book } from 'react-icons-kit/ikons';
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
            <NavLink exact to="/" activeClassName="selected">
              <Icon size={25} icon={map} />
              Explore Data
            </NavLink>
            <NavLink to="/view-own" activeClassName="selected">
              <Icon size={25} icon={book} />
              View Your Data
            </NavLink>
            <NavLink to="/upload" activeClassName="selected">
              <Icon size={25} icon={upload} />
              Upload Dataset
            </NavLink>
            <NavLink to="/download" activeClassName="selected">
              <Icon size={25} icon={download} />
              Download Dataset
            </NavLink>
            <NavLink onClick={this.logout} to="/">
              <Icon size={25} icon={logout} />
              Logout
            </NavLink>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { map, logout, upload, download, book } from 'react-icons-kit/ikons';
import { Container, Row } from 'reactstrap';
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
              <span className="d-none d-md-inline-block">Explore Data</span>
            </NavLink>
            <NavLink to="/view-own" activeClassName="selected">
              <Icon size={25} icon={book} />
              <span className="d-none d-md-inline-block">View Your Data</span>
            </NavLink>
            <NavLink to="/upload" activeClassName="selected">
              <Icon size={25} icon={upload} />
              <span className="d-none d-md-inline-block">Upload Dataset</span>
            </NavLink>
            <NavLink to="/download" activeClassName="selected">
              <Icon size={25} icon={download} />
              <span className="d-none d-md-inline-block">Download Dataset</span>
            </NavLink>
            <NavLink onClick={this.logout} to="/">
              <Icon size={25} icon={logout} />
              <span className="d-none d-md-inline-block">Logout</span>
            </NavLink>
          </Row>
        </Container>
      </nav>
    );
  }
}

export default Navbar;

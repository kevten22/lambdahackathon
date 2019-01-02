import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar">
        <Container fluid>
          <Row />
        </Container>
      </nav>
    );
  }
}

export default Header;

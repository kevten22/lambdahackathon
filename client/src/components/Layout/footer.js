import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = ({ year }) => (
  <footer className="footer">
    <Container fluid>
      <Row>
        <Col xs="12">
          <p>&copy; {year}</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

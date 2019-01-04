import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Home.scss';

const Home = props => {
  return (
    <Container className="home">
      <Row>
        <Col xs="12" className="home-header">
          <h1>Explore Datasets</h1>
          <p>Discover datasets that have been uploaded by others!</p>
        </Col>
        {props.collections.map((ele, index) => (
          <Col key={index} xs="12" md="4">
            <Link onClick={() => props.click(ele.id)} to={`/collection/${ele.collectionName}`}>
              <div className="card">
                {ele.collectionName}
                <div className="card-overlay">
                  <div className="card-overlay-btn">View</div>
                </div>
              </div>
            </Link>
            <div className="card-details">
              <p>Created by user {ele.userID}</p>
              <p>On "creation date goes here"</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;

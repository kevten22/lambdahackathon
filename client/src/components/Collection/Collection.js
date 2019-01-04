import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './Collection.scss';
import Annotation from '../Annotation/annotation';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: props.match.params.id,
      urlArray: [],
      clicked: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:9000/images/${this.state.collection}`)
      .then(response => {
        console.log(response);
        this.setState({ urlArray: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    const button = (
      <div className="annotate-confirm">
        <p>Would you like to annotate this collection?</p>
        <Link
          onClick={this.handleClick}
          to={`${this.props.match.url}/annotate`}
        >
          Annotate
        </Link>
      </div>
    );
    const annotationLink = this.state.clicked ? null : button;
    return (
      <Container className="collection">
        <Row>
          <Col className="collection-header" xs="12">
            <h1>Collection: {this.state.collection}</h1>
            <p>Labeling Instructions: Lorem, ipsum dolor sit amet</p>
            {annotationLink}
          </Col>
          <Route
            path={`${this.props.match.url}/annotate`}
            render={props => (
              <Annotation {...props} array={this.state.urlArray} />
            )}
          />
        </Row>
      </Container>
    );
  }
}

export default Collection;

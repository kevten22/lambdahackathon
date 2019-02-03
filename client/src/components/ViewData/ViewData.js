import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './ViewData.scss';

class ViewData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionID: props.id,
      collection: props.match.params.id,
      question: '',
      urlArray: [],
      objArray: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:9000/images/collections/${this.state.collectionID}`
      )
      .then(response => {
        console.log(response);
        let q = response.data[0];
        q = q.questionParam;
        this.setState({
          objArray: response.data,
          urlArray: response.data.map(ele => ele.imageURL),
          question: q
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container className="view-data">
        <Row>
          <Col className="view-data-header" xs="12">
            <h1>Collection: {this.state.collection}</h1>
            <p>
              Number of Images in this dataset: {this.state.objArray.length}
            </p>
            <p>Labeling Instructions: {this.state.question}</p>
          </Col>
          {this.state.objArray.map((e, index) => (
            <Col className="collection-summary" xs="6" key={index}>
              <Col sm="6">
                <img src={e.imageURL} alt="#" />
              </Col>
              <Col sm="5">
                <p>True:{e.trueOption}</p>
                <p>False:{e.falseOption}</p>
              </Col>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ViewData;

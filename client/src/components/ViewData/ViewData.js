import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './ViewData.scss';

class ViewData extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collectionID:props.id,
        collection:props.match.params.id,
        question:"",
        urlArray:[],
        objArray:[]
    };
  }

  componentDidMount() {
      axios
      .get(`http://localhost:9000/images/collections/${this.state.collectionID}`)
      .then(response => {
          console.log(response);
          let q=response.data[0];
          q = q.questionParam;
          this.setState({
              objArray:response.data,
              urlArray:response.data.map(ele => ele.imageURL),
              question:q
            })
      })
      .catch(error => {
          console.log(error)
      })
  }


  render() {

    return (
      <Container className="collection">
        <Row>
          <Col className="collection-header" xs="12">
            <h1>Collection: {this.state.collection}</h1>
            <p>Number of Images in this dataset: {this.state.objArray.length}</p>
            <p>Labeling Instructions: {this.state.question}</p>

          </Col>
        </Row>
        {
            this.state.objArray.map((e,index) => {
                const summary = <Row key={index}>
                    <Col><img style={{"maxWidth":"100px"}}src={e.imageURL}alt="#" /></Col>
                    <Col>
                        <Row>True:{e.trueOption}</Row>
                        <Row>False:{e.falseOption}</Row>
                    </Col>
                </Row>
                return summary
            })
        }
      </Container>
    );
  }
}

export default ViewData;

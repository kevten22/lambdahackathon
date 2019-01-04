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
        collectionID:props.id,
        collection:props.match.params.id,
        urlArray:[],
        objArray:[],
        trueArray:[],
        falseArray:[],
        clicked:false
    };
  }

  componentDidMount() {
      axios
      .get(`http://localhost:9000/images/collections/${this.state.collectionID}`)
      .then(response => {
          console.log(response);
          this.setState({
              objArray:response.data,
              urlArray:response.data.map(ele => ele.imageURL),
              trueArray:response.data.map(ele => ele.trueOption),
              falseArray:response.data.map(ele => ele.falseOption)
            })
      })
      .catch(error => {
          console.log(error)
      })
  }

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    console.log(this.props)
    console.log(this.state.urlArray)
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
              <Annotation {...props} array={this.state.urlArray} obj={this.state.objArray} id={this.state.collectionID}/>
            )}
          />
        </Row>
      </Container>
    );
  }
}

export default Collection;

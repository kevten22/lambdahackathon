import React, { Component } from 'react';
import Carousel from './carousel';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './annotation.scss';

class Annotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        colObj:[...props.obj],
        imagesArray: props.array,
        currentIndex: 0,
        arrayLength: props.array.length
    };
  }

  clickHandler = val => {
    const tempArray = [];
    this.state.colObj.forEach( ele => {
        tempArray.push({...ele});
    });

    if(val){
        tempArray[this.state.currentIndex].trueOption += 1
    } else {
        tempArray[this.state.currentIndex].falseOption += 1
    }

    axios
    .put(`http://localhost:9000/images/${this.state.currentIndex+1}`,tempArray[this.state.currentIndex])
    .then(response => {
        console.log(response.data);
        this.setState({
            colObj: tempArray,
            currentIndex: this.state.currentIndex + 1
          });
    })
    .catch(error => console.log(error))
  };

  render() {
    const loading = <div style={{ padding: '5rem' }}>Loading...</div>;
    const redirect = (
      <div>
        <p>Thank you for annotating this data set.</p>{' '}
        <p>You will be redirected back to the home page.</p>
      </div>
    );
    const carousel = (
      <Carousel image={this.state.imagesArray[this.state.currentIndex]} />
    );
    const main = () => {
      if (this.state.arrayLength === 0) {
        return loading;
      } else if (this.state.currentIndex > this.state.arrayLength - 1) {
        setTimeout(() => this.props.history.push('/'), 2000);
        return redirect;
      } else {
        return carousel;
      }
    };

    return (
      <Container className="annotate">
        <Row>
          <Col xs="12">
            {main()}
            <div className="button-wrapper">
              <button
                className="binary-button green"
                onClick={(event, val = true) => this.clickHandler(val)}
                name="true"
              >
                True
              </button>
              <button
                className="binary-button red"
                onClick={(event, val = false) => this.clickHandler(val)}
                name="false"
              >
                False
              </button>
            </div>
            <div className="progress">
              Remaining images to classify:{' '}
              {this.state.arrayLength - this.state.currentIndex}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Annotation;

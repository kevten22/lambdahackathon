import React, { Component } from 'react';
import Carousel from "./carousel"
import axios from "axios";
import "./annotation.scss"

class Annotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imagesArray:props.array,
        boolArray:new Array(props.array.length).fill(null),
        currentIndex:0,
        arrayLength:props.array.length
    }
  }

  clickHandler = (val) => {
    const array = this.state.boolArray.map((ele,index) => {
        if(index===Number(this.state.currentIndex)){
            return val
        } else {
            return ele
        }
    })
    this.setState({
        boolArray:array,
        currentIndex:this.state.currentIndex+1
      })
  }
  
  render() {
      const loading = <div>Loading...</div>
      const redirect = <div><p>Thank you for annotating this data set.</p> <p>You will be redirected back to the home page.</p></div>
      const carousel = <Carousel image={this.state.imagesArray[this.state.currentIndex]}/>
      const main = () => {
          console.log(this.state.currentIndex)
        if(this.state.arrayLength===0){
            return loading
        } else if(this.state.currentIndex>this.state.arrayLength-1){
            setTimeout(()=>this.props.history.push("/"), 2000)
            return redirect
        } else {
            return carousel
        }
      }
    return (
      <section className="annotate">
        {main()}
        <div className="button-wrapper">
            <button className="binary-button green" onClick={(event,val=true) => this.clickHandler(val)} name="true">True</button>
            <button className="binary-button red" onClick={(event,val=false) => this.clickHandler(val)} name="false">False</button>
        </div>
        <div className="progress">Remaining images to classify: {this.state.arrayLength-this.state.currentIndex}</div>
      </section>
    );
  }
}

export default Annotation;

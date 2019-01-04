import React, { Component } from 'react';
import {Route,Link} from "react-router-dom";
import axios from "axios"
import './Collection.scss';
import Annotation from "../Annotation/annotation"

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collection:props.match.params.id,
        urlArray:[]
    };
  }

  componentDidMount(){
      axios
      .get(`http://localhost:9000/images/${this.state.collection}`)
      .then(response => {
          console.log(response);
          this.setState({urlArray:response.data})
      })
      .catch(error => {
          console.log(error)
      })
  }


  render() {
    console.log(this.props.match.url)
    return (
        <section className="collection">
            <div>Collection Name: {this.state.collection}</div>
            <div>Labeling Instructions:</div>
            <div>Would you like to annotate this collection?<Link to={`${this.props.match.url}/annotate`}>Annotate</Link></div>
            <Route path={`${this.props.match.url}/annotate`} render={props => <Annotation {...props} array={this.state.urlArray}/>}/>
        </section>
    );
  }
}

export default Collection;

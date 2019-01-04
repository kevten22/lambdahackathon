import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';



class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        userID:1
        };
      }

async componentDidMount() {
const collections = await axios.get("http://localhost:9000/collections");
console.log(collections);
}


render() {
    return(<div></div>);
}


}

export default ViewData;
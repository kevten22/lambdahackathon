import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //view all datasets
  //view own dataset
  //download own dataset
  //upload dataset
  render() {
    return (
      <div>
        <div>Welcome user : username input here</div>
        <Link to="/view-all">View all available data-sets</Link>
        <Link to="/view-own">View your own uploaded data-sets</Link>
        <Link to="/upload">Upload new data-sets</Link>
        <Link to="/download">Download your handeled data-sets</Link>
      </div>
    );
  }
}

export default Navbar;

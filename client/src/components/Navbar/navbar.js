import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "../../Styling/ReusableStyles";

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
    console.log(this.props);
    return (
      <NavContainer>
        <div>Welcome user : {this.props.user}</div>
        <div>Routes for the different views:</div>
        <Link to="/view-all">View all available data-sets</Link>
        <Link to="/view-own">View your own uploaded data-sets</Link>
        <Link to="/upload">Upload new data-sets</Link>
        <Link to="/download">Download your handeled data-sets</Link>
      </NavContainer>
    );
  }
}

export default Navbar;

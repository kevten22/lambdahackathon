import React, { Component } from "react";
import Layout from "./components/Layout/layout";
import NavBar from "./components/Navbar/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "placeholder"
    };
  }
  // component did mount update this.state.user to the login user.
  componentDidMount() {
    this.setState({ user: localStorage.getItem("user") });
  }
  //filter function to filter from the datasets, to render only the user's datasets

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <Layout />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Layout from "./components/Layout/layout";
import NavBar from "./components/Navbar/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Layout />
      </div>
    );
  }
}

export default App;

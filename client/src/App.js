import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'placeholder',
      seedData:[]
    };
  }
  // component did mount update this.state.user to the login user.
  componentDidMount() {
    this.setState({ user: localStorage.getItem('user') });
    axios
    .get("http://localhost:5000/data")
    .then(response => {
      console.log(response.data)
      this.setState({seedData:response.data});
    })
    .catch(error => {
      console.log(error)
    })
  }
  //filter function to filter from the datasets, to render only the user's datasets

  render() {
    return (
    <Layout user={this.state.user}>
      <Route exact path="/" render={prop => (<div> Explore data. Seed data received from GET request</div>)}/>
      <Route path="/view-own" render={prop => (<div> View your data. User data received from GET request </div>)}/>
      <Route path="/upload" render={prop => (<div> Upload data.</div>)}/>
      <Route path="/download" render={prop => (<div> Download data. </div>)}/>
    </Layout>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import axios from "axios";
import Home from "./components/Home/Home";
import Collection from "./components/Collection/Collection";
import ViewData from "./components/ViewData/ViewData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'placeholder',
      seedData:[],
      collID:null
    };
  }
  // component did mount update this.state.user to the login user.
  componentDidMount() {
    this.setState({ user: localStorage.getItem('user') });
    axios
    .get("http://localhost:9000/collections")
    .then(response => {
      console.log(response.data)
      this.setState({seedData:response.data});
    })
    .catch(error => {
      console.log(error)
    })
  }
  //filter function to filter from the datasets, to render only the user's datasets

  handleClick = (id) => {
    this.setState({collID:id})
  }

  render() {
    return (
    <Layout user={this.state.user}>
      <Route exact path="/" render={props => <Home {...props} collections={this.state.seedData} click={this.handleClick}/> }/>
      <Route path="/collection/:id" render={props => <Collection {...props} id={this.state.collID}/>}/>
      <Route path="/view-own" render={props => <ViewData {...props} id={1}/>}/>
      <Route path="/upload" render={props => (<div> Upload data.</div>)}/>
      <Route path="/download" render={props => (<div> Download data. </div>)}/>
    </Layout>
    );
  }
}

export default App;

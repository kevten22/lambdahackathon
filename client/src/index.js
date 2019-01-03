import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Routes
import { BrowserRouter as Router } from "react-router-dom";

//import HOC auth
import Authenticate from "./Authenticate/Auth";
const HOC = Authenticate(App);

ReactDOM.render(
  <Router>
    <HOC />
  </Router>,
  document.getElementById("root")
);

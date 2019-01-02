
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//import HOC auth
import Authenticate from "./Authenticate/Auth";
const HOC = Authenticate(App);

ReactDOM.render(<HOC />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "@popperjs/core";
import "../css/styles.scss";
import App from "./components/App";
import history from "./auth/history";

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("app")
);

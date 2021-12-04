import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// fontawesome
// API
// const apiUrl = process.env.API_URL;

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route element={PageNotFound} />
      </Routes>
      <ToastContainer autoClose={3000} position="top-left" />
    </Fragment>
  );
}

export default App;

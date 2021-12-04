import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../common/Loading";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import waves from "../../assets/stacked-waves-haikei.png";

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <div className="waves-img">
        <img src={waves} alt="waves" />
      </div>
      <Footer />
    </>
  );
};
export default HomePage;

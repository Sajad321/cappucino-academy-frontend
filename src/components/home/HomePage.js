import React, { useState, Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../common/Loading";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import waves from "../../assets/stacked-waves-haikei.png";
import landing from "../../assets/landing.jpg";

const HomePage = (props) => {
  return (
    <>
      <Navbar />
      <div className="waves-img position-relative">
        <div className="landing row">
          <div className="col-6">
            <p className="landing-top">
              ‘‘ Medicine Will Never Be Hard AGAIN ’’
            </p>
            <p className="landing-center">
              Find The best online courses here <br />
              With the greatest instructors.
            </p>

            <div className="landing-bottom">
              <input
                type="text"
                className="landing-input pb-2 col-7"
                placeholder="What are you looking for?"
              />
              <button className="btn btn-block landing-button">
                Find it now
              </button>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
        <img className="landing-img" src={landing} />
        <img className="background-img" src={waves} alt="waves" />
      </div>
      <Footer />
    </>
  );
};
export default HomePage;

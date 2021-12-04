import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo.svg";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} height="40px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Ambassdors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <form className="d-flex justify-content-center">
            <div className="nav-item-side">
              <a className="nav-link text-light" href="#">
                Login
              </a>
            </div>
            <div className="nav-item-side ms-3">
              <a className="nav-link text-light" aria-current="page" href="#">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

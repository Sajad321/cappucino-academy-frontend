import React from "react";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                activeClassName="active"
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/ambassdors"
                activeClassName="active"
              >
                Ambassdors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/our-team"
                activeClassName="active"
              >
                Our Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/contact"
                activeClassName="active"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <form className="d-flex justify-content-center">
            <div className="nav-item-side">
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </div>
            <div className="nav-item-side ms-3">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/sign-up"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

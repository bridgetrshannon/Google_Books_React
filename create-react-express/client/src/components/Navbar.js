import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Google Books
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/search" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/search">
                  Search
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/saved" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/saved">
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);

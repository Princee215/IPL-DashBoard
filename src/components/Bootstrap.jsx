import React from "react";
import { Link } from "react-router-dom";

function Bootstrap() {
  return (
    <nav class="navbar navbar-expand-lg bg-light navy">
      <div class="container-fluid navy y">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class="navbar-brand">🏏 IPL Dashboard</div>
        </Link>
        {/* <a class="navbar-brand" href="/">
          
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="nav-links">About</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Bootstrap;

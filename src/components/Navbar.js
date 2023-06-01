import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand mx-2" to="/">
          DailyDose
        </Link>
        <button
          className="navbar-toggler "
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/general">
                General <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>

            <li className="nav-item mx-1">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>

            <li className="nav-item mx-1">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

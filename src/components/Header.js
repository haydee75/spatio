import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="default-header">
        <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="container">
            <h1 className="title">Spatio</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="lnr lnr-menu" />
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Planets
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="elements.html">
                      Mercury
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Venus
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Earth
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Mars
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Jupiter
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Saturn
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Uranus
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Neptune
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Galaxies
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="elements.html">
                      Milky Way
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Andromeda
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Sombrero
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Whirlpool
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Triangulum
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Magellanic Clouds
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Pinwheel
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Messier 87
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Antennae
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Black Holes
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Constellations
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="elements.html">
                      Capricornus
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Aquarius
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Pisces
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Aries
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Taurus
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Gemini
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Cancer
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Leo
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Virgo
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Libra
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Scorpius
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Sagittarius
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Ophiuchus
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="search-input" id="search-input-box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search-input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <span
                className="lnr lnr-cross"
                id="close-search"
                title="Close Search"
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import list_constellations from "../list_constellations.json";
import list_galaxies from "../list_galaxies.json";
import list_planets from "../list_planets.json";

class Navbar extends Component {
  render() {
    return (
      <header className="default-header">
        <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="container">
            <Link to="/">
              <h1 className="title">Spatio</h1>
            </Link>

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
                  <Link to="/planets" style={{ textDecoration: "none" }}>
                    Planets
                  </Link>

                  <div className="dropdown-menu">
                    {list_planets.map((eachPlanet, index) => {
                      return (
                        <Link
                          key={eachPlanet.id}
                          to={`/planets/${eachPlanet.id}`}
                          className="dropdown-item"
                        >
                          {eachPlanet.name}
                        </Link>
                      );
                    })}
                  </div>
                </li>
                <li className="dropdown">
                  <Link to="/galaxies" style={{ textDecoration: "none" }}>
                    Galaxies
                  </Link>
                  <div className="dropdown-menu">
                    {list_galaxies.map((eachGalaxy, index) => {
                      return (
                        <Link
                          key={eachGalaxy.id}
                          to={`/planets/${eachGalaxy.id}`}
                          className="dropdown-item"
                        >
                          {eachGalaxy.name}
                        </Link>
                      );
                    })}
                  </div>
                </li>
                <li className="dropdown">
                  <Link to="/constellations" style={{ textDecoration: "none" }}>
                    Constellations
                  </Link>
                  <div className="dropdown-menu">
                    {list_constellations.map((eachContellation, index) => {
                      return (
                        <Link
                          key={eachContellation.id}
                          to={`/planets/${eachContellation.id}`}
                          className="dropdown-item"
                        >
                          {eachContellation.name}
                        </Link>
                      );
                    })}
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

export default Navbar;

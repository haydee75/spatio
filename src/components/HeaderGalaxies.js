import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class HeaderGalaxies extends Component {
  render() {
    return (
      <Fragment>
        <section className="banner-area">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 banner-right">
                <h1 className="text-white">Galaxies</h1>
                <div className="link-nav">
                  <span className="box">
                    <Link to="/">Home</Link>
                    <i className="lnr lnr-arrow-right" />
                    <Link to="/galaxies">Galaxies</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="whole-wrap">
          <div className="container">
            <div className="section-top-border">
              <h3 className="mb-30">
                The word 'galaxy' is derived from the Greek word galaxias which
                means "milky"
              </h3>
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="img/elements/pluto-waiting.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-9 mt-sm-20">
                  <p>
                    There are potentially more than 170 billion galaxies in the
                    observable universe. Some, called dwarf galaxies, are very
                    small with about 10 million stars, while others are huge
                    containing an estimated 100 trillion stars.
                  </p>
                  <p>
                    Based on shape astronomers have identified various kinds of
                    galaxies including, elliptical galaxies, spiral galaxies,
                    lenticular galaxies and irregular galaxies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="whole-wrap">
          <div className="container">
            <div className="section-top-border">
              <iframe
                title="planets"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/HdPzOWlLrbE"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeaderGalaxies;

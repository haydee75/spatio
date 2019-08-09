import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class HeaderPlanets extends Component {
  render() {
    return (
      <Fragment>
        <section className="banner-area">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 banner-right">
                <h1 className="text-white">Planets</h1>
                <div className="link-nav">
                  <span className="box">
                    <Link to="/">Home</Link>
                    <i className="lnr lnr-arrow-right" />
                    <Link to="/planets">Planets</Link>
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
                We have nine planets in our Solar System...
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
                    Each time you look up to the sky and see a star you are
                    looking at a sun in another galaxy. If you were on another
                    planet looking back at our solar system, you would see our
                    sun as a star.It’s believed that every sun has planets
                    orbiting it.
                  </p>
                  <p>
                    Our Milky Way galaxy has more planets than it has stars. In
                    our solar system we have eight planets: Mercury, Venus,
                    Earth, and Mars are the inner rocky planets.
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
                src="https://www.youtube.com/embed/libKVRa01L8"
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

export default HeaderPlanets;

import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class HeaderConstellations extends Component {
  render() {
    return (
      <Fragment>
        <section className="banner-area">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 banner-right">
                <h1 className="text-white">Constellations</h1>
                <div className="link-nav">
                  <span className="box">
                    <Link to="/">Home</Link>
                    <i className="lnr lnr-arrow-right" />
                    <Link to="/galaxies">Constellations</Link>
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
                A constellation is a group of visible stars that form a pattern
                when viewed from Earth.
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
                    The pattern they form may take the shape of an animal, a
                    mythological creature, a man, a woman, or an inanimate
                    object such as a microscope, a compass, or a crown.
                  </p>
                  <p>
                    The sky was divided up into 88 different constellations in
                    1922. This included 48 ancient constellations listed by the
                    Greek astronomer Ptolemy as well as 40 new constellations.
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
                src="https://www.youtube.com/embed/QXeEAQtC75g"
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

export default HeaderConstellations;

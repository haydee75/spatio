import React, { Component } from "react";
import { Link } from "react-router-dom";
import list_constellations from "../list_constellations.json";

class ConstellationsArea extends Component {
  render() {
    return (
      <section className="blog-post-area section-gap padding-bottom-none">
        <div className="container-fluid">
          <div className="feature-inner row">
            <div className="col-lg-12">
              <div className="section-title text-left">
                <h2>Constellations</h2>
                <p>
                  There are 13 zodiac constellations. Twelve of these are also
                  used as signs for the zodiac calendar and astrology. Astrology
                  is not to be confused with astronomy. Astrology is the study
                  of the zodiac symbols and stars and the belief that they have
                  influence over human lives.
                </p>
              </div>
            </div>

            {list_constellations.map((eachConstellation, index) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog-post">
                    <img
                      className="img-fluid"
                      src={eachConstellation.photo}
                      alt={eachConstellation.name}
                    />
                    <div className="overlay" />
                    <div className="top-text">
                      <Link to={`/constellations/${eachConstellation.id}`}>
                        {eachConstellation.name}
                      </Link>
                    </div>
                    <div className="text">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusamus, nostrum earum minus quos provident
                          dicta itaque?
                        </p>
                      </div>

                      <Link
                        to={`/constellations/${eachConstellation.id}`}
                        className="primary-btn"
                      >
                        {eachConstellation.name}
                      </Link>
                    </div>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ConstellationsArea;

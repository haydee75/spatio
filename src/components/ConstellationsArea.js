import React, { Component } from "react";
import { Link } from "react-router-dom";
import list_constellations from "../list_constellations.json";

class ConstellationsArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: list_constellations
    };
  }
  render() {
    const constellations = this.state.datas.slice(0, 3);
    return (
      <section className="blog-post-area section-gap padding-bottom-none">
        <div className="container-fluid">
          <div className="feature-inner row">
            <div className="col-lg-12">
              <div className="section-title text-left">
                <h2>Constellations</h2>
                <p>
                  There are 13 zodiac constellations. Astrology is the study of
                  the zodiac symbols and stars and the belief that they have
                  influence over human lives.
                </p>
              </div>
            </div>

            {constellations.map((eachConstellation, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={eachConstellation.id}>
                  <div className="single-blog-post">
                    <img
                      className="img-fluid"
                      src={eachConstellation.photo}
                      alt={eachConstellation.name}
                    />
                    <div className="overlay" />
                    <div className="top-text text-white">
                      <h3>{eachConstellation.name}</h3>
                    </div>
                    <div className="text">
                      <Link
                        to={`/constellations/${eachConstellation.id}`}
                        className="primary-btn"
                      >
                        View Details
                        <i className="fa fa-long-arrow-right" />
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

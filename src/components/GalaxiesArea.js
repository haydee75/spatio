import React, { Component } from "react";
import { Link } from "react-router-dom";
import list_galaxies from "../list_galaxies.json";

class GalaxiesArea extends Component {
  render() {
    return (
      <section className="other-feature-area small-padding-top">
        <div className="container">
          <div className="feature-inner row">
            <div className="col-lg-12">
              <div className="section-title text-left no-padding">
                <h2>Galaxies</h2>
                <img
                  className="img-fluid img-gal"
                  src="img/pluto-uploading-1.png"
                  alt="pluto-uploading-1"
                />
              </div>
            </div>

            {list_galaxies.map((eachGalaxie, index) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="other-feature-item">
                    <img
                      className="img-fluid"
                      src={eachGalaxie.photo}
                      alt={eachGalaxie.name}
                    />
                    <Link
                      to={`/galaxies/${eachGalaxie.id}`}
                      className="dropdown-item"
                    >
                      {eachGalaxie.name}
                    </Link>
                    <div>
                      <p>{eachGalaxie.resume}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default GalaxiesArea;

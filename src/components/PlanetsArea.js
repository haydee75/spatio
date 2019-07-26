import React, { Component } from "react";
import { Link } from "react-router-dom";
import list_planets from "../list_planets.json";

class PlanetsArea extends Component {
  render() {
    return (
      <section className="popular-course-area section-gap">
        <div className="container-fluid">
          <div className="row justify-content-center section-title">
            <div className="col-lg-12">
              <h2>Planets</h2>
              <p>
                The Solar System is made up of the Sun and the celestial objects
                that are bound to it by its gravity: the eight planets and five
                dwarf planets, their 173 known moons, and billions of small
                bodies, such as asteroids, icy kuiper belt objects, comets,
                meteoroids, and interplanetary dust.
              </p>
            </div>
          </div>
          <div className="owl-carousel popuar-course-carusel">
            {list_planets.map((eachPlanet, index) => {
              return (
                <div className="single-popular-course" key={eachPlanet.id}>
                  <div className="thumb">
                    <img
                      className="f-img img-fluid mx-auto"
                      src={eachPlanet.photo}
                      alt={eachPlanet.name}
                    />
                  </div>
                  <div className="details">
                    <Link
                      to={`/planets/${eachPlanet.id}`}
                      className="dropdown-item"
                    >
                      {eachPlanet.name}
                    </Link>
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

export default PlanetsArea;

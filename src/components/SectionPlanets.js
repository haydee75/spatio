import React, { Component } from "react";
import list_planets from "../list_planets.json";
import { Link } from "react-router-dom";

class SectionPlanets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: list_planets
    };
  }
  render() {
    const firstRow = this.state.datas.slice(0, 3);
    const secondRow = this.state.datas.slice(3, 6);
    const thirdRow = this.state.datas.slice(6, 9);
    return (
      <section className="top-category-widget-area pt-90 pb-90 ">
        <div className="container">
          <div className="row">
            {firstRow.map((eachfirstRow, index) => {
              return (
                <div className="col-lg-4" key={eachfirstRow.id}>
                  <div className="single-cat-widget">
                    <div className="content relative">
                      <div className="overlay overlay-bg" />
                      <Link to={`/planets/${eachfirstRow.id}`}>
                        <div className="thumb">
                          <img
                            className="content-image img-fluid d-block mx-auto"
                            src={eachfirstRow.photo}
                            alt={eachfirstRow.name}
                          />
                        </div>
                        <div className="content-details">
                          <h4 className="content-title mx-auto text-uppercase">
                            {eachfirstRow.name}
                          </h4>
                          <span />
                          <p>
                            Distance from the sun -
                            {eachfirstRow.distance_from_sun} million mi
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row">
            {secondRow.map((eachsecondRow, index) => {
              return (
                <div className="col-lg-4" key={eachsecondRow.id}>
                  <div className="single-cat-widget">
                    <div className="content relative">
                      <div className="overlay overlay-bg" />
                      <Link to={`/planets/${eachsecondRow.id}`}>
                        <div className="thumb">
                          <img
                            className="content-image img-fluid d-block mx-auto"
                            src={eachsecondRow.photo}
                            alt={eachsecondRow.name}
                          />
                        </div>
                        <div className="content-details">
                          <h4 className="content-title mx-auto text-uppercase">
                            {eachsecondRow.name}
                          </h4>
                          <span />
                          <p>
                            Distance from the sun -
                            {eachsecondRow.distance_from_sun} million mi
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />

        <div className="container">
          <div className="row">
            {thirdRow.map((eachthirdRow, index) => {
              return (
                <div className="col-lg-4" key={eachthirdRow.id}>
                  <div className="single-cat-widget">
                    <div className="content relative">
                      <div className="overlay overlay-bg" />
                      <Link to={`/planets/${eachthirdRow.id}`}>
                        <div className="thumb">
                          <img
                            className="content-image img-fluid d-block mx-auto"
                            src={eachthirdRow.photo}
                            alt={eachthirdRow.name}
                          />
                        </div>
                        <div className="content-details">
                          <h4 className="content-title mx-auto text-uppercase">
                            {eachthirdRow.name}
                          </h4>
                          <span />
                          <p>
                            Distance from the sun -
                            {eachthirdRow.distance_from_sun} million mi
                          </p>
                        </div>
                      </Link>
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

export default SectionPlanets;

import React, { Component } from "react";
import list_constellations from "../list_constellations.json";
import { Link } from "react-router-dom";

class SectionConstellations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: list_constellations
    };
  }
  render() {
    const firstRow = this.state.datas.slice(0, 3);
    const secondRow = this.state.datas.slice(3, 6);
    const thirdRow = this.state.datas.slice(6, 9);
    const fourRow = this.state.datas.slice(9, 12);

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
                      <Link to={`/constellations/${eachfirstRow.id}`}>
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
                      <Link to={`/constellations/${eachsecondRow.id}`}>
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
                      <Link to={`/constellations/${eachthirdRow.id}`}>
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
            {fourRow.map((eachthirdRow, index) => {
              return (
                <div className="col-lg-4" key={eachthirdRow.id}>
                  <div className="single-cat-widget">
                    <div className="content relative">
                      <div className="overlay overlay-bg" />
                      <Link to={`/constellations/${eachthirdRow.id}`}>
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
                          <span />{" "}
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

export default SectionConstellations;

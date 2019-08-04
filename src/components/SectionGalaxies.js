import React, { Component } from "react";
import list_galaxies from "../list_galaxies.json";
import { Link } from "react-router-dom";

class SectionGalaxies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: list_galaxies
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
                      <Link to={`/galaxies/${eachfirstRow.id}`}>
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
                          <p>Constellation -{eachfirstRow.constellation}</p>
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
                      <Link to={`/galaxies/${eachsecondRow.id}`}>
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
                          <p>Constellation -{eachsecondRow.constellation}</p>
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
                      <Link to={`/galaxies/${eachthirdRow.id}`}>
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
                          <p>Constellation - {eachthirdRow.constellation}</p>
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

export default SectionGalaxies;

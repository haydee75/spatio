import React, { Fragment } from "react";
import list_planets from "../list_planets.json";
import { Link } from "react-router-dom";

const PlanetDetail = props => {
  const getPlanet = id => {
    const thePlanet = onePlanet => {
      return onePlanet.id === id;
    };
    return list_planets.find(thePlanet);
  };

  const { params } = props.match;
  const foundPlanet = getPlanet(params.id, 10);
  let funFacts = foundPlanet.fun_facts;
  console.log(funFacts);
  return (
    <Fragment>
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">{foundPlanet.name}</h1>
              <div className="link-nav">
                <span className="box">
                  <Link to="/">Home</Link>
                  <i className="lnr lnr-arrow-right" />
                  <Link to="/planets">Planets</Link>
                  <i className="lnr lnr-arrow-right" />
                  <Link to={`/planets/${foundPlanet.id}`}>
                    {foundPlanet.name}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="post-content-area single-post-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src={foundPlanet.photo}
                      alt={foundPlanet.name}
                    />
                  </div>
                </div>

                <div className="col-lg-9 col-md-9">
                  <h3 className="mt-20 mb-20">{foundPlanet.name}</h3>
                  <p className="excert">{foundPlanet.history_name}</p>
                </div>
                <div className="col-lg-12">
                  <div className="quotes">{foundPlanet.description}</div>
                  <div className="row mt-30 mb-30">
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src={foundPlanet.photo}
                        alt={foundPlanet.name}
                      />
                    </div>
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src={foundPlanet.photo}
                        alt={foundPlanet.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widgets">
              <div className="widget-wrap">
                <div className="single-sidebar-widget post-category-widget">
                  <h4 className="category-title">Details</h4>
                  <ul className="cat-list">
                    <li>
                      <div className="d-flex justify-content-between">
                        <p>Moons</p>
                        <p>{foundPlanet.moons}</p>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Distance from sun</p>
                        <p>{foundPlanet.distance_from_sun}</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Radius</p>
                        <p>{foundPlanet.radius}</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Diameter</p>
                        <p>{foundPlanet.diameter}</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Orbital Period</p>
                        <p>{foundPlanet.orbital_period}</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Mass</p>
                        <p>{foundPlanet.mass}</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex justify-content-between">
                        <p>Temperature</p>
                        <p>{foundPlanet.temperature}</p>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-sidebar-widget popular-post-widget">
                  <h4 className="popular-title">Fun facts</h4>
                  {/* <div className="popular-post-list">
                    {foundPlanet.funFacts.map(funFact => {
                      return (
                        <div className="single-post-list d-flex flex-row align-items-center">
                          <div className="thumb">
                            <img
                              className="img-fluid"
                              src="img/blog/pp1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="details">
                            <p>{funFact}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PlanetDetail;

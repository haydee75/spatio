import React, { Fragment } from "react";
import list_galaxies from "../list_galaxies.json";
import { Link } from "react-router-dom";

const GalaxieDetail = props => {
  const getGalaxie = id => {
    const theGalaxie = oneGalaxie => {
      return oneGalaxie.id === id;
    };
    return list_galaxies.find(theGalaxie);
  };

  const { params } = props.match;
  const foundGalaxie = getGalaxie(params.id, 10);

  let funFacts = foundGalaxie.fun_facts;

  return (
    <Fragment>
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">{foundGalaxie.name}</h1>
              <div className="link-nav">
                <span className="box">
                  <Link to="/">Home</Link>
                  <i className="lnr lnr-arrow-right" />
                  <Link to="/galaxies">Galaxies</Link>
                  <i className="lnr lnr-arrow-right" />
                  <Link to={`/galaxies/${foundGalaxie.id}`}>
                    {foundGalaxie.name}
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
                      src={foundGalaxie.banner_photo}
                      alt={foundGalaxie.name}
                    />
                  </div>
                </div>

                <div className="col-lg-9 col-md-9">
                  <h3 className="mt-20 mb-20">{foundGalaxie.name}</h3>
                  <p className="excert">{foundGalaxie.resume}</p>
                </div>
                <div className="col-lg-12">
                  <div className="quotes">{foundGalaxie.history}</div>
                  <div className="row mt-30 mb-30">
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src={foundGalaxie.post_photo1}
                        alt={foundGalaxie.name}
                      />
                    </div>
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src={foundGalaxie.post_photo2}
                        alt={foundGalaxie.name}
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
                        <p>Galaxie Type</p>
                        <p>{foundGalaxie.galaxy_type}</p>
                      </div>
                    </li>
                    <li>
                      <span className="d-flex justify-content-between">
                        <p>Diameter</p>
                        <p>{foundGalaxie.diameter}</p>
                      </span>
                    </li>
                    <li>
                      <span className="d-flex justify-content-between">
                        <p>Mass</p>
                        <p>{foundGalaxie.mass}</p>
                      </span>
                    </li>
                    <li>
                      <span className="d-flex justify-content-between">
                        <p>Constellation</p>
                        <p>{foundGalaxie.constellation}</p>
                      </span>
                    </li>
                    <li>
                      <span className="d-flex justify-content-between">
                        <p>Number of stars</p>
                        <p>{foundGalaxie.number_of_stars}</p>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="single-sidebar-widget popular-post-widget">
                  <h4 className="popular-title">Fun facts</h4>
                  <div className="popular-post-list">
                    {funFacts
                      ? funFacts.map((funFact, index) => {
                          return (
                            <div
                              className="single-post-list d-flex flex-row align-items-center"
                              key={index}
                            >
                              <div className="thumb">&#x2604;</div>
                              <div className="details">
                                <p>{funFact}</p>
                              </div>
                            </div>
                          );
                        })
                      : "No Fun fact"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default GalaxieDetail;

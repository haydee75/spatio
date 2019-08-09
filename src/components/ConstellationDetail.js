import React, { Fragment } from "react";
import list_constellations from "../list_constellations.json";
import { Link } from "react-router-dom";

const ConstellationDetail = props => {
  const getConstellation = id => {
    const theConstellation = oneConstellation => {
      return oneConstellation.id === id;
    };
    return list_constellations.find(theConstellation);
  };

  const { params } = props.match;
  const foundConstellation = getConstellation(params.id, 10);

  return (
    <Fragment>
      <section className="banner-area">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 banner-right">
              <h1 className="text-white">{foundConstellation.name}</h1>
              <div className="link-nav">
                <span className="box">
                  <Link to="/">Home</Link>
                  <i className="lnr lnr-arrow-right" />
                  <Link to="/constallations">Constellations</Link>
                  <i className="lnr lnr-arrow-right" />
                  <Link to={`/constallations/${foundConstellation.id}`}>
                    {foundConstellation.name}
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
                      src={foundConstellation.banner_photo}
                      alt={foundConstellation.name}
                    />
                  </div>
                </div>

                <div className="col-lg-9 col-md-9">
                  <h3 className="mt-20 mb-20">{foundConstellation.name}</h3>
                  <p className="excert">
                    {foundConstellation.name_and_meaning}
                  </p>
                </div>
                <div>
                  <iframe
                    title={foundConstellation.name}
                    width="560"
                    height="315"
                    src={foundConstellation.youtube}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="col-lg-12">
                  <div className="quotes">
                    {foundConstellation.history_of_observation}
                  </div>
                  <div className="row mt-30 mb-30">
                    <div className="col-12">
                      <img
                        className="img-fluid"
                        src={foundConstellation.post_photo2}
                        alt={foundConstellation.name}
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
                        <p>Number of stars</p>
                        <p>{foundConstellation.stars_with_planets}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ConstellationDetail;

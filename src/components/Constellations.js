import React, { Component } from "react";

class Constellations extends Component {
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
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <img src="img/cancer.png" className="img-fluid" alt="" />
                <div className="overlay" />
                <div className="top-text">
                  <p>Cancer</p>
                </div>
                <div className="text">
                  <div>
                    <p>
                      In mythology, Cancer was part of the Twelve Labors of
                      Hercules.
                    </p>
                  </div>
                  <a href="#" className="primary-btn">
                    View Details
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--160">
              <div className="single-blog-post">
                <img src="img/aries.png" className="img-fluid" alt="" />
                <div className="overlay" />
                <div className="top-text">
                  <p>Aries</p>
                </div>
                <div className="text">
                  <div>
                    <p>
                      Aries the Ram is the first astrological sign in the Zodiac
                      associated with the god Ares and masculinity.
                    </p>
                  </div>
                  <a href="#" className="primary-btn">
                    View Details
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt--260">
              <div className="single-blog-post">
                <img src="img/taurus.png" className="img-fluid" alt="" />
                <div className="overlay" />
                <div className="top-text">
                  <p>Taurus</p>
                </div>
                <div className="text">
                  <div>
                    <p>According to Greek myth, Taurus was the god Zeus</p>
                  </div>
                  <a href="#" className="primary-btn">
                    View Details
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Constellations;

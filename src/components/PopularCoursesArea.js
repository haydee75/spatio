import React, { Component } from "react";

class PopularCoursesArea extends Component {
  render() {
    return (
      <section className="popular-course-area section-gap">
        <div className="container-fluid">
          <div className="row justify-content-center section-title">
            <div className="col-lg-12">
              <h2>Planets</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="owl-carousel popuar-course-carusel">
            <div className="single-popular-course">
              <div className="thumb">
                <img
                  className="f-img img-fluid mx-auto"
                  src="img/popular-course/mercury.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <a href="#">
                  <h4>Mercury</h4>
                </a>
              </div>
            </div>

            <div className="single-popular-course">
              <div className="thumb">
                <img
                  className="f-img img-fluid mx-auto"
                  src="img/popular-course/venus.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <a href="#">
                  <h4>Venus</h4>
                </a>
              </div>
            </div>

            <div className="single-popular-course">
              <div className="thumb">
                <img
                  className="f-img img-fluid mx-auto"
                  src="img/popular-course/earth.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <a href="#">
                  <h4>Earth</h4>
                </a>
              </div>
            </div>
            <div className="single-popular-course">
              <div className="thumb">
                <img
                  className="f-img img-fluid mx-auto"
                  src="img/popular-course/mars.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <a href="#">
                  <h4>Mars</h4>
                </a>
              </div>
            </div>
            <div className="single-popular-course">
              <div className="thumb">
                <img
                  className="f-img img-fluid mx-auto"
                  src="img/popular-course/jupiter.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <a href="#">
                  <h4>Jupiter</h4>
                </a>
              </div>
            </div>
            <div className="single-popular-course">
              <div className="thumb">
                <img
                  className="f-img img-fluid mx-auto"
                  src="img/popular-course/saturn.jpg"
                  alt=""
                />
              </div>
              <div className="details">
                <a href="#">
                  <h4>Saturn</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PopularCoursesArea;

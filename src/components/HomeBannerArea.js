import React, { Component } from "react";

class HomeBannerArea extends Component {
  render() {
    return (
      <section className="home-banner-area">
        <div className="container">
          <div className="row justify-content-center fullscreen align-items-center">
            <div className="col-lg-5 col-md-8 home-banner-left">
              <h1 className="text-white">Learn more about Astronomy</h1>
              <p className="mx-auto text-white  mt-20 mb-40">
                Welcome to Spatio ! Enjoy the universe with June and her cat
                Titus. Learn more about astronomy and explore the planets of our
                solar system ...
              </p>
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
              <img className="img-fluid" src="img/header-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeBannerArea;

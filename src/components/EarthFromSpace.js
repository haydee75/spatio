import React, { Component } from "react";

class EarthFromSpace extends Component {
  render() {
    return (
      <section className="video-area section-gap-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title text-white">
                <h2 className="text-white">
                  Watch NASA videos <br />
                  in Live Action
                </h2>
                <p>
                  NASA's mission is to pioneer the future in space exploration,
                  scientific discovery and aeronautics research.
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-md-6 video-left">
              <div className="owl-carousel video-carousel">
                <div className="single-video">
                  <div className="video-part">
                    <img className="img-fluid" src="img/live.jpg" alt="" />
                    <div className="overlay" />
                    <a
                      className="popup-youtube play-btn"
                      href="https://www.youtube.com/watch?v=y-uYR6evUHA&feature=youtu.be"
                    >
                      <img
                        className="play-icon"
                        src="img/play-btn.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">
                    ISS Live - Official Stream
                  </h4>
                  <p className="text-white mb-20">
                    Direct from America's space program to YouTube, watch NASA
                    TV live streaming here to get the latest from our
                    exploration of the universe and learn how we discover our
                    home planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EarthFromSpace;

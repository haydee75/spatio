import React, { Component } from "react";

class VideoArea extends Component {
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
                      href="https://www.youtube.com/watch?v=21X5lGlDOfg"
                    >
                      <img
                        className="play-icon"
                        src="img/play-btn.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">
                    NASA Live - Official Stream
                  </h4>
                  <p className="text-white mb-20">
                    Direct from America's space program to YouTube, watch NASA
                    TV live streaming here to get the latest from our
                    exploration of the universe and learn how we discover our
                    home planet.
                  </p>
                </div>

                <div className="single-video">
                  <div className="video-part">
                    <img className="img-fluid" src="img/wego.jpg" alt="" />
                    <div className="overlay" />
                    <a
                      className="popup-youtube play-btn"
                      href="https://www.youtube.com/watch?time_continue=7&v=G9KQfnqukno"
                    >
                      <img
                        className="play-icon"
                        src="img/play-btn.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <h4 className="text-white mb-20 mt-30">We Go Together</h4>
                  <p className="text-white mb-20">
                    We are building a coalition of nations that can help us get
                    to the Moon quickly and sustainably. We have a bold vision
                    to go back to the Moon by 2024.
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

export default VideoArea;

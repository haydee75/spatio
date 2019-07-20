import React, { Component } from "react";

class SpaceFacts extends Component {
  render() {
    return (
      <section className="testimonials-area section-gap">
        <div className="container">
          <div className="testi-slider owl-carousel" data-slider-id="1">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <h2>Space Fact about Mars</h2>
                    <div className="mt-40 text">
                      <p>
                        Other than Earth, scientists believe that the only other
                        planet in the solar system that could be hospitable to
                        life is more than likely Mars. This is due to the 1986
                        discovery of a rock from Mars that is thought to contain
                        microscopic fossils.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/pluto-page-under-construction.png" alt="" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <h2>Space Fact about the Moon</h2>
                    <div className="mt-40 text">
                      <p>
                        The moon seems like it has more scars and craters than
                        Earth because it has less activity that affects its
                        surface than Earth. We know about the rings of Saturn
                        but there are other planets in our solar system that
                        have rings, including Jupiter, Uranus, and Neptune.
                        Their rings just aren’t as big and obvious.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/pluto-come-back-later.png" alt="" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <h2>Space Fact about Saturn and Jupiter</h2>
                    <div className="mt-40 text">
                      <p>
                        Lightning storms on Jupiter and Saturn turn methane into
                        carbon soot that falls and hardens into chunks of
                        graphite and then diamonds. So it rains diamonds on
                        Saturn and Jupiter and scientists think the largest of
                        these are about one centimeter in diameter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/pluto-page-not-found.png" alt="" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <h2>Space Fact about the Universe</h2>
                    <div className="mt-40 text">
                      <p>
                        Another mysterious discovery that scientists have made
                        is the fact that the universe is expanding at
                        exponential rates. They have developed a theory that
                        involves the existence of “dark energy” to explain why
                        the universe is expanding as it is.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/pluto-sign-up.png" alt="" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <h2>Space Fact about Dark Matter</h2>
                    <div className="mt-40 text">
                      <p>
                        Scientists believe that a majority of the universe is
                        made up of a mysterious element called “dark matter.”
                        They don’t know much about dark matter and they can’t
                        see it, but they have done mathematical calculations to
                        show that it exists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img src="img/pluto-no-comments.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SpaceFacts;

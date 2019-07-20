import React, { Component } from "react";

class FeatureArea extends Component {
  render() {
    return (
      <section className="feature-area">
        <div className="container-fluid">
          <div className="feature-inner row">
            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-book" />
                <div className="ml-20">
                  <h4>New Classes</h4>
                  <p>
                    In the history of modern astronomy, there is probably no one
                    greater leap forward.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex">
                <i className="ti-cup" />
                <div className="ml-20">
                  <h4>Top Courses</h4>
                  <p>
                    In the history of modern astronomy, there is probably no one
                    greater leap forward.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="feature-item d-flex border-right-0">
                <i className="ti-desktop" />
                <div className="ml-20">
                  <h4>Full E-Books</h4>
                  <p>
                    In the history of modern astronomy, there is probably no one
                    greater leap forward.
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

export default FeatureArea;

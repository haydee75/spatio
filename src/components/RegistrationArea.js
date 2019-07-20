import React, { Component } from "react";

class RegistrationArea extends Component {
  render() {
    return (
      <section className="registration-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-5">
              <div className="section-title text-left text-white">
                <h2 className="text-white">
                  Dont miss any cool Facts about Space
                </h2>
                <p>
                  As long as human beings have been looking into the night sky,
                  we have been wondering what is out there. Many cultures have
                  created stories, myths, and songs about space, imagining
                  creatures of all types from angry to friendly.
                </p>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-4 col-md-6">
              <div className="course-form-section">
                <h3 className="text-white">Space Fats</h3>
                <p className="text-white">It is time for learning</p>
                <form
                  className="course-form-area contact-page-form course-form text-right"
                  id="myForm"
                  action="mail.html"
                  method="post"
                >
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Age"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="btn text-uppercase">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RegistrationArea;

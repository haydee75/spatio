import React, { Component, Fragment } from "react";
import moment from "moment";
import DateInput from "./DateInput";
import Photo from "./Photo.js";
import momentRandom from "moment-random";

class RandomPicture extends Component {
  state = {
    date: "",
    photo: ""
  };

  formatDate = moment => {
    let year = moment.year();
    let month = moment.month() + 1;
    let day = moment.date();
    return `${year}-${month}-${day}`;
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=qqnfzapP8wJwYLdVjEE7PaFwze2dg2Mdx0ss3eH3`
    )
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  getPhoto = date => {
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=qqnfzapP8wJwYLdVjEE7PaFwze2dg2Mdx0ss3eH3`
    )
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  handleClick = () => {
    let randomDate = momentRandom(moment(), moment("06-16-1995", "MM-DD-YYYY"));
    this.setState({ date: randomDate });
    this.getPhoto(this.formatDate(randomDate));
  };

  render() {
    return (
      <Fragment>
        <div className="randomPic">
          <h2>Picture of the day</h2>
          <br />
          <Photo photo={this.state.photo} />
          <DateInput
            changeDate={this.changeDate}
            handleClick={this.handleClick}
          />
        </div>
      </Fragment>
    );
  }
}

export default RandomPicture;

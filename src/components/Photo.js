import React, { Fragment } from "react";
const Photo = props => (
  <Fragment>
    <img
      id="myImg"
      className="nasaPhoto"
      src={props.photo.url}
      alt={props.photo.title}
    />
    <br />
    <h4>{props.photo.title}</h4>
    <br />
    <p>{props.photo.explanation}</p>
  </Fragment>
);
export default Photo;

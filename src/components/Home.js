import React, { Component, Fragment } from "react";
import HeaderHome from "./HeaderHome";
import PlanetsArea from "./PlanetsArea";
import VideoArea from "./VideoArea";
import GalaxiesArea from "./GalaxiesArea";
import SpaceFacts from "./SpaceFacts";
import ConstellationsArea from "./ConstellationsArea";
import RegistrationArea from "./RegistrationArea";
import RandomPicture from "./RandomPicture";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HeaderHome />
        <PlanetsArea />
        <VideoArea />
        <RandomPicture />
        <GalaxiesArea />
        <SpaceFacts />
        <RegistrationArea />
        <ConstellationsArea />
      </Fragment>
    );
  }
}

export default Home;

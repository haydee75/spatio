import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import HomeBannerArea from "./components/HomeBannerArea";
import PopularCoursesArea from "./components/PopularCoursesArea";
import VideoArea from "./components/VideoArea";
import Galaxies from "./components/Galaxies";
import SpaceFacts from "./components/SpaceFacts";
import Constellations from "./components/Constellations";
import RegistrationArea from "./components/RegistrationArea";
import RandomPicture from "./components/RandomPicture";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeBannerArea />
        <PopularCoursesArea />
        <VideoArea />
        <RandomPicture />
        <Galaxies />
        <SpaceFacts />
        <RegistrationArea />
        <Constellations />
        <Footer />
      </div>
    );
  }
}

export default App;

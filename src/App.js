import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { planets as Planets } from "./components/Planets";
import PlanetDetail from "./components/PlanetDetail";
import { galaxies as Galaxies } from "./components/Galaxies";
import GalaxieDetail from "./components/GalaxieDetail";
import { constellations as Constellations } from "./components/Constellations";
import ConstellationDetail from "./components/ConstellationDetail";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Planets" component={Planets} />
          <Route exact path="/Planets/:id" component={PlanetDetail} />
          <Route exact path="/Galaxies" component={Galaxies} />
          <Route exact path="/Galaxies/:id" component={GalaxieDetail} />
          <Route exact path="/Constellations" component={Constellations} />
          <Route
            exact
            path="/Constellations/:id"
            component={ConstellationDetail}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

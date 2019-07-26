import React, { Fragment } from "react";
import HeaderPlanets from "./HeaderPlanets";
import SectionPlanets from "./SectionPlanets";

export const planets = () => {
  return (
    <Fragment>
      <HeaderPlanets />
      <SectionPlanets />
    </Fragment>
  );
};

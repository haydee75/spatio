import React, { Fragment } from "react";
import HeaderConstellations from "./HeaderConstellations";
import SectionConstellations from "./SectionConstellations";

export const constellations = () => {
  return (
    <Fragment>
      <HeaderConstellations />
      <SectionConstellations />
    </Fragment>
  );
};

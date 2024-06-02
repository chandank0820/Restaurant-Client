import React, { useEffect, useState } from "react";
import Home from "./common/Home";
import About from "./about/About";
import Meals from "./menu/SpecialMeals";
import Review from "./reviews/Review";
import Connect from "./connect/Connect";
import Popular from "./menu/Popular";

const Homepage = () => {
  return (
    <div>
      <Home />
      <Popular />
      <Meals />
      <About />
      <Review />
      <Connect />
    </div>
  );
};

export default Homepage;

import React from "react";
import Home from "./partials/home";
import About from "./partials/About";
import Navbar from "../../components/navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default LandingPage;

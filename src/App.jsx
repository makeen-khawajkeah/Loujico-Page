// src/App.jsx

import "./i18n";
import React from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import {
  DevelopmentConsulting,
  FoundingBusiness,
  ManagementConsulting,
  ProjectConsulting,
} from "./data";
import Goals from "./components/Goals";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Portfolio />
      <Goals />
      <WhyUs />
      <Footer />
    </main>
  );
};

export default App;

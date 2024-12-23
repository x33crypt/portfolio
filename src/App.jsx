import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

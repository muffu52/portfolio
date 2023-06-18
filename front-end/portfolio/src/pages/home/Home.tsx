import React from "react";
import Navbar from "../../components/Navbar/NavBar";
import Body from "../../components/Body";
import Footer from "../../components/Footer/Footer";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Body id="infoSection" />
      </div>
      <div>
        <Education id="educationSection" />
      </div>
      <div>
        <Experience id="experienceSection" />
      </div>
      <div>
        <Projects id="projectsSection" />
      </div>
      <div>
        <Skills id="skillsSection" />
      </div>

      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import About from "../components/About";
import { projects } from "../constants/constants";

export const getStaticProps = async () => {
  return {
    props: {
      projectList: projects,
    },
  };
};

const Home = ({ projectList }) => {
  return (
    <>
      <Hero />
      <Projects projectList={projectList} />
      <Technologies />
      <Timeline />
      <About />
    </>
  );
};

export default Home;

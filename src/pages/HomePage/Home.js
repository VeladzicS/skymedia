import React from "react";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";
import { InfoSection, Services, Projects } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services {...homeObjThree} />
      <Projects {...homeObjFour} />
    </>
  );
};

export default Home;

import React from "react";
import { aboutObjOne, aboutObjTwo } from "./Data";
import { BigInfoSection, SubHeading, CallToActionSec } from "../../components";

const Home = () => {
  return (
    <>
      <SubHeading {...aboutObjOne} />
      <BigInfoSection {...aboutObjOne} />
      <CallToActionSec {...aboutObjTwo} />
    </>
  );
};

export default Home;

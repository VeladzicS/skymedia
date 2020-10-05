import React from "react";
import { portObjOne, portObjTwo } from "./Data";
import { SubHeading, SingleProject } from "../../components";
const Portolio = () => {
  return (
    <>
      <SubHeading {...portObjOne} />
      <SingleProject {...portObjTwo} />
    </>
  );
};

export default Portolio;

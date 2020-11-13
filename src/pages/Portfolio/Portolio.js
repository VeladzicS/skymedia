import React from "react";
import {
  portObjOne,
  portObjTwo,
  portObjThree,
  portObjFour,
  portObjFive,
} from "./Data";
import { SubHeading, SingleProject } from "../../components";
const Portolio = () => {
  return (
    <>
      <SubHeading {...portObjOne} />
      <SingleProject {...portObjTwo} />
      <SingleProject {...portObjThree} />
      <SingleProject {...portObjFour} />
      <SingleProject {...portObjFive} />
    </>
  );
};

export default Portolio;

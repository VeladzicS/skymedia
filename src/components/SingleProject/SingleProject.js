import React from "react";
import { ContainerInner } from "../../globalStyles";
import {
  SingleProjectBox,
  SingleProjectLeft,
  SingleProjectRight,
} from "./SingleProject.elements";

const SingleProject = ({ img }) => {
  return (
    <ContainerInner>
      <SingleProjectBox>
        <SingleProjectLeft>
          <img src={img} alt="Logo" />
        </SingleProjectLeft>
        <SingleProjectRight></SingleProjectRight>
      </SingleProjectBox>
    </ContainerInner>
  );
};

export default SingleProject;

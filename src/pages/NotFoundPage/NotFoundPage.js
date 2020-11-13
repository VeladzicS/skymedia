import React from "react";
import { Fragment } from "react";
import { notFoundObjOne } from "./Data";
import { SubHeading, NotFoundComp } from "../../components";
const NotFoundPage = () => {
  return (
    <Fragment>
      <SubHeading {...notFoundObjOne} />
      <NotFoundComp {...notFoundObjOne} />
    </Fragment>
  );
};

export default NotFoundPage;

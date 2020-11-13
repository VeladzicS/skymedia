import React from "react";
import { contactObjOne } from "./Data";
import { SubHeading, ContactComp, GoogleMap } from "../../components";
const Contact = () => {
  return (
    <>
      <SubHeading {...contactObjOne} />
      <ContactComp {...contactObjOne} />
      <GoogleMap />
    </>
  );
};

export default Contact;

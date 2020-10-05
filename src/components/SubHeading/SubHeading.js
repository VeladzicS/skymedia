import React from "react";
import { SubHeadingContainer } from "./SubHeading.elements";
import {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingSubTitle,
  Underline,
} from "../../globalStyles";

const SubHeading = ({
  whiteTitle,
  goldTitle,
  goldUnderline,
  topTitle,
  pageTitle,
}) => {
  return (
    <SubHeadingContainer>
      <SectionHeading>
        <SectionHeadingSubTitle goldTitle={goldTitle}>
          {topTitle}
        </SectionHeadingSubTitle>
        <SectionHeadingTitle whiteTitle={whiteTitle}>
          {pageTitle}
        </SectionHeadingTitle>
        <Underline goldUnderline={goldUnderline} />
      </SectionHeading>
    </SubHeadingContainer>
  );
};

export default SubHeading;

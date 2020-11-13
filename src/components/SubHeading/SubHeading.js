import React from "react";
import { SubHeadingContainer } from "./SubHeading.elements";
import translate from "../../providers/i18n/translate";
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
          {translate(topTitle)}
        </SectionHeadingSubTitle>
        <SectionHeadingTitle whiteTitle={whiteTitle}>
          {translate(pageTitle)}
        </SectionHeadingTitle>
        <Underline goldUnderline={goldUnderline} />
      </SectionHeading>
    </SubHeadingContainer>
  );
};

export default SubHeading;

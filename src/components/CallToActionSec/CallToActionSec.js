import React from "react";
import {
  CallContainer,
  SectionDescription,
  SectionText,
} from "./CallToActionSec.elements";
import {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingSubTitle,
} from "../../globalStyles";

import { YouTubeShare } from "../index";

const CallToActionSec = ({
  goldTitle,
  whiteTitle,
  sectionText,
  sectionTextTwo,
}) => {
  return (
    <CallContainer>
      <SectionHeading>
        <SectionHeadingSubTitle goldTitle={goldTitle}>
          Naš Način Rada
        </SectionHeadingSubTitle>
        <SectionHeadingTitle whiteTitle={whiteTitle}>
          Upoznajte Nas
        </SectionHeadingTitle>
      </SectionHeading>

      <SectionDescription>
        <SectionText>{sectionText}</SectionText>
        <SectionText>{sectionTextTwo}</SectionText>
        <YouTubeShare src={"https://www.youtube.com/embed/_8gHHBlbziw"} />
      </SectionDescription>
    </CallContainer>
  );
};

export default CallToActionSec;

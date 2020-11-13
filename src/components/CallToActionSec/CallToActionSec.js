import React, { useEffect } from "react";
import translate from "../../providers/i18n/translate";
import Aos from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <CallContainer>
      <SectionHeading data-aos="fade-up">
        <SectionHeadingSubTitle goldTitle={goldTitle}>
          {translate("aboutPage.ctaTopline")}
        </SectionHeadingSubTitle>
        <SectionHeadingTitle whiteTitle={whiteTitle}>
          {translate("aboutPage.ctaTitle")}
        </SectionHeadingTitle>
      </SectionHeading>

      <SectionDescription data-aos="fade-up">
        <SectionText>{translate(sectionText)}</SectionText>
        <SectionText>{translate(sectionTextTwo)}</SectionText>
        <YouTubeShare
          primary={true}
          src={"https://www.youtube.com/embed/_8gHHBlbziw"}
        />
      </SectionDescription>
    </CallContainer>
  );
};

export default CallToActionSec;

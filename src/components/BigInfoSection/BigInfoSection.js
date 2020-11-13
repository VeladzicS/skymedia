import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import translate from "../../providers/i18n/translate";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  BigInfoSectionCont,
  SectionDescription,
  SectionText,
  HeroWrapper,
} from "./BigInfoSection.elements";

const BigInfoSection = ({ img, sectionText, sectionTextTwo, imgStart }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <BigInfoSectionCont imgStart={imgStart}>
      <HeroWrapper data-aos="fade-up">
        <Player
          autoplay
          loop
          src={img}
          style={{
            height: "100%",
            width: "100%",
            border: 0,
            verticalAlign: "middle",
            display: "inline-block",
            maxHeight: "650px",
            paddingRight: 0,
          }}
        />
      </HeroWrapper>

      <SectionDescription data-aos="fade-up">
        <SectionText>{translate(sectionText)}</SectionText>
        <SectionText>{translate(sectionTextTwo)}</SectionText>
      </SectionDescription>
    </BigInfoSectionCont>
  );
};

export default BigInfoSection;

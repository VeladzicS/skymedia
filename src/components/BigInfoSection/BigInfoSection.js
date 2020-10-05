import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  BigInfoSectionCont,
  SectionDescription,
  SectionText,
  HeroWrapper,
} from "./BigInfoSection.elements";

const BigInfoSection = ({ img, sectionText, sectionTextTwo }) => {
  return (
    <BigInfoSectionCont>
      <HeroWrapper>
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

      <SectionDescription>
        <SectionText>{sectionText}</SectionText>
        <SectionText>{sectionTextTwo}</SectionText>
      </SectionDescription>
    </BigInfoSectionCont>
  );
};

export default BigInfoSection;

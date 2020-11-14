import React, { useEffect, useState } from "react";
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
import aboutImageMobileTwo from "../../assets/images/mobile/mobiletwo.jpg";

const BigInfoSection = ({ img, sectionText, sectionTextTwo, imgStart }) => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <BigInfoSectionCont imgStart={imgStart}>
      <HeroWrapper data-aos="fade-up">
        {size > 960 ? (
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
        ) : (
          <img
            src={aboutImageMobileTwo}
            alt="Picture of robot and human together"
            data-aos="fade-up"
          />
        )}
      </HeroWrapper>

      <SectionDescription data-aos="fade-up">
        <SectionText>{translate(sectionText)}</SectionText>
        <SectionText>{translate(sectionTextTwo)}</SectionText>
      </SectionDescription>
    </BigInfoSectionCont>
  );
};

export default BigInfoSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Button } from "../../globalStyles";
import { InfoBoxes } from "../index";
import translate from "../../providers/i18n/translate";
import { YouTubeShare } from "../index";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  InfoSec,
  InfoSecBcg,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  ButtonContainer,
} from "./InfoSection.elements";

const InfoSection = ({
  primary,
  buttonFontBig,
  buttonBig,
  imgStart,
  lightBg,
  lightTopLine,
  lightTextDesc,
  lightText,
  buttonLabel,
  desc,
  headline,
  topLine,
  img,
  small,
  start,
  noMobile,
  bigText,
  bigSubText,
  relative,
  bigPadding,
  infoBoxDisplay,
  noDisplay,
  noShowReel,
}) => {
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
    <>
      <InfoSecBcg />
      <InfoSec lightBg={lightBg} relative={relative} bigPadding={bigPadding}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn small={small}>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine} data-aos="fade-up">
                  {translate(topLine)}
                </TopLine>
                <Heading
                  lightText={lightText}
                  bigText={bigText}
                  data-aos="fade-up"
                >
                  {translate(headline)}
                </Heading>
                <Subtitle
                  lightTextDesc={lightTextDesc}
                  bigSubText={bigSubText}
                  noDisplay={noDisplay}
                  data-aos="fade-up"
                >
                  {translate(desc)}
                </Subtitle>
                <ButtonContainer>
                  <Link to="/about">
                    <Button
                      buttonBig={buttonBig}
                      buttonFontBig={buttonFontBig}
                      primary={primary}
                      data-aos="fade-up"
                    >
                      {translate(buttonLabel)}
                    </Button>
                  </Link>
                  <YouTubeShare
                    primary={true}
                    noShowReel={noShowReel}
                    src={"https://www.youtube.com/embed/sJyyzwHO4u4"}
                  />
                </ButtonContainer>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start} noMobile={noMobile}>
                <Player
                  autoplay
                  loop
                  src={img}
                  style={{
                    height: size > 1459 ? "100%" : "80%",
                    width: size > 1459 ? "100%" : "80%",
                    border: 0,
                    verticalAlign: "middle",
                    display: "inline-block",
                    maxHeight: "650px",
                    paddingRight: 0,
                  }}
                />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
        <InfoBoxes infoBoxDisplay={infoBoxDisplay} />
      </InfoSec>
    </>
  );
};

export default InfoSection;

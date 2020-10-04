import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Button } from "../../globalStyles";
import { InfoBoxes } from "../index";
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
}) => {
  return (
    <>
      <InfoSecBcg />
      <InfoSec lightBg={lightBg} relative={relative} bigPadding={bigPadding}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn small={small}>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText} bigText={bigText}>
                  {headline}
                </Heading>
                <Subtitle lightTextDesc={lightTextDesc} bigSubText={bigSubText}>
                  {desc}
                </Subtitle>

                <Link to="/showreel">
                  <Button
                    buttonBig={buttonBig}
                    buttonFontBig={buttonFontBig}
                    primary={primary}
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start} noMobile={noMobile}>
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

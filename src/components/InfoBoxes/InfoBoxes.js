import React, { useEffect } from "react";
import translate from "../../providers/i18n/translate";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  InfoBoxContainer,
  InfoBoxItem,
  InfoBoxContentDiv,
  InfoBoxTitle,
  InfoBoxText,
  InfoBoxIcon,
  SuccessIcon,
  ThumbsIcon,
  TimerIcon,
} from "./InfoBoxes.elements";
const InfoBoxes = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <InfoBoxContainer infoBoxDisplay={props.infoBoxDisplay}>
      <InfoBoxItem data-aos="fade-left">
        <InfoBoxIcon>
          <SuccessIcon />
        </InfoBoxIcon>
        <InfoBoxContentDiv>
          <InfoBoxTitle>{translate("boxOne.titleOne")}</InfoBoxTitle>
          <InfoBoxText>{translate("boxOne.textOne")}</InfoBoxText>
        </InfoBoxContentDiv>
      </InfoBoxItem>
      <InfoBoxItem className="infoBoxActive" data-aos="fade-up">
        <InfoBoxIcon>
          <TimerIcon />
        </InfoBoxIcon>
        <InfoBoxContentDiv>
          <InfoBoxTitle>{translate("boxTwo.titleTwo")}</InfoBoxTitle>
          <InfoBoxText>{translate("boxTwo.textTwo")}</InfoBoxText>
        </InfoBoxContentDiv>
      </InfoBoxItem>
      <InfoBoxItem data-aos="fade-right">
        <InfoBoxIcon>
          <ThumbsIcon />
        </InfoBoxIcon>
        <InfoBoxContentDiv>
          <InfoBoxTitle>{translate("boxThree.titleThree")}</InfoBoxTitle>
          <InfoBoxText>{translate("boxThree.textThree")}</InfoBoxText>
        </InfoBoxContentDiv>
      </InfoBoxItem>
    </InfoBoxContainer>
  );
};

export default InfoBoxes;

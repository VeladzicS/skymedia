import React from "react";
import successIcon from "../../assets/images/icons/1.png";
import effIcon from "../../assets/images/icons/2.png";
import recoIcon from "../../assets/images/icons/3.png";
import {
  InfoBoxContainer,
  InfoBoxItem,
  InfoBoxContentDiv,
  InfoBoxTitle,
  InfoBoxText,
  InfoBoxIcon,
} from "./InfoBoxes.elements";
const InfoBoxes = (props) => {
  return (
    <InfoBoxContainer infoBoxDisplay={props.infoBoxDisplay}>
      <InfoBoxItem>
        <InfoBoxIcon>
          <img src={successIcon} alt="Logo" />
        </InfoBoxIcon>
        <InfoBoxContentDiv>
          <InfoBoxTitle>100% Uspješnost</InfoBoxTitle>
          <InfoBoxText>
            Ne prihvatamo projekt ako nismo sigurni da ga možemo na vrijeme u
            potpunosti završiti.
          </InfoBoxText>
        </InfoBoxContentDiv>
      </InfoBoxItem>
      <InfoBoxItem>
        <InfoBoxIcon>
          <img src={effIcon} alt="Logo" />
        </InfoBoxIcon>
        <InfoBoxContentDiv>
          <InfoBoxTitle>Efikasnost</InfoBoxTitle>
          <InfoBoxText>
            Apsolutno smo fokusirani na svaki novi projekt, te radimo sa
            strašću, jer stvarno volimo ono što radimo.
          </InfoBoxText>
        </InfoBoxContentDiv>
      </InfoBoxItem>
      <InfoBoxItem>
        <InfoBoxIcon>
          <img src={recoIcon} alt="Logo" />
        </InfoBoxIcon>
        <InfoBoxContentDiv>
          <InfoBoxTitle>Preporuke</InfoBoxTitle>
          <InfoBoxText>
            Naši projekti govore sami za sebe, ali ako to nije dovoljno možete
            pogledati šta klijenti kažu za nas.
          </InfoBoxText>
        </InfoBoxContentDiv>
      </InfoBoxItem>
    </InfoBoxContainer>
  );
};

export default InfoBoxes;

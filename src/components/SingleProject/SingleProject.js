import React, { useEffect } from "react";
import { ContainerInner } from "../../globalStyles";
import translate from "../../providers/i18n/translate";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  SingleProjectBox,
  SingleProjectLeft,
  SingleProjectRight,
  SingleProjectRightTitle,
  SingleProjectRightSubTitle,
  SingleProjectRightDescContainer,
  SingleProjectRightTextTitle,
  SingleProjectRightText,
  SingleProjectRightLinkContainer,
  SingleProjectRightLinkTitle,
  SingleProjectRightLink,
} from "./SingleProject.elements";

const SingleProject = ({
  img,
  goldColor,
  goldLink,
  imgStart,
  title,
  subTitle,
  opis,
  link,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <ContainerInner>
      <SingleProjectBox imgStart={imgStart}>
        <SingleProjectLeft data-aos="fade-up">
          <img src={img} alt="Logo" />
        </SingleProjectLeft>
        <SingleProjectRight data-aos="fade-up">
          <SingleProjectRightSubTitle goldColor={goldColor}>
            {translate(subTitle)}
          </SingleProjectRightSubTitle>
          <SingleProjectRightTitle>{translate(title)}</SingleProjectRightTitle>
          <SingleProjectRightDescContainer>
            <SingleProjectRightTextTitle>
              {translate("projectsPage.opis")}
            </SingleProjectRightTextTitle>
            <SingleProjectRightText>{translate(opis)}</SingleProjectRightText>
          </SingleProjectRightDescContainer>
          <SingleProjectRightLinkContainer>
            <SingleProjectRightLinkTitle>Link:</SingleProjectRightLinkTitle>
            <SingleProjectRightLink
              goldLink={goldLink}
              href={link}
              target="_blank"
            >
              {link}
            </SingleProjectRightLink>
          </SingleProjectRightLinkContainer>
        </SingleProjectRight>
      </SingleProjectBox>
    </ContainerInner>
  );
};

export default SingleProject;

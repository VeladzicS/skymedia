import styled from "styled-components";
import backImage from "../../assets/images/home/one.jpg";

import { ThemeColors } from "../../theme";

const { blue, grey, oldBlue } = ThemeColors;

export const InfoSec = styled.div`
  padding: ${({ bigPadding }) =>
    bigPadding ? "200px 0 150px 0 " : "50px 0 100px 0"};
  background: ${({ lightBg }) => (lightBg ? "#f8f9fa" : "")};
  position: ${({ relative }) => (relative ? "relative" : "static")};

  @media screen and (max-width: 1345px) {
    padding: ${({ bigPadding }) =>
      bigPadding ? "150px 0 50px 0 " : "50px 0 100px 0"};
  }

  @media screen and (max-width: 960px) {
    padding: ${({ bigPadding }) => (bigPadding ? "100px 0 50px 0 " : "25px 0")};
  }
  @media screen and (max-width: 620px) {
    padding: ${({ bigPadding }) => (bigPadding ? "50px 0 " : "25px 0")};
  }
`;
export const InfoSecBcg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100vw;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)),
    url(${backImage}) no-repeat;
  background-size: cover;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap-reverse;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: ${({ small }) => (small ? "50%" : "50%")};
  flex-basis: ${({ small }) => (small ? "50%" : "50%")};

  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? blue : "#b69d74;")};
  font-size: 2.5rem;
  line-height: 20px;
  letter-spacing: 1.4px;
  margin-bottom: 15px;

  @media screen and (max-width: 1350px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 520px) {
    font-size: 1.8rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: ${({ bigText }) => (bigText ? "6rem" : "4rem")};
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? grey : oldBlue)};

  @media screen and (max-width: 1350px) {
    font-size: ${({ bigText }) => (bigText ? "4.5rem" : "3rem")};
  }

  @media screen and (max-width: 620px) {
    font-size: ${({ bigText }) => (bigText ? "3.5rem" : "2.5rem")};
  }
  @media screen and (max-width: 520px) {
    font-size: ${({ bigText }) => (bigText ? "3rem" : "2.5rem")};
  }
`;

export const Subtitle = styled.p`
  max-width: 640px;
  margin-bottom: 35px;
  font-size: ${({ bigSubText }) => (bigSubText ? "2.2rem" : "1.7rem")};
  color: ${({ lightTextDesc }) => (lightTextDesc ? grey : "#000")};
  text-align: left;
  font-family: "Playfair Display", serif;
  @media screen and (max-width: 1350px) {
    font-size: ${({ bigSubText }) => (bigSubText ? "2rem" : "1.7rem")};
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    display: ${({ noDisplay }) => (noDisplay ? "none" : "block")};
  }

  @media screen and (max-width: 620px) {
    font-size: ${({ bigSubText }) => (bigSubText ? "1.8rem" : "1.5rem")};
  }

  @media screen and (max-width: 520px) {
    font-size: ${({ bigSubText }) => (bigSubText ? "1.7rem" : "1.5rem")};
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};

  @media screen and (max-width: 960px) {
    display: ${({ noMobile }) => (noMobile ? "none" : "block")};
    text-align: center;
  }
`;

/* export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 300px;
`;
 */

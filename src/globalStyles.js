import styled, { createGlobalStyle } from "styled-components";
import { ThemeColors } from "./theme";
import {
  FaEnvelope,
  FaPhoneSquare,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const { blue, grey, blueHover } = ThemeColors;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
  }  

  html {
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
   
   
    @media only screen and (max-width:$bp-huge) {
        font-size: 57%;
    }
    @media only screen and (max-width:$bp-large) {
        font-size: 53%;
    }
    @media only screen and (max-width:$bp-small-3) {
        font-size: 47%;
    }


}

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: #000;
 
 
}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;

  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const ContainerInner = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1600px;
  padding-right: 50px;
  padding-left: 50px;
  margin: 10rem auto;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? blue : "#1f2839")};
  white-space: nowrap;
  padding: ${({ buttonBig }) => (buttonBig ? "14px 24px" : "10px 20px")};
  color: #fff;
  font-size: ${({ buttonFontBig }) => (buttonFontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    background: ${({ primary }) => (primary ? blueHover : "#b69d74")};
    transform: scale(1.01);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    max-width: 35rem;
  }

  @media screen and (max-width: 620px) {
    font-size: ${({ buttonFontBig }) => (buttonFontBig ? "19px" : "16px")};
  }
`;

export const AltButton = styled.button`
  display: ${({ noShowReel }) => (noShowReel ? "none" : "inline-block")};
  border-radius: 4px;
  font-weight: bold;
  background: transparent;
  white-space: nowrap;
  padding: ${({ buttonBig }) => (buttonBig ? "14px 28px" : "10px 20px")};
  color: ${grey};
  font-size: ${({ buttonFontBig }) => (buttonFontBig ? "22px" : "16px")};
  outline: none;
  border: 2px solid ${blue};
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  text-align: center;
  padding: 0 1rem;
`;

export const SectionHeadingTitle = styled.h2`
  font-size: 3.5rem;
  color: ${({ whiteTitle }) => (whiteTitle ? grey : "#192236")};
  margin: 1rem 0;
  @media screen and (max-width: 620px) {
    font-size: 3rem;
  }
`;
export const SectionHeadingSubTitle = styled.h5`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ goldTitle }) => (goldTitle ? blue : "#192236")};
`;
export const Underline = styled.div`
  width: 10rem;
  height: 0.3rem;
  background: ${({ goldUnderline }) => (goldUnderline ? blue : "#192236")};
  margin: 0.5rem auto;
  transition: all 0.5s linear;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: -2rem;
  left: 0;
  color: crimson;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Mail = styled(FaEnvelope)`
  color: ${grey};
  font-size: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
  @media screen and (max-width: 620px) {
    margin: 0 1rem;
  }
`;
export const Phone = styled(FaPhoneSquare)`
  color: ${grey};
  font-size: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
  @media screen and (max-width: 620px) {
    margin: 0 1rem;
  }
`;
export const Facebook = styled(FaFacebook)`
  color: ${grey};
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
`;
export const Instagram = styled(FaInstagram)`
  color: ${grey};
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
`;
export const Youtube = styled(FaYoutube)`
  color: ${grey};
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
`;

export const ArrowRight = styled(FaArrowRight)`
  font-size: 2rem;
  margin: auto 1rem;
`;

export default GlobalStyle;

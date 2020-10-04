import styled, { createGlobalStyle } from "styled-components";
import {
  FaEnvelope,
  FaPhoneSquare,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

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
    color: #0000;
 
 
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

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#b69d74" : "#1f2839")};
  white-space: nowrap;
  padding: ${({ buttonBig }) => (buttonBig ? "14px 24px" : "10px 20px")};
  color: #fff;
  font-size: ${({ buttonFontBig }) => (buttonFontBig ? "22px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#968568" : "#b69d74")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 620px) {
    font-size: ${({ buttonFontBig }) => (buttonFontBig ? "19px" : "16px")};
  }
`;

export const AltButton = styled.button`
  border-radius: 4px;
  font-weight: bold;
  background: transparent;
  white-space: nowrap;
  padding: ${({ buttonBig }) => (buttonBig ? "14px 28px" : "10px 20px")};
  color: #b69d74;
  font-size: ${({ buttonFontBig }) => (buttonFontBig ? "22px" : "16px")};
  outline: none;
  border: 2px solid #b69d74;
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
`;

export const SectionHeadingTitle = styled.h2`
  font-size: 3.5rem;
  color: ${({ whiteTitle }) => (whiteTitle ? "#fff" : "#192236")};
  margin: 1rem 0;
`;
export const SectionHeadingSubTitle = styled.h5`
  font-size: 2rem;
  font-weight: 300;
  color: ${({ goldTitle }) => (goldTitle ? "#b69d74" : "#192236")};
`;

export const Mail = styled(FaEnvelope)`
  color: #b69d74;
  font-size: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgba(182, 157, 116, 0.6);
  }
  @media screen and (max-width: 620px) {
    margin: 0 1rem;
  }
`;
export const Phone = styled(FaPhoneSquare)`
  color: #b69d74;
  font-size: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgba(182, 157, 116, 0.6);
  }
  @media screen and (max-width: 620px) {
    margin: 0 1rem;
  }
`;
export const Facebook = styled(FaFacebook)`
  color: #b69d74;
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgba(182, 157, 116, 0.6);
  }
`;
export const Instagram = styled(FaInstagram)`
  color: #b69d74;
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgba(182, 157, 116, 0.6);
  }
`;
export const Youtube = styled(FaYoutube)`
  color: #b69d74;
  font-size: 2rem;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: rgba(182, 157, 116, 0.6);
  }
`;

export const ArrowRight = styled(FaArrowRight)`
  font-size: 2rem;
  margin: auto 1rem;
`;

export default GlobalStyle;

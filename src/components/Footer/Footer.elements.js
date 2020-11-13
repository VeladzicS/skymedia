import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeColors } from "../../theme";

const { blue } = ThemeColors;

export const FooterContainer = styled.div`
  background-color: #1f2839;
  padding: 4rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterLogo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  & img {
    width: 200px;
    height: auto;
  }
`;

export const FooterSubText = styled.h5`
  margin-bottom: 24px;
  font-size: 1.8rem;
  font-weight: 400;

  @media screen and (max-width: 620px) {
    font-size: 1.6rem;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;

  padding: 2rem 0;
  border-top: 1px solid #fff;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }

  @media screen and (max-width: 1400px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 850px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 666px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 300px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1400px) {
    width: 200px;
  }

  @media screen and (max-width: 770px) {
    width: 185px;
  }

  @media screen and (max-width: 666px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: ${blue};
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${blue};
    transition: 0.3 ease-in-out;
  }
`;

export const FooterNormalLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${blue};
    transition: 0.3 ease-in-out;
  }
`;

export const BottomBar = styled.div`
  background: #192236;
  height: 65px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WebsiteRights = styled.p`
  font-size: 12px;
  color: #fff;
  margin: 0.5rem;
`;

export const SocialItem = styled.a`
  text-decoration: none;
`;

export const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

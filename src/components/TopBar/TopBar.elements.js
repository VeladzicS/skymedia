import styled from "styled-components";
import { ThemeColors } from "../../theme";

const { blue } = ThemeColors;

export const TopBarContainer = styled.div`
  background: #192236;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;

  @media screen and (max-width: 1800px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 620px) {
    padding: 0 1rem;
  }
`;

export const TopBarContacts = styled.div`
  font-size: 14px;
`;
export const SocialItems = styled.div`
  font-size: 14px;
`;
export const SocialItem = styled.a`
  text-decoration: none;
`;

export const ContactBar = styled.div`
  display: flex;
  align-items: center;
`;

export const MailTextLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const MailText = styled.span`
  font-size: 1.4rem;
  color: #fff;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;
export const PhoneTextLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

export const PhoneText = styled.span`
  font-size: 1.4rem;
  color: #fff;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${blue};
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

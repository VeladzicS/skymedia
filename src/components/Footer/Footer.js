import React from "react";
import { AltButton } from "../../globalStyles";
import { Facebook, Instagram, Youtube } from "../../globalStyles";
import skyLogo from "../../assets/images/logo/logoLight.png";
import {
  FooterContainer,
  FooterContact,
  FooterSubText,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  BottomBar,
  WebsiteRights,
  FooterLogo,
  SocialItem,
  SocialIconsWrapper,
} from "./Footer.elements";

const Footer = (buttonBig) => {
  return (
    <FooterContainer>
      <FooterContact>
        <FooterLogo>
          <img src={skyLogo} alt="Logo" />
        </FooterLogo>
        <FooterSubText>
          U potrazi ste za kompanijom koja se u potpunosti posvećuje svakom
          novom projektu?
        </FooterSubText>
        <AltButton buttonBig={buttonBig}>Kontaktirajte Nas</AltButton>
      </FooterContact>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>SkyMedia</FooterLinkTitle>
            <FooterLink to="/onama"> O SkyMedia</FooterLink>
            <FooterLink to="/onama"> Kako radimo? </FooterLink>
            <FooterLink to="/onama"> Način poslovanja? </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Pravilnici</FooterLinkTitle>
            <FooterLink to="/onama"> Ko smo mi? </FooterLink>
            <FooterLink to="/onama"> Kako radimo? </FooterLink>
            <FooterLink to="/onama"> Način poslovanja? </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Video Demo</FooterLinkTitle>
            <FooterLink to="/onama"> Ko smo mi? </FooterLink>
            <FooterLink to="/onama"> Kako radimo? </FooterLink>
            <FooterLink to="/onama"> Način poslovanja? </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <BottomBar>
        <WebsiteRights>SkyMedia &copy; 2020 Sva prava pridržana.</WebsiteRights>
        <SocialIconsWrapper>
          <SocialItem href={"#"} target="_blank">
            <Facebook />
          </SocialItem>
          <SocialItem href={"#"} target="_blank">
            <Youtube />
          </SocialItem>
          <SocialItem href={"#"} target="_blank">
            <Instagram />
          </SocialItem>
        </SocialIconsWrapper>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

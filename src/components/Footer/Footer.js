import React, { useEffect } from "react";
import { AltButton } from "../../globalStyles";
import { Facebook, Instagram, Youtube } from "../../globalStyles";
import skyLogo from "../../assets/images/logo/logoLight.png";
import translate from "../../providers/i18n/translate";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
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
  FooterNormalLink,
} from "./Footer.elements";

const Footer = (buttonBig) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <FooterContainer>
      <FooterContact data-aos="fade-up">
        <FooterLogo>
          <Link to="/" exact>
            <img src={skyLogo} alt="Logo" />
          </Link>
        </FooterLogo>
        <FooterSubText>{translate("footer.cta")}</FooterSubText>
        <Link to="/contact">
          <AltButton buttonBig={buttonBig}>{translate("footer.btn")}</AltButton>
        </Link>
      </FooterContact>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems data-aos="fade-down">
            <FooterLinkTitle>{translate("footer.titleOne")}</FooterLinkTitle>
            <FooterLink to="/about"> {translate("footer.link1")}</FooterLink>
            <FooterLink to="/portfolio">{translate("footer.link2")}</FooterLink>
            <FooterLink to="/contact"> {translate("footer.link3")} </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems data-aos="fade-down">
            <FooterLinkTitle>{translate("footer.titleTwo")}</FooterLinkTitle>
            <FooterLink to="/privacy"> {translate("footer.link4")}</FooterLink>
            <FooterLink to="/terms"> {translate("footer.link5")}</FooterLink>
            <FooterLink to="/#"> {translate("footer.link6")} </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems data-aos="fade-down">
            <FooterLinkTitle>{translate("footer.titleThree")}</FooterLinkTitle>
            <FooterNormalLink
              href="https://www.youtube.com/watch?v=sJyyzwHO4u4&feature=emb_logo&ab_channel=SKYMEDIA"
              target="_blank"
            >
              {translate("footer.link7")}
            </FooterNormalLink>
            <FooterNormalLink
              href="https://www.youtube.com/watch?v=vYuiAWW6AKs&ab_channel=SKYMEDIA"
              target="_blank"
            >
              {translate("footer.link8")}
            </FooterNormalLink>
            <FooterNormalLink
              href="https://www.youtube.com/watch?v=T8dBxnSMvCQ&ab_channel=SKYMEDIA"
              target="_blank"
            >
              {translate("footer.link9")}
            </FooterNormalLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <BottomBar>
        <WebsiteRights>
          SkyMedia &copy; {translate("footer.rights")}
        </WebsiteRights>
        <SocialIconsWrapper>
          <SocialItem href={"#"} target="_blank">
            <Facebook />
          </SocialItem>
          <SocialItem
            href={"https://www.youtube.com/channel/UC5i-hFeViksvqeVtVUf0wDw"}
            target="_blank"
          >
            <Youtube />
          </SocialItem>
          <SocialItem
            href={"https://www.instagram.com/skymedia.dev/"}
            target="_blank"
          >
            <Instagram />
          </SocialItem>
        </SocialIconsWrapper>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

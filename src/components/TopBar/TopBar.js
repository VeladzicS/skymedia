import React from "react";
import { Mail, Phone, Facebook, Instagram, Youtube } from "../../globalStyles";

import {
  TopBarContainer,
  TopBarContacts,
  SocialItems,
  ContactBar,
  MailTextLink,
  MailText,
  PhoneTextLink,
  PhoneText,
  SocialItem,
} from "./TopBar.elements";
const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarContacts>
        <ContactBar>
          <MailTextLink href={"mailto:info@skymediadev.com"} target="_blank">
            <Mail /> <MailText>info@skymediadev.com</MailText>
          </MailTextLink>

          <PhoneTextLink href={"tel:00387603411530"} target="_blank">
            <Phone /> <PhoneText>+387 60 3411530</PhoneText>
          </PhoneTextLink>
        </ContactBar>
      </TopBarContacts>

      <SocialItems>
        <SocialItem href={"#"} target="_blank">
          <Facebook />
        </SocialItem>
        <SocialItem href={"#"} target="_blank">
          <Youtube />
        </SocialItem>
        <SocialItem href={"#"} target="_blank">
          <Instagram />
        </SocialItem>
      </SocialItems>
    </TopBarContainer>
  );
};

export default TopBar;

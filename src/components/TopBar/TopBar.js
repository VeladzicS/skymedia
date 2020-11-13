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
            <Phone /> <PhoneText>+387 61 368 464</PhoneText>
          </PhoneTextLink>
        </ContactBar>
      </TopBarContacts>

      <SocialItems>
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
      </SocialItems>
    </TopBarContainer>
  );
};

export default TopBar;

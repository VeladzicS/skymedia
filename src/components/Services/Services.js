import React, { useEffect } from "react";
import translate from "../../providers/i18n/translate";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ServicesContainer,
  ServicesInner,
  ServiceBox,
  WebIcon,
  ShopIcon,
  BrandIcon,
  MarketingIcon,
  VideoIcon,
  SupportIcon,
  ServiceBoxTitle,
  ServiceBoxDesc,
} from "./Services.elements";
import {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingSubTitle,
} from "../../globalStyles";
const Services = ({ whiteTitle, goldTitle }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <ServicesContainer>
      <SectionHeading data-aos="fade-down">
        <SectionHeadingSubTitle goldTitle={goldTitle}>
          {translate("services.title")}
        </SectionHeadingSubTitle>
        <SectionHeadingTitle whiteTitle={whiteTitle}>
          {translate("services.topTitle")}
        </SectionHeadingTitle>
      </SectionHeading>

      <ServicesInner>
        <ServiceBox data-aos="fade-up">
          <WebIcon />
          <ServiceBoxTitle>{translate("services.dizajnTitle")}</ServiceBoxTitle>
          <ServiceBoxDesc>{translate("services.dizajnText")}</ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox data-aos="fade-down">
          <ShopIcon />
          <ServiceBoxTitle>{translate("services.shopTitle")}</ServiceBoxTitle>
          <ServiceBoxDesc>{translate("services.shopText")}</ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox data-aos="fade-up">
          <BrandIcon />
          <ServiceBoxTitle>{translate("services.visualTitle")}</ServiceBoxTitle>
          <ServiceBoxDesc>{translate("services.visualText")}</ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox data-aos="fade-down">
          <MarketingIcon />
          <ServiceBoxTitle>
            {translate("services.digitalTitle")}
          </ServiceBoxTitle>
          <ServiceBoxDesc>{translate("services.digitalText")}</ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox data-aos="fade-up">
          <VideoIcon />
          <ServiceBoxTitle> {translate("services.videoTitle")}</ServiceBoxTitle>
          <ServiceBoxDesc>{translate("services.videoText")}</ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox data-aos="fade-down">
          <SupportIcon />
          <ServiceBoxTitle>
            {translate("services.podrskaTitle")}
          </ServiceBoxTitle>
          <ServiceBoxDesc>{translate("services.podrskaText")}</ServiceBoxDesc>
        </ServiceBox>
      </ServicesInner>
    </ServicesContainer>
  );
};

export default Services;

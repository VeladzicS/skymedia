import React from "react";
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
const Services = (whiteTitle, goldTitle) => {
  return (
    <ServicesContainer>
      <SectionHeading>
        <SectionHeadingSubTitle goldTitle={goldTitle}>
          Šta nudimo?
        </SectionHeadingSubTitle>
        <SectionHeadingTitle whiteTitle={whiteTitle}>
          Naše Usluge
        </SectionHeadingTitle>
      </SectionHeading>

      <ServicesInner>
        <ServiceBox to="/about">
          <WebIcon />
          <ServiceBoxTitle>Dizajn & Izrada Web Stranica </ServiceBoxTitle>
          <ServiceBoxDesc>
            Svaka web stranica koju izradimo radi besprijekorno na mobilnim
            uređajima i tabletima, a iz razloga što koristimo najmodernije
            tehnike optimizovanog razvoja CSS/JS tehnologija. Naš dizajn je
            moderan i efektivan.
          </ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox>
          <ShopIcon />
          <ServiceBoxTitle>Web Shop</ServiceBoxTitle>
          <ServiceBoxDesc>
            Mi nudimo najefikasnije, sigurne e-commerc sisteme kao jedan od
            naših servisa. U mogućnosti smo prilagoditi postojeće e-commerce
            sisteme kao što je WoCommerce da radi u harmoniji sa vašim modelom
            poslovanja.
          </ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox>
          <BrandIcon />
          <ServiceBoxTitle>Vizualni Identiet</ServiceBoxTitle>
          <ServiceBoxDesc>
            Vizuelni identitet je sistem vizuelne prezentacije putem reklamnih
            flajera, print i video reklama kroz koji se postiže prepoznatljivost
            i razvijanje brenda vaše firme.
          </ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox>
          <MarketingIcon />
          <ServiceBoxTitle>Digitalni Marketing</ServiceBoxTitle>
          <ServiceBoxDesc>
            Google i Facebook generiraju više profita nego neke tradicionalne
            medijske kuće, a iz razloga što imaju pristup većem broju očiju. Iz
            tog razloga je digitalni marketing bitan i gdje bi fokus svakog
            poslovanja trebao da bude.
          </ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox>
          <VideoIcon />
          <ServiceBoxTitle>Video & Animacije</ServiceBoxTitle>
          <ServiceBoxDesc>
            Svaki video koji pravimo je pravljen za specifične potrebe i sa
            ciljem koji postavi klijent. Naš besprijekorni pristup radu u kojem
            stremimo da svaka animacija bude u skladu sa vašim brendom.
          </ServiceBoxDesc>
        </ServiceBox>
        <ServiceBox>
          <SupportIcon />
          <ServiceBoxTitle>Održavanje & Podrška</ServiceBoxTitle>
          <ServiceBoxDesc>
            Nakon što je proizvod razvijen, pružamo usluge dugotrajnog
            održavanja i tehničku podršku. Možemo nastaviti raditi na novim
            značajkama vašeg proizvoda, baviti se vašim pitanjima i novim
            problemima, kao i razvijati i provoditi poboljšanja.
          </ServiceBoxDesc>
        </ServiceBox>
      </ServicesInner>
    </ServicesContainer>
  );
};

export default Services;

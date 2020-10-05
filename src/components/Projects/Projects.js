import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import {
  ProjectsContainer,
  SlideContent,
  ProjectsInner,
  SlideContentInesa,
  SlideContentLink,
  DarkOverlay,
  SlideContentAd,
  SlideContentHarba,
  SlideContentVirino,
  ButtonContainer,
} from "./Projects.elements";
import {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingSubTitle,
  Button,
} from "../../globalStyles";

SwiperCore.use([Navigation, A11y]);

const Projects = ({ goldTitle, buttonBig, buttonFontBig, primary }) => {
  return (
    <ProjectsContainer>
      <ProjectsInner>
        <SectionHeading>
          <SectionHeadingSubTitle goldTitle={goldTitle}>
            Naši Projekti
          </SectionHeadingSubTitle>
          <SectionHeadingTitle whiteTitle={false}>
            Portfolio
          </SectionHeadingTitle>
        </SectionHeading>
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            620: {
              width: 1000,
              slidesPerView: 2,
            },
            1250: {
              width: 1250,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <SlideContent>
              <SlideContentInesa>
                <DarkOverlay>
                  <SlideContentLink
                    href={"https://artinesa.com/"}
                    target="_blank"
                  >
                    Pogledaj Projekt
                  </SlideContentLink>
                </DarkOverlay>
              </SlideContentInesa>
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent>
              <SlideContentHarba>
                <DarkOverlay>
                  <SlideContentLink
                    href={"https://petvetbihac.com/"}
                    target="_blank"
                  >
                    Pogledaj Projekt
                  </SlideContentLink>
                </DarkOverlay>
              </SlideContentHarba>
            </SlideContent>
          </SwiperSlide>
          <SwiperSlide>
            <SlideContent>
              <SlideContentAd>
                <DarkOverlay>
                  <SlideContentLink
                    href={"https://ad3london.com/"}
                    target="_blank"
                  >
                    Pogledaj Projekt
                  </SlideContentLink>
                </DarkOverlay>
              </SlideContentAd>
            </SlideContent>
          </SwiperSlide>

          <SwiperSlide>
            <SlideContent>
              <SlideContentVirino>
                <DarkOverlay>
                  <SlideContentLink
                    href={"https://virinoshop.com"}
                    target="_blank"
                  >
                    Pogledaj Projekt
                  </SlideContentLink>
                </DarkOverlay>
              </SlideContentVirino>
            </SlideContent>
          </SwiperSlide>
        </Swiper>
        <ButtonContainer>
          <Link to="/projects">
            <Button
              buttonBig={buttonBig}
              buttonFontBig={buttonFontBig}
              primary={primary}
            >
              Pogledaj sve projekte
            </Button>
          </Link>
        </ButtonContainer>
      </ProjectsInner>
    </ProjectsContainer>
  );
};

export default Projects;

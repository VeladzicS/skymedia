import styled from "styled-components";
import { Container } from "../../globalStyles";

import inesaImg from "../../assets/images/home/inesa.png";
import harbaImg from "../../assets/images/home/harba.png";
import adImg from "../../assets/images/home/ad.jpg";
import virinoImg from "../../assets/images/home/virino.png";

export const ProjectsContainer = styled.div`
  width: 100%;
  padding: 50px 0 100px 0;
  background: #fff;
`;

export const ProjectsInner = styled(Container)`
  max-width: 135rem;

  ${Container}
`;

export const DarkOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;
export const SlideContentLink = styled.a`
  font-family: "Playfair Display", serif;
  text-decoration: none;
  font-size: 2.4rem;

  letter-spacing: 0.2px;
  color: #b69d74;
  position: absolute;
  bottom: -25%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;

  &:hover {
    text-decoration: none;
    color: rgba(182, 157, 116, 0.6);
  }
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 25rem;
  }
  &:hover ${SlideContentLink} {
    bottom: 5rem;
  }
  &:hover ${DarkOverlay} {
    opacity: 1;
  }
`;

export const SlideContentInesa = styled.div`
  width: 100%;
  height: 100%;
  background: url(${inesaImg}) center/cover no-repeat;
`;
export const SlideContentHarba = styled.div`
  width: 100%;
  height: 100%;
  background: url(${harbaImg}) center/cover no-repeat;
`;
export const SlideContentAd = styled.div`
  width: 100%;
  height: 100%;
  background: url(${adImg}) center/cover no-repeat;
`;
export const SlideContentVirino = styled.div`
  width: 100%;
  height: 100%;
  background: url(${virinoImg}) center/cover no-repeat;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`;

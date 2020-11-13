import styled from "styled-components";
import bckImg from "../../assets/images/about/robo.jpg";

export const CallContainer = styled.div`
  width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bckImg}) center/cover fixed no-repeat;
  padding: 5rem 0;
`;

export const SectionDescription = styled.div`
  text-align: center;
  width: 75%;
  margin: 1rem auto;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const SectionText = styled.p`
  margin: 2rem 0;
  font-size: 1.8rem;

  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

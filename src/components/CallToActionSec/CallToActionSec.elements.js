import styled from "styled-components";
import bckImg from "../../assets/images/about/tabman.jpg";

export const CallContainer = styled.div`
  width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
    url(${bckImg}) center/cover fixed no-repeat;
  padding: 2.5rem 0;
`;

export const SectionDescription = styled.div`
  text-align: center;
  width: 75%;
  margin: 0 auto;
`;

export const SectionText = styled.p`
  margin: 1rem 0;
  font-size: 1.7rem;
  color: #fff;

  @media screen and (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

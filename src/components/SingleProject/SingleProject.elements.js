import styled from "styled-components";
import inesaImg from "../../assets/images/projects/inesa.jpg";
import adImg from "../../assets/images/projects/ad.jpg";
import harbaImg from "../../assets/images/projects/harba.jpg";
import virinoImg from "../../assets/images/projects/virino.png";
import { Container } from "../../globalStyles";

export const SingleProjectBox = styled.div`
  width: 100%;
  height: 38rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #1f2839;
`;

export const SingleProjectLeft = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1/2;
  grid-column: 1 / 2;

  & img {
    width: 100%;
    height: 100%;
    max-height: 38rem;
  }
`;

export const SingleProjectRight = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / -1;
  background: ${({ darkBackround }) => (darkBackround ? "#1f2839" : "#1f2839")};
`;

export const SingleProjectRightTitle = styled.h3``;

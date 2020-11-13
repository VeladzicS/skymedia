import styled from "styled-components";

import { ThemeColors } from "../../theme";

const { blue, blueHover } = ThemeColors;

export const SingleProjectBox = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
`;

export const SingleProjectLeft = styled.div`
  width: 60rem;
  height: 33rem;

  @media screen and (max-width: 1300px) {
    height: 28rem;
  }

  @media screen and (max-width: 714px) {
    width: 40rem;
    height: 20rem;
  }
  @media screen and (max-width: 400px) {
    max-height: 15rem;
  }
  & img {
    width: 100%;
    height: 100%;
    max-height: 33rem;

    @media screen and (max-width: 1300px) {
      max-height: 28rem;
    }
    @media screen and (max-width: 714px) {
      max-height: 20rem;
    }
    @media screen and (max-width: 400px) {
      max-height: 15rem;
    }
  }
`;

export const SingleProjectRight = styled.div`
  width: 60rem;
  height: 33rem;
  @media screen and (max-width: 714px) {
    width: 40rem;
    height: 25rem;
  }

  background: ${({ darkBackround }) => (darkBackround ? "#1f2839" : "#1f2839")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

export const SingleProjectRightTitle = styled.h3`
  color: ${({ darkColor }) => (darkColor ? "#1f2839" : "#fff")};
  font-size: 3rem;

  @media screen and (max-width: 714px) {
    font-size: 2rem;
  }
`;

export const SingleProjectRightSubTitle = styled.h5`
  color: ${({ goldColor }) => (goldColor ? blue : "#fff")};
  font-size: 1.3rem;
  margin: 2rem 0 1rem 0;

  @media screen and (max-width: 714px) {
    font-size: 1.2rem;
    margin: 0.5rem 0 0 0;
  }
`;

export const SingleProjectRightText = styled.p`
  font-size: 1.5rem;
  padding-right: 2rem;
  color: ${({ darkColor }) => (darkColor ? "#1f2839" : "#fff")};

  @media screen and (max-width: 1388px) {
    text-align: center;
  }

  @media screen and (max-width: 714px) {
    font-size: 1.3rem;
  }
`;

export const SingleProjectRightLink = styled.a`
  font-size: 1.5rem;
  color: ${({ goldLink }) => (goldLink ? blue : "#fff")};
  text-decoration: none;
  padding: 0 1rem;
  transition: all 0.3s ease-in;

  @media screen and (max-width: 714px) {
    font-size: 1.3rem;
  }
  &:hover {
    color: ${blueHover};
  }
`;
export const SingleProjectRightTextTitle = styled.h5`
  font-size: 2rem;
  color: ${({ darkColor }) => (darkColor ? "#1f2839" : "#fff")};
  font-weight: bold;

  align-self: start;

  @media screen and (max-width: 714px) {
    font-size: 1.5rem;
  }
`;
export const SingleProjectRightLinkTitle = styled.h5`
  font-size: 2rem;
  color: ${({ darkColor }) => (darkColor ? "#1f2839" : "#fff")};
  font-weight: bold;

  align-self: start;

  @media screen and (max-width: 714px) {
    font-size: 1.5rem;
  }
`;

export const SingleProjectRightDescContainer = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  align-self: flex-start;
  margin: 5rem 0 2rem 0;
  align-items: center;

  @media screen and (max-width: 714px) {
    margin: 2rem 0 1rem 0;
  }

  @media screen and (max-width: 408px) {
    margin: 1rem 0 1rem 0;
    grid-template-columns: 10rem 1fr;
  }
`;
export const SingleProjectRightLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  align-self: flex-start;
  margin: 2rem 0;
  align-items: center;

  @media screen and (max-width: 408px) {
    margin: 1rem 0 1rem 0;
    grid-template-columns: 10rem 1fr;
  }
`;

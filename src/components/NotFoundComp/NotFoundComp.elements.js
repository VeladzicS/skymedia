import styled from "styled-components";
import { ThemeColors } from "../../theme";

const { oldBlue } = ThemeColors;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1600px;
  min-height: 50rem;
  display: grid;
  grid-template-columns: 1fr 40rem;
  place-items: center;
  text-align: center;
  padding: 2rem 0;
  @media screen and (max-width: 784px) {
    grid-template-columns: 1fr 25rem;
  }

  @media screen and (max-width: 518px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const ErrorImgWrapp = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 518px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  img {
    width: 40rem;
    height: auto;
    @media screen and (max-width: 1108px) {
      width: 35rem;
    }
    @media screen and (max-width: 784px) {
      width: 25rem;
    }
  }
`;

export const ErrorMsgWrapp = styled.div`
  grid-column: 1 / 2;
  padding: 2rem;
  @media screen and (max-width: 518px) {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }
  h2 {
    font-size: 7rem;
    letter-spacing: 3px;
    color: ${oldBlue};
    padding-bottom: 2rem;

    @media screen and (max-width: 1108px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 784px) {
      font-size: 4rem;
    }
  }
  h4 {
    font-size: 3rem;
    color: ${oldBlue};
    @media screen and (max-width: 1108px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 784px) {
      font-size: 2rem;
    }
  }
`;

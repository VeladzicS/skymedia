import styled from "styled-components";
import { Container } from "../../globalStyles";

export const BigInfoSectionCont = styled(Container)`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Container}
`;

export const HeroWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionDescription = styled.div`
  margin: 2.5rem auto 5rem auto;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionText = styled.p`
  margin: 2rem 0;
  font-size: 1.7rem;
  color: #000;
  width: 95%;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

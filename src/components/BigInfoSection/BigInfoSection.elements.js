import styled from "styled-components";
import { Container } from "../../globalStyles";

export const BigInfoSectionCont = styled(Container)`
  display: flex;
  flex-direction: column;
  ${Container}
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const SectionDescription = styled.div`
  margin: 5rem 0;
  padding: 0 5rem;
  text-align: center;
`;

export const SectionText = styled.p`
  margin: 1rem 0;
  font-size: 1.7rem;
  color: #000;

  @media screen and (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

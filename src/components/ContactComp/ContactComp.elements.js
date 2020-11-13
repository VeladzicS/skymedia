import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Container}
`;

export const LottieWrapper = styled.div`
  position: absolute;
  top: 0rem;
  right: 2rem;

  @media screen and (max-width: 1326px) {
    top: 10rem;
    right: 2rem;
  }
  @media screen and (max-width: 1240px) {
    display: none;
  }
`;

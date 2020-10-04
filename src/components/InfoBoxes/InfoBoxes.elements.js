import styled from "styled-components";

export const InfoBoxContainer = styled.div`
  display: ${({ infoBoxDisplay }) => (infoBoxDisplay ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -25%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1578px) {
    transform: translate(-50%, -35%);
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export const InfoBoxTitle = styled.h4`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1086px) {
    font-size: 18px;
    margin: 1rem 0;
  }
`;

export const InfoBoxItem = styled.div`
  background: #1f2839;
  display: flex;
  align-items: flex-start;

  width: 45rem;
  padding: 3rem;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1578px) {
    width: 40rem;
  }

  @media screen and (max-width: 1378px) {
    width: 36rem;
    padding: 1.5rem;
  }

  @media screen and (max-width: 1086px) {
    flex-direction: column;
    align-items: center;
    width: 30rem;
  }

  &:hover {
    background: #263043;
  }

  &:hover ${InfoBoxTitle} {
    color: #b69d74;
  }
`;

export const InfoBoxContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  @media screen and (max-width: 1086px) {
    text-align: center;
    align-items: center;
  }
`;

export const InfoBoxText = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 300;

  @media screen and (max-width: 1086px) {
    font-size: 16px;
  }
`;

export const InfoBoxIcon = styled.div`
  margin-right: 1rem;
  & img {
    width: 50px;
    height: auto;
    color: #b69d74;

    @media screen and (max-width: 1086px) {
      width: 40px;
    }
  }
`;

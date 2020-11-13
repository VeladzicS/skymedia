import styled from "styled-components";

import { Container } from "../../globalStyles";
import { MdImportantDevices } from "react-icons/md";
import { FaShoppingCart, FaVideo } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { BiSupport } from "react-icons/bi";
import { GiChessKing } from "react-icons/gi";

import { ThemeColors } from "../../theme";

const { blue } = ThemeColors;

export const ServicesContainer = styled.div`
  width: 100%;
  padding: 50px 0;

  background: #192236;
`;

export const ServicesInner = styled(Container)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: stretch;
  max-width: 1400px;

  @media screen and (max-width: 1260px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 746px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr;
  }
  ${Container}
`;

export const ServiceBoxTitle = styled.h4`
  color: ${blue};
  font-size: 2rem;

  position: absolute;
  top: 13rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  width: 100%;

  @media screen and (max-width: 1260px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
`;
export const ServiceBoxDesc = styled.p`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.3rem;
  }
`;

export const WebIcon = styled(MdImportantDevices)`
  color: ${blue};
  font-size: 5rem;
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 4rem;
  }
`;
export const ShopIcon = styled(FaShoppingCart)`
  color: ${blue};
  font-size: 5rem;
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 4rem;
  }
`;
export const BrandIcon = styled(GiChessKing)`
  color: ${blue};
  font-size: 5rem;
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 4rem;
  }
`;
export const VideoIcon = styled(FaVideo)`
  color: ${blue};
  font-size: 5rem;
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 4rem;
  }
`;
export const MarketingIcon = styled(ImStatsDots)`
  color: ${blue};
  font-size: 5rem;
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 4rem;
  }
`;
export const SupportIcon = styled(BiSupport)`
  color: ${blue};
  font-size: 5rem;
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1260px) {
    font-size: 4rem;
  }
`;

export const ServiceBox = styled.div`
  text-decoration: none;
  height: 35rem;
  margin: 0.5rem;
  padding: 2rem;
  background: #263043;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${blue};
  }

  &:hover ${ServiceBoxTitle} {
    color: #fff;
    transform: translate(-50%, -50%);
  }
  &:hover ${ServiceBoxDesc} {
    color: #fff;
    transform: translateY(-25%);
  }

  &:hover ${WebIcon} {
    color: #fff;
    transform: translate(-50%, -25%);
  }
  &:hover ${ShopIcon} {
    color: #fff;
    transform: translate(-50%, -25%);
  }
  &:hover ${BrandIcon} {
    color: #fff;
    transform: translate(-50%, -25%);
  }
  &:hover ${VideoIcon} {
    color: #fff;
    transform: translate(-50%, -25%);
  }
  &:hover ${MarketingIcon} {
    color: #fff;
    transform: translate(-50%, -25%);
  }
  &:hover ${SupportIcon} {
    color: #fff;
    transform: translate(-50%, -25%);
  }
`;

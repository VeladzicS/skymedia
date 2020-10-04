import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: ${({ scrolled }) => (scrolled ? "#1f2839" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;

  @media screen and (max-width: 960px) {
    background: #1f2839;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 150px;
    height: auto;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #1f2839;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease;
  &:hover {
    border-bottom: 2px solid #b69d74;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    border: none;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  letter-spacing: 0.6px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 15px;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    color: #fff;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #b69d74;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

/* export const NavIcon = styled(FaMagnet)`
  margin-right: 0.5rem;
`; */

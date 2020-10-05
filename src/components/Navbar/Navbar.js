import React, { useState, useEffect } from "react";
import skyLogo from "../../assets/images/logo/logoLight.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeNavBackround = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackround);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrolled={scrolled}>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <img src={skyLogo} alt="Logo" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Početna</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">O nama</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/portfolio">Portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Kontakt</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/showreel">
                    <Button primary> Showreel </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/showreel">
                    <Button fontBig primary big>
                      Showreel
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import skyLogo from "../../assets/images/logo/logoLight.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { LangSwitcher } from "../index";
import translate from "../../providers/i18n/translate";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemLang,
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
                <NavLinks to="/">{translate("menu.one")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">{translate("menu.two")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/portfolio">{translate("menu.three")}</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">{translate("menu.four")}</NavLinks>
              </NavItem>
              <NavItemLang>
                <LangSwitcher />
              </NavItemLang>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

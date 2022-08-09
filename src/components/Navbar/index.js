import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Span,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/reactjs-landing-page" onClick={toggleHome}>
              <Span>uba</Span>bank
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="sobre"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Sobre
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="descubra"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Descubra
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="servicos"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Serviços
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="cadastrar"
                  smooth={true}
                  duration={800}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Cadastrar
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Entrar</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

import React from "react";
import { FaBars } from "react-icons/fa";
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
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/reactjs-landing-page">
            <Span>uba</Span>bank
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="sobre">Sobre</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="descubra">Descubra</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="servicos">Serviços</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cadastrar">Cadastrar</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Entrar</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

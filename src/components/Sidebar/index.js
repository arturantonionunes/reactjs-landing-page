import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="sobre"
              onClick={toggle}
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Sobre
            </SidebarLink>
            <SidebarLink
              to="descubra"
              onClick={toggle}
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Descubra
            </SidebarLink>
            <SidebarLink
              to="servicos"
              onClick={toggle}
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Serviços
            </SidebarLink>
            <SidebarLink
              to="cadastrar"
              onClick={toggle}
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Cadastrar
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin"> Entrar</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

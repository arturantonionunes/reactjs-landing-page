import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre</FooterLinkTitle>
              <FooterLink to="/reactjs-landing-page">Como funciona</FooterLink>
              <FooterLink to="/reactjs-landing-page">Carreiras</FooterLink>
              <FooterLink to="/reactjs-landing-page">Investidores</FooterLink>
              <FooterLink to="/reactjs-landing-page">
                Termos de serviço
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Entre em Contato</FooterLinkTitle>
              <FooterLink to="/reactjs-landing-page">Contato</FooterLink>
              <FooterLink to="/reactjs-landing-page">Suporte</FooterLink>
              <FooterLink to="/reactjs-landing-page">Parcerias</FooterLink>
              <FooterLink to="/reactjs-landing-page">FAQ</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Escola Ubabank</FooterLinkTitle>
              <FooterLink to="/reactjs-landing-page">Vídeo Aulas</FooterLink>
              <FooterLink to="/reactjs-landing-page">Artigos</FooterLink>
              <FooterLink to="/reactjs-landing-page">Tutoriais</FooterLink>
              <FooterLink to="/reactjs-landing-page">Galeria</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
              <FooterLink to="/reactjs-landing-page">Instagram</FooterLink>
              <FooterLink to="/reactjs-landing-page">Facebook</FooterLink>
              <FooterLink to="/reactjs-landing-page">Twitter</FooterLink>
              <FooterLink to="/reactjs-landing-page">Linkedin</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/reactjs-landing-page" onClick={toggleHome}>
              ubabank
            </SocialLogo>
            <WebsiteRights>ubabank ©️ {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="/reactjs-landing-page"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/reactjs-landing-page"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/reactjs-landing-page"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/reactjs-landing-page"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

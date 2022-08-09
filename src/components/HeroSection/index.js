import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Span,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>O Banco Digital do Litoral </HeroH1>
        <HeroP>
          Crie sua conta agora e receba <Span>R$200,00</Span> de crétido para o
          pagamento da primeira fatura.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="cadastrar"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={800}
            spy={true}
            exact="true"
            offset={-80}
          >
            Cadastre-se {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

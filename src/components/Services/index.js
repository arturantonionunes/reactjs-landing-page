import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="servicos">
        <ServicesH1>Nossos Serviços</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Sitema P2P</ServicesH2>
            <ServicesP>
              No Ubabank você pode comprar suas criptos em um sistema P2P.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Altos Rendimentos</ServicesH2>
            <ServicesP>
              Os rendimentos de nossa conta digital são superiores a todas do
              mercado.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Acessoria Financeira</ServicesH2>
            <ServicesP>
              Nossos especialistas irão guiar suas finanças e auxiliar nos
              melhores investimentos.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;

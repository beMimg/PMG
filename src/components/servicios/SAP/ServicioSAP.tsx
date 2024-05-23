import React from "react";
import TipoDeServicioSection from "../TipoDeServicioSection";
import especialistaSapImg from "../../../assets/route-images/hands-together-photo.jpg";
import MetodologiasDeTrabajoSection from "./MetodologiasDeTrabajoSection";
import PorqueEligirnosSection from "./PorqueEligirnosSection";
import NegocioSAPSection from "./NegocioSAPSection";
import DivMaxW7XL from "../../common/DivMaxW7XL";

const ServicioSAP = () => {
  return (
    <TipoDeServicioSection
      direction="right"
      title="Especialistas en SAP"
      color="rose"
      image={especialistaSapImg}
    >
      <DivMaxW7XL>
        <NegocioSAPSection />
        <PorqueEligirnosSection />
        <MetodologiasDeTrabajoSection />
      </DivMaxW7XL>
    </TipoDeServicioSection>
  );
};

export default ServicioSAP;

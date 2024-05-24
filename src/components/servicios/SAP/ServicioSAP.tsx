import React from "react";
import TipoDeServicioSection from "../TipoDeServicioSection";
import especialistaSapImg from "../../../assets/route-images/hands-together-photo.jpg";
import MetodologiasDeTrabajoSection from "./MetodologiasDeTrabajoSection";
import PorqueEligirnosSection from "./PorqueEligirnosSection";
import NegocioSAPSection from "./NegocioSAPSection";

const ServicioSAP = () => {
  return (
    <TipoDeServicioSection
      direction="right"
      title="Especialistas en SAP"
      color="rose"
      image={especialistaSapImg}
    >
      <NegocioSAPSection />
      <PorqueEligirnosSection />
      <MetodologiasDeTrabajoSection />
    </TipoDeServicioSection>
  );
};

export default ServicioSAP;

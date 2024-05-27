import React from "react";
import TipoDeServicioSection from "../TipoDeServicioSection";
import especialistaSapImg from "../../../assets/route-images/hands-together-photo.jpg";
import MetodologiasDeTrabajoSection from "./MetodologiasDeTrabajoSection";
import PorqueEligirnosSection from "./PorqueEligirnosSection";
import NegocioSAPSection from "./NegocioSAPSection";
import especialistaSapPlaceholder from "../../../assets/route-images/hands-together-photo-placehoder.jpg";

const ServicioSAP = () => {
  return (
    <TipoDeServicioSection
      placeholder={especialistaSapPlaceholder}
      direction="right"
      title="Especialistas en SAP"
      color="rose"
      image={especialistaSapImg}
    >
      <div className="mx-6">
        <NegocioSAPSection />
        <PorqueEligirnosSection />
        <MetodologiasDeTrabajoSection />
      </div>
    </TipoDeServicioSection>
  );
};

export default ServicioSAP;

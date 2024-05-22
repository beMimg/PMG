import React from "react";
import DescripcionDeServicio from "./DescripcionDeServicio";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import especialistaSapImg from "../../assets/route-images/testimonios-meeting.jpg";
import { negocios } from "../../components/servicios/CualEsNuestroNegocio";
import ModeloDeTrabajo from "./ModeloDeTrabajo";
import MetodologiasDeTrabajo from "./MetodologiasDeTrabajo";
import PorqueEligirnos from "./PorqueEligirnos";

const ServicioSAP = () => {
  return (
    <DescripcionDeServicio
      direction="right"
      title="Especialistas en SAP"
      color="rose"
      image={especialistaSapImg}
    >
      <SectionMaxW7XL>
        <div className="flex flex-col gap-24">
          <div className=" grid  gap-16  text-center md:grid-cols-3">
            {negocios.map((negocio) => (
              <div className="blurred-bg relative rounded-lg transition-all duration-200 ease-in-out ">
                <div className="flex h-full w-full flex-col gap-2 rounded-lg bg-gray-50 p-4 shadow-lg transition-all hover:scale-95 hover:shadow-none">
                  <h2 className="text-xl font-semibold">{negocio.title}</h2>
                  <p className="text-lg">{negocio.description}</p>
                </div>
              </div>
            ))}
          </div>
          <PorqueEligirnos />
          <MetodologiasDeTrabajo />
        </div>
      </SectionMaxW7XL>
    </DescripcionDeServicio>
  );
};

export default ServicioSAP;

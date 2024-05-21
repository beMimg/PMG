import React from "react";
import DescripcionDeServicio from "./DescripcionDeServicio";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import especialistaSapImg from "../../assets/route-images/testimonios-meeting.jpg";
import { negocios } from "../../components/servicios/CualEsNuestroNegocio";

const ServicioSAP = () => {
  return (
    <DescripcionDeServicio
      direction="right"
      title="Especialistas en SAP"
      color="rose"
      image={especialistaSapImg}
    >
      <SectionMaxW7XL>
        <div className=" grid  gap-16  text-center md:grid-cols-3">
          {negocios.map((negocio) => (
            <div>
              <h2 className="text-xl font-semibold">{negocio.title}</h2>
              <p className="text-lg">{negocio.description}</p>
            </div>
          ))}
        </div>
      </SectionMaxW7XL>
    </DescripcionDeServicio>
  );
};

export default ServicioSAP;

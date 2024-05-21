import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

export const negocios = [
  {
    title: "ABAP",
    description:
      "Nuestra base principal es ABAP, empezamos como una consultoría experta de programación ABAP en todos los módulos y aunque hemos progresado mucho en estos años, no olvidamos de donde venimos.",
  },
  {
    title: "ABAP FOR HANA",
    description:
      "Dentro de la tecnología ABAP, hay que adaptarse a los nuevos tiempos. Esto implica la implantación de las tecnologías HANA con el fin de mejorar los procesos (CDS, Odata, AMDP, etc.).",
  },
  {
    title: "FIORI",
    description:
      "Tenemos experiencia en implantaciones de FIORI. Esto incluye la configuración de catálogos, activación de servicios, customización de acceso, etc.",
  },
  {
    title: "SAPUI5",
    description:
      "A veces escuchamos hablar de Fiori y lo confundimos con SAPUI5, pero no es lo mismo. Nosotros tenemos experiencia en el desarrollo de aplicaciones SAPUI5 y su publicación en Fiori.",
  },
  {
    title: "BTP",
    description:
      "Tenemos experiencia en proyectos de BTP, programación de IRPA, Workflow BTP, SAP Mobile, etc.",
  },
  {
    title: "PMO",
    description:
      "Por supuesto, cualquier proyecto de PMG cuenta con la garantía de una implantación exitosa. No obstante, también ofrecemos una PMO sobre proyectos en curso con el fin de asegurar su implantación y éxito.",
  },
];

const CualEsNuestroNegocio = () => {
  return (
    <div className="relative py-12">
      <div
        style={{ backgroundColor: "#f0f0f0" }}
        className="absolute left-0 top-0 -z-20 h-full w-full"
      ></div>
      <SectionMaxW7XL>
        <div className="flex flex-col gap-12">
          <h1 className=" text-4xl font-bold text-black">
            Expecialistas en SAP
          </h1>
          <div className="grid gap-24 text-center md:grid-cols-3">
            {negocios.map((negocio) => (
              <div>
                <h2 className="font-semibold">{negocio.title}</h2>
                <p>{negocio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionMaxW7XL>
    </div>
  );
};

export default CualEsNuestroNegocio;

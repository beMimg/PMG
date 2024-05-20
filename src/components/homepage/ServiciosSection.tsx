import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

const tecnologias = [
  "Análisis Avanzado/Ciencia de Datos",
  "Agile, Producto y Diseño",
  "Desarrollo de Aplicaciones",
  "Nube e Infraestructura",
  "Transformación Digital",
  "Liderazgo en Entrega/Gestión de Proyectos (PMO/ePMO)",
  "Seguridad Informática",
  "ERP (SAP, Oracle)",
  "ABAP",
  "FIORI",
  "BTP",
  "Desarrollo Web",
  "Consultoría",
];

const ServiciosSection = () => {
  return (
    <SectionMaxW7XL>
      <h1 className="logo-text-color text-center text-4xl font-extrabold uppercase">
        SERVICIOS
      </h1>
      <div className="flex flex-col  gap-8">
        <p>
          Nuestras capacidades principales abarcan una amplia gama de
          tecnologías, soluciones y plataformas. Nuestras áreas clave de
          práctica tecnológica incluyen:
        </p>
        <div className="flex flex-col gap-20  md:grid md:grid-cols-2 md:gap-0">
          <ul className="flex flex-col place-self-center pl-6 md:pl-0 ">
            {tecnologias.map((tecnologia) => (
              <li className=" list-disc">{tecnologia}</li>
            ))}
          </ul>
          {/* <div className="flex items-center justify-center md:pt-[60px]">
            <CompleteLogo />
          </div> */}
        </div>
      </div>
    </SectionMaxW7XL>
  );
};

export default ServiciosSection;

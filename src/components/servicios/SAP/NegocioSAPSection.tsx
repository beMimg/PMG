import React from "react";

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

const NegocioSAPSection = () => {
  return (
    <section className="flex flex-col gap-24">
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
    </section>
  );
};

export default NegocioSAPSection;

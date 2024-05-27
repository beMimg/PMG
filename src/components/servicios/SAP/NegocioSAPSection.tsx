import React from "react";
import { motion } from "framer-motion";

export const negocios = [
  {
    title: "ABAP",
    index: 1,
    description:
      "Nuestra base principal es ABAP, empezamos como una consultoría experta de programación ABAP en todos los módulos y aunque hemos progresado mucho en estos años, no olvidamos de donde venimos.",
  },
  {
    title: "ABAP FOR HANA",
    index: 2,
    description:
      "Dentro de la tecnología ABAP, hay que adaptarse a los nuevos tiempos. Esto implica la implantación de las tecnologías HANA con el fin de mejorar los procesos (CDS, Odata, AMDP, etc.).",
  },
  {
    title: "FIORI",
    index: 3,
    description:
      "Tenemos experiencia en implantaciones de FIORI. Esto incluye la configuración de catálogos, activación de servicios, customización de acceso, etc.",
  },
  {
    title: "SAPUI5",
    index: 4,
    description:
      "A veces escuchamos hablar de Fiori y lo confundimos con SAPUI5, pero no es lo mismo. Nosotros tenemos experiencia en el desarrollo de aplicaciones SAPUI5 y su publicación en Fiori.",
  },
  {
    title: "BTP",
    index: 5,
    description:
      "Tenemos experiencia en proyectos de BTP, programación de IRPA, Workflow BTP, SAP Mobile, etc.",
  },
  {
    title: "PMO",
    index: 6,
    description:
      "Por supuesto, cualquier proyecto de PMG cuenta con la garantía de una implantación exitosa. No obstante, también ofrecemos una PMO sobre proyectos en curso con el fin de asegurar su implantación y éxito.",
  },
];

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const NegocioSAPSection = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24">
      <motion.div
        viewport={{
          once: true,
        }}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        className=" grid  gap-16  text-center md:grid-cols-3"
      >
        {negocios.map((negocio) => (
          <div
            key={negocio.index}
            className="blurred-bg relative rounded-lg transition-all duration-200 ease-in-out "
          >
            <div className="flex h-full w-full flex-col gap-2 rounded-lg bg-gray-50 p-4 shadow-lg transition-all hover:scale-95 hover:shadow-none">
              <h4 className="font-semibold">{negocio.title}</h4>
              <p>{negocio.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NegocioSAPSection;

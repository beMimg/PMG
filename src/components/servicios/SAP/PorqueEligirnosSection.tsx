import React from "react";
import sapAbapLogo from "../../../assets/techstack/sap/sap-abap.jpg";
import sapBasisLogo from "../../../assets/techstack/sap/sap-basis.png";
import sapBtpLogo from "../../../assets/techstack/sap/sap-btp.png";
import sapCloudLogo from "../../../assets/techstack/sap/sap-cloud.jpg";
import sapFioriLogo from "../../../assets/techstack/sap/sap-fiori.png";
import sapHanaLogo from "../../../assets/techstack/sap/sap-hana.webp";
import sapLogo from "../../../assets/techstack/sap/SAP_2011_logo.svg.png";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const sapLogos = [
  { alt: "SAP Abap logo", image: sapAbapLogo },
  { alt: "SAP Basis Logo", image: sapBasisLogo },
  { alt: "SAP BTP Logo", image: sapBtpLogo },
  { alt: "Sap Cloud Logo", image: sapCloudLogo },
  { alt: "SAP Fiori Logo", image: sapFioriLogo },
  { alt: "SAP Hana Logo", image: sapHanaLogo },
];

const PorqueEligirnosSection = () => {
  return (
    <section className="metodologias-bg group  relative flex flex-col justify-between gap-8 rounded-lg bg-gray-50 p-8 shadow-lg transition-all md:flex-col md:gap-12">
      <div className="flex flex-row  justify-between  ">
        <h1 className="text-4xl font-bold">¿Por qué elegirnos?</h1>
        <img
          src={sapLogo}
          alt=""
          className="w-[70px] self-start md:w-[100px] md:self-center"
        />
      </div>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-24">
        <div className="flex flex-col gap-10">
          <p className=" text-xl">
            <strong>Experiencia y Conocimiento:</strong> Con años de experiencia
            en el mundo SAP, ofrecemos un conocimiento profundo y especializado
            en cada área.
          </p>
          <p className="text-xl">
            <strong>Soluciones a Medida:</strong> Entendemos que cada negocio es
            único. Nos aseguramos de que nuestras soluciones se adapten
            perfectamente a tus necesidades específicas.
          </p>
          <p className="text-xl">
            <strong>Resultados Tangibles:</strong> Nuestro enfoque centrado en
            la eficiencia y la productividad te permite ver resultados claros y
            medibles en tu operación diaria.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <p className="text-xl">
            Con nuestra ayuda, tu negocio puede aprovechar al máximo las
            capacidades de SAP, mejorando la eficiencia, reduciendo costos y
            aumentando la satisfacción de tus empleados. Estamos aquí para
            ayudarte a transformar y optimizar tu gestión empresarial con
            soluciones de vanguardia.
          </p>
          <Link
            to="/contacto"
            className="before:content['']  after:content[''] group relative flex h-16 w-64 origin-left flex-row content-center items-center gap-4  overflow-hidden rounded-lg border  border-gray-400 bg-gray-300 p-3 text-left text-base font-bold text-black  underline underline-offset-2 duration-500 before:absolute before:right-1 before:top-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-fuchsia-500 before:blur-lg before:duration-500 after:absolute  after:right-8  after:top-3 after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-teal-500 after:blur-lg after:duration-500   hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-500 hover:before:-bottom-8  hover:before:right-12  hover:before:blur hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] hover:after:-right-8 group-hover:before:duration-500 group-hover:after:duration-500"
          >
            Contáctanos <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PorqueEligirnosSection;

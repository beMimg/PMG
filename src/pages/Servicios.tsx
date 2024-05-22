import React from "react";
import meetingImg from "../assets/route-images/servicios-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";
import VerticalLine from "../components/common/VerticalLine";
import Main from "../components/common/Main";
import sapAbapLogo from "../assets/techstack/sap/sap-abap.jpg";
import sapBasisLogo from "../assets/techstack/sap/sap-basis.png";
import sapBtpLogo from "../assets/techstack/sap/sap-btp.png";
import sapCloudLogo from "../assets/techstack/sap/sap-cloud.jpg";
import sapFioriLogo from "../assets/techstack/sap/sap-fiori.png";
import sapHanaLogo from "../assets/techstack/sap/sap-hana.webp";
import ServicioDesarrollo from "../components/servicios/Desarrollo/ServicioDesarrollo";
import ServicioSAP from "../components/servicios/SAP/ServicioSAP";

const sapLogos = [
  { alt: "SAP Abap logo", image: sapAbapLogo },
  { alt: "SAP Basis Logo", image: sapBasisLogo },
  { alt: "SAP BTP Logo", image: sapBtpLogo },
  { alt: "Sap Cloud Logo", image: sapCloudLogo },
  { alt: "SAP Fiori Logo", image: sapFioriLogo },
  { alt: "SAP Hana Logo", image: sapHanaLogo },
];

const Servicios = () => {
  return (
    <>
      <TopSectionOfEveryRoute image={meetingImg}>
        <VerticalLine />
        <div className="flex h-full flex-col justify-evenly ">
          <h2 className="text-xl font-bold md:text-5xl ">
            Nos adaptamos a tu negocio
          </h2>
          <h2 className="text-lg font-semibold opacity-90   md:text-2xl md:opacity-70">
            Nos adaptamos al modelo de negocio, pero si el cliente lo necesita,
            proporcionamos metodologías ágiles para el ciclo de vida de los
            proyectos.
          </h2>
          <h2 className="text-lg font-semibold opacity-90   md:text-2xl md:opacity-70">
            Proporcionamos conocimientos con diferentes herramientas para
            gestión de peticiones y el tratamiento de los proyectos.
          </h2>
        </div>
      </TopSectionOfEveryRoute>
      <Main>
        <ServicioSAP />
        <ServicioDesarrollo />
      </Main>
    </>
  );
};

export default Servicios;

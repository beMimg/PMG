import React from "react";
import meetingImg from "../assets/route-images/nosotros-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/HeroSection";
import PorquePMG from "../components/nosotros/PorquePMG";
import NuestrosValores from "../components/nosotros/NuestrosValores";
import Certificaciones from "../components/nosotros/Certificaciones";
import AreaGeografica from "../components/nosotros/AreaGeografica";
import meetingImgPlaceholder from "../assets/route-images/nosotros-meeting-placeholder.jpg";

const Nosotros = () => {
  return (
    <main>
      <TopSectionOfEveryRoute
        placeholder={meetingImgPlaceholder}
        image={meetingImg}
      >
        <div className="flex h-full flex-col justify-evenly">
          <h1 className="font-bold">Sobre Nosotros </h1>
          <h3 className="text-base font-semibold opacity-90 md:text-3xl md:opacity-70">
            En Julio de 2023, nace PMG Solutions & Development, con el objetivo
            de proporcionar una solución ajustada a las necesidades de cada
            cliente en todas las áreas tecnológicas de SAP. Nuestro modelo de
            negocio se basa en la experiencia y la confianza de nuestros
            clientes. Proporcionando un servicio que va más allá del producto,
            buscando la adaptación concreta a las necesidades del cliente y
            priorizando su bienestar durante todo el ciclo de vida de los
            proyectos.
          </h3>
        </div>
      </TopSectionOfEveryRoute>
      <div className="mx-6">
        <PorquePMG />
        <NuestrosValores />
        <Certificaciones />
        <AreaGeografica />
      </div>
    </main>
  );
};

export default Nosotros;

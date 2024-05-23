import React from "react";
import meetingImg from "../assets/route-images/nosotros-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";
import VerticalLine from "../components/common/VerticalLine";
import PorquePMG from "../components/nosotros/PorquePMG";
import NuestrosValores from "../components/nosotros/NuestrosValores";
import Certificaciones from "../components/nosotros/Certificaciones";
import Main from "../components/common/Main";
import AreaGeografica from "../components/nosotros/AreaGeografica";

const Nosotros = () => {
  return (
    <>
      <TopSectionOfEveryRoute image={meetingImg}>
        <VerticalLine />
        <div className="flex h-full flex-col justify-evenly ">
          <h2 className="  text-xl font-bold md:text-5xl ">Sobre Nosotros </h2>
          <h2 className="text-lg font-semibold opacity-90   md:text-2xl md:opacity-70">
            En Julio de 2023, nace PMG Solutions & Development, con el objetivo
            de proporcionar una solución ajustada a las necesidades de cada
            cliente en todas las áreas tecnológicas de SAP. Nuestro modelo de
            negocio se basa en la experiencia y la confianza de nuestros
            clientes. Proporcionando un servicio que va más allá del producto,
            buscando la adaptación concreta a las necesidades del cliente y
            priorizando su bienestar durante todo el ciclo de vida de los
            proyectos.
          </h2>
        </div>
      </TopSectionOfEveryRoute>
      <Main>
        <div className="px-6">
          <PorquePMG />
        </div>
        <div className="px-6">
          <NuestrosValores />
        </div>
        <div className="px-6">
          <Certificaciones />
        </div>
        <div className="px-6">
          <AreaGeografica />
        </div>
      </Main>
    </>
  );
};

export default Nosotros;

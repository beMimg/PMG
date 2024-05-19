import React from "react";
import meetingImg from "../assets/nosotros-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";
import VerticalLine from "../components/common/VerticalLine";
import PorquePMG from "../components/nosotros/PorquePMG";

const Nosotros = () => {
  return (
    <>
      <TopSectionOfEveryRoute image={meetingImg}>
        <VerticalLine />
        <div className="flex h-full flex-col justify-evenly ">
          <h2 className="  text-xl font-bold md:text-5xl ">Sobre Nosotros </h2>
          <h2 className="text-lg font-semibold opacity-90   md:text-2xl md:opacity-70">
            En PMG, nos dedicamos a ofrecer soluciones de desarrollo y
            consultoría de TI de clase mundial. Junto con nuestras afiliadas,
            proporcionamos servicios innovadores y personalizados a algunas de
            las marcas más reconocidas a nivel global. Nuestro equipo de
            expertos combina talento, experiencia y tecnología avanzada para
            impulsar el éxito de nuestros clientes, ayudándoles a superar
            desafíos y alcanzar sus objetivos estratégicos.
          </h2>
        </div>
      </TopSectionOfEveryRoute>
      <main>
        <PorquePMG />
      </main>
    </>
  );
};

export default Nosotros;

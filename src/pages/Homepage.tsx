import React from "react";
import meetingImg from "../assets/homepage-meeting.jpg";
import { NavLink } from "react-router-dom";
import QueNosDefineSection from "../components/homepage/QueNosDefineSection";
import TestimoniosSection from "../components/homepage/TestimoniosSection";
import ServiciosSection from "../components/homepage/ServiciosSection";
import TopSectionOfEveryRoute from "../components/TopSectionOfEveryRoute";

const Homepage = () => {
  return (
    <>
      <TopSectionOfEveryRoute image={meetingImg}>
        <span className="logo-background-color  h-[75%] w-[10px] rounded-md"></span>
        <div className="flex h-full flex-col justify-evenly ">
          <h2 className="  text-xl font-bold md:text-5xl ">
            Tu visión, nuestra misión: juntos, alcanzamos el éxito.
          </h2>
          <h2 className="text-lg font-semibold opacity-90   md:text-3xl md:opacity-70">
            Somos un equipo apasionado de expertos en consultoría y desarrollo
            web, comprometidos con la excelencia y la satisfacción del cliente.
          </h2>
          <NavLink
            to="/servicios"
            className="logo-background-color self-start rounded-full border border-white p-1 px-14 text-center text-base font-semibold transition-all hover:border-teal-500 hover:bg-white hover:text-teal-500 md:border-2 md:text-lg"
          >
            Nuestros Servicios
          </NavLink>
        </div>
      </TopSectionOfEveryRoute>
      <main>
        <QueNosDefineSection />
        <TestimoniosSection />
        <ServiciosSection />
      </main>
    </>
  );
};

export default Homepage;

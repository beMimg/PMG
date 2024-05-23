import React from "react";
import meetingImg from "../assets/route-images/homepage-meeting.jpg";
import { NavLink } from "react-router-dom";
import QueNosDefineSection from "../components/homepage/QueNosDefineSection";
import TestimoniosSection from "../components/homepage/TestimoniosSection";
import ServiciosSection from "../components/homepage/ServiciosSection";
import TopSectionOfEveryRoute from "../components/common/TopSectionOfEveryRoute";
import VerticalLine from "../components/common/VerticalLine";
import Main from "../components/common/Main";
import PorqueEligirnos from "../components/servicios/SAP/PorqueEligirnosSection";
import SectionMaxW7XL from "../components/common/SectionMaxW7XL";

const Homepage = () => {
  return (
    <>
      <TopSectionOfEveryRoute image={meetingImg}>
        <VerticalLine />
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
      <Main>
        <QueNosDefineSection />
        <TestimoniosSection />
        <SectionMaxW7XL>
          <PorqueEligirnos />
        </SectionMaxW7XL>
      </Main>
    </>
  );
};

export default Homepage;

import React from "react";
import meetingImg from "../assets/route-images/homepage-meeting.jpg";
import { NavLink } from "react-router-dom";
import QueNosDefineSection from "../components/homepage/QueNosDefineSection";
import TestimoniosSection from "../components/homepage/TestimoniosSection";
import HeroSection from "../components/common/HeroSection";
import PorqueEligirnosSection from "../components/servicios/SAP/PorqueEligirnosSection";
import meetingImgPlaceholder from "../assets/route-images/homepage-meeting-placeholder.jpg";

const Homepage = () => {
  return (
    <main>
      <HeroSection placeholder={meetingImgPlaceholder} image={meetingImg}>
        <div className="flex h-full flex-col justify-evenly ">
          <h1 className="font-bold">
            Tu visión, nuestra misión: juntos, alcanzamos el éxito.
          </h1>
          <h3 className="font-semibold opacity-90">
            Somos un equipo apasionado de expertos en consultoría y desarrollo
            web, comprometidos con la excelencia y la satisfacción del cliente.
          </h3>
          <NavLink
            to="/servicios"
            className="logo-background-color self-start rounded-full border border-white p-1 px-14 text-center font-semibold transition-all hover:border-teal-500 hover:bg-white hover:text-teal-500 md:border-2 "
          >
            Nuestros Servicios
          </NavLink>
        </div>
      </HeroSection>
      <div className="mx-6">
        <QueNosDefineSection />
      </div>
      <TestimoniosSection />
      <div className="mx-6">
        <PorqueEligirnosSection />
      </div>
    </main>
  );
};

export default Homepage;

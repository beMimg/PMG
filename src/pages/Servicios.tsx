import React from "react";
import meetingImg from "../assets/route-images/servicios-meeting.jpg";
import TopSectionOfEveryRoute from "../components/common/HeroSection";
import ServicioDesarrollo from "../components/servicios/Desarrollo/ServicioDesarrollo";
import ServicioSAP from "../components/servicios/SAP/ServicioSAP";

const Servicios = () => {
  return (
    <main>
      <TopSectionOfEveryRoute image={meetingImg}>
        <div className="flex h-full flex-col justify-evenly ">
          <h1 className=" font-bold  ">Nos adaptamos a tu negocio</h1>
          <h3 className="font-semibold opacity-90 md:opacity-70">
            Nos adaptamos al modelo de negocio, pero si el cliente lo necesita,
            proporcionamos metodologías ágiles para el ciclo de vida de los
            proyectos.
          </h3>
          <h3 className="font-semibold opacity-90 md:opacity-70">
            Proporcionamos conocimientos con diferentes herramientas para
            gestión de peticiones y el tratamiento de los proyectos.
          </h3>
        </div>
      </TopSectionOfEveryRoute>
      <ServicioSAP />
      <ServicioDesarrollo />
    </main>
  );
};

export default Servicios;

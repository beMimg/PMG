import React from "react";
import meetingImg from "../assets/homepage-meeting.jpg";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section className="absolute left-0 top-0 -z-10 h-screen w-full text-white">
        <img
          src={meetingImg}
          alt="meeting"
          className={`absolute -z-20 h-full  w-full object-cover object-center`}
          style={{
            filter: "brightness(0.15)",
          }}
        />
        <div className="mx-auto flex h-full max-w-7xl flex-row items-center justify-between gap-6 p-6  pt-[110px] md:gap-20">
          <span className="logo-background-color h-[95%] w-[10px] rounded-md md:h-[85%]"></span>
          <div className="flex flex-col gap-16 ">
            <h2 className="  text-3xl font-bold md:text-5xl ">
              Tu visión, nuestra misión: juntos, alcanzamos el éxito.
            </h2>
            <h2 className="text-2xl font-semibold opacity-90   md:text-3xl md:opacity-70">
              Somos un equipo apasionado de expertos en consultoría y desarrollo
              web, comprometidos con la excelencia y la satisfacción del
              cliente.
            </h2>
            <NavLink
              to="/servicios"
              className=" logo-background-color hover: w-[300px] rounded-full border-2 border-white p-2 px-5 text-center text-lg font-semibold transition-all hover:border-teal-500 hover:bg-white hover:text-teal-500 md:text-xl"
            >
              Nuestros Servicios
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;

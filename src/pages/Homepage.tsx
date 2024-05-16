import React from "react";
import meetingImg from "../assets/homepage-meeting.jpg";
import { NavLink } from "react-router-dom";
import LogoSquare from "../components/LogoSquare";

const Homepage = () => {
  return (
    <>
      <section className="mx-auto flex h-screen max-w-7xl flex-row items-center justify-between gap-6 px-6 pt-[110px]  text-white  md:gap-20">
        <img
          src={meetingImg}
          alt="meeting"
          className={`absolute left-0 top-0 -z-20 h-full w-full object-cover object-center`}
          style={{
            filter: "brightness(0.15)",
          }}
        />
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
      </section>
      <main className=" ">
        <section className="mx-auto flex max-w-7xl flex-col gap-20  px-6 py-12 md:gap-32 ">
          <div
            className="flex flex-col items-center gap-2  text-center uppercase"
            role="contentinfo"
            aria-labelledby="section-heading"
          >
            <p id="section-heading" className="sr-only">
              Section heading: Que nos define
            </p>
            <p className="text-xl md:text-2xl" aria-hidden="true">
              Que
            </p>
            <p
              className="logo-text-color text-4xl font-extrabold"
              aria-hidden="true"
            >
              nos define
            </p>
            <h1 className=" text-3xl font-semibold opacity-80">
              ACELERACIÓN DEL CRECIMIENTO DIGITAL
            </h1>
          </div>
          <div className="flex flex-col gap-20 md:grid md:grid-cols-3">
            <div className="flex flex-col items-center justify-start gap-14">
              <LogoSquare size="160px" title="Maestría en Tecnología" />
              <p className="text-center">
                En PMG Solutions and Development, somos expertos en tecnología y
                neutrales en cuanto a plataformas gracias a nuestra rápida
                capacidad de adaptación y resolución ante cualquier situación y
                desafío empresarial.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start gap-14">
              <LogoSquare size="160px" title="Desafíos Complejos" />
              <p className=" text-center">
                Nos apasionan los desafíos tecnológicos con un alto impacto
                empresarial. Por ello, contamos con equipos de alto rendimiento
                y la capacidad de integrar tecnologías de manera fiable y
                sostenible.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start gap-14">
              <LogoSquare size="160px" title="Excelencia Operativa" />
              <p className="text-center">
                Guiamos la evolución digital de nuestros clientes de principio a
                fin, proporcionando nuestra experiencia multisectorial y
                profundo conocimiento del mercado.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-20 bg-gradient-to-b from-cyan-800 to-teal-500 py-12 md:gap-32">
          <div
            className="flex flex-col items-center gap-2  text-center uppercase"
            role="contentinfo"
            aria-labelledby="section-heading-2"
          >
            <p className="sr-only" id="section-heading-2">
              Section Heading 2: Somos confiados
            </p>
            <p className="text-xl text-white md:text-2xl" aria-hidden="true">
              Somos
            </p>
            <h1 className="text-4xl font-extrabold text-white">Confiados</h1>
          </div>
          <h1></h1>
        </section>
      </main>
    </>
  );
};

export default Homepage;

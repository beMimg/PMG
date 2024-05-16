import React from "react";
import aurenLogo from "../../assets/testimonios/auren-logo.png";
import plexusLogo from "../../assets/testimonios/plexus-logo.png";
import globalviaLogo from "../../assets/testimonios/globalvia-logo.png";
import unisysLogo from "../../assets/testimonios/unisys-logo.png";
import metroLogo from "../../assets/testimonios/metro-logo.png";
import g3Logo from "../../assets/testimonios/g3-logo.png";

const TestimoniosSection = () => {
  return (
    <section className="flex flex-col  gap-20 bg-gradient-to-b from-cyan-800 to-teal-500 py-12">
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
        <h1 className="text-5xl font-extrabold text-white">Confiados</h1>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 md:grid md:grid-rows-2 md:gap-0 md:grayscale md:hover:grayscale-0">
        <div className="flex w-full flex-col items-center justify-between  gap-12 transition-all md:flex-row md:gap-0">
          <img
            src={aurenLogo}
            alt="Auren company"
            className="w-[150px] md:w-[250px]"
          />
          <img
            src={plexusLogo}
            alt="Plexus Tech company"
            className="w-[150px] md:w-[250px]"
          />
          <img
            src={globalviaLogo}
            alt="Globalvia Company"
            className="w-[150px] md:w-[250px]"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-12 md:flex-row ">
          <img
            src={unisysLogo}
            alt="Unisys company"
            className="w-[150px] md:w-[250px]"
          />
          <img
            src={metroLogo}
            alt="Metro Madrid company"
            className="w-[150px] md:w-[250px]"
          />
          <img
            src={g3Logo}
            alt="G3 Consulting company"
            className="h-[45px] md:w-[150px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;

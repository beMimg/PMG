import React from "react";
import scaleGraphImg from "../../assets/scale-porquepmg.jpg";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

const PorquePMG = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <div className="flex flex-col justify-between gap-14 md:flex-row md:gap-32">
        <div className="flex flex-col justify-around gap-4 lg:gap-0">
          <h1 className="text-4xl font-bold text-black ">¿Por qué PMG?</h1>
          <p>
            En PMG, combinamos <strong>innovación tecnológica</strong> con una{" "}
            <strong>profunda experiencia</strong> en el sector para ofrecer{" "}
            <strong>soluciones personalizadas</strong> que se adaptan a las
            necesidades específicas de cada cliente. Nos enorgullecemos de
            mantener los más altos <strong>estándares de calidad</strong> en
            cada proyecto, asegurando <strong>resultados excepcionales</strong>{" "}
            y la <strong>satisfacción</strong> de nuestros clientes. Nuestro
            equipo de profesionales altamente calificados y con{" "}
            <strong>experiencia internacional</strong> nos permite abordar
            desafíos complejos con eficacia y creatividad. Entendemos que cada
            cliente es único, por lo que trabajamos estrechamente con ellos para
            diseñar y ejecutar estrategias que impulsen su{" "}
            <strong>crecimiento y éxito</strong>. Nuestro historial de éxitos
            con algunas de las marcas más prestigiosas del mundo es testimonio
            de nuestra capacidad para entregar soluciones que marcan la
            diferencia. En PMG, estamos siempre a la vanguardia de las últimas{" "}
            <strong>tecnologías y tendencias del mercado</strong>, lo que nos
            permite ofrecer soluciones que no solo resuelven problemas actuales,
            sino que también anticipan futuras necesidades.
          </p>
        </div>
        <img
          src={scaleGraphImg}
          alt="scale graph"
          className="logo-border-color h-[250px] w-[250px] min-w-[250px] self-center rounded-full object-cover object-center transition-all hover:scale-105 lg:h-[300px] lg:w-[300px] lg:min-w-[300px]  xl:h-[400px] xl:w-[400px] xl:min-w-[400px] "
        />
      </div>
    </SectionMaxW7XL>
  );
};

export default PorquePMG;

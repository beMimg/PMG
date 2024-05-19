import React from "react";
import scaleGraphImg from "../../assets/scale-porquepmg.jpg";

const PorquePMG = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-between gap-14 px-6 py-12  md:flex-row md:gap-32">
      <div className="flex flex-col justify-around gap-4 lg:gap-0">
        <h1 className="text-4xl font-bold text-black ">¿Por qué PMG?</h1>
        <p>
          En PMG, combinamos <strong>innovación tecnológica</strong> con una{" "}
          <strong>profunda experiencia</strong> en el sector para ofrecer{" "}
          <strong>soluciones personalizadas</strong> que se adaptan a las
          necesidades específicas de cada cliente. Nos enorgullecemos de
          mantener los más altos <strong>estándares de calidad</strong> en cada
          proyecto, asegurando <strong>resultados excepcionales</strong> y la{" "}
          <strong>satisfacción</strong> de nuestros clientes. Nuestro equipo de
          profesionales altamente calificados y con{" "}
          <strong>experiencia internacional</strong> nos permite abordar
          desafíos complejos con eficacia y creatividad. Entendemos que cada
          cliente es único, por lo que trabajamos estrechamente con ellos para
          diseñar y ejecutar estrategias que impulsen su{" "}
          <strong>crecimiento y éxito</strong>. Nuestro historial de éxitos con
          algunas de las marcas más prestigiosas del mundo es testimonio de
          nuestra capacidad para entregar soluciones que marcan la diferencia.
          En PMG, estamos siempre a la vanguardia de las últimas{" "}
          <strong>tecnologías y tendencias del mercado</strong>, lo que nos
          permite ofrecer soluciones que no solo resuelven problemas actuales,
          sino que también anticipan futuras necesidades.
        </p>
      </div>
      <img
        src={scaleGraphImg}
        alt="scale graph"
        className="logo-border-color h-[250px] w-[250px] min-w-[250px] self-center rounded-full object-cover object-center lg:h-[300px] lg:w-[300px] lg:min-w-[300px]  xl:h-[400px] xl:w-[400px] xl:min-w-[400px] "
      />
    </section>
  );
};

export default PorquePMG;
{
  /* <ul className="flex flex-col gap-4">
<li>
  <strong>Innovación y Experiencia:</strong> En PMG, combinamos
  innovación tecnológica con una profunda experiencia en el sector
  para ofrecer soluciones personalizadas que se adaptan a las
  necesidades específicas de cada cliente.
</li>
<li>
  <strong>Calidad y Compromiso:</strong> Nos enorgullecemos de
  mantener los más altos estándares de calidad en cada proyecto,
  asegurando resultados excepcionales y la satisfacción de nuestros
  clientes.
</li>
<li>
  <strong>Talento Global:</strong> Contamos con un equipo de
  profesionales altamente calificados y con experiencia internacional,
  lo que nos permite abordar desafíos complejos con eficacia y
  creatividad.
</li>
<li>
  <strong>Enfoque Personalizado:</strong> Entendemos que cada cliente
  es único. Por eso, trabajamos estrechamente con ellos para diseñar y
  ejecutar estrategias que impulsen su crecimiento y éxito.
</li>
<li>
  <strong>Resultados Comprobados:</strong> Nuestro historial de éxitos
  con algunas de las marcas más prestigiosas del mundo es testimonio
  de nuestra capacidad para entregar soluciones que marcan la
  diferencia.
</li>
<li>
  <strong>Compromiso con la Innovación:</strong> En PMG, estamos
  siempre a la vanguardia de las últimas tecnologías y tendencias del
  mercado, lo que nos permite ofrecer soluciones que no solo resuelven
  problemas actuales, sino que también anticipan futuras necesidades.
</li>
</ul>
<h2 className=" font-medium">
Elige PMG para llevar tu negocio al siguiente nivel con soluciones de
desarrollo y consultoría de TI que realmente funcionan.
</h2> */
}

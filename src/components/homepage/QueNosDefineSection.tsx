import React from "react";
import LogoSquare from "../logo/LogoSquare";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

const QueNosDefineSection = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <div
        className="flex flex-col items-center gap-2  text-center uppercase "
        role="contentinfo"
        aria-labelledby="section-heading"
      >
        <p id="section-heading" className="sr-only">
          Section heading: Que nos define
        </p>
        <h3 className="" aria-hidden="true">
          Que
        </h3>
        <h1 className="logo-text-color  font-extrabold" aria-hidden="true">
          nos define
        </h1>
        <h2 className="font-semibold opacity-80">
          ACELERACIÓN DEL CRECIMIENTO DIGITAL
        </h2>
      </div>
      <div className="flex flex-col gap-20 text-lg md:grid md:grid-cols-3">
        <div className="flex flex-col items-center justify-start gap-14 ">
          <LogoSquare size="160px" title="Maestría en Tecnología" />
          <p className="text-center">
            En PMG Solutions and Development, somos expertos en tecnología y
            neutrales en cuanto a plataformas gracias a nuestra rápida capacidad
            de adaptación y resolución ante cualquier situación y desafío
            empresarial.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-14">
          <LogoSquare size="160px" title="Desafíos Complejos" />
          <p className=" text-center">
            Nos apasionan los desafíos tecnológicos con un alto impacto
            empresarial. Por ello, contamos con equipos de alto rendimiento y la
            capacidad de integrar tecnologías de manera fiable y sostenible.
          </p>
        </div>
        <div className="flex flex-col items-center justify-start gap-14">
          <LogoSquare size="160px" title="Excelencia Operativa" />
          <p className="text-center">
            Guiamos la evolución digital de nuestros clientes de principio a
            fin, proporcionando nuestra experiencia multisectorial y profundo
            conocimiento del mercado.
          </p>
        </div>
      </div>
    </SectionMaxW7XL>
  );
};

export default QueNosDefineSection;

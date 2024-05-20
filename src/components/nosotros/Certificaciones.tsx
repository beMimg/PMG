import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import one from "../../assets/certifications/netweaver.png";
import two from "../../assets/certifications/btp-extension.png";
import three from "../../assets/certifications/certified-associate.png";
import four from "../../assets/certifications/certified-specialist.png";
import five from "../../assets/certifications/development-associate.png";
import six from "../../assets/certifications/sap-cloud.png";

const Certificaciones = () => {
  const imageStyle = "rounded-md border border-blue-500 max-h-[150px]";

  return (
    <div className="relative py-12">
      <div
        style={{ backgroundColor: "#f0f0f0" }}
        className="absolute left-0 top-0 -z-20 h-full w-full"
      ></div>
      <SectionMaxW7XL>
        <h1 className="text-4xl font-extrabold ">Certificaciones</h1>
        <div className="flex flex-col justify-between  gap-14 lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-start justify-between gap-12 text-lg">
            <p>
              Dentro de PMG Solutions & Development, creemos que el crecimiento
              es muy importante, pero para crecer, primero debemos aprender.
            </p>
            <p>
              Por este motivo, invertimos mucho en formaciones del equipo, y en
              certificaciones oficiales que acrediten el conocimiento de la
              herramienta y tecnología.
            </p>
            <p>
              Esto son solo alguno de los ejemplos de las certificaciones en
              curso por nuestro equipo.
            </p>
          </div>
          <aside className=" grid h-full grid-cols-2 gap-6 place-self-center md:grid-cols-3 lg:items-center">
            <img src={one} alt="" className={imageStyle} />
            <img src={two} alt="" className={imageStyle} />
            <img src={three} alt="" className={imageStyle} />
            <img src={four} alt="" className={imageStyle} />
            <img src={five} alt="" className={imageStyle} />
            <img src={six} alt="" className={imageStyle} />
          </aside>
        </div>
      </SectionMaxW7XL>
    </div>
  );
};

export default Certificaciones;

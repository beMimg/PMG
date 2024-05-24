import React from "react";
import jiraLogo from "../../../assets/metodologias/JIRA-logo.png";
import otrsLogo from "../../../assets/metodologias/OTRS-logo.png";
import serviceNowLogo from "../../../assets/metodologias/ServiceNow-logo.png";
import trelloLogo from "../../../assets/metodologias/Trello-logo.png";
import SectionMaxW7XL from "../../common/SectionMaxW7XL";

const MetodologiasDeTrabajoSection = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="rose">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="flex max-w-[700px] flex-col gap-10 transition-transform duration-200 ease-in-out group-hover:translate-x-5 md:justify-between md:gap-0">
          <h1 className=" font-bold">Metodologías de trabajo</h1>
          <p>
            Nos adaptamos al modelo de negocio, pero si el cliente lo necesita,
            proporcionamos metodologías ágiles para el ciclo de vida de los
            proyectos.
          </p>
          <p>
            Proporcionamos conocimientos con diferentes herramientas para
            gestión de peticiones y el tratamiento de los proyectos.
          </p>
        </div>
        <div className="grid grid-cols-2 place-items-center items-center gap-8 transition-transform duration-200 ease-in-out group-hover:-translate-x-5 md:flex md:flex-col">
          <img
            src={jiraLogo}
            alt="Jira company logo"
            className="w-[100px] max-w-[200px] md:min-w-[200px]"
          />
          <img
            src={otrsLogo}
            alt="OTRS company logo"
            className="w-[100px] md:min-w-[200px] md:max-w-[200px] "
          />
          <img
            src={serviceNowLogo}
            alt="Service Now company logo"
            className="w-[100px] md:min-w-[200px] md:max-w-[200px] "
          />
          <img
            src={trelloLogo}
            alt="Trello company logo"
            className="w-[100px] md:min-w-[200px] md:max-w-[200px] "
          />
        </div>
      </div>
    </SectionMaxW7XL>
  );
};

export default MetodologiasDeTrabajoSection;

import React from "react";
import HoverCard from "./HoverCard";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

const NuestrosValores = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="rose">
      <h1 className="text-center font-bold text-black">Nuestros Valores</h1>
      <div className="grid grid-cols-2 place-items-center justify-between  gap-4 md:flex md:flex-row">
        <HoverCard
          description="Somos un equipo de apoyo, dentro y fuera."
          title="solidaridad"
        />
        <HoverCard
          description="Nos destacamos por ser claros y transparentes."
          title="Honestidad"
        />
        <HoverCard
          title="calidad"
          description="Innovamos con vocación y código para alcanzar la excelencia."
        />
        <HoverCard
          title="compromiso"
          description="Nuestra filosofía es ganar-ganar, comprometidos en todo momento."
        />
      </div>
    </SectionMaxW7XL>
  );
};

export default NuestrosValores;

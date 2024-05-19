import React from "react";
import HoverCard from "./HoverCard";

const NuestrosValores = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-between gap-14 px-6 py-12 md:gap-24">
      <h1 className="text-center text-4xl font-bold text-black">
        Nuestros Valores
      </h1>
      <div className="grid grid-cols-2 flex-row place-items-center  justify-between gap-4 md:flex">
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
    </section>
  );
};

export default NuestrosValores;

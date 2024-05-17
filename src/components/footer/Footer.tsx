import React from "react";
import logo from "../../assets/complete-logo.png";

const Footer = () => {
  return (
    <footer className=" bg-slate-800 p-6 text-gray-400">
      <div className="mx-auto flex max-w-7xl  flex-col justify-between gap-12 md:flex-row md:items-center">
        <img src={logo} alt="PMG company" className="h-[200px] self-center" />
        <div>
          <p className="font-bold">Contáctanos</p>
          <p>info@pmg-solutions.es</p>
        </div>
        <div>
          <p className="font-bold">Visítanos</p>
          <p>
            C\ Plaza de España Nº 1, Planta 1, Oficina 5. 11630 - Arcos de la
            Frontera.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/logo/logo_pmg2-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  bg-gray-900 p-6 py-14 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 text-sm md:grid md:grid-cols-3">
        <img src={logo} alt="PMG company" className=" w-[300px] self-center" />
        <div className="flex h-full w-full flex-row items-start justify-evenly justify-self-center text-center text-gray-400 md:flex-col md:items-center ">
          <div>
            <p className="font-bold text-gray-200">Contáctanos</p>
            <p>info@pmg-solutions.es</p>
          </div>
          <div>
            <p className="font-bold text-gray-200">Visítanos</p>
            <p>
              C\ Plaza de España Nº 1, Planta 1, Oficina 5.
              <br /> 11630 - Arcos de la Frontera.
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-row justify-between justify-self-end font-semibold text-gray-200 md:w-min md:flex-col ">
          <Link to="nosotros">Nosotros</Link>
          <Link to="servicios">Servicios</Link>
          <Link to="contacto">Contacto</Link>
          <Link to="empleo">Empleo</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/logo/logo_pmg2-removebg-preview.png";
import { Link } from "react-router-dom";
import CustomLogo from "../common/CustomLogo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-300 to-gray-100 p-6 py-14 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 text-sm md:grid md:grid-cols-3">
        <div className="pl-6 md:self-start md:pl-0">
          <CustomLogo component="footer" />
        </div>
        <div className="flex h-full w-full flex-row justify-between justify-self-center font-semibold md:w-min  md:flex-col md:text-center ">
          <Link to="nosotros">Nosotros</Link>
          <Link to="servicios">Servicios</Link>
          <Link to="contacto">Contacto</Link>
          <Link to="empleo">Empleo</Link>
        </div>
        <div className="justify-self-center">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

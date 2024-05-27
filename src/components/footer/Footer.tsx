import React from "react";
import { Link } from "react-router-dom";
import CustomLogo from "../common/CustomLogo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-8 bg-gradient-to-b from-gray-300 to-gray-100 p-6 pt-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 text-sm md:grid md:grid-cols-3">
        <div className="pl-6 md:self-start md:pl-0">
          <CustomLogo component="footer" />
        </div>
        <div className="flex h-full w-full flex-row justify-between justify-self-center font-medium  md:w-min  md:flex-col md:text-center ">
          <Link to="nosotros">Nosotros</Link>
          <Link to="servicios">Servicios</Link>
          <Link to="contacto">Contacto</Link>
        </div>
        <div className="justify-self-center">
          <Socials />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className=" text-xs">© 2024 PMG. All rights reserved ©.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="nosotros">Nosotros</NavLink>
      <NavLink to="testimonios">Testimonios</NavLink>
      <NavLink to="servicios">Servicios</NavLink>
      <NavLink to="contacto">Contacto</NavLink>
      <NavLink to="empleo">Empleo</NavLink>
    </>
  );
};

export default NavLinks;

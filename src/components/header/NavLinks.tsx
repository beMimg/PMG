import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ setIsMenuOpen }: NavLinksProps) => {
  function handleClick() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <NavLink onClick={handleClick} to="nosotros">
        Nosotros
      </NavLink>

      <NavLink onClick={handleClick} to="servicios">
        Servicios
      </NavLink>
      <NavLink onClick={handleClick} to="contacto">
        Contacto
      </NavLink>
      <NavLink onClick={handleClick} to="empleo">
        Empleo
      </NavLink>
    </>
  );
};

export default NavLinks;

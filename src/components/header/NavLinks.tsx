import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks = ({ setIsMenuOpen }: NavLinksProps) => {
  function handleClick() {
    setIsMenuOpen(false);
  }

  const navLinkStyle = "transition-all hover:-translate-y-1";
  return (
    <>
      <NavLink onClick={handleClick} to="nosotros" className={navLinkStyle}>
        Nosotros
      </NavLink>

      <NavLink onClick={handleClick} className={navLinkStyle} to="servicios">
        Servicios
      </NavLink>
      <NavLink onClick={handleClick} className={navLinkStyle} to="contacto">
        Contacto
      </NavLink>
    </>
  );
};

export default NavLinks;

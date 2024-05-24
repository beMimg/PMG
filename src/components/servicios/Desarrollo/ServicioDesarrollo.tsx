import React from "react";
import DescripcionDeServicio from "../TipoDeServicioSection";
import desarrolloWebImg from "../../../assets/desarrollo-web.jpg";
import DesarrolloPersonalizadoSection from "./DesarrolloPersonalizadoSection";
import TechStackSection from "./TechStackSection";

const ServicioDesarrollo = () => {
  return (
    <DescripcionDeServicio
      color="blue"
      title="Desarrollo Software & Web"
      direction="left"
      image={desarrolloWebImg}
    >
      <DesarrolloPersonalizadoSection />
      <TechStackSection />
    </DescripcionDeServicio>
  );
};

export default ServicioDesarrollo;

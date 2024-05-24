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
      <div className="mx-6">
        <DesarrolloPersonalizadoSection />
        <TechStackSection />
      </div>
    </DescripcionDeServicio>
  );
};

export default ServicioDesarrollo;

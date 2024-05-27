import React from "react";
import DescripcionDeServicio from "../TipoDeServicioSection";
import desarrolloWebImg from "../../../assets/desarrollo-web.jpg";
import DesarrolloPersonalizadoSection from "./DesarrolloPersonalizadoSection";
import TechStackSection from "./TechStackSection";
import desarrolloWebPlaceholder from "../../../assets/desarrollo-web-placeholder.jpg";

const ServicioDesarrollo = () => {
  return (
    <DescripcionDeServicio
      color="blue"
      title="Desarrollo Software & Web"
      direction="left"
      image={desarrolloWebImg}
      placeholder={desarrolloWebPlaceholder}
    >
      <div className="mx-6">
        <DesarrolloPersonalizadoSection />
        <TechStackSection />
      </div>
    </DescripcionDeServicio>
  );
};

export default ServicioDesarrollo;

import React from "react";
import DescripcionDeServicio from "../TipoDeServicioSection";
import desarrolloWebImg from "../../../assets/desarrollo-web.jpg";
import DesarrolloPersonalizadoSection from "./DesarrolloPersonalizadoSection";
import TechStackSection from "./TechStackSection";
import DivMaxW7XL from "../../common/DivMaxW7XL";

const ServicioDesarrollo = () => {
  return (
    <DescripcionDeServicio
      color="blue"
      title="Desarrollo Software & Web"
      direction="left"
      image={desarrolloWebImg}
    >
      <DivMaxW7XL>
        <DesarrolloPersonalizadoSection />
        <TechStackSection />
      </DivMaxW7XL>
    </DescripcionDeServicio>
  );
};

export default ServicioDesarrollo;

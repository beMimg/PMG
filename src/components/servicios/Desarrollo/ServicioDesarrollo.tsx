import React from "react";
import DescripcionDeServicio from "../DescripcionDeServicio";
import SectionMaxW7XL from "../../common/SectionMaxW7XL";
import desarrolloWebImg from "../../../assets/desarrollo-web.jpg";
import DesarrolloPersonalizado from "./DesarrolloPersonalizado";
import TechStack from "./TechStack";

const ServicioDesarrollo = () => {
  return (
    <DescripcionDeServicio
      color="blue"
      title="Desarrollo Software & Web"
      direction="left"
      image={desarrolloWebImg}
    >
      <SectionMaxW7XL>
        <DesarrolloPersonalizado />
        <TechStack />
      </SectionMaxW7XL>
    </DescripcionDeServicio>
  );
};

export default ServicioDesarrollo;

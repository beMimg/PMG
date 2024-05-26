import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import GoogleMap from "./GoogleMap";

const Encuentranos = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <h1 className="font-bold">Encuéntranos</h1>
      <div className="flex flex-col gap-12 md:flex-row ">
        <div className="flex flex-col justify-between gap-8 ">
          <div className="flex flex-row items-center gap-4 ">
            <FaLocationDot className="text-2xl" />
            <div>
              <p className="font-semibold">Localización</p>
              <a
                target="a_blank"
                href="https://maps.app.goo.gl/vRnLdEWXpn7giESN7"
                className="opacity-80"
              >
                Calle Plaza de España Nº 1, Planta 1, Oficina 5, 11630 Arcos de
                la Frontera, Cádiz, España.
              </a>
            </div>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="flex flex-row items-center gap-4 ">
            <IoIosMail className="text-2xl" />
            <div>
              <p className="font-semibold">Email</p>
              <a className="opacity-80" href="mailto:info@pmg-solutions.es">
                info@pmg-solutions.es
              </a>
            </div>
          </div>
          <div className="border-t border-gray-300"></div>
          <div className="flex flex-row items-center gap-4">
            <IoIosPhonePortrait className="text-2xl" />
            <div>
              <p className="font-semibold">Teléfono</p>
              <a className="opacity-80" href="tel:+34 645 682 314">
                (+34) 645 682 314
              </a>
            </div>
          </div>
        </div>
        <GoogleMap />
      </div>
    </SectionMaxW7XL>
  );
};

export default Encuentranos;

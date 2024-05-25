import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import { CiLink } from "react-icons/ci";

const GoogleMap = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <div className="just flex flex-row items-center justify-center gap-4">
        <h1 className="font-bold">Google Maps </h1>
        <a
          href="https://maps.app.goo.gl/14Pb29yY583k77G9A"
          aria-label="Open Google Maps link"
          className="text-4xl"
        >
          {" "}
          <CiLink />
        </a>
      </div>
      <iframe
        className="h-[600px] w-[100%] rounded-xl border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6393.639445936938!2d-5.8156740236217646!3d36.7508980704763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0da161ca286843%3A0x408160985e2727a7!2sPl.%20Espa%C3%B1a%2C%201%2C%2011630%20Arcos%20de%20la%20Frontera%2C%20C%C3%A1diz!5e0!3m2!1sen!2ses!4v1716628496014!5m2!1sen!2ses"
        loading="lazy"
        title="Google Maps - Location"
      ></iframe>
    </SectionMaxW7XL>
  );
};

export default GoogleMap;

import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

const DondeNosEncontramos = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <h1 className="text-4xl font-semibold lg:text-7xl">
        Donde nos encontramos?
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-[30%,40%]"></div>
    </SectionMaxW7XL>
  );
};

export default DondeNosEncontramos;

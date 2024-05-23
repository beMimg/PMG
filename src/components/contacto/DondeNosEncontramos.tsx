import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";

const DondeNosEncontramos = () => {
  return (
    <SectionMaxW7XL colored={false} bgHoverColor="none">
      <h1 className="text-4xl font-semibold lg:text-7xl">
        Donde nos encontramos?
      </h1>
      <div className="flex flex-col md:grid md:grid-cols-[30%,40%]">
        <form className="flex flex-col gap-4 rounded-lg bg-gray-200 p-4">
          <input
            type="text"
            name="name"
            placeholder="¿Cuál es tu nombre?"
            className="rounded-lg p-4"
          />
          <input
            type="text"
            name="name"
            placeholder="¿Cuál es tu apellido?"
            className="rounded-lg p-4"
          />
          <input
            type="email"
            name="name"
            placeholder="Email"
            className="rounded-lg p-4"
          />
          <input
            type="number"
            name="name"
            placeholder="Teléfono de contacto"
            className="rounded-lg p-4"
          />
          <textarea name="motivo" className="rounded-lg p-4"></textarea>
          <label htmlFor="terms">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className=" scale-125"
            />{" "}
            He revisado y acepto los términos de uso y la política de
            privacidad.
          </label>
          <button className="logo-background-color border p-2 text-lg font-medium text-white transition-all hover:border-teal-500 hover:bg-white hover:text-teal-500">
            Enviar
          </button>
        </form>
      </div>
    </SectionMaxW7XL>
  );
};

export default DondeNosEncontramos;

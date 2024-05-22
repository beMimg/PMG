import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import modeloTrabajoImg from "../../assets/modelo-trabajo.png";

const ModeloDeTrabajo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded bg-gray-400 p-4 font-bold text-white">
        Arquitecto Técnico Director general
      </div>
      <div className="mt-4 flex flex-row space-x-4">
        <div className="flex flex-col items-center">
          <div className="rounded bg-blue-200 p-4">Resp. ABAP</div>
          <div className="mt-2 flex flex-col items-center">
            <div className="flex flex-row space-x-2">
              <div className="rounded bg-green-200 p-2">ABAP / HANA Team</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded bg-blue-200 p-4">Resp. HANA</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded bg-blue-200 p-4">Resp. FIORI/BTP</div>
          <div className="mt-2 flex flex-col items-center">
            <div className="flex flex-row space-x-2">
              <div className="rounded bg-green-200 p-2">FIORI / BTP Team</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded bg-blue-200 p-4">Resp. Basis</div>
          <div className="mt-2 flex flex-col items-center">
            <div className="flex flex-row space-x-2">
              <div className="rounded bg-green-200 p-2">Basis Team</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded bg-blue-200 p-4">Resp. Funcional</div>
          <div className="mt-2 flex flex-col items-center">
            <div className="flex flex-row space-x-2">
              <div className="rounded bg-green-200 p-2">External Team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeloDeTrabajo;

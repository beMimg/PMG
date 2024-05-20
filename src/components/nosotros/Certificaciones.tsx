import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import netWeaverImg from "../../assets/certifications/abap-with-sap-netweaver.png";
import btpExtensionImg from "../../assets/certifications/sap-btp-extension-developer.png";
import abapForSapImg from "../../assets/certifications/abap-for-sap-hana-2.0.png";
import sapCloudImg from "../../assets/certifications/sap-cloud-platform.png";
import sapFioriAppImg from "../../assets/certifications/sap-fiori-app-developer.png";
import systemAdministrationImg from "../../assets/certifications/sap-s4hana-system-administration.png";

const Certificaciones = () => {
  const imageStyle = "rounded-md border border-blue-500 max-h-[150px]";

  return (
    <div className="relative py-12">
      <div
        style={{ backgroundColor: "#f0f0f0" }}
        className="absolute left-0 top-0 -z-20 h-full w-full"
      ></div>
      <SectionMaxW7XL>
        <h1 className="text-4xl font-extrabold ">Certificaciones</h1>
        <div className="flex flex-col justify-between  gap-14 lg:grid lg:grid-cols-2">
          <div className="flex flex-col items-start justify-between gap-12 text-lg">
            <p>
              Dentro de PMG Solutions & Development, creemos que el crecimiento
              es muy importante, pero para crecer, primero debemos aprender.
            </p>
            <p>
              Por este motivo, invertimos mucho en formaciones del equipo, y en
              certificaciones oficiales que acrediten el conocimiento de la
              herramienta y tecnología.
            </p>
            <p>
              Esto son solo alguno de los ejemplos de las certificaciones en
              curso por nuestro equipo.
            </p>
          </div>
          <aside className=" grid h-full grid-cols-2 gap-6 place-self-center md:grid-cols-3 lg:items-center">
            <img
              src={abapForSapImg}
              alt="Abap For SAP HANA 2.0 - Certified Specialist"
              className={imageStyle}
            />
            <img
              src={sapFioriAppImg}
              alt="Sap Fiori Application Developer - Certified Development Associate"
              className={imageStyle}
            />
            <img
              src={systemAdministrationImg}
              alt="SAP S/4HANA System Administration - Certified Associate"
              className={imageStyle}
            />
            <img
              src={btpExtensionImg}
              alt="SAP BTP Extension Developer - Certified Development Associate"
              className={imageStyle}
            />
            <img
              src={sapCloudImg}
              alt="SAP Cloud Platform 1.1 - Certified Associate"
              className={imageStyle}
            />
            <img
              src={netWeaverImg}
              alt="ABAP with SAP NetWeaver 7.50"
              className={imageStyle}
            />
          </aside>
        </div>
      </SectionMaxW7XL>
    </div>
  );
};

export default Certificaciones;

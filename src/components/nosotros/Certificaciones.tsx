import React from "react";
import SectionMaxW7XL from "../common/SectionMaxW7XL";
import netWeaverImg from "../../assets/certifications/abap-with-sap-netweaver.jpg";
import btpExtensionImg from "../../assets/certifications/sap-btp-extension-developer.jpg";
import abapForSapImg from "../../assets/certifications/abap-for-sap-hana-2.0.jpg";
import sapCloudImg from "../../assets/certifications/sap-cloud-platform.png";
import sapFioriAppImg from "../../assets/certifications/sap-fiori-app-developer.jpg";
import systemAdministrationImg from "../../assets/certifications/sap-s4hana-system-administration.jpg";

const Certificaciones = () => {
  const imageStyle =
    "rounded-md border border-blue-500 max-h-[150px] hover:-translate-y-2 transition-all";

  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <h1 className="font-bold">Certificaciones</h1>
      <div className="flex flex-col justify-between  gap-14 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-start justify-between gap-12 ">
          <p>
            Dentro de PMG Solutions & Development, creemos que el crecimiento es
            muy importante, pero para crecer, primero debemos aprender.
          </p>
          <p>
            Por este motivo, invertimos mucho en formaciones del equipo, y en
            certificaciones oficiales que acrediten el conocimiento de la
            herramienta y tecnología.
          </p>
          <p>
            Esto son solo alguno de los ejemplos de las certificaciones en curso
            por nuestro equipo.
          </p>
        </div>
        <div className=" grid h-full grid-cols-2 gap-6 place-self-center md:grid-cols-3 lg:items-center">
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
        </div>
      </div>
    </SectionMaxW7XL>
    // </div>
  );
};

export default Certificaciones;

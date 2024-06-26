import React from "react";
import css from "../../../assets/techstack/development/css.svg";
import javascript from "../../../assets/techstack/development/javascript.svg";
import html from "../../../assets/techstack/development/html.svg";
import react from "../../../assets/techstack/development/react.svg";
import typeScript from "../../../assets/techstack/development/typescript.svg";
import googleCloud from "../../../assets/techstack/development/google-cloud-svgrepo-com.svg";
import postgresSql from "../../../assets/techstack/development/postgresql-logo-svgrepo-com.svg";
import nodeJs from "../../../assets/techstack/development/nodejs.svg";
import mySql from "../../../assets/techstack/development/mysql.png";
import mongoDB from "../../../assets/techstack/development/mongodb.svg";
import cSharpLogo from "../../../assets/techstack/development/c-sharp-svgrepo-com.svg";
import awsLogo from "../../../assets/techstack/development/aws-svgrepo-com.svg";
import TwoSidesCard from "../../common/TwoSidesCard";
import SectionMaxW7XL from "../../common/SectionMaxW7XL";

const techStackLogos = [
  { title: "JavaScript", image: javascript },
  { title: "React", image: react },
  { title: "TypeScript", image: typeScript },
  { title: "HTML", image: html },
  { title: "CSS", image: css },
  { title: "NodeJS", image: nodeJs },
  { title: "Google Cloud", image: googleCloud },
  { title: "Amazon Web Services", image: awsLogo },
  { title: "PostgresSQL", image: postgresSql },
  { title: "MySQL", image: mySql },
  { title: "MongoDB", image: mongoDB },
  { title: "C#", image: cSharpLogo },
];

const TechStackSection = () => {
  return (
    <SectionMaxW7XL colored={true} bgHoverColor="theme">
      <div className="flex w-full flex-col gap-8">
        <h1 className=" font-bold">¿Qué estamos utilizando?</h1>
        <h5>
          Nos adaptamos a <strong>tus necesidades</strong> para ofrecerte la{" "}
          <strong>mejor solución.</strong>
        </h5>
        <div className="grid grid-cols-3 place-items-center gap-6 md:grid-cols-6">
          {techStackLogos.map((stack) => (
            <TwoSidesCard title={stack.title} image={stack.image} />
          ))}
        </div>
      </div>
    </SectionMaxW7XL>
  );
};

export default TechStackSection;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

interface CustomLogoProps {
  component: "header" | "footer";
}
const CustomLogo = ({ component }: CustomLogoProps) => {
  return (
    <Link
      to="/"
      className={`${component === "header" ? "flex-row" : "flex-col "} relative  flex  items-center gap-4 `}
    >
      <img
        src={logo}
        alt="logo of the company PMG"
        className={`h-[60px] ${component === "footer" && "h-[80px]"}`}
      />
      <div
        className={`flex flex-col ${component === "footer" && "items-center pr-6"} pt-1`}
      >
        <h1 className="text-3xl font-bold">PMG</h1>
        <h2
          className={`w-full ${component === "footer" ? "text-lg" : "text-xs"} md:text-xl`}
        >
          Solutions & Development
        </h2>
      </div>
    </Link>
  );
};

export default CustomLogo;

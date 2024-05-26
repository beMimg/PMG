import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="flex flex-row gap-3 md:flex-col">
      <a
        href="https://www.linkedin.com/company/pmg-solutions-development"
        className="group rounded-full  p-2 transition-all hover:bg-blue-700"
      >
        <FaLinkedinIn className="text-2xl text-black transition-all group-hover:text-white md:text-3xl" />
      </a>
      <a
        href="mailto:info@pmg-solutions.es"
        className="group rounded-full p-2 transition-all hover:bg-orange-600"
      >
        <FiMail className="text-2xl font-bold text-black transition-all group-hover:text-white md:text-3xl" />
      </a>
    </div>
  );
};

export default Socials;

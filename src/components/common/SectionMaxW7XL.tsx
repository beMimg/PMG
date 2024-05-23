import React from "react";

interface SectionProps {
  children: React.ReactNode;
  colored: boolean;
  bgHoverColor: "theme" | "rose" | "none";
}

const SectionMaxW7XL = ({ children, colored, bgHoverColor }: SectionProps) => {
  const finalHoverColor =
    bgHoverColor === "theme"
      ? "theme-bg-hover relative shadow-lg "
      : bgHoverColor === "rose" && "rose-bg-hover relative shadow-lg ";

  return (
    <section
      className={`${colored && "rounded-lg bg-gray-100 "} ${finalHoverColor} mx-auto flex w-full max-w-7xl flex-col justify-between gap-14 p-8  md:gap-24`}
    >
      {children}
    </section>
  );
};

export default SectionMaxW7XL;

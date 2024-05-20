import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const SectionMaxW7XL = ({ children }: SectionProps) => {
  return (
    <section
      className={`mx-auto flex w-full max-w-7xl flex-col justify-between gap-14 px-6 md:gap-24`}
    >
      {children}
    </section>
  );
};

export default SectionMaxW7XL;

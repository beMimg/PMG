import React from "react";

interface DivProps {
  children: React.ReactNode;
}

const DivMaxW7XL = ({ children }: DivProps) => {
  return (
    <div
      className={`mx-auto flex w-full max-w-7xl flex-col justify-between gap-14 px-6 md:gap-24`}
    >
      {children}
    </div>
  );
};

export default DivMaxW7XL;

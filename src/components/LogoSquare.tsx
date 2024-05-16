import React from "react";

interface LogoSquaseProps {
  size: string;
  title: string;
}

const LogoSquare: React.FC<LogoSquaseProps> = ({ size, title }) => {
  return (
    <div
      className="logo-background-color flex rotate-45 items-center justify-center text-2xl font-bold text-white transition-all hover:scale-105"
      style={{ height: size, width: size }}
    >
      <p className="-rotate-45 text-center">{title}</p>
    </div>
  );
};

export default LogoSquare;

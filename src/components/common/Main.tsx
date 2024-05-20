import React from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="flex w-full flex-col gap-32 py-32">{children}</main>;
};

export default Main;

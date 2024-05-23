import React from "react";

interface TopSectionHalfImageHalfContentProps {
  image: string;
  children: React.ReactNode;
}
const TopSectionHalfImageHalfContent = ({
  image,
  children,
}: TopSectionHalfImageHalfContentProps) => {
  return (
    <section className="flex h-screen flex-col">
      <img
        src={image}
        alt="4 hands together"
        className="h-1/2 w-full object-cover object-center brightness-[0.5]"
      />
      <div className="mx-auto h-1/2 w-full max-w-7xl px-6">{children}</div>
    </section>
  );
};

export default TopSectionHalfImageHalfContent;

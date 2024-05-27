import React from "react";
import "lazysizes";

interface TopSectionHalfImageHalfContentProps {
  image: string;
  placeholder: string;
  children: React.ReactNode;
}
const TopSectionHalfImageHalfContent = ({
  image,
  children,
  placeholder,
}: TopSectionHalfImageHalfContentProps) => {
  return (
    <section className="flex h-screen flex-col">
      <img
        data-src={image}
        src={placeholder}
        alt="4 hands together"
        className="lazyload h-1/2 w-full object-cover object-center brightness-[0.5]"
      />
      <div className="mx-auto h-1/2 w-full max-w-7xl px-6">{children}</div>
    </section>
  );
};

export default TopSectionHalfImageHalfContent;

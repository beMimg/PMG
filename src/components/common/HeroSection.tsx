import React from "react";
import VerticalLine from "./VerticalLine";

interface HeroSectionProps {
  image: string;
  children: React.ReactNode;
}

// This component will be used on every route. All routes follow the same pattern, an image h-screen with some content inside of it.
const HeroSection = ({ image, children }: HeroSectionProps) => {
  return (
    <section className="mx-auto flex h-screen max-w-7xl flex-row items-center justify-between gap-6 px-6 pt-[110px]  text-white  md:gap-20">
      <img
        src={image}
        alt="meeting"
        className={`absolute left-0 top-0 -z-20 h-full w-full object-cover object-center`}
        style={{
          filter: "brightness(0.15)",
        }}
      />
      <div className="flex h-full w-full flex-row items-center gap-12">
        <VerticalLine />
        {children}
      </div>
    </section>
  );
};

export default HeroSection;

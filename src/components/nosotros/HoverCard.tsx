import React from "react";

interface HoverCardProps {
  title: string;
  description: string;
}

const HoverCard = ({ title, description }: HoverCardProps) => {
  return (
    <div className="logo-background-color relative h-32 w-32 cursor-pointer overflow-hidden rounded-3xl text-base font-bold md:h-60 md:w-60 md:text-2xl">
      <div className="peer absolute z-10 h-full w-full"></div>
      <div className="logo-background-color-lighter absolute -left-16 -top-32 h-44 w-32 rounded-full transition-all duration-500 peer-hover:-left-16 peer-hover:-top-20 peer-hover:h-[140%] peer-hover:w-[170%]"></div>
      <div className="logo-background-color-lighter absolute -bottom-32 -right-16 flex h-44 w-56 items-end justify-end rounded-full text-center text-base transition-all duration-500 peer-hover:bottom-0 peer-hover:right-0 peer-hover:h-full peer-hover:w-full peer-hover:items-center peer-hover:justify-center peer-hover:rounded-b-none">
        {description}
      </div>
      <div className="flex h-full w-full items-center justify-center uppercase">
        {title}
      </div>
    </div>
  );
};

export default HoverCard;

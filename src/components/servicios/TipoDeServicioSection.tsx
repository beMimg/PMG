import React from "react";
import "lazysizes";

interface TipoDeServicioSectionProps {
  direction: "right" | "left";
  title: string;
  image: string;
  children: React.ReactNode;
  color: "rose" | "blue" | "purple";
  placeholder: string;
}

const TipoDeServicioSection = ({
  direction,
  title,
  image,
  children,
  color,
  placeholder,
}: TipoDeServicioSectionProps) => {
  const imgStyle =
    "lazyload h-[115px] w-[115px] self-center rounded-full object-cover object-center md:h-[160px] md:w-[160px]";

  const titleStyle =
    " w-full text-3xl font-bold text-white md:text-center md:text-6xl";

  const cssColor =
    color === "rose"
      ? "bg-gradient-to-br from-rose-500 to-fuchsia-800"
      : color === "blue"
        ? "bg-gradient-to-bl from-sky-500 to-indigo-800"
        : color === "purple" &&
          "bg-gradient-to-br from-fuchsia-600 to-violet-900";

  return (
    <section className="mt-24 flex flex-col gap-16">
      {/* Horizontal Bar */}
      <div
        className={`flex h-[160px] w-[95%] flex-row items-center gap-4 p-6 transition-all md:h-[200px] md:w-[70%] md:gap-0   ${direction === "right" ? "rounded-r-full" : "self-end rounded-l-full"} ${cssColor}`}
      >
        {direction === "right" ? (
          <>
            <h1 className={titleStyle}>{title}</h1>
            <img
              src={placeholder}
              data-src={image}
              alt={title}
              className={imgStyle}
            />
          </>
        ) : (
          <>
            <img
              src={placeholder}
              data-src={image}
              alt={title}
              className={imgStyle}
            />
            <h1 className={titleStyle}>{title}</h1>
          </>
        )}
      </div>
      {/* End of Horizontal Bar */}
      <div>{children}</div>
    </section>
  );
};

export default TipoDeServicioSection;

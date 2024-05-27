import React, { useCallback, useEffect, useState } from "react";
import aurenLogo from "../../assets/testimonios/auren-logo.png";
import plexusLogo from "../../assets/testimonios/plexus-logo.png";
import globalviaLogo from "../../assets/testimonios/globalvia-logo.png";
import unisysLogo from "../../assets/testimonios/unisys-logo.png";
import metroLogo from "../../assets/testimonios/metro-logo.png";
import g3Logo from "../../assets/testimonios/g3-logo.png";
import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import dishashopLogo from "../../assets/testimonios/disashop-logo.png";
import mapfreLogo from "../../assets/testimonios/mapfre-logo.svg.png";
import santanderLogo from "../../assets/testimonios/santander-logo.png";
import { motion } from "framer-motion";

const widthIncreaseAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const TestimoniosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    { src: aurenLogo, alt: "Auren company" },
    { src: plexusLogo, alt: "Plexus Tech company" },
    { src: globalviaLogo, alt: "Globalvia Company" },
    { src: unisysLogo, alt: "Unisys company" },
    { src: metroLogo, alt: "Metro Madrid company" },
    { src: g3Logo, alt: "G3 Consulting company" },
    { src: dishashopLogo, alt: "Disashop company" },
    { src: mapfreLogo, alt: "Mapfre company" },
    { src: santanderLogo, alt: "Santander company" },
  ];

  const logosPerSlide = 3;
  const totalSlides = Math.ceil(logos.length / logosPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const getCurrentLogos = () => {
    const start = currentIndex * logosPerSlide;
    const end = start + logosPerSlide;
    return logos.slice(start, end);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <motion.section
      variants={widthIncreaseAnimationVariants}
      initial="initial"
      whileInView="animate"
      className="flex  flex-col gap-20 bg-gradient-to-b from-cyan-800 to-teal-500 py-12"
    >
      <div
        className="flex flex-col items-center gap-4  text-center "
        role="contentinfo"
        aria-labelledby="section-heading-2"
      >
        <p className="sr-only" id="section-heading-2">
          Section Heading 2: Somos confiados
        </p>
        <h2 className=" uppercase text-white " aria-hidden="true">
          Somos
        </h2>
        <h1 className="font-extrabold uppercase text-white">Confiados</h1>
        <h3 className="subtitle italic text-white">
          Gracias a la amplia experiencia de nuestro equipo, hemos tenido el
          privilegio de trabajar con marcas de gran renombre.
        </h3>
      </div>
      <div className="relative mx-auto  flex h-[300px] w-full max-w-7xl flex-col gap-12 px-6 md:h-[150px] md:grayscale md:hover:grayscale-0">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-[32%] z-20 text-6xl text-white opacity-30 transition-all hover:opacity-100 "
        >
          <MdArrowLeft />
        </button>
        <div className="flex w-full  flex-col items-center justify-between gap-12 px-24 transition-all md:flex-row">
          {getCurrentLogos().map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-[150px] lg:w-[250px]"
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-[32%] z-20 text-6xl text-white opacity-30 transition-all hover:opacity-100 "
        >
          <MdArrowRight />
        </button>
      </div>
    </motion.section>
  );
};

export default TestimoniosSection;

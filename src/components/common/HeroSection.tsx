import React from "react";
import VerticalLine from "./VerticalLine";
import "lazysizes";
import { motion } from "framer-motion";

interface HeroSectionProps {
  image: string;
  placeholder: string;
  children: React.ReactNode;
}

const fadeInAnimationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
// This component will be used on every route. All routes follow the same pattern, an image h-screen with some content inside of it.
const HeroSection = ({ image, placeholder, children }: HeroSectionProps) => {
  return (
    <section className="mx-auto flex h-screen max-w-7xl  justify-between px-6 pt-0 text-white  md:gap-20 md:pt-[50px]   xl:px-0  ">
      <img
        data-src={image}
        src={placeholder}
        alt="meeting"
        className={`lazyload absolute left-0 top-0 -z-20 h-full w-full object-cover object-center`}
        style={{
          filter: "brightness(0.15)",
        }}
      />
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        className="flex h-[90%] flex-row items-center gap-12 self-center md:h-full"
      >
        <VerticalLine />
        {children}
      </motion.div>
    </section>
  );
};

export default HeroSection;

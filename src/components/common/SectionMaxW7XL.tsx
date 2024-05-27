import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  colored: boolean;
  bgHoverColor: "theme" | "rose" | "none";
}

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const SectionMaxW7XL = ({ children, colored, bgHoverColor }: SectionProps) => {
  const finalHoverColor =
    bgHoverColor === "theme"
      ? "theme-bg-hover relative shadow-lg "
      : bgHoverColor === "rose" && "rose-bg-hover relative shadow-lg ";

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
    >
      <section
        className={`${colored && "rounded-lg bg-gray-100 "} ${finalHoverColor}  mx-auto my-24 flex w-full max-w-7xl flex-col justify-between gap-14 p-6  md:gap-24`}
      >
        {children}
      </section>
    </motion.div>
  );
};

export default SectionMaxW7XL;

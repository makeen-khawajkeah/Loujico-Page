// src/components/LayeredHeader.jsx
import React from "react";
import { motion } from "framer-motion";

const LayeredHeader = ({ title }) => {
  const headerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative flex justify-center items-center text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={headerVariants}
    >
      {/* الطبقة السفلية (الخلفية) */}
      <h2 className="absolute text-5xl md:text-7xl font-extrabold text-[#153457] opacity-20 transform -translate-x-1/2 -translate-y-1/2 -top-4 -left-8 whitespace-nowrap z-0">
        {title}
      </h2>

      {/* الطبقة العلوية (البارزة) */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#B88647] z-10">
        {title}
      </h2>
    </motion.div>
  );
};

export default LayeredHeader;

// src/components/SplitLineHeader.jsx
import React from "react";
import { motion } from "framer-motion";

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const mainTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
  },
};

const subTitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const SplitLineHeader = ({ title, isSubtitle = false }) => {
  if (isSubtitle) {
    return (
      <motion.div
        className="flex justify-center text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={subTitleVariants}
      >
        <h3 className="text-xl md:text-2xl font-normal text-gray-300">
          {title}
        </h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center mb-8 sm:mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        {/* الخط الأيسر */}
        <motion.div
          className="h-1 bg-[#B88647] w-24 hidden sm:block"
          variants={lineVariants}
          style={{ originX: 1 }}
        ></motion.div>

        {/* العنوان الرئيسي */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white"
          variants={mainTitleVariants}
        >
          {title}
        </motion.h2>

        {/* الخط الأيمن */}
        <motion.div
          className="h-1 bg-[#B88647] w-24 hidden sm:block"
          variants={lineVariants}
          style={{ originX: 0 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SplitLineHeader;

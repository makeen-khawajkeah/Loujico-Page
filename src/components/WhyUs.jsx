// src/components/WhyUs.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";
import { WhyUsFeatures } from "../data";
import SplitLineHeader from "./SplitLineHeader";
import { motion } from "framer-motion"; // استيراد Framer Motion

const WhyUs = () => {
  const { t } = useTranslation();
  const icons = {
    1: FaGlobe,
    2: FaLightbulb,
    3: FaHandshake,
  };

  // متحكمات الأنيميشن للحاوية
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // تأخير بين ظهور كل كارد
      },
    },
  };

  // متحكمات الأنيميشن للعناصر الفردية
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="why-us" className="py-20 sm:px-5 bg-[#153457] text-white">
      <div className="container mx-auto px-4">
        {/* العناوين */}
        <SplitLineHeader title={t("nav.whyUs")} />

        {/* تطبيق الأنيميشن على حاوية الكروت */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // تشغيل الأنيميشن عند رؤية 30% من الحاوية
        >
          {WhyUsFeatures.map((feature) => {
            const IconComponent = icons[feature.id];
            return (
              <motion.div
                key={feature.id}
                className="bg-[#1F476F] rounded-lg shadow-2xl p-8 text-center 
                        flex flex-col items-center justify-center
                        relative overflow-hidden group transform hover:-translate-y-4 transition-all duration-300 ease-in-out
                        card-fancy-glow"
                variants={itemVariants} // تطبيق متحكمات الأنيميشن على الكارد
              >
                {/* طبقة خلفية متوهجة عند الهوفر */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F476F] to-[#2a5b8e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* الأيقونة */}
                <div className="relative z-10 flex items-center justify-center mb-6">
                  {IconComponent && (
                    <IconComponent className="h-20 w-20 text-[#B88647] transform group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>

                {/* العنوان */}
                <h3 className="relative z-10 text-3xl font-extrabold mb-4 text-[#E3C199] group-hover:text-white transition-colors duration-300">
                  {t(feature.title)}
                </h3>

                {/* الوصف */}
                <p className="relative z-10 text-gray-300 leading-relaxed text-lg group-hover:text-gray-100 transition-colors duration-300">
                  {t(feature.description)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;

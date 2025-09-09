import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <section
      id="home"
      className="bg-[#1F476F] text-white max-sm:pt-10 py-20 sm:px-5 mt-20"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 ">
        {/* قسم المحتوى (النص) */}
        <div
          className={`md:w-1/2 text-center ${
            language === "en" ? "md:text-left" : "md:text-right"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {t("hero.welcome")}
            <span className="text-[#B88647]">{t("hero.companyName")}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            {t("hero.description")}
          </p>
          <a
            href="https://wa.me/963996320963"
            className="inline-block bg-[#B88647] hover:bg-[#a17a41] text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {t("hero.contactButton")}
          </a>
        </div>

        {/* قسم الصورة */}
        <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
          <img
            src="assets/image/hero.png"
            alt={t("hero.imageAlt")}
            className="lg:w-[500px] md:w-[400px] w-[300px] rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SplitLineHeader from "./SplitLineHeader";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaHeart,
} from "react-icons/fa";

const PortfolioSection = ({ title, id, data }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  const imagePaths = [
    "assets/image/blocks/Asset 2.png",
    "assets/image/blocks/Asset 3.png",
    "assets/image/blocks/Asset 4.png",
    "assets/image/blocks/Asset 5.png",
    "assets/image/blocks/Asset 6.png",
    "assets/image/blocks/Asset 7.png",
    "assets/image/blocks/Asset 8.png",
    "assets/image/blocks/Asset 9.png",
    "assets/image/blocks/Asset 10.png",
    "assets/image/blocks/Asset 11.png",
    "assets/image/blocks/Asset 12.png",
    "assets/image/blocks/Asset 13.png",
    "assets/image/blocks/Asset 14.png",
    "assets/image/blocks/Asset 15.png",
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, data.length]);

  const generateRandomImages = () => {
    const numImages = 6;
    const randomImages = [];
    for (let i = 0; i < numImages; i++) {
      const randomIndex = Math.floor(Math.random() * imagePaths.length);
      const newImage = imagePaths[randomIndex];
      if (
        randomImages.length === 0 ||
        newImage !== randomImages[randomImages.length - 1]
      ) {
        randomImages.push(newImage);
      } else {
        i--;
      }
    }
    return randomImages;
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const getItemStyle = (index) => {
    const totalItems = data.length;
    const position = (index - activeIndex + totalItems) % totalItems;
    let style = {};
    if (position === 0) {
      style = {
        transform: "translateZ(0)",
        opacity: 1,
        zIndex: 10,
        filter: "none",
      };
    } else if (position === 1 || position === totalItems - 1) {
      const direction = position === 1 ? 1 : -1;
      style = {
        transform: `translateX(${
          direction * 90
        }%) translateZ(-150px) scale(0.85)`,
        opacity: 1,
        zIndex: 3,
        filter: "blur(1px)",
      };
    } else if (position === 2 || position === totalItems - 2) {
      const direction = position === 2 ? 1 : -1;
      style = {
        transform: `translateX(${
          direction * 150
        }%) translateZ(-250px) scale(0.7)`,
        opacity: 1,
        zIndex: 2,
        filter: "blur(2px)",
      };
    } else {
      style = {
        transform: "translateZ(-350px)",
        opacity: 0,
        zIndex: 1,
        filter: "blur(3px)",
      };
    }
    return style;
  };

  return (
    <section
      id={id}
      className="py-10 bg-[#153457] text-white relative overflow-hidden"
    >
      <div className="container mx-auto sm:px-5">
        <SplitLineHeader title={t(title)} isSubtitle={true} />

        {/* أزرار التنقل */}

        {/* الكاروسيل ثلاثي الأبعاد */}
        <div className="relative h-[400px] w-full perspective-1000">
          <div
            ref={carouselRef}
            className="carousel-3d relative w-full h-full transform-style-preserve-3d"
          >
            {data.map((project, index) => {
              const style = getItemStyle(index);
              const randomImages = generateRandomImages();
              return (
                <motion.div
                  key={project.id}
                  className="carousel-item-3d absolute w-[90%] max-w-[500px] h-[350px] left-0 right-0 mx-auto transition-all duration-700"
                  style={style}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: style.opacity }}
                  transition={{ duration: 0.7 }}
                  onClick={() => handleDotClick(index)}
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
                    {/* الجزء العلوي */}
                    <div className="bg-[#7899B2] text-white p-4 flex items-center justify-center h-2/5 relative overflow-hidden">
                      {randomImages.map((imgPath, imgIndex) => (
                        <img
                          loading="lazy"
                          key={imgIndex}
                          src={imgPath}
                          alt={`decoration-${imgIndex}`}
                          className="absolute opacity-20 w-[140px]"
                          style={{ left: `${imgIndex * 140}px` }}
                        />
                      ))}
                      <h3 className="text-2xl font-extrabold text-center relative z-10">
                        {t(project.customer)}
                      </h3>
                    </div>

                    {/* الجزء السفلي */}
                    <div
                      className={`flex-grow py-4 px-6 text-[#1F476F] flex flex-col justify-center ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      <p
                        className={`flex items-center gap-2 text-lg mb-2 ${
                          language === "ar" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span className="font-semibold text-[#B88647]">
                          {t("portfolio.location")}:
                        </span>
                        {t(project.location)}
                      </p>
                      <p
                        className={`flex gap-2 items-center text-lg ${
                          language === "ar" ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span className="font-semibold text-[#B88647]">
                          {t("portfolio.activity")}:
                        </span>
                        <span>{t(project.activity)}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[#1F476F] text-white hover:bg-[#B88647] transition-colors duration-300 cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[#1F476F] text-white hover:bg-[#B88647] transition-colors duration-300 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .carousel-item-3d {
          backface-visibility: visible;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;

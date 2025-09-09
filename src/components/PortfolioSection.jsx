// src/components/PortfolioSection.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SplitLineHeader from "./SplitLineHeader";
import { motion } from "framer-motion";

const PortfolioSection = ({ title, id, data }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  // مصفوفة تحتوي على مسارات الصور المختلفة
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
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // دالة لتوليد صور عشوائية من المصفوفة
  const generateRandomImages = () => {
    const numImages = 6;
    const randomImages = [];
    
    for (let i = 0; i < numImages; i++) {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        const newImage = imagePaths[randomIndex];
        
  
        if (randomImages.length === 0 || newImage !== randomImages[randomImages.length - 1]) {
            randomImages.push(newImage);
        } else {
            i--; 
        }
    }
    
    return randomImages;
};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1296,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="py-10 bg-[#153457] text-white">
      <div className="container mx-auto sm:px-5">
        <SplitLineHeader title={t(title)} isSubtitle={true} />

        <Slider {...settings}>
          {data.map((project, index) => {
            // توليد صور عشوائية لكل بطاقة
            const randomImages = generateRandomImages();
            
            return (
              <motion.div
                key={project.id}
                className="p-4"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="bg-white rounded-xl shadow-xl overflow-hidden
                          hover:shadow-2xl transition-all duration-300 transform
                          hover:-translate-y-2 group h-[280px] flex flex-col"
                >
                  {/* الجزء العلوي - اسم العميل مع صور عشوائية */}
                  <div className="bg-[#7899B2] text-white p-4 flex items-center justify-center h-1/2 relative overflow-hidden">
                    {/* عرض الصور العشوائية */}
                    {randomImages.map((imgPath, imgIndex) => (
                      <img
                        loading="lazy"
                        key={imgIndex}
                        src={imgPath}
                        alt={`decoration-${imgIndex}`}
                        className="absolute opacity-20 w-[140px]"
                        style={{
                          left: `${imgIndex * 140}px`,
                        }}
                      />
                    ))}
                    <h3 className="text-3xl font-extrabold text-center group-hover:text-[var(--main-color)] transition duration-300 relative z-10">
                      {t(project.customer)}
                    </h3>
                  </div>

                  {/* الجزء السفلي - التفاصيل */}
                  <div className={`flex-grow py-4 text-[#1F476F] flex flex-col justify-center ${language==="ar"?"pr-16":"pl-16"}`}>
                    <p
                      className={`flex whitespace-nowrap items-center gap-2 text-lg mb-2 ${
                        language === "ar" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-semibold text-[#B88647] mr-2">
                        {t("portfolio.location")}
                      </span>
                      {t(project.location)}
                    </p>
                    <p
                      className={`flex whitespace-nowrap gap-2 items-center text-lg ${
                        language === "ar" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-semibold text-[#B88647] mr-2">
                        {t("portfolio.activity")}
                      </span>
                      <span>{t(project.activity)}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;
// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaPinterest,
  FaSnapchat,
  FaTelegram,
} from "react-icons/fa";
import { FooterData } from "../data";

const Footer = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const SocialIcons = {
    FaLinkedin: FaLinkedin,
    FaTwitter: FaTwitter,
    FaFacebook: FaFacebook,
    FaInstagram: FaInstagram,
    FaYoutube: FaYoutube,
    FaTiktok: FaTiktok,
    FaWhatsapp: FaWhatsapp,
    FaPinterest: FaPinterest,
    FaSnapchat: FaSnapchat,
    FaTelegram: FaTelegram,
  };
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
    // دالة لتوليد صور عشوائية من المصفوفة
    const generateRandomImages = () => {
      const numImages = 21;
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
  const randomImages = generateRandomImages();
  return (
    <footer className="bg-[#0B1A2c] text-gray-300 py-10 sm:px-5 relative overflow-hidden" id="follow-us">
      {
        randomImages.map((imgPath, imgIndex) => (
          <img
            loading="lazy"
            key={imgIndex}
            src={imgPath}
            alt={`decoration-${imgIndex}`}
            className="absolute opacity-10 w-[84px] bottom-0"
            style={{
              left: `${imgIndex * 84}px`,
            }}
        />
    ))}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Section 1: Brand Info & Description */}
          <div className="flex flex-col items-center md:items-start text-center">
            <img
              src="assets/image/footer-logo.png"
              alt="Loujico Logo"
              className="w-46 h-auto mb-3"
            />
            <p
              className={`text-sm leading-relaxed max-w-sm ${
                language === "ar" ? "md:text-right" : "md:text-left"
              }`}
            >
              {t(FooterData.mainInfo.description)}
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 text-white">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {FooterData.quickLinks.map((link) => (
                <li
                  className={`${language === "ar" ? "md:text-right" : ""}`}
                  key={link.id}
                >
                  <a
                    href={link.url}
                    className="text-sm hover:text-[#B88647] transition-colors duration-300"
                  >
                    {t(link.title)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 text-white">
              {t(FooterData.contactInfo.title)}
            </h4>
            <ul className="space-y-2">
              <li className={`${language === "ar" ? "md:text-right" : ""}`}>
                <span className="text-sm">
                  {t(FooterData.contactInfo.address)}
                </span>
              </li>
              {/* <li className={`${language === "ar" ? "md:text-right" : ""}`}>
                <a
                  href={`mailto:${FooterData.contactInfo.email}`}
                  className="text-sm hover:text-[#B88647] transition-colors duration-300"
                >
                  {FooterData.contactInfo.email}
                </a>
              </li> */}
              <li
                className={`${
                  language === "ar" ? "md:text-right dir-ltr" : ""
                }`}
              >
                <a
                  href={`tel:${FooterData.contactInfo.phone}`}
                  className="text-sm hover:text-[#B88647] transition-colors duration-300"
                >
                  {FooterData.contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Social Media Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 text-white">
              {t("nav.followUs")}
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {FooterData.socialLinks.map((social) => {
                const IconComponent = SocialIcons[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-[#B88647] transition-colors duration-300 transform hover:scale-110"
                    title={t(social.name)} // Added title for accessibility
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700">
          <p
            className="text-xs leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t("footer.copyright", {
                year: new Date().getFullYear(),
                company: t("company.name"),
              }),
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/MobileNav.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { NavLinks, PortfolioDropdownLinks } from "../../data";

const MobileNav = () => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPortfolioOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-800 p-4 z-[100]">
      {/* Mobile Nav Header */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src="/assets/image/logo.png" alt="Loujico Logo" className="w-32" />

        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="text-2xl text-[#1F476F]">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`
    fixed top-0 left-0 w-full min-h-screen bg-white text-[#1F476F]
    transform transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
    `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <img
            src="/assets/image/logo.png"
            alt="Loujico Logo"
            className="w-32"
          />
          <button onClick={toggleMenu} className="text-2xl text-[#1F476F]">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col space-y-0 mt-12 text-2xl">
          {NavLinks.map((link) => (
            <li
              key={link.id}
              className="w-full border-b border-gray-200 last:border-b-0"
            >
              {link.title === "nav.portfolio" ? (
                <div>
                  <button
                    onClick={togglePortfolio}
                    className="w-full flex justify-between items-center p-4 text-[#1F476F] hover:text-[#B88647] transition duration-300"
                  >
                    <span>{t(link.title)}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isPortfolioOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {isPortfolioOpen && (
                    <ul className="flex flex-col bg-gray-100 items-center space-y-0 text-lg">
                      {PortfolioDropdownLinks.map((dropdownLink) => (
                        <li
                          key={dropdownLink.id}
                          className="w-full border-b border-gray-300 last:border-b-0"
                        >
                          <a
                            href={dropdownLink.path}
                            onClick={closeMenu}
                            className="block w-full p-4 text-[#1F476F] hover:text-[#B88647] transition duration-300"
                          >
                            {t(dropdownLink.title)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={link.path}
                  onClick={closeMenu}
                  className="block w-full p-4 text-[#1F476F] hover:text-[#B88647] transition duration-300"
                >
                  {t(link.title)}
                </a>
              )}
            </li>
          ))}
          <div>
            <button
              onClick={toggleLanguage}
              className="w-full flex justify-between items-center p-4 text-[#1F476F] hover:text-[#B88647] transition duration-300"
            >
              <span>{language === "en" ? "English" : "العربية"}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isLanguageOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isLanguageOpen && (
              <ul className="flex flex-col bg-gray-100 items-center space-y-0 text-lg">
                <li className="w-full border-b border-gray-300 last:border-b-0">
                  <span
                    onClick={() => {
                      closeMenu();
                      changeLanguage(language === "ar" ? "en" : "ar");
                    }}
                    className="block w-full p-4 text-[#1F476F] hover:text-[#B88647] transition duration-300"
                  >
                    {language === "ar" ? "الانجليزية" : "Arabic"}
                  </span>
                </li>
              </ul>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;

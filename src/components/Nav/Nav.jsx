// src/components/Nav.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { NavLinks, PortfolioDropdownLinks } from "../../data";

const Nav = () => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  return (
    <>
      {/* شريط تنقل سطح المكتب - يظهر على الشاشات الكبيرة فقط */}
      <nav
        className="hidden md:flex justify-between items-center py-4 px-16
      bg-white text-[var(--main-color)] fixed top-0 w-full z-50
        bg-[url('/blocks.png')] bg-cover bg-center"
      >
        {/* الشعار */}
        <img src="/assets/image/logo.png" alt="Loujico Logo" className="w-40" />
        {/* الروابط */}
        <div className="flex space-x-8">
          {NavLinks.map((link) => (
            <div key={link.id} className="group relative">
              <a
                href={link.path}
                className="font-medium text-lg hover:text-[#B88647] transition duration-300 flex items-center"
              >
                {t(link.title)}
                {link.title === "nav.portfolio" && (
                  <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
                )}
              </a>
              {/* القائمة المنسدلة للـ Portfolio */}
              {link.title === "nav.portfolio" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2
              bg-white shadow-lg rounded-md
              opacity-0 group-hover:opacity-100
              group-hover:visible invisible
              transition-opacity duration-300 transform scale-95 group-hover:scale-100"
                >
                  {PortfolioDropdownLinks.map((dropdownLink) => (
                    <a
                      key={dropdownLink.id}
                      href={dropdownLink.path}
                      className="block px-6 py-3 whitespace-nowrap text-gray-800 hover:bg-[#7899B2] hover:text-white transition duration-300 last:hover:rounded-b-md"
                    >
                      {t(dropdownLink.title)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="group relative">
            <div className="font-medium text-lg hover:text-[#B88647] transition duration-300 flex items-center cursor-pointer">
              <span>{language === "en" ? "English" : "العربية"}</span>
              <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2
              bg-white shadow-lg rounded-md cursor-pointer
              opacity-0 group-hover:opacity-100
              group-hover:visible invisible
              transition-opacity duration-300 transform scale-95 group-hover:scale-100"
            >
              <span
                onClick={() => {
                  changeLanguage(language === "ar" ? "en" : "ar");
                }}
                className="block px-6 py-3 whitespace-nowrap text-gray-800 hover:bg-[#7899B2] hover:text-white transition duration-300 last:hover:rounded-b-md"
              >
                {language === "ar" ? "الانجليزية" : "Arabic"}
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* استدعاء شريط تنقل الهاتف - يظهر على الشاشات الصغيرة فقط */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Nav;

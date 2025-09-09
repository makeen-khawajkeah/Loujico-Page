// src/components/NavItems.jsx
import React, { useState } from "react";
import { NavLinks, PortfolioDropdownLinks } from "../../data";

const NavItems = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <ul className="hidden md:flex space-x-6">
      {NavLinks.map((link) => (
        <li key={link.id} className="relative">
          {link.title === "Portfolio" ? (
            <>
              <button
                className="text-gray-800 hover:text-[#B88647] focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {link.title}
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg">
                  {PortfolioDropdownLinks.map((dropdownLink) => (
                    <li key={dropdownLink.id}>
                      <a
                        href={dropdownLink.path}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {dropdownLink.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <a href={link.path} className="text-gray-800 hover:text-[#B88647]">
              {link.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;

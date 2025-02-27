"use client";

import { useState } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

// Import Roboto font
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Header = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-transparent">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Circl Logo" width={100} height={30} />
      </div>

      {/* Center: Navigation Links */}
      <nav className={`hidden md:flex space-x-6 text-gray-800 font-medium text-[16px] leading-[24px] ${roboto.className}`}>
        <a href="#" className="hover:text-gray-600">Features</a>
        <a href="#" className="hover:text-gray-600">For Service Providers</a>
        <a href="#" className="hover:text-gray-600">For Customers</a>
      </nav>

      {/* Right Section: Language Toggle & App Store Button */}
      <div className="flex items-center space-x-4">
        {/* Language Switcher */}
        <div className="flex items-center bg-white rounded-full px-2 py-1 ">
          <button
            className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition ${
              language === "EN" ? "bg-gray-800 text-white" : "text-gray-800"
            }`}
            onClick={() => setLanguage("EN")}
          >
            <Image src="/eng.png" alt="UK Flag" width={20} height={15} className="mr-1" />
            EN
          </button>
          <button
            className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition ${
              language === "AR" ? "bg-gray-800 text-white" : "text-gray-800"
            }`}
            onClick={() => setLanguage("AR")}
          >
            <Image src="/saudia.png" alt="Saudi Flag" width={20} height={15} className="mr-1" />
            عربي
          </button>
        </div>

        {/* App Store Button */}
        <Image
          src="/Download_on_the_App_Store_Badge.png"
          alt="Download on the App Store"
          width={140}
          height={40}
        />
      </div>
    </header>
  );
};

export default Header;

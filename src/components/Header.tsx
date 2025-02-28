"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Header = () => {
  const { language, toggleLanguage } = useLanguage(); // ✅ Access global language state

  // Function to handle smooth scrolling
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-transparent">
      {/* Left: Logo with Homepage Link */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/Logo.png" alt="Circl Logo" width={100} height={30} className="cursor-pointer" />
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <nav className={`hidden md:flex space-x-6 text-gray-800 font-medium text-[16px] leading-[24px] ${roboto.className}`}>
        <button onClick={() => handleScroll("features-section")} className="hover:text-gray-600">
          {language === "EN" ? "Features" : "مميزات"}
        </button>
        <button onClick={() => handleScroll("service-providers-section")} className="hover:text-gray-600">
          {language === "EN" ? "For Service Providers" : "لمزودي الخدمات"}
        </button>
        <button onClick={() => handleScroll("customers-section")} className="hover:text-gray-600">
          {language === "EN" ? "For Customers" : "للعملاء"}
        </button>
      </nav>

      {/* Right Section: Language Toggle & App Store Button */}
      <div className="flex items-center space-x-4">
        {/* Language Switcher */}
        <div className="flex items-center bg-white rounded-full px-2 py-1">
          <button
            className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition ${
              language === "EN" ? "bg-gray-800 text-white" : "text-gray-800"
            }`}
            onClick={toggleLanguage} // ✅ Toggle between EN & AR
          >
            <Image src="/eng.png" alt="UK Flag" width={20} height={15} className="mr-1" />
            EN
          </button>
          <button
            className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition ${
              language === "AR" ? "bg-gray-800 text-white" : "text-gray-800"
            }`}
            onClick={toggleLanguage} // ✅ Toggle between EN & AR
          >
            <Image src="/saudia.png" alt="Saudi Flag" width={20} height={15} className="mr-1" />
            عربي
          </button>
        </div>

        {/* App Store Button */}
        <Image src="/appstore.png" alt="Download on the App Store" width={140} height={40} />
      </div>
    </header>
  );
};

export default Header;

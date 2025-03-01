"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Header = () => {
  const { language, toggleLanguage } = useLanguage(); // ✅ Access global language state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ State for mobile menu
  const router = useRouter();
  const pathname = usePathname();

  // Function to navigate to the homepage with a section ID
  const handleNavigation = (section: string) => {
    if (pathname === "/") {
      // If already on the homepage, scroll directly
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on a different page, navigate to home with section query
      router.push(`/?section=${section}`);
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="w-full py-4 px-6 lg:max-w-[1440px] lg:mx-auto flex items-center justify-between ">
      {/* Left: Logo with Homepage Link */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/Logo.png" alt="Circl Logo" width={100} height={30} className="cursor-pointer" />
        </Link>
      </div>

      {/* Center: Desktop Navigation Links */}
      <nav className={`hidden md:flex ${language === "AR" ? "space-x-reverse space-x-10" : "space-x-6"} text-gray-800 font-medium text-[16px] leading-[24px] ${roboto.className}`}>
        <button onClick={() => handleNavigation("features-section")} className="hover:text-gray-600">
          {language === "EN" ? "Features" : "مميزات"}
        </button>
        <button onClick={() => handleNavigation("service-providers-section")} className="hover:text-gray-600">
          {language === "EN" ? "For Service Providers" : "لمزودي الخدمات"}
        </button>
        <button onClick={() => handleNavigation("customers-section")} className="hover:text-gray-600">
          {language === "EN" ? "For Customers" : "للعملاء"}
        </button>
      </nav>

      {/* Right Section: Language Toggle & App Store Button */}
      <div className="hidden md:flex items-center space-x-4">
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

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src={isMenuOpen ? "/close.png" : "/open.png"} alt="Menu" width={30} height={30} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
            <Image src="/close.png" alt="Close" width={24} height={24} />
          </button>

          {/* Language Switcher (Mobile) */}
          <div className="flex items-center bg-gray-200 rounded-full px-3 py-2 mb-6">
            <button
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                language === "EN" ? "bg-gray-800 text-white" : "text-gray-800"
              }`}
              onClick={toggleLanguage}
            >
              <Image src="/eng.png" alt="UK Flag" width={20} height={15} className="mr-1" />
              EN
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                language === "AR" ? "bg-gray-800 text-white" : "text-gray-800"
              }`}
              onClick={toggleLanguage}
            >
              <Image src="/saudia.png" alt="Saudi Flag" width={20} height={15} className="mr-1" />
              عربي
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className={`flex flex-col text-gray-800 font-medium text-lg space-y-6 text-center ${language === "AR" ? "space-y-8" : "space-y-6"}`}>
            <button onClick={() => handleNavigation("service-providers-section")} className="hover:text-gray-600">
              {language === "EN" ? "For Service Providers" : "لمزودي الخدمات"}
            </button>
            <button onClick={() => handleNavigation("features-section")} className="hover:text-gray-600">
              {language === "EN" ? "Features" : "مميزات"}
            </button>
            <button onClick={() => handleNavigation("customers-section")} className="hover:text-gray-600">
              {language === "EN" ? "For Customers" : "للعملاء"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

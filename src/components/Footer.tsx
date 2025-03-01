"use client";

import Image from "next/image";
import { Facebook, Instagram, X } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";

// Import fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Footer = () => {
  const { language } = useLanguage(); // Ensure useLanguage runs only on the client

  const translations = {
    EN: {
      slogan: "Wellness professionals on demand",
      privacy: "Privacy policy",
      freelance: "Freelance terms",
      userTerms: "User terms",
      cancellation: "Cancellation & refund policy",
      copyright: "Copyright © 2025 Circl. All Rights Reserved.",
    },
    AR: {
      slogan: "المحترفون في العناية الصحية عند الطلب",
      privacy: "سياسة الخصوصية",
      freelance: "شروط العمل الحر",
      userTerms: "شروط المستخدم",
      cancellation: "سياسة الإلغاء والاسترداد",
      copyright: "حقوق النشر © 2025 Circl. جميع الحقوق محفوظة.",
    },
  };

  return (
    <footer className="w-full bg-[#FAF5EE] text-black py-8 text-center">
      <div className="lg:max-w-[1440px] lg:mx-auto px-6 md:px-16 lg:px-24">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col items-center space-y-6">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center">
            <Image src="/Logo.png" alt="Circl Logo" width={80} height={30} />
            <p className={`text-gray-600 text-sm ${montserrat.className}`}>
              {translations[language].slogan}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-500">
              <X size={20} />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex space-x-6 text-gray-600 text-sm">
            <a href="/PrivacyPolicy" className="hover:underline">
              {translations[language].privacy}
            </a>
            <a href="#" className="hover:underline">
              {translations[language].freelance}
            </a>
            <a href="#" className="hover:underline">
              {translations[language].userTerms}
            </a>
            <a href="#" className="hover:underline">
              {translations[language].cancellation}
            </a>
          </div>

          {/* Copyright */}
          <p className={`text-gray-500 text-xs mt-4 ${roboto.className}`}>
            {translations[language].copyright}
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center space-y-6 md:hidden">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center">
            <Image src="/Logo.png" alt="Circl Logo" width={80} height={30} />
            <p className={`text-gray-600 text-sm ${montserrat.className}`}>
              {translations[language].slogan}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-500">
              <X size={20} />
            </a>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col text-gray-600 text-sm space-y-2">
            <a href="/PrivacyPolicy" className="hover:underline">
              {translations[language].privacy}
            </a>
            <a href="#" className="hover:underline">
              {translations[language].freelance}
            </a>
            <a href="#" className="hover:underline">
              {translations[language].userTerms}
            </a>
            <a href="#" className="hover:underline">
              {translations[language].cancellation}
            </a>
          </div>

          {/* Copyright */}
          <p className={`text-gray-500 text-xs mt-4 ${roboto.className}`}>
            {translations[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

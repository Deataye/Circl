"use client"; // Ensure this is a Client Component

import Image from "next/image";
import { FC } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const DownloadApp: FC = () => {
  const { language } = useLanguage(); // Ensure useLanguage runs only on the client

  const translations = {
    EN: {
      heading: "Ready To Transform Your Life",
      description:
        "Whether you’re booking a service or growing your business, Circl makes it effortless. Download now from the App Store and take control today!",
      buttonText: "Download App",
    },
    AR: {
      heading: "جاهز لتحويل حياتك",
      description:
        "سواء كنت تحجز خدمة أو تنمي عملك، يجعل Circl الأمر سهلاً. قم بتنزيل التطبيق الآن من المتجر وتحكم في كل شيء اليوم!",
      buttonText: "تحميل التطبيق",
    },
  };

  return (
    <section className="w-11/12  lg:max-w-[1440px] lg:mx-auto mb-10 lg:mb-20 mx-auto px-6 md:px-16 lg:px-1 py-12 bg-black rounded-[32px] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Content */}
        <div className="max-w-2xl pl-10 space-y-10">
          <h2 className={`text-3xl md:text-[48px] lg:leading-[48px] font-bold ${montserrat.className}`}>
            {translations[language].heading}
          </h2>
          <p className={`text-gray-300 text-lg md:text-[18px] leading-relaxed ${roboto.className}`}>
            {translations[language].description}
          </p>

          {/* Download Button */}
          <a
            href="#"
            className={`inline-flex items-center bg-white text-black px-6 py-3 text-[18px] rounded-sm font-medium hover:bg-gray-300 transition ${roboto.className}`}
          >
            <Image
              src="/apple-icon.png"
              alt="Apple Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            {translations[language].buttonText}
          </a>
        </div>

        {/* Right Image */}
        <div className="relative max-w-2xl">
          <Image
            src="/banner-mobile.png"
            alt="Mobile App Screens"
            width={587}
            height={580}
            className="rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

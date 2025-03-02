"use client"; // Ensures this is a client-side component

import Image from "next/image";
import { FC } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

interface CustomersProps {
  id?: string;
}

const Customers: FC<CustomersProps> = ({ id = "customers-section" }) => {
  const { language } = useLanguage(); // Access selected language

  const translations = {
    EN: {
      title: "Circl for Customers",
      sections: [
        {
          icon: "/search-icon.png",
          title: "Discover Top Wellness Experts",
          description:
            "Swipe through a curated selection of wellness professionals and find the perfect match for your needs. Explore profiles, and choose with confidence.",
          image: "/mobilehand.png",
        },
        {
          icon: "/Layer_1.png",
          title: "Effortless Booking",
          description:
            "Seamlessly schedule classes or services with just a few taps. No back-and-forth messages—just instant, hassle-free booking at your convenience.",
          image: "/select.png",
        },
        {
          icon: "/block-icon.png",
          title: "Stay Organized",
          description:
            "Keep track of your upcoming sessions, manage payments, and access your favorite providers—all in one easy-to-use platform.",
          image: "/organized.png",
        },
      ],
    },
    AR: {
      title: "تطبيق Circl لعملائنا",
      sections: [
        {
          icon: "/search-icon.png",
          title: "اكتشف أفضل خبراء العناية بالصحة",
          description:
            "تصفح قائمة من متخصصي العناية بالصحة واختر الأنسب لاحتياجاتك. استكشف الملفات الشخصية، واتخذ قراراتك بثقة.",
          image: "/mobilehand.png",
        },
        {
          icon: "/Layer_1.png",
          title: "حجز بسيط",
          description:
            "جدولة مواعيدك وحجوزاتك بكل سهولة. لا حاجة لرسائل متبادلة—فقط احجز فورياً دون عناء.",
          image: "/select.png",
        },
        {
          icon: "/block-icon.png",
          title: "حافظ على تنظيمك",
          description:
            "تابع جلساتك القادمة، وإدارة المدفوعات، والوصول إلى مقدمي الخدمة المفضلين لديك—كل ذلك في منصة واحدة سهلة الاستخدام.",
          image: "/organized.png",
        },
      ],
    },
  };

  // Text alignment based on language
  const textAlign = language === "EN" ? "text-left" : "text-right";
  const itemsAlign = language === "EN" ? "items-start" : "items-end";

  return (
    <section id={id} className="w-full px-4 lg:max-w-[1440px] lg:mx-auto md:px-28 lg:px-20 py-20">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] lg:leading-[70px] -mb-60 font-semibold text-center ${montserrat.className}`}>
        {language === "EN" ? "Circl for " : "تطبيق Circl "}
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 font-bold text-transparent bg-clip-text">
          {language === "EN" ? "Customers" : "لعملائنا"}
        </span>
      </h2>

      {/* Sections */}
      {translations[language].sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 mt-16 ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image (position is fixed based on the index) */}
          <div className={`relative ${index === 0 ? "-mb-16 -mr-4 lg:-mr-20 items-end" : ""}`}>
            <Image src={section.image} alt={section.title} width={854} height={1080} />
          </div>

          {/* Text Content (alignment changes based on language) */}
          <div className={`max-w-xl space-y-6 ${textAlign} px-0 lg:px-4`}>
            <div className={`flex flex-col ${itemsAlign} space-y-3`}>
              <Image src={section.icon} alt={section.title} width={36} height={36} />
              <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
                {section.title}
              </h3>
            </div>
            <p className={`text-[#8A8194] font-normal text-lg md:text-[24px] leading-relaxed ${roboto.className}`}>
              {section.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Customers;

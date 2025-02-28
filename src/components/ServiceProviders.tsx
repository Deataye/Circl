"use client"; // Ensures this is a client-side component

import { FC } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ServiceProviders: FC = () => {
  const { language } = useLanguage(); // Access selected language

  const translations = {
    EN: {
      title: "Circl for Service Providers",
      sections: [
        {
          icon: "/Group.png",
          title: "Effortlessly Create & Sell Services",
          description:
            "Grow your business with ease. Offer 1-on-1 sessions, group classes, or packages—online or in person. With Circl, manage clients and attract new ones through your profile. Let customers discover, book, and pay—all in one place.",
          image: "/service-1.png",
        },
        {
          icon: "/calender-icon.png",
          title: "Simple Booking Management",
          description:
            "Stay in control of your schedule with an easy-to-use booking system. Accept, manage, or reschedule appointments seamlessly, ensuring a smooth experience for both you and your clients—all in one place.",
          image: "/service-2.png",
        },
        {
          icon: "/secure-icon.png",
          title: "Secure Payments",
          description:
            "Get paid seamlessly with our secure and hassle-free payment system. Enjoy fast transactions, payouts, and financial peace of mind—so you can focus on delivering exceptional services without worrying about payments.",
          image: "/service-3.png",
        },
      ],
    },
    AR: {
      title: "Circl لمزودي الخدمات",
      sections: [
        {
          icon: "/Group.png",
          title: "أنشئ و بع خدماتك بسهولة",
          description:
            "طور عملك بسهولة. قدم جلسات خاصة، حصص جماعية، أو باقات—عبر الإنترنت أو شخصياً. مع تطبيق Circl، أدِر العملاء وجذب عملاء جدد من خلال ملفك الشخصي. دع العملاء يكتشفون، يحجزون، ويدفعون—كل ذلك في مكان واحد.",
          image: "/service-1.png",
        },
        {
          icon: "/calender-icon.png",
          title: "رتب حجوزاتك على كيفك",
          description:
            "تحكم في جدول مواعيدك بكل سهولة من خلال نظام سهل لإدارة الحجوزات. قم بقبول، تعديل، أو إعادة جدولة المواعيد بسهولة، مما يضمن تجربة سلسة لك ولعملائك—كل ذلك في مكان واحد.",
          image: "/service-2.png",
        },
        {
          icon: "/secure-icon.png",
          title: "نظام دفع آمن",
          description:
            "استلم مدفوعاتك بسهولة من خلال نظام دفع آمن وسلس. استمتع بمعاملات سريعة، ومدفوعات آمنة، وراحة مالية—حتى تتمكن من التركيز على تقديم خدمات استثنائية دون القلق بشأن الدفعات.",
          image: "/service-3.png",
        },
      ],
    },
  };

  return (
    <section id="service-providers-section" className="w-full px-6 md:px-20 py-16 space-y-16">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] leading-tight font-semibold text-center ${montserrat.className}`}>
        Circl {language === "EN" ? "for" : "لمزودي"} <br />
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
          {language === "EN" ? "Service Providers" : "الخدمات"}
        </span>
      </h2>

      {/* Sections */}
      {translations[language].sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-40`}
        >
          {/* Left Text Content */}
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <Image src={section.icon} alt={section.title} width={40} height={40} />
              <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>{section.title}</h3>
            </div>
            <p className={`text-gray-600 text-lg md:text-[24px] font-normal ${roboto.className}`}>
              {section.description}
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image src={section.image} alt={section.title} width={437} height={437} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceProviders;

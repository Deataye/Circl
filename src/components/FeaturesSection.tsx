"use client"; // Ensures this is a client-side component

import { FC } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext"; // Import LanguageContext
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

interface FeaturesSectionProps {
  id?: string;
}

const FeaturesSection: FC<FeaturesSectionProps> = ({ id = "features-section" }) => {
  const { language } = useLanguage(); // Access selected language

  const translations = {
    EN: {
      title: "Wellness Professionals on Demand",
      cards: [
        { icon: "/Group.png", title: "Swipe & Discover", description: "Effortlessly explore top wellness experts and find the right match for your journey. Swipe through profiles, check credentials, and choose with confidence." },
        { icon: "/calender-icon.png", title: "Book Instantly", description: "Schedule your favorite wellness services or classes in just a few taps. No waiting, no hassle—just seamless booking at your convenience." },
        { icon: "/heart-icon.png", title: "Save Your Favorites", description: "Keep your trusted wellness professionals at your fingertips. Save their profiles and rebook sessions whenever you need." },
        { icon: "/folder-icon.png", title: "Stay Organized", description: "Manage all your bookings, schedules, and payments in one place. Get reminders, track sessions, and stay on top of your wellness routine." },
      ],
    },
    AR: {
      title: "محترفي العناية الصحية عند الطلب",
      cards: [
        { icon: "/Group.png", title: "انتقد واكتشف", description: "استكشف بسهولة كبار خبراء الصحة واعثر على الشريك المناسب لرحلتك. قم بالتمرير عبر الملفات الشخصية، وتحقق من بيانات الاعتماد، واختر بثقة." },
        { icon: "/calender-icon.png", title: "احجز على الفور", description: "قم بجدولة خدمات أو دروس العافية المفضلة لديك ببضع نقرات فقط. لا داعي للانتظار، ولا متاعب، فقط قم بالحجز بسلاسة على راحتك." },
        { icon: "/heart-icon.png", title: "احفظ مفضلاتك", description: "إبقاء المتخصصين في مجال الصحة الموثوق بهم في متناول يدك. احفظ ملفاتهم الشخصية وأعد حجز الجلسات وقتما تشاء." },
        { icon: "/folder-icon.png", title: "ابق منظماً", description: "إدارة جميع الحجوزات والجداول الزمنية والمدفوعات الخاصة بك في مكان واحد. احصل على تذكيرات وتتبع الجلسات وابق على اطلاع على روتين العافية الخاص بك." },
      ],
    },
  };

  return (
    <section id={id} className="w-full px-4 lg:max-w-[1440px]  lg:mx-auto md:px-16 lg:px-24 py-16">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] lg:leading-[71px] font-semibold text-center ${montserrat.className}`}>
        {language === "EN" ? "Wellness " : "محترفي "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          {language === "EN" ? "Professionals" : "العناية الصحية"}
        </span>
        <br />
        {language === "EN" ? "on Demand" : "عند الطلب"}
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {translations[language].cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-left border border-gray-200">
            <Image src={card.icon} alt={card.title} width={40} height={40} />
            <h3 className={`font-semibold text-[24px] mt-4 ${montserrat.className}`}>{card.title}</h3>
            <p className={`text-[#8A8194] font-normal text-[18px] mt-2 ${roboto.className}`}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

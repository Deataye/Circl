"use client"; // Ensure this is a Client Component

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext"; // Import the LanguageContext
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const HomeHero = () => {
  const router = useRouter();
  const { language } = useLanguage(); // Access the selected language

  // Translations
  const translations = {
    EN: {
      tagline: "Find your wellness match",
      heading: "Connecting You with",
      trusted: "Trusted",
      professionals: "Professionals",
      description: "Whether you're offering services or looking to book them, Circl makes it effortless and reliable.",
      contactUs: "Contact us",
      professionalsData: [
        {
          name: "Mohammed Hadi",
          profession: "Yoga Instructor 🧘‍♂️",
        },
        {
          name: "Ali Bin Ahmad",
          profession: "Personal Trainer 💪",
        },
        {
          name: "Fatima Zahra",
          profession: "Physiotherapist 🏥",
        },
      ],
    },
    AR: {
      tagline: "دور على اللي يناسبك في العناية بصحتك",
      heading: "نوصلك بمحترفين",
      trusted: "موثوقين",
      professionals: "",
      description: "سواء كنت تقدم خدمات أو تبحث عن حجزها، فإن Circl يجعل الأمر سهلاً وموثوقًا.",
      contactUs: "اتصل بنا",
      professionalsData: [
        {
          name: "محمد هادي",
          profession: "مدرب اليوغا 🧘‍♂️",
        },
        {
          name: "علي بن أحمد",
          profession: "مدرب شخصي 💪",
        },
        {
          name: "فاطمة الزهراء",
          profession: "أخصائية علاج طبيعي 🏥",
        },
      ],
    },
  };

  return (
    <section
      className={`w-full px-6 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between bg-transparent ${
        language === "AR" ? "rtl" : "ltr"
      }`}
    >
      {/* Left Section */}
      <div className="max-w-2xl space-y-6">
        <p className={`text-[32px] font-normal text-gray-600 ${montserrat.className}`}>
          {translations[language].tagline}
        </p>
        <h1 className={`text-4xl md:text-[60px] font-semibold leading-tight ${montserrat.className}`}>
          {translations[language].heading} <br />
          <span className="text-black">{translations[language].trusted} </span>
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            {translations[language].professionals}
          </span>
        </h1>
        <p className={`text-gray-600 font-normal text-[28px] ${roboto.className}`}>
          {translations[language].description}
        </p>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Image src="/appstore.png" alt="Download on the App Store" width={160} height={50} className="cursor-pointer" />
          <button
            onClick={() => router.push("/ContactUs")}
            className={`px-6 py-2 border border-gray-800 font-medium text-[19.5px] rounded-md text-gray-800 hover:bg-gray-100 transition ${roboto.className}`}
          >
            {translations[language].contactUs}
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative bg-[#F4F4F4] rounded-full mt-12 md:mt-0">
        {/* Professional Image */}
        <Image src="/hero-image.png" alt="Professional" width={400} height={400} className="rounded-xl" />

        {/* Floating Name Tags */}
        {translations[language].professionalsData.map((person, index) => {
          const positions = [
            "top-6 left-[-40px]",
            "top-[50%] left-[-60px]",
            "bottom-6 left-[-20px]",
          ];
          return (
            <div
              key={index}
              className={`absolute ${positions[index]} bg-white shadow-lg rounded-lg px-4 py-2 flex items-center space-x-2 animate-float`}
            >
              <Image src={`/profile${index + 1}.png`} alt={person.name} width={30} height={30} className="rounded-full" />
              <div>
                <p className="font-semibold text-sm">{person.name}</p>
                <p className="text-xs text-gray-500">{person.profession}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHero;

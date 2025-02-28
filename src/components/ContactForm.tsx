"use client";

import { FC } from "react";
import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import { useLanguage } from "../context/LanguageContext";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ContactForm: FC = () => {
  const { language } = useLanguage();

  const translations = {
    EN: {
      title: "Reach out to",
      us: "Us",
      description: "Have a question or feedback? We’re here to help. Send us a message, and we’ll respond to you at the earliest.",
      firstName: "First name *",
      lastName: "Last name *",
      email: "Email *",
      phone: "Phone number *",
      profession: "Profession",
      otherProfession: "Other profession (if not listed above)",
      message: "Your message",
      sendMessage: "Send Message",
      professions: ["Personal Trainer", "Yoga Instructor", "Massage Therapist"],
      contactInfo: {
        email: "Email",
        emailAddress: "hello@circlonline.com",
        address: "Address",
        addressDetails: "7060 Takhassusi St, Riyadh, KSA",
      },
    },
    AR: {
      title: "تواصل معنا",
      us: "",
      description: "هل لديك سؤال أو ملاحظة؟ نحن هنا للمساعدة. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.",
      firstName: "الاسم الأول *",
      lastName: "الاسم الأخير *",
      email: "البريد الإلكتروني *",
      phone: "رقم الهاتف *",
      profession: "المهنة",
      otherProfession: "مهنة أخرى (إذا لم تكن مدرجة أعلاه)",
      message: "رسالتك",
      sendMessage: "إرسال الرسالة",
      professions: ["مدرب شخصي", "مدرب يوغا", "معالج تدليك"],
      contactInfo: {
        email: "البريد الإلكتروني",
        emailAddress: "hello@circlonline.com",
        address: "العنوان",
        addressDetails: "7060 شارع التخصصي، الرياض، المملكة العربية السعودية",
      },
    },
  };

  return (
    <section className={`w-full px-6 md:px-20 lg:px-40 py-16 ${language === "AR" ? "rtl" : "ltr"}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Form Section */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-200">
          <h2 className={`text-3xl md:text-[60px] leading-[70px] font-semibold ${montserrat.className}`}>
            {translations[language].title} {" "}
            <span className="bg-[#D561F8] text-transparent bg-clip-text">
              {translations[language].us}
            </span>
          </h2>
          <p className={`text-gray-600 font-normal text-[24px] mt-2 ${roboto.className}`}>
            {translations[language].description}
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                  {translations[language].firstName}
                </label>
                <input type="text" className="input-field" />
              </div>
              <div>
                <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                  {translations[language].lastName}
                </label>
                <input type="text" className="input-field" />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].email}
              </label>
              <input type="email" className="input-field" />
            </div>

            <div>
              <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].phone}
              </label>
              <input type="tel" className="input-field" />
            </div>

            <div>
              <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].profession}
              </label>
              <select className="input-field">
                {translations[language].professions.map((profession, index) => (
                  <option key={index}>{profession}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].otherProfession}
              </label>
              <input type="text" className="input-field" />
            </div>

            <div>
              <label className={`block text-sm font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].message}
              </label>
              <textarea className="input-field h-28"></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-md shadow-md hover:opacity-90">
              {translations[language].sendMessage}
            </button>
          </form>
        </div>

        {/* Right - Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <Image src="/email-icon.png" alt="Email" width={28} height={28} />
            <div>
              <p className={`block text-xl font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].contactInfo.email}
              </p>
              <p className={`text-gray-800 font-medium ${roboto.className}`}>
                {translations[language].contactInfo.emailAddress}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Image src="/location-icon.png" alt="Location" width={28} height={28} />
            <div>
              <p className={`block text-xl font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].contactInfo.address}
              </p>
              <p className={`text-gray-800 font-medium ${roboto.className}`}>
                {translations[language].contactInfo.addressDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

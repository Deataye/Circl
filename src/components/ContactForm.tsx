"use client";
import { useState } from "react";
import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";
import { useLanguage } from "../context/LanguageContext"; // Import the language context

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ContactForm = () => {
  const { language } = useLanguage(); // Access selected language
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    otherProfession: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Translations object
  const translations = {
    EN: {
      heading: "Reach out to",
      headingHighlight: "Us",
      subheading: "Have a question or feedback? We're here to help. Send us a message, and we'll respond soon.",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      selectProfession: "Select Profession",
      professions: {
        personalTrainer: "Personal Trainer",
        yogaInstructor: "Yoga Instructor",
        massageTherapist: "Massage Therapist",
      },
      otherProfession: "Other Profession",
      message: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successMessage: "✅ Message sent successfully!",
      failMessage: "❌ Failed to send message.",
      contactEmail: "Email",
      contactAddress: "Address",
      addressText: "7060 Takhassusi St, Riyadh, KSA",
    },
    AR: {
      heading: "تواصل",
      headingHighlight: "معنا",
      subheading: "هل لديك سؤال أو تعليق؟ نحن هنا للمساعدة. أرسل لنا رسالة وسنرد قريبًا.",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      selectProfession: "اختر المهنة",
      professions: {
        personalTrainer: "مدرب شخصي",
        yogaInstructor: "مدرب يوغا",
        massageTherapist: "معالج تدليك",
      },
      otherProfession: "مهنة أخرى",
      message: "رسالتك",
      sendButton: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMessage: "✅ تم إرسال الرسالة بنجاح!",
      failMessage: "❌ فشل إرسال الرسالة.",
      contactEmail: "البريد الإلكتروني",
      contactAddress: "العنوان",
      addressText: "٧٠٦٠ شارع التخصصي، الرياض، المملكة العربية السعودية",
    },
  };

  // Text alignment based on language
  const textAlign = language === "EN" ? "text-left" : "text-right";
  const flexDir = language === "EN" ? "flex-row" : "flex-row-reverse";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(translations[language].successMessage);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          profession: "",
          otherProfession: "",
          message: "",
        });
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch {
      // Empty catch block without parameter
      setStatus(translations[language].failMessage);
    }
    setLoading(false);
  };

  return (
    <section className="w-full px-6 md:px-20 lg:px-40 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-200">
          <h2 className={`text-3xl md:text-[60px] leading-[70px] font-semibold ${textAlign} ${montserrat.className}`}>
            {translations[language].heading}{" "}
            <span className="bg-[#D561F8] text-transparent bg-clip-text">
              {translations[language].headingHighlight}
            </span>
          </h2>
          <p className={`text-gray-600 font-normal text-[24px] mt-2 ${textAlign} ${roboto.className}`}>
            {translations[language].subheading}
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                name="firstName" 
                type="text" 
                placeholder={translations[language].firstName} 
                value={formData.firstName} 
                onChange={handleChange} 
                className={`w-full p-3 border rounded-md ${textAlign}`} 
                required 
              />
              <input 
                name="lastName" 
                type="text" 
                placeholder={translations[language].lastName} 
                value={formData.lastName} 
                onChange={handleChange} 
                className={`w-full p-3 border rounded-md ${textAlign}`} 
                required 
              />
            </div>

            <input 
              name="email" 
              type="email" 
              placeholder={translations[language].email} 
              value={formData.email} 
              onChange={handleChange} 
              className={`w-full p-3 border rounded-md ${textAlign}`} 
              required 
            />
            <input 
              name="phone" 
              type="tel" 
              placeholder={translations[language].phone} 
              value={formData.phone} 
              onChange={handleChange} 
              className={`w-full p-3 border rounded-md ${textAlign}`} 
              required 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select 
                name="profession" 
                value={formData.profession} 
                onChange={handleChange} 
                className={`w-full p-3 border rounded-md ${textAlign}`}
              >
                <option value="">{translations[language].selectProfession}</option>
                <option>{translations[language].professions.personalTrainer}</option>
                <option>{translations[language].professions.yogaInstructor}</option>
                <option>{translations[language].professions.massageTherapist}</option>
              </select>
              <input 
                name="otherProfession" 
                type="text" 
                placeholder={translations[language].otherProfession} 
                value={formData.otherProfession} 
                onChange={handleChange} 
                className={`w-full p-3 border rounded-md ${textAlign}`} 
              />
            </div>

            <textarea 
              name="message" 
              placeholder={translations[language].message} 
              value={formData.message} 
              onChange={handleChange} 
              className={`w-full p-3 border rounded-md h-28 ${textAlign}`} 
              required
            ></textarea>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-md">
              {loading ? translations[language].sending : translations[language].sendButton}
            </button>

            {status && <p className={`text-center mt-3 text-gray-700 ${textAlign}`}>{status}</p>}
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col space-y-6">
          <div className={`flex items-center space-x-3 ${flexDir}`}>
            <Image src="/email-icon.png" alt="Email" width={28} height={28} />
            <div className={textAlign}>
              <p className={`block text-xl font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].contactEmail}
              </p>
              <p className={`text-gray-800 font-medium ${roboto.className}`}>
                shahzaiba61@gmail.com
              </p>
            </div>
          </div>

          <div className={`flex items-center space-x-3 ${flexDir}`}>
            <Image src="/location-icon.png" alt="Location" width={28} height={28} />
            <div className={textAlign}>
              <p className={`block text-xl font-semibold ${montserrat.className} text-gray-700`}>
                {translations[language].contactAddress}
              </p>
              <p className={`text-gray-800 font-medium ${roboto.className}`}>
                {translations[language].addressText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
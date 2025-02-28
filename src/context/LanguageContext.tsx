"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define language translations
const translations = {
  EN: {
    features: "Features",
    serviceProviders: "For Service Providers",
    customers: "For Customers",
    contactUs: "Contact us",
    downloadApp: "Download on the App Store",
  },
  AR: {
    features: "مميزات",
    serviceProviders: "لمزودي الخدمات",
    customers: "للعملاء",
    contactUs: "اتصل بنا",
    downloadApp: "تحميل التطبيق",
  },
};

// Define context structure
interface LanguageContextType {
  language: "EN" | "AR";
  toggleLanguage: () => void;
  t: typeof translations.EN;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language Provider Component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"EN" | "AR">("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
    document.documentElement.dir = language === "EN" ? "rtl" : "ltr"; // Set direction
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

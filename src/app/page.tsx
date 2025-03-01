"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Customers from "@/components/Customers";
import DownloadApp from "@/components/DownloadApp";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import ServiceProviders from "@/components/ServiceProviders";

// Separate the logic using a Suspense boundary
const ScrollToSection = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [searchParams]);

  return null; // No UI needed, just logic
};

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-[1440px] overflow-hidden relative"> 
        <div className="absolute w-[1067px] h-[835px] rounded-full -top-[550px] -z-10 -left-[450px] blur-2xl "style={{
    background: "linear-gradient(180deg, rgba(93, 222, 240, 0.08) 0%, rgba(137, 62, 234, 0.08) 29%, rgba(244, 79, 106, 0.08) 64.5%, rgba(249, 166, 33, 0.08) 100%)",
    
  }}></div> 
  <div className="absolute w-[873px] h-[939px] rounded-full top-[350px] -z-10 opacity-80 -left-[200px] blur-2xl bg-[#D6B28833] " ></div> 
  <div className="absolute w-[668px] h-[668px] rounded-full  -z-10 bottom-10 opacity-40 -right-[200px] blur-2xl bg-[#E6C3F2B2] " ></div>
      <Header />
      <HomeHero />
      <FeaturesSection id="features-section" />
      </div>
   
      <ServiceProviders id="service-providers-section" />
      <Customers id="customers-section" />
      <DownloadApp />
      <Footer />

      {/* Wrap Scroll Logic in Suspense */}
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Customers from "@/components/Customers";
import DownloadApp from "@/components/DownloadApp";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import ServiceProviders from "@/components/ServiceProviders";

export default function Home() {
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

  return (
    <main>
      <Header />
      <HomeHero />
      <FeaturesSection id="features-section" />
      <ServiceProviders id="service-providers-section" />
      <Customers id="customers-section" />
      <DownloadApp />
      <Footer />
    </main>
  );
}

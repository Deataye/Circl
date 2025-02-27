import ContactForm from "@/components/ContactForm";
import Customers from "@/components/Customers";
import DownloadApp from "@/components/DownloadApp";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import ServiceProviders from "@/components/ServiceProviders";


export default function Home() {
  return (
    <main>
     <Header/>
     <HomeHero/>
     <FeaturesSection/>
     <ServiceProviders/>
     <Customers/>
     
     <DownloadApp/>
     <Footer/>
    </main>
   
  );
}

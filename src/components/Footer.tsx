import Image from "next/image";
import { Facebook, Instagram, X } from "lucide-react";
import { Montserrat, Roboto } from "next/font/google";

// Import fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF5EE] text-black py-10 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Circl Logo" width={80} height={30} />
          <p className={`text-gray-600 text-sm ${montserrat.className}`}>
            Wellness professionals on demand
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="#" className={`hover:text-gray-500 ${roboto.className}`}>
            <Facebook size={20} />
          </a>
          <a href="#" className={`hover:text-gray-500 ${roboto.className}`}>
            <Instagram size={20} />
          </a>
          <a href="#" className={`hover:text-gray-500 ${roboto.className}`}>
            <X size={20} />
          </a>
        </div>

        {/* Policy Links */}
        <div className={`flex flex-wrap justify-center space-x-4 text-gray-600 text-sm ${roboto.className}`}>
          <a href="#" className="hover:underline">Privacy policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Freelance terms</a>
          <span>|</span>
          <a href="#" className="hover:underline">User terms</a>
          <span>|</span>
          <a href="#" className="hover:underline">Cancellation & refund policy</a>
        </div>

        {/* Copyright */}
        <p className={`text-gray-500 text-xs mt-4 ${roboto.className}`}>
          Copyright © 2025 Circl. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import { Roboto } from "next/font/google";

// Import Roboto font
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-transparent">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Circl Logo" width={100} height={30} />
      </div>

      {/* Center: Navigation Links */}
      <nav className={`hidden md:flex space-x-6 text-gray-800 font-medium text-[16px] leading-[24px] ${roboto.className}`}>
        <a href="#" className="hover:text-gray-600">
          Features
        </a>
        <a href="#" className="hover:text-gray-600">
          For Service Providers
        </a>
        <a href="#" className="hover:text-gray-600">
          For Customers
        </a>
      </nav>

      {/* Right: App Store Button */}
      <div>
        <Image
          src="/Download_on_the_App_Store_Badge.png"
          alt="Download on the App Store"
          width={140}
          height={40}
        />
      </div>
    </header>
  );
};

export default Header;

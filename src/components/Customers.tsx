import Image from "next/image";
import { FC } from "react";
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Customers: FC = () => {
  return (
    <section className="w-full px-8 md:px-28 lg:px-20 py-20 ">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] -mb-40 leading-[70px] font-semibold text-center ${montserrat.className}`}>
        Circl for{" "} <br />
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
          Customers
        </span>
      </h2>

      {/* Section 1 - Discover Top Wellness Experts */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Content */}
        <div className="max-w-xl space-y-6 text-center -mb-40  md:text-left px-4">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Image src="/search-icon.png" alt="Search Icon" width={42} height={42} />
            <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
              Discover Top Wellness Experts
            </h3>
          </div>
          <p className={`text-gray-600 font-normal text-lg md:text-[24px] leading-relaxed ${roboto.className}`}>
            Swipe through a curated selection of wellness professionals and find 
            the perfect match for your needs. Explore profiles, and choose with 
            confidence.
          </p>
        </div>

        {/* Right Image - Adjusted for better positioning */}
        <div className="relative -mr-20 items-end">
          <Image src="/mobilehand.png" alt="Mobile App" width={400} height={150} />
        </div>
      </div>

      {/* Section 2 - Effortless Booking */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-16">
        {/* Left Content */}
        <div className="max-w-lg space-y-6 text-center md:text-left px-4">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Image src="/Layer_1.png" alt="Booking Icon" width={42} height={42} />
            <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
              Effortless Booking
            </h3>
          </div>
          <p className={`text-gray-600 font-normal text-lg md:text-[24px] leading-relaxed ${roboto.className}`}>
            Seamlessly schedule classes or services with just a few taps. No 
            back-and-forth messages—just instant, hassle-free booking at your 
            convenience.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image src="/select.png" alt="Booking System" width={500} height={350} />
        </div>
      </div>

      {/* Section 3 - Stay Organized */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Left Content */}
        <div className="max-w-lg space-y-6 text-center md:text-left px-4">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Image src="/block-icon.png" alt="Organization Icon" width={42} height={42} />
            <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
              Stay Organized
            </h3>
          </div>
          <p className={`text-gray-600 font-normal text-lg md:text-[24px] leading-relaxed ${roboto.className}`}>
            Keep track of your upcoming sessions, manage payments, and access 
            your favorite providers—all in one easy-to-use platform.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image src="/organized.png" alt="Stay Organized" width={500} height={350} />
        </div>
      </div>
    </section>
  );
};

export default Customers;

import Image from "next/image";
import { FC } from "react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Customers: FC = () => {
  return (
    <section className="w-full px-8 md:px-28 lg:px-20 py-20 space-y-20">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] leading-[1.1] font-semibold text-center mb-20 ${montserrat.className}`}>
        Circl for{" "}
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text block mt-4">
          Customers
        </span>
      </h2>

      {/* Section 1 - Discover Top Wellness Experts */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="flex-1 max-w-xl space-y-6">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/search-icon.png" alt="Search Icon" width={48} height={48} />
            <h3 className={`font-semibold text-3xl md:text-[40px] leading-tight ${montserrat.className}`}>
              Discover Top Wellness Experts
            </h3>
          </div>
          <p className={`text-gray-600 text-xl md:text-2xl leading-8 ${roboto.className}`}>
            Swipe through a curated selection of wellness professionals and find the perfect match for your needs.
            <br /><br />
            Explore profiles, and choose with confidence.
          </p>
        </div>
        <div className="flex-1">
          <Image src="/mobilehand.png" alt="Mobile App" width={500} height={500} className="w-full h-auto" />
        </div>
      </div>

      {/* Section 2 - Effortless Booking */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
        <div className="flex-1 max-w-xl space-y-6">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/Layer_1.png" alt="Booking Icon" width={48} height={48} />
            <h3 className={`font-semibold text-3xl md:text-[40px] leading-tight ${montserrat.className}`}>
              Effortless Booking
            </h3>
          </div>
          <ul className={`text-gray-600 text-xl md:text-2xl space-y-4 ${roboto.className} list-disc pl-5`}>
            <li>Select Service provider</li>
            <li>Select a time for service</li>
            <li>Select location</li>
            <li>Pay for the service</li>
          </ul>
          <p className={`text-gray-600 text-xl md:text-2xl leading-8 ${roboto.className}`}>
            Seamlessly schedule classes or services with just a few taps. No back-and-forth messages—just instant, hassle-free booking at your convenience.
          </p>
        </div>
        <div className="flex-1">
          <Image src="/select.png" alt="Booking System" width={600} height={600} className="w-full h-auto" />
        </div>
      </div>

      {/* Section 3 - Stay Organized */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="flex-1 max-w-xl space-y-6">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/block-icon.png" alt="Organization Icon" width={48} height={48} />
            <h3 className={`font-semibold text-3xl md:text-[40px] leading-tight ${montserrat.className}`}>
              Stay Organized
            </h3>
          </div>
          <p className={`text-gray-600 text-xl md:text-2xl leading-8 ${roboto.className}`}>
            Keep track of your upcoming sessions, manage payments, and access your favorite providers—all in one place.
          </p>
        </div>
        <div className="flex-1">
          <Image src="/organized.png" alt="Stay Organized" width={600} height={600} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Customers;
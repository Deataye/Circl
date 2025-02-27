import Image from "next/image";
import { FC } from "react";
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ServiceProviders: FC = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 space-y-16">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] leading-tight font-semibold text-center ${montserrat.className}`}>
        Circl for{" "} <br />
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
          Service Providers
        </span>
      </h2>

      {/* Section 1 - Create & Sell Services */}
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-40">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Image src="/Group.png" alt="Create & Sell" width={40} height={40} />
            <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
              Effortlessly Create & Sell Services
            </h3>
          </div>
          <p className={`text-gray-600 text-lg md:text-[24px] font-normal ${roboto.className}`}>
            Grow your business with ease. Offer 1-on-1 sessions, group classes, 
            or packages—online or in person. With Circl, manage clients and attract new 
            ones through your profile. Let customers discover, book, and pay—all in one place.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image src="/service-1.png" alt="Mobile App" width={437} height={437} />
        </div>
      </div>

      {/* Section 2 - Booking Management */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-40">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Image src="/calender-icon.png" alt="Booking Management" width={40} height={40} />
            <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
              Simple Booking Management
            </h3>
          </div>
          <p className={`text-gray-600 text-lg md:text-[24px] font-normal ${roboto.className}`}>
            Stay in control of your schedule with an easy-to-use booking system. 
            Accept, manage, or reschedule appointments seamlessly, ensuring a smooth 
            experience for both you and your clients—all in one place.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image src="/service-2.png" alt="Booking System" width={437} height={437} />
        </div>
      </div>

      {/* Section 3 - Secure Payments */}
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-40">
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Image src="/secure-icon.png" alt="Secure Payments" width={40} height={40} />
            <h3 className={`font-semibold text-[28px] md:text-[32px] ${montserrat.className}`}>
              Secure Payments
            </h3>
          </div>
          <p className={`text-gray-600 text-lg md:text-[24px] font-normal ${roboto.className}`}>
            Get paid seamlessly with our secure and hassle-free payment system. 
            Enjoy fast transactions, payouts, and financial peace of mind—so you 
            can focus on delivering exceptional services without worrying about payments.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image src="/service-3.png" alt="Secure Payments" width={437} height={437} />
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;

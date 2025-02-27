import { FC } from "react";
import Image from "next/image";
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const FeaturesSection: FC = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16">
      {/* Heading */}
      <h2 className={`text-4xl md:text-[64px] leading-[71px] font-semibold text-center ${montserrat.className}`}>
        Wellness{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Professionals
        </span>{" "} <br />
        on Demand
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Card 1 - Swipe & Discover */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-left border border-gray-200">
          <Image src="/Group.png" alt="Swipe & Discover" width={40} height={40} />
          <h3 className={`font-semibold text-[24px] mt-4 ${montserrat.className}`}>Swipe & Discover</h3>
          <p className={`text-gray-600 font-normal text-[18px] mt-2 ${roboto.className}`}>
            Effortlessly explore top wellness experts and find the right match for your journey.
            Swipe through profiles, check credentials, and choose with confidence.
          </p>
        </div>

        {/* Card 2 - Book Instantly */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-left border border-gray-200">
          <Image src="/calender-icon.png" alt="Book Instantly" width={40} height={40} />
          <h3 className={`font-semibold text-[24px] mt-4 ${montserrat.className}`}>Book Instantly</h3>
          <p className={`text-gray-600 font-normal text-[18px] mt-2 ${roboto.className}`}>
            Schedule your favorite wellness services or classes in just a few taps. No waiting, 
            no hassle—just seamless booking at your convenience.
          </p>
        </div>

        {/* Card 3 - Save Your Favorites */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-left border border-gray-200">
          <Image src="/heart-icon.png" alt="Save Your Favorites" width={40} height={40} />
          <h3 className={`font-semibold text-[24px] mt-4 ${montserrat.className}`}>Save Your Favorites</h3>
          <p className={`text-gray-600 font-normal text-[18px] mt-2 ${roboto.className}`}>
            Keep your trusted wellness professionals at your fingertips. Save their profiles
            and rebook sessions whenever you need.
          </p>
        </div>

        {/* Card 4 - Stay Organized */}
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-start text-left border border-gray-200">
          <Image src="/folder-icon.png" alt="Stay Organized" width={40} height={40} />
          <h3 className={`font-semibold text-[24px] mt-4 ${montserrat.className}`}>Stay Organized</h3>
          <p className={`text-gray-600 font-normal text-[18px] mt-2 ${roboto.className}`}>
            Manage all your bookings, schedules, and payments in one place. Get reminders, 
            track sessions, and stay on top of your wellness routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

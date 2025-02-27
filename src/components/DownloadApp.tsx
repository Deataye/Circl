import Image from "next/image";
import { FC } from "react";
import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const DownloadApp: FC = () => {
  return (
    <section className="w-11/12 mx-auto px-6 md:px-16 lg:px-24 py-12 bg-black rounded-[32px] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-xl space-y-4">
          <h2 className={`text-3xl md:text-4xl font-bold ${montserrat.className}`}>
            Ready To Transform Your Life
          </h2>
          <p className={`text-gray-300 text-lg md:text-xl leading-relaxed ${roboto.className}`}>
            Whether you’re booking a service or growing your business, Circl makes it
            effortless. Download now from the App Store and take control today!
          </p>

          {/* Download Button */}
          <a
            href="#"
            className={`inline-flex items-center bg-white text-black px-6 py-3 rounded-sm font-semibold hover:bg-gray-300 transition ${roboto.className}`}
          >
            <Image
              src="/apple-icon.png"
              alt="Apple Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Download App
          </a>
        </div>

        {/* Right Image */}
        <div className="relative max-w-2xl">
          <Image
            src="/banner-mobile.png"
            alt="Mobile App Screens"
            width={500}
            height={300}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

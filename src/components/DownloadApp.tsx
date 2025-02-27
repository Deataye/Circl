import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="w-11/12 mx-auto px-6 md:px-16 lg:px-24 py-12 bg-black rounded-2xl text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready To Transform Your Life
          </h2>
          <p className="text-gray-300">
            Whether you’re booking a service or growing your business, Circl makes it
            effortless. Download now from the App Store and take control today!
          </p>

          {/* Download Button */}
          <a
            href="#"
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
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
        <div className="relative">
          <Image
            src="/banner-mobile.png"
            alt="Mobile App Screens"
            width={350}
            height={250}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;

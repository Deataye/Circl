import { FC } from "react";
import Image from "next/image"; 
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ContactForm: FC = () => {
  return (
    <section className="w-full px-6 md:px-20 lg:px-40 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Form Section */}
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-8 border border-gray-200">
          {/* Heading */}
          <h2 className={`text-3xl md:text-4xl font-bold ${montserrat.className}`}>
            Reach out to{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Us
            </span>
          </h2>
          <p className={`text-gray-600 mt-2 ${roboto.className}`}>
            Have a question or feedback? We’re here to help. Send us a message, 
            and we’ll respond to you at the earliest.
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First name *</label>
                <input type="text" placeholder="John" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last name *</label>
                <input type="text" placeholder="Doe" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input type="email" placeholder="Johndoe@email.com" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number *</label>
              <input type="tel" placeholder="+966 xxxxxxxxxx" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Profession</label>
                <select className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3">
                  <option>Personal Trainer</option>
                  <option>Yoga Instructor</option>
                  <option>Massage Therapist</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Other profession (if not listed above)</label>
                <input type="text" placeholder="Other profession" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your message</label>
              <textarea placeholder="Write your message here..." className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3 h-28"></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-md shadow-md hover:opacity-90">
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <Image src="/email-icon.png" alt="Email" width={28} height={28} />
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className={`text-gray-800 font-medium ${roboto.className}`}>hello@circlonline.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Image src="/location-icon.png" alt="Location" width={28} height={28} />
            <div>
              <p className="text-gray-500 text-sm">Address</p>
              <p className={`text-gray-800 font-medium ${roboto.className}`}>
                7060 Takhassusi St, Riyadh, KSA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

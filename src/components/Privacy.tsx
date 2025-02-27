import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Privacy = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-32 py-12 space-y-10">
      <h1 className={`text-4xl font-semibold ${montserrat.className}`}>Privacy & Policy</h1>
      
      <div className={`space-y-8 text-gray-800 ${roboto.className}`}>
        <div>
          <h2 className="font-semibold text-xl">1. GENERAL</h2>
          <p>
            By entering your personal data, you give your consent to its incorporation as a data file belonging to CIRCL. If you do not accept
the terms of this policy, please do not offer your personal data to CIRCL. This policy is incorporated into the CIRCL’s Terms and Conditions
that govern the use and access to the Service offered by CIRCL.
          </p>
        </div>
        
        <div>
          <h2 className="font-semibold text-xl">2. THE COLLECTION OF PERSONAL DATA</h2>
          <p>
            In the event that the User has an interest in accessing and participating in the Service, he/she must fill out the forms requesting personal data
or comply with the requirements of other means of gaining access to the Service.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">3. DATA QUALITY</h2>
          <p>
            CIRCL allows Users to filter search results in the case of legally constituted and accredited representatives. No user may assume another
person’s identity or give another person’s personal data.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">4. CANCELLING THE PROMOTIONAL E-MAIL SERVICE</h2>
          <p>
            The User has the right to oppose the use of his/her data for promotional purposes via the transmission of commercial messages.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">5. PROHIBITIONS</h2>
          <p>
            Members must comply with the rules established in the CIRCL’s APP or website. Members who do not comply may be subject to appropriate actions.
          </p>
        </div>
        
        <div>
          <h2 className="font-semibold text-xl">6. IMAGE RIGHTS</h2>
          <p>
            The Members grant their express consent and authorization under the applicable law to CIRCL to use their personal image and name for the provision
of the Services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;

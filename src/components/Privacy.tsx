import { Montserrat, Roboto } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Privacy = () => {
  return (
    <section className="w-full lg:max-w-[1440px] lg:mx-auto px-6 md:px-16 lg:px-32 py-12 space-y-10">
      <h1 className={`text-[48px] font-semibold ${montserrat.className}`}>Privacy & Policy</h1>
      
      <div className={`space-y-8 text-gray-800 `}>
        <div>
          <h2 className={`text-[24px] font-semibold ${montserrat.className}`}>1. GENERAL</h2>
          <p  className={`text-[16px] font-normal ${roboto.className}`}>
          By entering your personal data, you give your consent to its  incorporation on a data file belonging to CIRCL FAST TECH. If you do not accept the terms of this policy, please do not offer your personal data to CIRCL. This policy incorporated on the CIRCL’s Terms and Conditions  that govern the use and access to the Service offered by CIRCL and, in  particular, the use and access to the APP. We recommend that you re-read this policy from time to time, to keep up to date with its contents,  including any changes that may be introduced. By accessing to the APP  after any changes, alterations or updates in this policy you implicitly  accept the new conditions.
          </p>
        </div>
        
        <div>
          <h2 className={`text-[24px] font-semibold ${montserrat.className}`}>2. THE COLLECTION OF PERSONAL DATA</h2>
          <p className={`text-[16px] font-normal ${roboto.className}`}>
          In the event that the User has an interest in accessing and  participating in the Service, he/she must fill out the forms requesting  personal data or comply with the requirements of other means of gaining  access to the Service.

CIRCL informs that it does not carry out verification on the veracity of the data. For this reason, CIRCL will consider, in each case, that  the data supplied by the User are truthful, whether truthful or not.

CIRCL requests any User whose personal data changes to communicate the changes, to keep the User’s personal data up to date.
          </p>
        </div>

        <div>
          <h2 className={`text-[24px] font-semibold ${montserrat.className}`}>3. DATA QUALITY</h2>
          <p className={`text-[16px] font-normal ${roboto.className}`}>
          CIRCL advises Users that, except in the case of legally constituted and  accredited representation, no User may use another person’s identity or  give another person’s personal data; Users may only offer their own  personal data and this must be suitable, pertinent, up to date, exact  and truthful. In this regard, the User is exclusively responsible for  any direct or indirect damages caused to third parties or to CIRCL by  his/her use of another person’s personal data or by providing false,  erroneous, out of date or inappropriate data. Similarly, a User who  provides personal data of a third person obliged to inform the latter  according to the applicable law, which deals with cases in which data is not obtained from the person him/herself, and/or of the consequences of not informing this person or not obtaining his/her consent. Should a  User decide voluntarily to provide personal data of another person to  CIRCL (for example, an e-mail address, name or telephone number) with  the intention of remitting or recommending the CIRCL’s APP, the User  undertakes to first inform the other person of the intention of  providing his/her data to CIRCL and to get that person’s consent to the  processing of said data and the transmission of communications according to current legislation, failing which, the User is solely responsible.
          </p>
        </div>

        <div>
          <h2 className={`text-[24px] font-semibold ${montserrat.className}`}>4. CANCELLING THE PROMOTIONAL E-MAIL SERVICE</h2>
          <p className={`text-[16px] font-normal ${roboto.className}`}>
          The User has the right to oppose the use of his/her data for promotional purposes via the transmission of commercial messages, and to revoke at  any time the consent granted for this purpose by simply notifying CIRCL  that he/she does not wish to continue receiving commercial messages,  without this affecting the User’s right to opposition. Users may  communicate their opposition in the way indicated in each commercial  message.
          </p>
        </div>

        <div>
          <h2 className={`text-[24px] font-semibold ${montserrat.className}`}>5. PROHIBITIONS</h2>
          <p className={`text-[16px] font-normal ${roboto.className}`}>
          With regard to any personal data that published in the CIRCL’S APP or web site, we inform Users that this data is part of one data file that  belong to and are the responsibility of CIRCL, and they may not be  freely processed or reproduced by other Users of the APP unless  authorization and informed consent has previously been obtained from the person in question. Personal data published in CIRCL’s APP or web site  may consist of any information on any support that concerns physically  identifiable persons, such as a name, surname, IP address, address,  postcode, e-mail address, photographs or any other information.  Consequently, any personal data may only be used by the User of the APP  in order to participate in the service in the way established in the  usage policies of the APP and in the Privacy Policy, for personal  purposes and within the framework of current legislation, with no  lucrative or commercial aims of any nature. Any other uses, apart from  those indicated above, are expressly forbidden, including the  incorporation of images or data into files or processes, and/or the  creation of databases containing personal data and/or sending publicity  or cessions to third parties, without the prior informed consent of the  corresponding User. CIRCL shall bear no responsibility for the use of  personal data that other Users of the APP may make in violation of this  policy.

Where Member uses the AWB’s APP or the web site he/she may not:

Publish information, comments or suggestions that may incite or  promote violent, intolerance, racism, mistreatment, hatred, threats,  physical harm, sexual or other harassment or any other actions contrary  to Law and/or Public order; Post information, comments or suggestions  that are false or misleading, hurtful, demeaning, threatening,  offensive, abusive, obscene, defamatory; Use information published by  other Members without respecting the intellectual property rights of  their legitimate owners; Impersonate the personality of a third party  (pretend to be someone else, use the account, username, or password of  another use). Neither can the password be given to a third person nor  allow a third person to access the user’s account.

Users may only publish information or images belonging to them, and  are personally responsible for these. When the information or images  affect other persons, the prior express consent of these persons must  have been obtained.
          </p>
        </div>
        
        <div>
          <h2 className={`text-[24px] font-semibold ${montserrat.className}`}>6. IMAGE RIGHTS</h2>
          <p className={`text-[16px] font-normal ${roboto.className}`}>
          The Members grant their express consent and authorization under the  applicable law, to CIRCL to use their personal image and name for the  provision of the Services and for the reproduction, distribution and  public communication throughout mass media, press, internet and any  other communication media, including but not limited to the APP and/or  the Site. The Member understands that every person who accesses those  platforms can visualize the content in which the images assigned on this authorization were included. The Members specifically authorize the  processing of their personal data and the transfer and use of your image rights in the terms included in this Conditions and the Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;

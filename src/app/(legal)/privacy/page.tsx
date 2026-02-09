'use client'

import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <motion.main
      initial={{ opacity: -4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-[100vh] tracking-wide leading-[4rem] lg:leading-7  h-full text-[#ebebeb] flex mt-[3rem] mb-[4rem] w-[95vw] sm:w-[85vw] xl:w-[65vw] 2xl:w-[60vw]  relative m-auto flex-col p-4 "
    >
      <h1 className="text-[2.5rem] sm:text-[3.5rem] mb-[2rem] sm:mb-[4rem] text-center mt-[2rem] flex justify-center items-center flex-col sm:gap-[2rem] ">
        <b>Privacy Policy</b>
        <div className="text-[.9rem]">
          <b className="text-[1.2rem]">Legal</b> <br />
          <span className=" top-[-1rem] sm:top-0 relative">
            Last updated / March 13 / 2024
          </span>
        </div>
      </h1>

      <div className="flex justify-start items-start flex-col gap-[2rem] relative leading-7 ">
        <div className="flex flex-col w-full gap-[1rem] ">
          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            At Intellex, we prioritize the privacy of our users and the secure
            handling of information related to the use of $ITLX, our utility
            token. This policy outlines our practices concerning data
            collection, usage, and protection.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem] ">
          <h2 className="text-[1.7rem]  font-semibold  relative top-[.5rem] leading-[130%] ">
            Information Collection and Use
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Information collected includes but is not limited to, user
            registration details, transaction history involving $ITLX, and
            interactions with our services. This data supports the operational
            use of $ITLX and enhances our service offerings.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%]  ">
            Data Sharing and Disclosure
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Personal information is not shared with third parties, except as
            necessary for providing $ITLX-related services, complying with
            legal obligations, or ensuring the security of our platform.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%]  ">
            International Data Transfers
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Information, including data related to $ITLX transactions, may be
            stored or processed in jurisdictions different from your own. We
            commit to handling your data with the utmost care, irrespective of
            location.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%]  ">
            User Rights
          </h2>

          <p className="text-[1rem] font-rotundaLight">
            Users have rights to access, modify, or request deletion of their
            personal data. Contact us directly to exercise these rights
            concerning your data and $ITLX transactions.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%] ">
            Data Security
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            We employ robust security measures to protect data related to $ITLX
            and ensure the integrity of our platform against unauthorized access
            or data breaches.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%] ">
            Cookies and Tracking Technologies
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Our use of cookies and tracking technologies helps improve your
            experience with $ITLX and allows for personalized service delivery.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%] ">
            Changes to the Privacy Policy
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            This policy may be updated to reflect changes in our practices or
            regulatory requirements. Users will be notified of significant
            changes affecting the handling of data related to $ITLX.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold  leading-[130%]  ">
            Contact Us
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            For questions about this Privacy Policy or the handling of data
            related to $ITLX, please reach out to us at{" "}
            <a
              href="mailto:contact@intellex.xyz"
              className="text-[#a883ff] font-semibold tracking-wide underline hover:text-[#d2b2ff] transition-all duration-300 ease-in-out"
            >
              contact@intellex.xyz
            </a>
            .
          </p>
        </div>
      </div>
    </motion.main>
  );
};

export default Privacy;

'use client'

import { motion } from "framer-motion";

const Terms = () => {
  return (
    <motion.main
      initial={{ opacity: -4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" tracking-wide leading-[3.5rem] lg:leading-7  h-full text-[#ebebeb] flex mt-[3rem] mb-[4rem] w-[95vw] sm:w-[85vw] xl:w-[65vw] 2xl:w-[60vw]  relative m-auto flex-col p-4 "
    >
      <h1 className="text-[2.5rem] sm:text-[3.5rem] mb-[2rem] sm:mb-[4rem] text-center mt-[2rem] flex justify-center items-center flex-col sm:gap-[2rem] ">
        <b>Terms and Conditions</b>
        <div className="text-[.9rem]">
          <b className="text-[1.2rem]">Legal</b> <br />
          <span className=" top-[-1rem] sm:top-0 relative">
            Last updated / March 13 / 2024
          </span>
        </div>
      </h1>

      <div className="flex justify-start items-start flex-col gap-[2rem] relative leading-7 ">
        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] font-semibold relative top-[.5rem]">
            Introduction
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Welcome to Intellex, the innovative platform leveraging the power
            of our utility token, $ITLX, to provide a range of services. By
            accessing our website at{" "}
            <a
              href="https://Intellex.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a883ff] font-semibold tracking-wide underline hover:text-[#d2b2ff] transition-all duration-300 ease-in-out"
            >
              https://Intellex.xyz
            </a>{" "}
            and using $ITLX, you agree to comply with and be bound by the
            following terms and conditions.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem] ">
          <h2 className="leading-[130%] text-[1.7rem]  font-semibold  relative top-[.5rem]">
            Geographical Restriction
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
          Intellex and the $ITLX token are intended for a global audience,
            excluding persons from the US and Canada. By using our services, you
            confirm you are not located in or a citizen of these regions.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="leading-[130%]  text-[1.7rem] relative top-[.5rem] font-semibold ">
            Account Registration and Security
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            When registering for an account to utilize $ITLX, you commit to
            providing accurate and current information and maintaining the
            security of your account.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="leading-[130%]  text-[1.7rem] relative top-[.5rem] font-semibold ">
            $ITLX Token Acquisition and Usage
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            $ITLX is a utility token designed for use within the Intellex
            platform. Details on acquiring, holding, and utilizing $ITLX for
            accessing services will be provided, adhering to applicable legal
            standards outside the US and Canada.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="leading-[130%]  text-[1.7rem] relative top-[.5rem] font-semibold ">
            User Conduct and Compliance
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            You agree to use $ITLX and the Intellex platform in a lawful
            manner, respecting the rights of others and the intended use of the
            token as a utility token for services offered by Intellex.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="leading-[130%]  text-[1.7rem] relative top-[.5rem] font-semibold ">
            Intellectual Property Rights
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Content on Intellex, including information about $ITLX, is
            protected by international intellectual property laws. Intellex
            retains all rights to its content and the $ITLX token branding.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="leading-[130%]  text-[1.7rem] relative top-[.5rem] font-semibold ">
            Limitations and Liabilities
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            Intellex&apos;s liability in connection with the use of $ITLX and
            the platform is limited as described, with comprehensive disclaimers
            for indirect or consequential damages.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="leading-[130%]  text-[1.7rem] relative top-[.5rem] font-semibold ">
            Jurisdiction and Dispute Resolution
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            These terms are governed by the laws of the jurisdiction where
            Intellex is based, explicitly excluding US and Canadian law.
            Dispute resolution will be outlined according to local legal
            standards.
          </p>
        </div>

        <div className="flex flex-col w-full gap-[1rem] mt-[1rem]">
          <h2 className="text-[1.7rem] relative top-[.5rem] font-semibold leading-[130%]  ">
            Contact Us
          </h2>

          <p className="text-[1rem] font-rotundaLight text-[#dbdde7]">
            For inquiries related to these Terms and Conditions or $ITLX,
            please contact us at{" "}
            <a
              href="mailto:contact@Intellex.ai"
              className="text-[#a883ff] font-semibold tracking-wide underline hover:text-[#d2b2ff] transition-all duration-300 ease-in-out"
            >
              contact@Intellex.ai
            </a>
            .
          </p>
        </div>
      </div>
    </motion.main>
  );
};

export default Terms;

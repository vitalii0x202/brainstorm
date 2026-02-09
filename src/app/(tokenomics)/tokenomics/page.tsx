"use client";

import React from "react";
import "./_tokenomics.css";
import { motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Tokenomics = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 0.3,
        easing: (t) => t * t * (3 * t),
      }}
    >
     
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="bg-black flex flex-col gap-[1rem] w-full min-h-[100dvh] relative overflow-hidden pb-[7rem] pt-[6rem] 3xl:pt-10"
      >
        <div className="relative w-full h-full mx-auto flex flex-col px-[1.8rem] lg:px-0 lg:w-[55%] 2xl:w-[55%] overflow-hidden lg:pt-[2rem]">
          <div className=" flex flex-col gap-4 justify-center items-center min-h-[45vh] md:min-h-[40vh] relative top-[2rem] md:top-[-0rem] text-start md:text-center">

            <h1 className="text-[3.4rem] lg:text-[4rem] font-bold  text-white ">
              <strong className="!text-[#b0f753]"> $ITLX </strong> Tokenomics
            </h1>
            <p className="text-[1rem] md:text-[1.1rem] lg:max-w-[86%] text-[#e0e0e0]  text-start md:text-center">
              We believe in transparency and want to share this information with
              our community, so that everyone can have a clear understanding of
              where our resources are going. Below is the breakdown of how our
              tokens will be allocated for the ITLX Token ($ITLX) issuance.
            </p>
          </div>

          <div className="chartImg w-full min-h-[40rem] relative flex justify-center items-center gap-[2rem] flex-col text-center text-[1.2rem] font-medium  ">
            <img
              src="/assets/image/chart2.png"
              alt="chart"
              className=" z-[100] hidden md:block hue-rotate-[240deg] brightness-[150%] "
            />
            <img
              src="/assets/image/chartMobile2.png"
              alt="chart"
              className=" z-[100] block md:hidden mt-[3rem] hue-rotate-[240deg] brightness-[150%] "
            />

            <span className="w-full md:w-[80%] text-[#eeeeee] mt-[2rem] text-[1rem] md:text-[1.2rem]">
              <strong className="!text-[#b0f753]">Total Issuance:</strong>{" "}
              1,000,000,000 $ITLX to be distributed across the Intellex
              Ecosystem, including Investors, Team, Advisors and Community.
            </span>
          </div>
        </div>
      </motion.div>
    </ReactLenis>
  );
};

export default Tokenomics;

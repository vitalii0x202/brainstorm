"use client";

import React from "react";
import { motion } from "framer-motion";
import Form from "../components/Form/Form";
import Link from "next/link";
import "./_contact.css";
import { ReactLenis } from "@studio-freight/react-lenis";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
const Contact = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 0.3,
        easing: (t) => t * t * (3 * t),
      }}
    >
     
      <div className="flex flex-col py-[6rem]  gap-[1rem] w-full min-h-[100dvh] relative px-2 sm:px-[2rem] lg:px-0 overflow-hidden bg-black">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="relative w-full h-full flex lg:justify-center justify-start items-start lg:items-start flex-col-reverse lg:flex-row lg:gap-[3rem] xl:gap-[5rem] mt-[5rem] px-4 "
        >
          <Form />

          <div className="flex flex-col gap-[2rem] xl:gap-[4rem] relative mb-[4rem] lg:mb-0 lg:top-[5rem] left-5">
            <div className="flex flex-col gap-4 relative w-full">
              <h2 className="contact_title ">Follow us</h2>
              <div className="flex gap-1  lg:w-[27rem] flex-wrap ">
                <Link
                  href="https://x.com/intellex_xyz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/social/twitter.svg"
                    alt="x"
                    className="w-[2.5rem] h-[2.5rem]  md:w-[3.5rem] md:h-[3.5rem] relative"
                  />
                </Link>
                <Link
                  href="https://linkedin.com/company/intellex-xyz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/social/linkedin.svg"
                    alt="linkedin"
                    className="w-[2.5rem] h-[2.5rem]  md:w-[3.5rem] md:h-[3.5rem] relative"
                  />
                </Link>
                <Link
                  href="https://t.me/intellex_xyz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/social/telegram.svg"
                    alt="telegram"
                    className="w-[2.5rem] h-[2.5rem]  md:w-[3.5rem] md:h-[3.5rem] relative"
                  />
                </Link>
                <Link
                  href="https://github.com/brainstems"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/social/github.svg"
                    alt="github"
                    className="w-[2.5rem] h-[2.5rem]  md:w-[3.5rem] md:h-[3.5rem] relative"
                  />
                </Link>
              
              </div>
            </div>

            <div className="flex flex-col gap-4 relative w-full">
              <h2 className="contact_title  ">Email</h2>
              <span className="text-[1.5rem] font-semibold">
                contact@intellex.xyz
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      </ReactLenis>
  );
};

export default Contact;

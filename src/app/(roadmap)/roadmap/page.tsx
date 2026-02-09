"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

import React from "react";
import "./_roadmap.css";
import { motion } from "framer-motion";
import { Timeline } from "./Timeline";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const Roadmap = () => {
  const data = [
    {
      title: "Q1 2023",
      content: (
        <div className="cardRoadmap w-[100%] 22md:min-w-[25rem] rounded-xl px-[2rem] py-[2rem]">
          <ul className="text-[.95rem] md:text-[1.1rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#f7f7f7]">
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              V1 Protocol design completion.
            </li>
            <li className="flex gap-4 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>{" "}
              Decentralized Federated Learning MVP Implementation.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Assets (Models, Data, Agents) Fingerprinting.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>{" "}
              Registry & Ownership Endpoints.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Q2 2023",
      content: (
        <div className="cardRoadmap w-[100%] 22md:min-w-[25rem] rounded-xl px-[2rem] py-[2rem]">
          <ul className="text-[.95rem] md:text-[1.1rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#f7f7f7]">
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Integrated 5K suppliers models with 1.3M food operators.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Unique F&B Model.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Q4 2023",
      content: (
        <div className="cardRoadmap w-[100%] 22md:min-w-[25rem] rounded-xl px-[2rem] py-[2rem]">
          <ul className="text-[.95rem] md:text-[1.1rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#f7f7f7]">
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Onboard 25 Suppliers.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              20+ waitlist.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              $ITLX Smart Contracts development.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Decentralized Federated Learning Proof Of Concept.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Q1 2024",
      content: (
        <div className="cardRoadmap w-[100%] 22md:min-w-[25rem] rounded-xl px-[2rem] py-[2rem]">
          <ul className="text-[.95rem] md:text-[1.1rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#f7f7f7]">
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Token sale launch.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Federated activation framework MVP Design.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Q2 2024",
      content: (
        <div className="cardRoadmap w-[100%] 22md:min-w-[25rem] rounded-xl px-[2rem] py-[2rem]">
          <ul className="text-[.95rem] md:text-[1.1rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#f7f7f7]">
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Upgrade Protocol v1 to Core Protocol v1.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Multi-Industry Knowledge Extraction (MIKE) mechanism.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Trustless Tokenizing Execution Financing Opportunity (TTEFO).
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Decentralized data providers partnerships.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Decentralized compute providers partnerships.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "2025",
      content: (
        <div className="cardRoadmap w-[100%] 22md:min-w-[25rem] rounded-xl px-[2rem] py-[2rem]">
          <ul className="text-[.95rem] md:text-[1.1rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#f7f7f7]">
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Core Protocol v2.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              Decentralized Compute Orchestration.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              +75 Companies.
            </li>
            <li className="flex gap-2 ">
              <div className="w-[1.5rem] relative">
                <div className="ping"></div>
              </div>
              +2000 Datascientists Members.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 0.3,
        easing: (t) => t * t * (3 * t),
      }}
    >
      <div className="container_line_separator">
        <div className="line_separator_top"></div>
        <div className="bg_line_separator"></div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="heroRoadmap flex flex-col w-full min-h-[100vh] relative overflow-hidden"
      >
        <div className="relative w-full h-full mx-auto flex flex-col px-[1.8rem] lg:px-0 lg:w-[86%] 2xl:w-[55%] overflow-hidden  lg:pt-[4rem]">
          <div className=" flex flex-col gap-4 justify-center items-center min-h-[60vh] 2md:min-h-[50vh] relative 2md:top-[-2.5rem] text-start 2md:text-center ">
            <h1 className="text-[4rem] titleColor lg:text-[5rem] font-bold text-start 2md:text-center w-full">
              Roadmap
            </h1>
            <p className="text-[1rem] text-[#bebebe] sm:text-[1.1rem] lg:max-w-[86%] text-start 2md:text-center">
              This roadmap is more than a guide; it&apos;s a narrative of
              innovation and progress. Together, we&apos;ll navigate through
              milestones, conquer challenges, and unfold a vision for a dynamic
              and evolving future. If you want to understand things a little bit
              better you can check out our full roadmap with more details at our
              whitepaper.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mx-auto content max-w-7xl">
          <Timeline data={data} />
        </div>
      </motion.div>
    </ReactLenis>
  );
};

export default Roadmap;

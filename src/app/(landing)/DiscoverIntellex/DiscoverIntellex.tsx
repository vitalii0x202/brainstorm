"use client";

import React from "react";
import "./_discoverIntellex.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const DiscoverIntellex = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="box_cards_discover top-[1rem] lg:top-[2rem] w-full  h-full pb-[8rem] relative grid 2sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8  align-items-center"
    >
      <div
        className={` cardBst cardBst-1 flex-1 h-[25rem] rounded-xl relative`}
      >
        <div className="front">
          <span className="c-network">DETERMINISTIC FOUNDATION</span>
          <span className="c-network-title">DETERMINISTIC FOUNDATION</span>
          <p> Managing blockchain consistency and immutability.</p>
        </div>
      </div>

      <div
        className={` cardBst cardBst-2 flex-1 h-[25rem] rounded-xl relative `}
      >
        <div className="front">
          <span className="c-network">STOCHASTIC INTEGRATION</span>
          <span className="c-network-title">STOCHASTIC INTEGRATION</span>
          <p>Handling AI&apos;s probabilistic outputs.</p>
        </div>
      </div>

      <div
        className={` cardBst cardBst-3 flex-1 h-[25rem] rounded-xl relative`}
      >
        <div className="front">
          <span className="c-network c-2"> AGENT COORDINATION</span>
          <span className="c-network-title c-2"> AGENT COORDINATION</span>
          <p>Enabling cross-domain collaboration.</p>
        </div>
      </div>

      <div
        className={`cardBst cardBst-4 flex-1 h-[25rem] rounded-xl relative `}
      >
        <div className="front">
          <span className="c-network">ADAPTIVE EXECUTION </span>
          <span className="c-network-title">ADAPTIVE EXECUTION </span>
          <p> Supporting dynamic contract behavior.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoverIntellex;

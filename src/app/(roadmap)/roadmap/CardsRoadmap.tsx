"use client";

import React, { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import "./_roadmap.css";

const CardsRoadmap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  //@ts-ignore
  const { events } = useDraggable(ref);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        const scrolled = (scrollLeft / maxScrollLeft) * 100;
        setProgress(scrolled);
      }
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div
      className="cardsContainer relative flex flex-col min-h-[80vh] overflow-x-scroll scrollbar-hide px-[2rem] lg:px-[10rem]"
      ref={ref}
      {...events}
    >
      <div className=" flex gap-[4rem] justify-start items-center ">
        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">Q1 2023</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li> V1 Protocol design completion</li>
            <li> Decentralized Federated Learning MVP Implementation</li>
            <li> Assets (Models, Data, Agents) Fingerprinting</li>
            <li> Registry & Ownership Endpoints</li>
          </ul>
        </div>

        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">Q2 2023</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li>Integrated 5K suppliers models with 1.3M food operators</li>
            <li>Unique F&B Model</li>
          </ul>
        </div>

        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">Q3 2023</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li>
              Trustless Tokenizing Execution Opportunity Concept validation
            </li>
            <li>Federated activation framework Architecture validation</li>
          </ul>
        </div>

        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">Q4 2023</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li>Onboard 25 Suppliers</li>
            <li>20+ waitlist</li>
            <li>$ITLX Smart Contracts development</li>
            <li>Decentralized Federated Learning Proof Of Concept</li>
          </ul>
        </div>

        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">Q1 2024</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li>Token sale launch</li>
            <li>Federated activation framework MVP Design</li>
          </ul>
        </div>

        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">Q2 2024</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li>Upgrade Protocol v1 to Core Protocol v1</li>
            <li>Multi-Industry Knowledge Extraction (MIKE) mechanism</li>
            <li>
              Trustless Tokenizing Execution Financing Opportunity (TTEFO)
            </li>
            <li>Decentralized data providers partnerships</li>
            <li>Decentralized compute providers partnerships</li>
          </ul>
        </div>

        <div className="cardRoadmap w-[100%] h-[31rem] sm:w-[25rem] sm:h-[28rem] rounded-xl px-[2rem] py-[2rem]">
          <h3 className="text-[2rem] font-[900]">2025</h3>
          <ul className="list-disc pl-4  mt-[2rem] flex justify-center items-start flex-col gap-[1.4rem] text-[#e4e4e4]">
            <li>Core Protocol v2</li>
            <li>Decentralized Compute Orchestration</li>
            <li>+75 Companies</li>
            <li>+2000 Datascientists Members</li>
          </ul>
        </div>
      </div>

      <div
        className="timeline w-[177rem] sm:w-[199rem] h-[.3rem] bg-[#a967ff] flex justify-start relative gap-[4rem] rounded-full mt-[4rem]"
        style={{
          background: `linear-gradient(to right, #6826be ${progress}%, #ffffff57 ${progress}%)`,
        }}
      >
        <div className="w-[28.42rem] flex justify-start items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
        <div className="w-[28.42rem] flex justify-center items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
        <div className="w-[28.42rem] flex justify-center items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
        <div className="w-[28.42rem] flex justify-center items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
        <div className="w-[28.42rem] flex justify-center items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
        <div className="w-[28.42rem] flex justify-center items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
        <div className="w-[28.42rem] flex justify-end items-center">
          <div className="h-[1.2rem] w-[1.2rem] bg-[#ffffff] rounded-full relative"></div>
        </div>
      </div>
    </div>
  );
};

export default CardsRoadmap;

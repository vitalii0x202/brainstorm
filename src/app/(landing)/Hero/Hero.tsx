"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./hero.css";
import { ArrowUpRight, X } from "lucide-react";


const PulsingDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96ff00] opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#96ff00]"></span>
  </span>
);



const Hero: React.FC = () => {

  const [showFeatures, setShowFeatures] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            if (video.paused) {
              video.load();
              video.play().catch(err => console.error('Error playing video:', err));
            }
          } else {
            const video = entry.target as HTMLVideoElement;
            video.pause();
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden z-[99999]">
        <div className="hero-container overflow-hidden relative bg-black w-full min-h-[100dvh] border-t-[.5rem] border-b-[.5rem] 3xl:border-b-[1.2rem] border-x-[.5rem] 3xl:border-x-[1rem] border-black">
          <img
            src="/assets/image/overL.svg"
            alt="overlay"
            className="overlayL absolute h-[20rem] 3xl:h-[35rem] w-[.8rem] lg:w-[1.7rem] 3xl::w-[2.5rem] top-1/2 -translate-y-1/2 z-[12] left-0  object-cover"
          />
          <img
            src="/assets/image/overR.svg"
            alt="overlay"
            className="overlayR absolute h-[20rem] 3xl:h-[35rem] w-[.8rem] lg:w-[1.7rem] 3xl::w-[2.5rem] top-1/2 -translate-y-1/2 z-[12] right-0 object-cover "
          />

          <img
            src="/assets/image/overB.svg"
            alt="overlay"
            className="overlayB absolute  w-[35rem] 3xl:w-[45rem] h-[1.8rem] 3xl:h-[2.5rem] bottom-0 left-1/2 -translate-x-1/2 z-[12] object-cover"
          />

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full absolute top-0 z-[10] left-0 h-full object-cover"
            aria-hidden="true"
          >
            <source src="/assets/assetsVideo/hero.mp4" type="video/mp4" />
          </video>

          <div className="max-w-full w-full px-8 md:px-20 3xl:px-0 2lg:max-w-7xl 3xl:max-w-[1440px] mx-auto space-y-6 3xl:space-y-11 h-full relative top-[9rem] sm:top-[10rem] 3xl:top-[11rem] z-[12]">
            {/* Main Heading */}
            <h1 className="text-[1.6rem] 2sm:text-[2.2rem] 2md:text-[2.7rem] xl:text-[3.2rem] 3xl:text-[3.7rem] font-medium leading-tight tracking-tighter ">
              Your Memory; Your Rules <br />{" "}
            </h1>
            <span className="text-[1.2rem] 2sm:text-[1.4rem] 2md:text-[1.6rem] xl:text-[1.8rem] 3xl:text-[2rem] font-medium leading-tight tracking-tighter top-2 2xl:top-3 relative ">
              {" "}
              Creating the Infrastructure for Secure, Scalable AI Agent
              Collaboration
            </span>

            {/* Navigation */}
            <nav className="flex items-center gap-1 sm:gap-3 md:gap-6 text-[.7rem] 2xl:text-[.9rem] 2sm:text-sm font-medium text-gray-400 ">
              <span>AI</span>
              <span className="text-[#88ff00b4] 2xs:block hidden">\</span>
              <span className="2xs:block hidden">WEB3</span>
              <span className="text-[#88ff00b4]">\</span>
              <span>ACTIVATORS</span>
              <span className="text-[#88ff00b4]">\</span>
              <span>INTELLIGENCE</span>
              <span className="text-[#88ff00b4]">\</span>
              <span>PROTOCOLS</span>
            </nav>
          </div>

          {/* Subtitle and Interaction Text */}
          <div className=" w-full absolute bottom-[8rem] md:bottom-10 3xl:bottom-10 left-[0vw] sm:right-[10rem] md:right-[10rem] mx-auto z-[13]">
            <div className="flex flex-col justify-end items-end gap-4 relative px-8 md:px-2 lg:px-6 2xl:px-20">
              <div className="flex justify-between items-start flex-col gap-4 max-w-full md:max-w-sm 3xl:max-w-md">
                <p className="text-sm 2xl:text-[1.05rem] text-gray-400">
                  Building intelligent digital workforces for industry
                </p>
                <p className="text-sm 2xs:text-md 3xl:text-[.95rem] leading-snug text-[#e0e0e0]">
                We believe your intelligence—human, enterprise, or agentic—should
              be owned by you but its greatest value comes when it strengthens our shared memory.
              Collective memory is the foundation for agent interoperability
              and coordination across blockchains.
              <br />
              Intellex Protocol: Agents create and share memories of expertise, reputation and experience
              unlocking trusted collaboration for people and enterprises.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-start items-start ">
                  <Link href="/contact">
                    <button className="px-4 sm:px-6 py-3 text-sm border border-white/20 rounded-full bg-transparent hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)] hover:bg-[#acb3f528] transition-colors">
                      Contact Us
                    </button>
                  </Link>
                  {/* <button
                    disabled
                    className="px-4 sm:px-6 py-3 text-sm border border-[#686868e7] rounded-full bg-transparent hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)] hover:bg-[#acb3f509] transition-colors flex gap-2 opacity-70 cursor-not-allowed group"
                  >
                    <span className="group-hover:hidden text-[#818181]"></span>
                    <span className="hidden group-hover:inline text-[#818181]">Coming Soon</span>
                    <span className="flex items-center justify-center w-5 h-5 bg-[#414141] rounded-full">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </span>
                  </button> */}

                     <Link
                  href="https://activators.intellex.xyz/"
                  target="_blank"
                  rel="noopener"
                >
                  <button className="px-4 sm:px-6 py-3 text-sm border border-[#a1ff55e7] rounded-full bg-transparent hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)] hover:bg-[#acb3f528] transition-colors flex gap-2">
                    Get Started
                    <span className="flex items-center justify-center w-5 h-5 bg-[#96ff00] rounded-full">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </span>
                  </button>
                </Link>

                </div>
              </div>
            </div>
          </div>
        </div>


        {showFeatures && (
          <div className="partner-logos flex absolute bottom-[6rem] 3xs:bottom-[2rem] sm:bottom-[2.6rem] lg:bottom-[1.6rem] 2xl:left-8 2xl:bottom-[2.5rem] left-auto sm:left-10 lg:left-5 md:border border-[#88c4763d] rounded-xl px-6 md:px-5 flex-col justify-center items-start w-[15rem] md:w-[30vw] 2md:w-[32vw] lg:w-[29vw] 2xl:w-[31vw] py-6 2xl:py-8 pt-4 2xl:pt-4 md:backdrop-blur-sm md:bg-[#00000035] z-[999] gap-4">

            <span className=" items-center gap-2 flex-nowrap justify-start md:justify-center  pl-1 text-[1rem] text-[#ffffff83] leading-tight tracking-tighter hidden md:flex">
              <PulsingDot />
              Backed by
            </span>

            <div className="flex flex-row flex-nowrap md:flex-wrap max-w-full md:max-w-[15rem] lg:max-w-full gap-4 sm:gap-5 md:gap-6 lg:gap-5 2xl:gap-5 lg:grid lg:grid-cols-5 w-full items-center justify-items-center">
              <img
                src="/assets/image/hero/Near-w.png"
                alt="Near logo"
                className="w-[14vw] md:w-auto h-[1.7rem] lg:w-auto 2xl:h-[2rem]"
              />
              <img
                src="/assets/image/hero/Faculty-w.png"
                alt="Faculty logo"
                className="w-[14vw] md:w-auto h-[1.7rem] lg:w-auto 2xl:h-[2rem]"
              />
              <img
                src="/assets/image/hero/SL2-w.png"
                alt="SL2 logo"
                className="w-[14vw] md:w-auto h-[1.7rem] lg:w-auto 2xl:h-[2rem]"
              />
              <img
                src="/assets/image/hero/Purechain-w.png"
                alt="Purechain logo"
                className="w-[14vw] md:w-auto h-[1.7rem] lg:w-auto 2xl:h-[2rem]"
              />
              <img
                src="/assets/image/hero/Portico-w.png"
                alt="Portico logo"
                className="w-[14vw] md:w-auto h-[1.7rem] lg:w-auto 2xl:h-[2rem]"
              />

            </div>
          </div>
        )}


        <div className=" hidden md:flex gap-0 3xl:gap-1 absolute bottom-[1rem] sm:bottom-[20rem] 3xl:bottom-[22rem] right-3 sm:right-12 3xl:right-16 py-4 rounded-full flex-nowrap flex-col opacity-[.9] z-[14]">
          <Link
            href="https://t.me/intellex_xyz"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:drop-shadow-[0_2px_15px_rgba(138,255,0)] transition-all duration-300 ease-in-out "
          >
            <img
              src="/assets/icons/social/telegram.svg"
              alt="telegram"
              className=" 2md:w-[2rem] 2md:h-[2rem] relative"
            />
          </Link>
          <Link
            href="https://x.com/intellex_xyz"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:drop-shadow-[0_2px_15px_rgba(138,255,0)] transition-all duration-300 ease-in-out "
          >
            <img
              src="/assets/icons/social/twitter.svg"
              alt="x"
              className=" 2md:w-[2rem] 2md:h-[2rem] relative"
            />
          </Link>
          <Link
            href="https://linkedin.com/company/intellex-xyz"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:drop-shadow-[0_2px_15px_rgba(138,255,0)] transition-all duration-300 ease-in-out "
          >
            <img
              src="/assets/icons/social/linkedin.svg"
              alt="linkedin"
              className=" 2md:w-[2rem] 2md:h-[2rem] relative"
            />
          </Link>

        </div>
      </div>
    </>
  );
};

export default Hero;

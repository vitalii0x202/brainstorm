"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Link from "next/link";

const Hero = dynamic(() => import("./Hero/Hero"), { loading: () => null, ssr: false, suspense: true });
const AboutSection = dynamic(() => import("./About/About"), { loading: () => null, ssr: false, suspense: true });
const Intelligence = dynamic(() => import("./Intelligence/Intelligence"), { loading: () => null, ssr: false, suspense: true });
const Protocol = dynamic(() => import("./Protocol/Protocol"), { loading: () => null, ssr: false, suspense: true });
const Customers = dynamic(() => import("./Customers/Customers"), { loading: () => null, ssr: false, suspense: true });
const JobsActivators = dynamic(() => import("./Activators/JobsActivators"), { loading: () => null, ssr: false, suspense: true });
const Token = dynamic(() => import("./Token/Token"), { loading: () => null, ssr: false, suspense: true });
const Partners = dynamic(() => import("./Partners/Partners"), { loading: () => null, ssr: false, suspense: true });
const Industries = dynamic(() => import("./Industries/Industries"), { loading: () => null, ssr: false, suspense: true });
const ScreenScroll = dynamic(() => import("./Activators/screenScroll/ScreenScroll"), { loading: () => null, ssr: false, suspense: true });

const contentVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

const AnimatedContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={contentVariants} className={className}>
      {children}
    </motion.div>
  );
};

const Backed = dynamic(() => import("./Backed/Backed"), {
  loading: () => null,
  ssr: false,
  suspense: true
});

const PulsingDot = () => (
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96ff00] opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#96ff00]"></span>
  </span>
);

const Section = ({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <div id={id} className={`relative w-full h-full mx-auto flex flex-col px-[1rem] lg:px-0 ${className}`}>{children}</div>
);

const SectionTitle = ({ subtitle, title, className = "", containerClassName = "" }: { subtitle?: string; title: string; className?: string; containerClassName?: string }) => (
  <AnimatedContent className={`w-full flex justify-start md:justify-center items-start md:items-center relative flex-col overflow-hidden ${containerClassName}`}>
    <h3 className={`titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl capitalize font-semibold text-start md:text-center leading-tight ${className}`}>
      {subtitle && (
        <span className="text-shadowClass flex items-center gap-4 flex-nowrap justify-start md:justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4 pl-1">
          <PulsingDot /> {subtitle}
        </span>
      )}
      <span>{title}</span>
    </h3>
  </AnimatedContent>
);

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden" id={'hero'}>
      {/* HERO */}
      <div className="relative w-full min-h-screen rounded-xl">
        <Hero />
      </div>

      {/* ABOUT */}
      <Section id="about" className="bgblack pt-[1rem] lg:pt-[1rem]">
        <AboutSection />
      </Section>

      <Section id="about" className="bg-black mb-[2rem]  md:mb-[4rem]">
        <Backed />
      </Section>

      {/* HOW */}
      <Section className="bg-[#000] z-10 pt-[4rem]">
        <SectionTitle title="How Agents Use Your Memory—Safely" containerClassName="container mx-auto max-w-7xl px-2" />
        <div className="container mx-auto max-w-6xl xl:max-w-[1420px] w-full">
          <Intelligence />
        </div>
      </Section>

      {/* PROTOCOL */}
      <Section className="bg-[#000] z-10 pt-[3rem] lg:pt-[7rem]">
        <SectionTitle subtitle="The Protocol" title="The Memory Lifecycle: Create • License • Use • Update • Revoke" containerClassName="px-2" />
        <div className="container mx-auto max-w-6xl xl:max-w-[1420px] w-full">
          <Protocol />
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section className="bg-[#000] z-10 pt-[3rem] lg:pt-[5rem]">
        <AnimatedContent className="w-full flex justify-start items-start md:justify-center md:items-center flex-col overflow-hidden">
          <h3 className="titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl max-w-[760px] font-semibold text-start md:text-center leading-tight mb-6">
            <span className="text-shadowClass flex items-center gap-4 justify-start md:justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4">
              <PulsingDot /> Industries
            </span>
            <span>Start Where Shared Memory Pays Back Day One</span>
          </h3>
          <span className="text-[.75rem] md:text-sm mb-5 !text-[#c1f77a] border border-[#333633] mt-4 rounded-full py-2 px-4 bg-[#1b1b1bee]">
            Free tools for logistics • support • nonprofit
          </span>
          <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center mb-8">
            Spin up a private memory model, grant limited access, and see value in minutes.
            Our freemium tools meter usage and pay micro-royalties when memory is used—no raw data moves.
          </p>
        </AnimatedContent>
        <div className="container mx-auto max-w-[1420px] w-full z-[11]">
          <Industries />
        </div>
      </Section>

      {/* TOKEN */}
      <Section className="bg-[#000000] z-10 pt-[3rem] 2md:pt-[7rem]">
        <SectionTitle subtitle="$ITLX Utility" title="$ITLX: The Rail for Memory in Motion" className="max-w-[930px] 2xl:max-w-[1100px]" />
        <div className="container mx-auto max-w-[1420px] w-full">
          <Token />
        </div>
      </Section>

      {/* ACTIVATORS = PROTECTORS */}
      <Section className="bg-[#000]">
        <div className="pb-0 py-[7rem] relative z-9">
          <SectionTitle
            subtitle="Activators"
            title="Protectors of Personal Memories (PLMs) • Registry • Licensing • Metering • Federation • Bridge"
            className="max-w-[1050px]"
          />
          <div className="container mx-auto max-w-[1420px] w-full relative z-10">
            <JobsActivators />
          </div>
        </div>
      </Section>

      {/* STORY SCROLL */}
      <Section className="!z-[10]">
        <ScreenScroll />
      </Section>

      {/* CUSTOMERS */}
      <Section className="bgblack !z-[10] pt-[0rem] mt-20 md:mt-0 lg:pt-[6rem]">
        <SectionTitle subtitle="Customers" title="Turn Institutional Memory Into a Working Asset" className="lg:max-w-[700px] xl:max-w-[930px]" containerClassName="z-[10]" />
        <div className="container mx-auto max-w-[1420px] w-full">
          <Customers />
        </div>
      </Section>

      {/* PARTNERS */}
      <Section className="bgblack pt-[3rem] lg:pt-[7rem]">
        <AnimatedContent className="w-full flex justify-center items-center flex-col overflow-hidden">
          <h3 className="titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl lg:max-w-[700px] xl:max-w-[930px] font-semibold text-start md:text-center leading-tight mb-4 mt-[3.2rem]">
            <span className="text-shadowClass flex items-center gap-4 justify-start md:justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4 pl-1">
              <PulsingDot /> Partners
            </span>
            <span>Co-Building Shared Memory—NEAR-Aligned, Enterprise-Ready</span>
          </h3>
          <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
            We’re standardizing how memory is created, licensed, used, updated, and revoked—so agents can work together without moving raw data.
          </p>
        </AnimatedContent>
        <div className="container mx-auto max-w-[1420px] w-full z-10">
          <Partners />
        </div>
      </Section>

      {/* FOOTER CTA */}
      <Section className="bg-[#000] mt-[6rem] z-10 min-h-[60dvh]">
        <AnimatedContent className="w-full flex justify-center items-center flex-col overflow-hidden px-[1rem] sm:px-[3rem] lg:px-[5.5rem] 3xl:px-[10rem] mb-[.5rem]">
          <h3 className="titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl lg:max-w-[630px] xl:max-w-[930px] font-semibold text-start md:text-center leading-tight mb-[1rem]">
            <span className="text-shadowClass flex items-center gap-4 justify-start md:justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4 pl-1">
              <PulsingDot /> Intellex World
            </span>
            <span>Join the Future of the Memory Economy</span>
          </h3>
          <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
            Build with private memory models. Contribute to shared memory on your terms. Settle it all with $ITLX on NEAR.
          </p>
        </AnimatedContent>
        <div className="w-full flex justify-center items-center">
          <Link href="https://medium.com/@intellex_ai" target="_blank" rel="noopener noreferrer" className="text-[.75rem] md:text-sm mb-5 !text-[#c1f77a] border border-[#333633] mt-4 rounded-full py-2 px-6 bg-[#1b1b1bee] flex items-center gap-2 hover:border-[#96ff00] transition-all duration-300">
            Read the latest →
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default LandingPage;

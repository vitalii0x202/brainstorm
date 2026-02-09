"use client";

import { Shield, Users, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useMobile from "@/hooks/UseMobile";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  return (
    <section className=" text-gray-100 pb-16 px-2 py-2 relative overflow-hidden !z-10 ">
      <div className="w-full flex justify-center items-center flex-col relative overflow-hidden mb-8">
        <h3 className="titleColor text-[1.8rem] lg:text-[2.2rem] xl:text-5xl max-w-[980px] font-semibold text-center mb-6">
          About Intellex
        </h3>
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
          <strong>Memory ≠ intelligence.</strong> Memory is what&apos;s stored; intelligence is what you can do with it.
          Intellex turns what you know into a private model you control and gives agents a safe way to use it—so your
          intelligence can help build <em>collective memory</em> without giving up ownership.
          We make the interoperability layer on NEAR Intent that lets agents across blockchains own, share, and use collective
			memory. The Intellex protocol guides the network for creating, proving, permitting, moving and
		improving memory.
        </p>
      </div>
  <div className="relative w-full my-12">
    {/* soft glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-px blur-[2px]
                 bg-gradient-to-r from-indigo-500/30 via-cyan-400/30 to-rose-500/30"
    />
    {/* crisp line */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    {/* center pill */}
    <span
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                 bg-white/5 backdrop-blur px-3 py-1 rounded-full text-[11px] tracking-widest uppercase
                 ring-1 ring-white/10 text-white/70"
    >
    </span>
  </div>
      {/* Second header and content */}
      <div className="w-full flex justify-center items-center flex-col relative overflow-hidden mb-8">
        <h3 className="titleColor text-[1.8rem] lg:text-[2.2rem] xl:text-5xl max-w-[980px] font-semibold text-center mb-6">
          Partnering with NEAR
        </h3>
        <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center">
          Intellex delivers business enterprise revenue and use cases to the NEAR ecosystem.  Intellex is actively engaging with the 
			NEAR community to enable participation by the community in developing agents that meet real world probems</p> 
		  <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-2xl xl:max-w-4xl text-start md:text-center"> NEAR delivers NEAR Intents as a chain abstraction technology 
          that delivers message transport for the Intellex Protocol.  With NEAR Intents, messages regarding agent experience, expertise and reputation can 
          easily be passed across agent ecosystems on any blockchain.  Plus, coordination activities by multi-agent systems deployed across chains can then
		be managed.
        </p>
      </div>

      {/* FeatureCard only appears once at the end */}
      <FeatureCard />
    </section>
  );
}

function FeatureCard() {
  const sections = [
    {
      title: "Owned Memory",
      description: "Private memory models (PLMs/org models) you control—fine-tunes, knowledge shards, and policies.",
      icon: Shield
    },
    {
      title: "Collective Memory",
      description: "Contribute on your terms. Results and updates move; ownership stays with you.",
      icon: Users
    },
    {
      title: "Interoperable by Design",
      description: "Register, license, use, update, and revoke across teams and partners with receipts.",
      icon: Layers
    }
  ];

  const isMobile = useMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.to(".box_about", {
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: { trigger: ".heroAbout", start: "top 40%", end: "bottom bottom" }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const v = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (v.paused) {
            v.load();
            v.play().catch((err) => console.error("Error playing video:", err));
          }
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.1, rootMargin: "100px" });

    if (videoRef.current) observer.observe(videoRef.current);
    return () => { 
      const currentVideo = videoRef.current;
      if (currentVideo) observer.unobserve(currentVideo); 
    };
  }, []);

  return (
    <div className="w-full mx-auto md:px-4 py-8 mt-[2rem]">
      {isMobile ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-transparent hover:bg-card duration-300 w-full">
              <CardHeader className="flex flex-col items-center">
                <div className="p-2 bg-[#96ff00] rounded-full mb-4 box-shadowClass">
                  <section.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-center text-[#edffec]">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="heroAbout w-full h-full mx-auto container relative">
          <div className="contain_about absolute w-full h-[30rem] 3xl:h-[40rem] z-[20] grid grid-cols-3">
            <div className="box_title_1_about relative flex justify-evenly h-full flex-col gap-4 px-[6rem]">
              <div className="box_about box_about-1 flex flex-col gap-2">
                <h2 className="font-semibold text-[#c1f77a] text-[1rem] 3xl:text-[1.1rem]">Owned Memory</h2>
                <p className="text-[#d8d8d8] text-[.9rem] 3xl:text-[.96rem]">
                  Private models you control—fine-tunes, knowledge shards, and policies.
                </p>
              </div>
              <div className="box_about box_about-2 flex flex-col gap-2">
                <h2 className="font-semibold text-[#c1f77a] text-[1rem] 3xl:text-[1.1rem]">Collective Memory</h2>
                <p className="text-[#d8d8d8] text-[.9rem] 3xl:text-[.96rem]">
                  Contribute on your terms. Results and updates move; ownership stays with you.
                </p>
              </div>
            </div>

            <div />

            <div className="box_title_1_about flex justify-evenly h-full flex-col gap-4 px-[6rem]">
              <div className="box_about box_about-3 flex flex-col gap-2">
                <h2 className="font-semibold text-[#c1f77a] text-[1rem] 3xl:text-[1.1rem]">Interoperable by Design</h2>
                <p className="text-[#d8d8d8] text-[.9rem] 3xl:text-[.96rem]">
                  Register, license, use, update, and revoke across teams and partners—with receipts.
                </p>
              </div>
              <div className="box_about box_about-3 flex flex-col gap-2">
                <h2 className="font-semibold text-[#c1f77a] text-[1rem] 3xl:text-[1.1rem]">Activators Protect PLMs</h2>
                <p className="text-[#d8d8d8] text-[.9rem] 3xl:text-[.96rem]">
                  Built-in agents enforce permissions and proofs so personal memory stays private while still useful.
                </p>
              </div>
            </div>
          </div>

          <video
            ref={videoRef}
            loop
            width={900}
            height={400}
            muted
            playsInline
            preload="none"
            className="w-full h-full contrast-[110%] brightness-[125%] pointer-events-none relative select-none"
          >
            <source src="/assets/assetsVideo/proce.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 50%"],
  });

  const rawHeightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const rawOpacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const heightTransform = useSpring(rawHeightTransform, {
    stiffness: 100, 
    damping: 20, 
  });
  const opacityTransform = useSpring(rawOpacityTransform, {
    stiffness: 100,
    damping: 20,
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const totalSteps = data.length;
    const index = Math.floor(value * totalSteps); 
    setActiveIndex(index >= 0 && index < totalSteps ? index : null); 
  });

  return (
    <div className="w-full 2md:px-10 relative -top-10  2md:-top-20" ref={containerRef}>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className=" flex  justify-start 2md:grid 2md:grid-cols-2 pt-10 2md:pt-40 2md:gap-10"
          >
            <div className="sticky flex flex-col 2md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm 2md:w-full">
              <div className="h-10 absolute left-3 2md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className={` block text-xl w-[12rem] 2md:w-full font-black  pl-20 2md:text-5xl  ${
                  activeIndex === index
                    ? "titleColorTimeline"
                    : "text-neutral-500 dark:text-neutral-600"
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative w-full flex justify-end 2md:block pr-10 2md:pr-0 my-6">
              <div className=" max-w-[25rem] w-[72vw] right-[7rem] sm:max-w-[20rem] 2md:max-w-[25rem] lg:max-w-[30rem] top-10 relative 2md:-top-10 2md:right-[0rem]">
                {item.content}{" "}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute 2md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-violet-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

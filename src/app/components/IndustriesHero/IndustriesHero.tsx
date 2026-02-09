"use client";

import { useEffect, useState } from "react";
import { TextComponent } from "@/components/ui/industries";

interface Props {
  data: any;
}

export default function IndustriesHero({ data }: Props) {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="md:container mt-8 mb-14">
      <div className="w-full grid grid-cols-1 gap-16 md:grid-cols-2 h-full">
        <div className="space-y-3 w-full">
          {data.map((item: any, index: any) => (
            <button
              className="w-full relative"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
                icon={item.icon}
                color={item.color}
                index={index}
              />
            </button>
          ))}
        </div>
        <div className={` h-[25.5rem] 2xl:h-full max-h-[38.5rem] md:block hidden relative ${featureOpen > 3 ? "top-[42%] 2xl:top-[14%]" : "top-[0rem]"} transition-all duration-500 ease-in-out`}>
          <div style={{ backgroundColor: data[featureOpen].color }} className="z-[10] absolute right-[-7px] top-[-7px] h-[.05rem] w-[10rem]"></div>
          <div style={{ backgroundColor: data[featureOpen].color }} className="z-[10] absolute right-[-7px] top-[-7px] w-[.05rem] h-[10rem]"></div>
          <div style={{ backgroundColor: data[featureOpen].color }} className="z-[10] absolute left-[-7px] top-[-7px] h-[.05rem] w-[10rem]"></div>
          <div style={{ backgroundColor: data[featureOpen].color }} className="z-[10] absolute left-[-7px] top-[-7px] w-[.05rem] h-[10rem]"></div>

          <div style={{ backgroundColor: data[featureOpen].color }} className="absolute right-[-7px] bottom-[-7px] z-[110] h-[.05rem] w-[10rem]"></div>
          <div style={{ backgroundColor: data[featureOpen].color }} className="absolute right-[-7px] bottom-[-7px] z-[110] w-[.05rem] h-[10rem]"></div>
          <div style={{ backgroundColor: data[featureOpen].color }} className="absolute left-[-7px] bottom-[-7px] z-[110] h-[.05rem] w-[10rem]"></div>
          <div style={{ backgroundColor: data[featureOpen].color }} className="absolute left-[-7px] bottom-[-7px] z-[110] w-[.05rem] h-[10rem]"></div>

          <div className="relative h-full w-full overflow-hidden rounded-xl border-2 border-black ">
            {data.map((item: any, index: any) => (
              <img
                alt={item.title}
                className={`absolute border-2 border-black brightness-[120%] contrast-[110%] h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out ${featureOpen > index ? "translate-y-full" : "" /* brightness-[200%] contrast-[130%] */
                  }`}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

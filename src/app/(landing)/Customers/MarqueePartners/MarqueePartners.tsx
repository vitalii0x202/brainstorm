"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import useMobile from "@/hooks/UseMobile";

type PropsText = {
  image: string;
};

type Props = {
  gradient?: boolean;
};

const chains = [
  {
    image: "/assets/image/customers/logo1.webp",
  },
  {
    image: "/assets/image/customers/logo2.webp",
  },
  {
    image: "/assets/image/customers/logo3.webp",
  },
  {
    image: "/assets/image/customers/logo4.webp",
  },
  {
    image: "/assets/image/customers/logo5.webp",
  },
  {
    image: "/assets/image/customers/logo6.webp",
  },
  {
    image: "/assets/image/customers/logo7.webp",
  },
];

const TextMarquee = ({ image }: PropsText) => {
  return (
    <div className="w-[13rem] h-[8rem] md:w-[16rem] text-[1.3rem] bg-gradient-to-br from-slate-100 to-slate-700 bg-clip-text text-transparent grayscale-[100%] brightness-[120%] contrast-[110%] hover:grayscale-[0%] transition-all duration-300 ">
      <Image
        src={image}
        alt="chain"
        width={130}
        height={34}
        quality={100}
        className="object-contain h-[4rem] aspect-square select-none"
        loading="lazy"
      />
    </div>
  );
};

const MarqueePartners = ({ gradient }: Props) => {
  const isMobile = useMobile();

  return (
    <div className="w-full relative min-h-[5rem] md:min-h-[8rem] py-4 flex justify-start items-start flex-col">
      <Marquee
        gradient={gradient ? false : true}
        gradientColor={gradient ? "tranparent" : "#00000094"}
        speed={20}
        gradientWidth={isMobile ? 50 : 600}
      >
        {chains.map((chain, index) => (
          <TextMarquee key={index} image={chain.image} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueePartners;

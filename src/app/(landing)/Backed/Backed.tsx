import React from 'react'
import { motion } from 'framer-motion'

// Component to animate content
const AnimatedContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Pulsing dot component for visual appeal
const PulsingDot = () => (
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96ff00] opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#96ff00]"></span>
  </span>
);

// Feature item component for the list
const FeatureItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    className="relative mb-6 overflow-hidden rounded-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#0e160328] to-transparent rounded-lg z-0"></div>
    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-md">
      <span className="absolute w-8 h-8 bg-[#96ff00] blur-md rounded-full opacity-60"></span>
      <span className="absolute w-4 h-4 bg-[#96ff00] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    </div>

    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-md">
      <span className="absolute w-8 h-8 bg-[#96ff00] blur-md rounded-full opacity-60"></span>
      <span className="absolute w-4 h-4 bg-[#96ff00] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    </div>
    
    <div className="border-l-2 border-r-2 border-[#96ff00] relative z-10 px-6 py-4 rounded-r-lg bg-[#00000050] backdrop-blur-sm rounded-md">
      <div className="text-white font-medium  text-sm md:text-lg text-start md:text-center">{children}</div>
    </div>
  </motion.div>
);

const Backed = () => {
  return (
    <div className="bg-[#000] pt-[0rem] lg:pt-[2rem] w-full flex flex-col items-center ">
      <AnimatedContent className="w-full flex justify-center items-start md:items-center relative flex-col overflow-hidden px-3">
        <h3 className="titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl lg:max-w-[700px] xl:max-w-[930px] capitalize font-semibold text-start md:text-center leading-tight mb-4 mt-[3.2rem]">
          <span className="text-shadowClass flex items-center gap-4 flex-nowrap justify-start md:justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4 pl-1">
            <PulsingDot />
            Backed by
          </span>
          <span>Industry Leaders</span>
        </h3>
      </AnimatedContent>

      {/* Logo Section */}
      <div className="container mx-auto max-w-[1420px] flex flex-wrap justify-start md:justify-center items-center gap-6 md:gap-10 lg:gap-14 mt-8 mb-12 px-3">
        <img
          src="/assets/image/hero/Near-w.png"
          alt="Near logo"
          className="w-[22vw]  md:w-[15vw] lg:w-auto lg:h-[2rem] 2xl:h-[3.2rem]"
        />
        <img
          src="/assets/image/hero/Faculty-w.png"
          alt="Faculty logo"
          className="w-[22vw]  md:w-[15vw] lg:w-auto lg:h-[2rem] 2xl:h-[3.2rem]"
        />
        <img
          src="/assets/image/hero/SL2-w.png"
          alt="SL2 logo"
          className="w-[22vw]  md:w-[15vw] lg:w-auto lg:h-[2rem] 2xl:h-[3.2rem]"
        />
        <img
          src="/assets/image/hero/Purechain-w.png"
          alt="Purechain logo"
          className="w-[22vw]  md:w-[15vw] lg:w-auto lg:h-[2rem] 2xl:h-[3.2rem]"
        />
        <img
          src="/assets/image/hero/Portico-w.png"
          alt="Portico logo"
          className="w-[22vw]  md:w-[15vw] lg:w-auto lg:h-[2rem] 2xl:h-[3.2rem]"
        />
      </div>

      {/* Description Section */}
      <div className="container mx-auto max-w-[1420px] px-3 lg:px-0 ">
        <AnimatedContent>
          <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-3xl xl:max-w-4xl text-start md:text-center mx-auto mb-4">
            Intellex is proud to be backed by a group of world-class firms shaping the future of Web3 and AI. Companies like Near, SL2, Faculty Group, Portico Ventures and Purechain Capital bring deep expertise across blockchain infrastructure, decentralized finance, and frontier AI technologies.
          </p>
          <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-3xl xl:max-w-4xl text-start md:text-center mx-auto mb-12">
            Beyond capital, this support means access to a powerful network of technical, strategic, and operational insight. With their backing, Intellex is equipped to:
          </p>
          
          <div className="lg:max-w-3xl xl:max-w-4xl mx-auto mb-12 px-4">
            <FeatureItem>Advance decentralized AI interoperability at scale</FeatureItem>
            <FeatureItem>Streamline collaboration between intelligent agents across blockchain environments</FeatureItem>
            <FeatureItem>Deliver real-world enterprise applications powered by composable, on-chain intelligence</FeatureItem>
          </div>
          
          <p className="text-md xl:text-lg text-[#ffffff8c] leading-relaxed lg:max-w-3xl xl:max-w-4xl text-start md:text-center mx-auto mb-12">
            Their support reinforces Intellex&apos;s position as a core pillar within the NEAR ecosystem and a key enabler of cross-chain AI interoperability.
          </p>
        </AnimatedContent>
      </div>
    </div>
  )
}

export default Backed;



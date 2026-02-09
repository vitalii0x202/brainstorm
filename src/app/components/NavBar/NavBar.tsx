"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Establecer estado inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
  };



  return (
    <>
      <div className="transition-all relative animate-in fade-in-0 duration-300 flex justify-center items-center">
        <header className={`fixed md:w-[97%] max-w-[90%] lg:max-w-6xl 3xl:max-w-[1430px] ${!isScrolled ? 'top-6' : 'top-2'} border border-[#cdff8b1f] mx-auto container min-h-[4rem] sm:px-3 md:px-[1.4rem] w-full !z-[999999] py-3 shadow backdrop-blur-lg rounded-3xl bg-[#14141457] transition-all animate-in fade-in-0 duration-500`}>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex shrink-0">
                <Link
                  aria-current="page"
                  className="flex items-center min-h-[2.4rem]"
                  href="/"
                >
                  <img
                    src="/assets/logo_intellex.png"
                    alt="logo"
                    className=" w-[100px] lg:w-[140px] flex"
                  />
                </Link>
              </div>
              <div className="hidden md:flex md:items-center md:justify-center md:gap-0">
                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-4 py-1 text-[14px] font-medium text-gray-100 transition-all duration-200  hover:text-white hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-4 py-1 text-[14px] font-medium text-gray-100 transition-all duration-200  hover:text-white hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]"
                  href="/tokenomics"
                >
                  Tokenomics
                </Link>
                {/*    <Link
                className="inline-block rounded-lg px-4 py-1 text-[14px] font-medium text-gray-100 transition-all duration-200  hover:text-white hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]"
                href="/roadmap"
              >
                Roadmap
              </Link> */}
                {/*   <Link
                className="inline-block rounded-lg px-4 py-1 text-[14px] font-medium text-gray-100 transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]"
                href="/team"
              >
                Team
              </Link> */}

                <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-4 py-1 text-[14px] font-medium text-gray-100 transition-all duration-200  hover:text-white hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.9)]"
                  href="/blog"
                >
                  Blog
                </Link>

                <Link
                  className="inline-block rounded-lg px-2 py-1 text-[14px] font-medium text-gray-100 transition-all duration-200 hover:text-white hover:drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)]"
                  href="/contact"
                >
                  <button className="px-6 py-3 text-sm border border-white/20 rounded-full bg-transparent hover:bg-[#acb3f528] transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>

              <div
                className="flex md:hidden w-[2rem] h-[2rem]"
                onClick={handleToggle}
              >
                <img
                  src="/assets/icons/iconToggle.svg"
                  alt="logo"
                  className=" w-[100px] lg:w-[140px] flex"
                />
              </div>
            </div>
          </div>
        </header>

        {isActive && (
          <div className="w-full h-screen flex flex-col fixed bg-[#000000c5] z-[999999] backdrop-blur-[10px] transition-all animate-in fade-in-0 border top-0 duration-300 md:hidden">
            <div className="inset-x-0 top-0 z-[999] min-h-[4rem] px-8 mx-auto w-full py-5 shadow flex justify-between items-center">
              <div className="flex shrink-0">
                <Link
                  aria-current="page"
                  className="flex items-center relative left-1  h-[3rem]"
                  href="/"
                >
                  <img
                    src="/assets/logo_intellex.png"
                    alt="logo"
                    className=" w-[100px] md:w-[140px] flex"
                  />
                </Link>
              </div>

              <div
                className="flex md:hidden w-[2rem] h-[2rem]"
                onClick={handleToggle}
              >
                <img
                  src="/assets/icons/iconExit.svg"
                  alt="logo"
                  className=" w-[120px]  "
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-[5rem] px-[.6rem] relative">
              <Link
                aria-current="page"
                className="inline-block rounded-lg px-4 py-1 text-[1.5rem] font-medium text-gray-200 transition-all duration-200  hover:text-[#96ff00]"
                href="/"
                onClick={handleToggle}
              >
                Home
              </Link>

              <hr className="border-[#141414c5]" />
              <Link
                aria-current="page"
                className="inline-block rounded-lg px-4 py-1 text-[1.5rem] font-medium text-gray-200 transition-all duration-200  hover:text-[#96ff00]"
                href="/tokenomics"
                onClick={handleToggle}
              >
                Tokenomics
              </Link>
              <hr className="border-[#141414c5]" />

              <Link
                  aria-current="page"
                  className="inline-block rounded-lg px-4 py-1 text-[1.5rem] font-medium text-gray-200 transition-all duration-200  hover:text-[#96ff00]"
                  href="/blog"
                >
                  Blog
                </Link>
                <hr className="border-[#141414c5]" />

              {/*   <Link
              className="inline-block rounded-lg px-4 py-1 text-[1.5rem] font-medium text-gray-200 transition-all duration-200  hover:text-white"
              href="/roadmap"
              onClick={handleToggle}
            >
              Roadmap
            </Link>
            <hr className="border-[#141414c5]" />
 */}
              {/*      <Link
              className="inline-block rounded-lg px-4 py-1 text-[1.5rem] font-medium text-gray-200 transition-all duration-200 hover:text-[#96ff00]"
              href="/team"
              onClick={handleToggle}
            >
              Team
            </Link>
            <hr className="border-[#141414c5]" />
 */}
              <Link
                className="inline-block rounded-lg px-4 py-1 text-[1.5rem] font-medium text-gray-200 transition-all duration-200 hover:text-[#96ff00]"
                href="/contact"
                onClick={handleToggle}
              >
                Contact
              </Link>
              <hr className="border-[#141414c5]" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;

import Link from "next/link";
import React from "react";
import "./_footer.css";

const Footer = () => {
  return (
    <div className="flex justify-start items-center flex-col px-[1rem] md:px-[2rem] lg:px-[8rem] xl:px-[10rem] 2xl:px-[13rem] py-[3rem] pb-[1rem] bg-[#0c0c0cb9] backdrop-blur-[7px] rounded-t-[50px] border-t-[1px] border-[#ffffff27] relative w-full overflow-hidden ">
      <strong className="font_footer !font-[family-name:var(--font-allround)] w-full text-center relative text-[#fafff3] ">
        Intellex
      </strong>
      <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-2 px-4">
        <div className="flex flex-col gap-1 relative justify-center items-center md:justify-start md:items-start w-full h-full">
          <h2 className="follow_footer text-[#96ff00] ">Follow Us</h2>
          <div className="flex gap-1 w-full md:w-[23rem] flex-nowrap justify-center md:justify-start items-center md:items-start  "> 
            <Link
              href="https://x.com/intellex_xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/assets/icons/social/twitter.svg"
                alt="x"
                className="w-[3rem] h-[3rem] relative"
              />
            </Link>
            <Link
              href="https://linkedin.com/company/intellex-xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/assets/icons/social/linkedin.svg"
                alt="linkedin"
                className="w-[3rem] h-[3rem]  relative"
              />
            </Link>
            <Link
              href="https://t.me/intellex_xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/assets/icons/social/telegram.svg"
                alt="telegram"
                className="w-[3rem] h-[3rem]  relative"
              />
            </Link>
            <Link
              href="https://github.com/brainstems"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/assets/icons/social/github.svg"
                alt="github"
                className="w-[3rem] h-[3rem]  relative"
              />
            </Link>
          
        
            
          </div>
        </div>

        <div className="flex justify-center md:justify-end md:items-start flex-row flex-nowrap gap-10 mt-10 md:mt-0">
          {/* <div className=" flex justify-start items-start flex-col flex-nowrap gap-2">
            <Link
              href="/contact"
              className="text-[.95rem] hover:text-[#96ff00] " 
            >
              Contact
            </Link>
            <Link
              href="/tokenomics"
              className="text-[.85rem] hover:text-[#96ff00] "
            >
              Tokenomics
            </Link>
            <Link href="/team" className="text-[.95rem] hover:text-[#96ff00] ">
              Team
            </Link>
          </div> */}

          <div className=" flex justify-start items-start flex-col  flex-nowrap gap-2">
            <Link 
              href="/terms-of-service.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[.95rem] hover:text-[#96ff00] "
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[.95rem] hover:text-[#96ff00] "
            >
              Privacy Policy
            </Link>
            <Link
              href="whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[.95rem] hover:text-[#96ff00] "
            >
              White Paper
            </Link>
            <Link
              href="/tokenomics.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[.95rem] hover:text-[#96ff00] "
            >
              Tokenomics
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[.1rem] bg-[#4141419a] mt-[4rem] "></div>
      <span className="mt-[1rem] text-[#ffffffaf] text-[.9rem] text-center">
        © 2025 Intellex | All Rights reserved.{" "}
      </span>
    </div>
  );
};

export default Footer;

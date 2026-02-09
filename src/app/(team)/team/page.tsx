"use client";

import "./_team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1, staggerChildren: 0.1 },
  },
};

const teamData = [
  {
    name: "Eric Hillerbrand",
    role: "CEO",
    image: "/assets/image/team/eric.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/erichillerbrand/",
  },
  {
    name: "Omar Saadoun",
    role: "CTO",
    image: "/assets/image/team/omar.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/omarsaadoun/",
  },
  {
    name: "Juan Arrillaga",
    role: "SVP Ecosystem Mgmt",
    image: "/assets/image/team/juan.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/juanarrillaga/",
  },
  {
    name: "Ernesto Messina",
    role: "Blockchain Tech Lead",
    image: "/assets/image/team/ernesto.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/ernestomessina/",
  },
  {
    name: "Federico Palladoro",
    role: "Data Tech Lead",
    image: "/assets/image/team/fede.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/fedepalladoro/",
  },

  {
    name: "John Dybdal",
    role: "CPO",
    image: "/assets/image/team/John.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/johndybdal/",
  },
  {
    name: "Ricky Baumgartner",
    role: "Business Developer",
    image: "/assets/image/team/ricky.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/riccardo-baumgartner-48405b10b/",
  },
  {
    name: "Brock Williams",
    role: "SVP Sales",
    image: "/assets/image/team/brock.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/brockwilliams/",
  },

  {
    name: "Chris Mayley",
    role: "MKT PM",
    image: "/assets/image/team/chris.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/allaboardtheporta/",
  },
  {
    name: "Jason Gran",
    role: "COS",
    image: "/assets/image/team/jason.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/jason-gran/",
  },

  {
    name: "Paula Rodriguez",
    role: "Talent Acquisition Manager",
    image: "/assets/image/team/paula.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/paula-rodriguez-recruiter/",
  },

  {
    name: "Facundo Mendez",
    role: "Frontend Engineer",
    image: "/assets/image/team/facu.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/facundomendez7/",
  },

  {
    name: "Maira Legendre",
    role: "UX/UI Designer",
    image: "/assets/image/team/maira.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/maira-legendre-18a677239/",
  },
  {
    name: "Nicolás Uicich",
    role: "Backend Engineer",
    image: "/assets/image/team/nico.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/nicolas-uicich/",
  },

  {
    name: "Kevyn Franco",
    role: "Python Developer",
    image: "/assets/image/team/kevyn.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/kevynfrancoexpert/",
  },
  {
    name: "Andrija Djonovic",
    role: "Content Creator",
    image: "/assets/image/team/andrija.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/andrijadjonovic/",
  },
  {
    name: "Keenan Hillerbrand",
    role: "Data Engineer",
    image: "/assets/image/team/keenan.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/keenan-hillerbrand-90314b1b5/",
  },

  {
    name: "Jakub Darczuk",
    role: "Community Manager",
    image: "/assets/image/team/jakub.jpg",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/jakubdarczuk/",
  },

  /*   {
    name: "Connor Flanagan",
    role: "Ecosystem Lead",
    image: "/assets/image/team/connor.png",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/connor-flanagan-89b425100/",
  },
 */
];

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 780);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 0.3,
        easing: (t) => t * t * (3 * t),
      }}
    >
      <div className="container_line_separator">
        <div className="line_separator_top"></div>
        <div className="bg_line_separator"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        id="team"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative w-full h-full min-h-[100vh] mx-auto flex flex-col px-[1.8rem] overflow-hidden pb-[7rem]  lg:pt-[4rem] "
      >
        <h2 className="title_team text-[4rem] lg:text-[5rem] font-bold titleColor text-center w-full my-[4rem]">
          TEAM
        </h2>
        <div className="w-full">
          {isMobile ? (
            <Swiper
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                390: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1524: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper w-full relative h-full !py-8 !px-[.5rem] sm:!px-[4rem] md:!px-[8rem] flex-col gap-4 "
            >
              {teamData.map((teamMember, index) => (
                <SwiperSlide
                  key={index}
                  className="card_team h-[25.5rem] sm:h-auto overflow-hidden rounded-xl p-4 sm:p-2"
                >
                  <img
                    src={teamMember.image}
                    alt="team"
                    className="img_team w-full object-contain sm:object-cover h-[17rem] sm:h-[14rem] rounded-xl "
                  />
                  <div className="card_team_info relative h-[5rem] bottom-0 top-[1rem] sm:top-[1rem] left-0 right-0 px-4 pb-[1rem] sm:pb-[1.5rem] bg-[#050505] bg-opacity-70 text-[#ffffff]">
                    <div
                      className={`flex justify-center items-center gap-[1rem]  hover:scale-[1.1]  transition-all duration-300 absolute  top-[-.3rem] right-2 rounded-full border-2 border-[#222222]`}
                    >
                      <a
                        href={teamMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="!w-[2.1rem] h-[2.1rem] rounded-full "
                          src={"/assets/icons/social/linkedin.svg"}
                          alt="Linkedin"
                        />{" "}
                      </a>
                    </div>

                    <h3 className="text-[1.3rem] sm:text-[1.5rem] font-bold">
                      {teamMember.name}
                    </h3>
                    <p className="text-[.95rem] top-2 relative sm:top-0 sm:text-[1rem]">
                      {teamMember.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex justify-center items-center w-full px-[4rem] 2xl:px-[7rem] 3xl:px-[8rem] flex-wrap relative h-full gap-[1.5rem] ">
              {teamData.map((teamMember, index) => (
                <motion.div
                  key={index}
                  className="card_team !h-[25rem] w-[19.7rem] overflow-hidden rounded-xl p-2"
                >
                  <img
                    src={teamMember.image}
                    alt="team"
                    className="img_team w-full h-[18.8rem] rounded-xl "
                  />
                  <div className="card_team_info relative h-[5rem] bottom-0  top-[1rem] left-0 right-0 px-2 pb-[1.5rem] bg-[#050505] bg-opacity-70 text-[#ffffff]">
                    <div
                      className={`flex justify-center items-center gap-[1rem]  hover:scale-[1.1]  transition-all duration-300 absolute  top-[-.3rem] right-1 rounded-full border-2 border-[#222222]`}
                    >
                      <a
                        href={teamMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="!w-[2.1rem] h-[2.1rem] rounded-full "
                          src={"/assets/icons/social/linkedin.svg"}
                          alt="Linkedin"
                        />{" "}
                      </a>
                    </div>

                    <h3 className="text-[1.3rem] font-bold truncate ">
                      {teamMember.name}
                    </h3>
                    <p className="text-[.95rem] mt-[.2rem]">
                      {teamMember.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </ReactLenis>
  );
};

export default Team;

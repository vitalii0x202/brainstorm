import Image from "next/image";
import React from "react";

interface CardProps {
  name: string;
  title: string;
  image: string;
}

const cardsData: CardProps[] = [
  /* solution parteners */
  {
    name: "Brillion",
    title: "Solution Partner",
    image: "/assets/image/partners/card1.png",
  },
  {
    name: "Idenfy",
    title: "Solution Partner",
    image: "/assets/image/partners/card5.png",
  },
  {
    name: "Flower AI",
    title: "solution partner",
    image: "/assets/image/partners/card16.png",
  },

  {
    name: "IO net",
    title: "solution partner",
    image: "/assets/image/partners/card10.png",
  },
  {
    name: "Verida",
    title: "solution partner",
    image: "/assets/image/partners/card12.png",
  },

  {
    name: "neotokio syndicate",
    title: "partner",
    image: "/assets/image/partners/card14.png",
  },

  /* launchap */

  {
    name: "Funders/Nexera",
    title: "Launchpad",
    image: "/assets/image/partners/card3.png",
  },

  /* compute */

  {
    name: "Edge matrix",
    title: "Compute",
    image: "/assets/image/partners/card4.png",
  },
  { name: "AWS", title: "Compute", image: "/assets/image/partners/card7.png" },
  {
    name: "Akash",
    title: "compute",
    image: "/assets/image/partners/card11.png",
  },

  {
    name: "Nillion",
    title: "solution blind compute",
    image: "/assets/image/partners/card15.png",
  },

  /* datasource */

  {
    name: "Nucklai",
    title: "Datasources",
    image: "/assets/image/partners/card6.png",
  },

  /* storage */

  {
    name: "Filecoin",
    title: "storage",
    image: "/assets/image/partners/card13.png",
  },

  /* procols */
  {
    name: "Near",
    title: "Protocol",
    image: "/assets/image/partners/card8.png",
  },

  /* investor */

  {
    name: "NearFundation",
    title: "Investor",
    image: "/assets/image/partners/card9.png",
  },
  {
    name: "Faculty Group",
    title: "Investor",
    image: "/assets/image/partners/card2.png",
  },
];

const Partners: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 lg:gap-4 p-6 container mt-10 max-w-6xl xl:max-w-7xl px-9 mx-auto pb-20">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="relative lex justify-center contrast-[110%] bg-cover bg-center rounded-lg shadow-md h-[5rem] max-w-[13rem] sm:max-w-[20rem]  2xl:h-[6rem]  flex items-end p-4 text-white opacity-[.8] hover:opacity-[1]"
        >
          <Image
            width={120}
            height={155}
            src={card.image}
            alt={card.name}
            quality={100}
            className="max-h-[4rem]"
          />
          
        </div>
      ))}
    </div>
  );
};

export default Partners;

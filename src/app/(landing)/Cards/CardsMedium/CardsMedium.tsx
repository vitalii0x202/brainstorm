"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_cardsMedium.css";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

// Define types
interface FeedItem {
  title: string;
  link: string;
  image: string;
}

// Memoized Arrow Components
const SampleNextArrow = React.memo(({ className, style, onClick }: any) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      top: "1rem",
      right: "9rem",
      position: "absolute",
    }}
    onClick={onClick}
  />
));

const SamplePrevArrow = React.memo(({ className, style, onClick }: any) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      top: "1rem",
      left: "auto",
      right: "12rem",
      position: "absolute",
    }}
    onClick={onClick}
  />
));

SampleNextArrow.displayName = "SampleNextArrow";
SamplePrevArrow.displayName = "SamplePrevArrow";

const CardsMedium: React.FC = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch data with memoized function
  const fetchFeed = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40brainstems"
      );

      const items = response.data.items.map((item: any): FeedItem => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(item.content, "text/html");
        const img = doc.querySelector("img");
        const imageUrl = img ? img.src : "";

        return {
          title: item.title,
          link: item.link,
          image: imageUrl,
        };
      });

      setFeedItems(items);
    } catch (err) {
      setError("Error fetching RSS feed");
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  // Slider settings
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    speed: 1500,
    draggable: false,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1685,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!feedItems.length) {
    return <div>Loading...</div>;
  }

  return (
    <Slider
      {...settings}
      className="max-h-[70rem] lg:max-h-[50rem] relative overflow-hidden p-[1rem] pt-[4rem] lg:px-[4rem] 3xl:px-[8rem]"
    >
      {feedItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-full w-full outline-none select-none"
        >
          <motion.div
            viewport={{ once: false }}
            transition={{
              delay: 0.8,
              duration: 0.3,
            }}
            className="cardBstms"
          >
            <h1 className="truncate1Lines w-full h-[6rem] absolute bottom-[0rem] flex items-center text-[#f7f1ffd7] backdrop-blur-[10px] sm:px-[2rem] rounded-xl text-[.9rem] sm:text-[1rem] 2xl:text-[1.1rem] py-4 font-normal font_title">
              {item.title}
            </h1>
            {item.image && (
              <Image
                width={600}
                height={600}
                quality={100}
                src={item.image}
                alt={`Illustration related to ${item.title} `}
                className="cardBstms_img grayscale"
              />
            )}
          </motion.div>
        </Link>
      ))}
    </Slider>
  );
};

export default React.memo(CardsMedium);

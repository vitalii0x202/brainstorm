"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./blog-detail.css";
import { ReactLenis } from "@studio-freight/react-lenis";

// Optimized animations
const contentVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

// Component to animate content when it comes into view
const AnimatedContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={contentVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Reusable component for pulsing indicators
const PulsingDot = () => (
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#96ff00] opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#96ff00]"></span>
  </span>
);

// Loader component
const Loader = () => (
  <div className="flex flex-col items-center justify-center w-full min-h-[50vh] py-20">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-[#96ff00] rounded-full opacity-30 animate-ping"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-[#96ff00] rounded-full animate-spin"></div>
    </div>
    <p className="mt-6 text-[#c1f77a] text-lg font-medium">Loading...</p>
  </div>
);

// Helper function to safely process HTML content
const processHtml = (htmlContent: string) => {
  // Fix malformatted text and links
  let processed = htmlContent;

  // Remove any unwanted links that might cause formatting issues
  processed = processed.replace(/<a[^>]*intellex\.xyz[^>]*>(.*?)<\/a>/g, '$1');

  // Fix specific malformatted patterns
  processed = processed.replace(/intellex\.xyz\/">Intellex/g, 'Intellex');
  processed = processed.replace(/intellex-highlight">/g, '');

  // Remove "About Intellex" section and everything after it
  processed = processed.replace(/<h4>About Intellex<\/h4>[\s\S]*?$/g, '');

  // Remove Medium footer section (everything after horizontal rule)
  processed = processed.replace(/<hr>[\s\S]*?$/g, '');

  // Plain text replacements (with word boundaries to avoid partial matches)
  const intellexRegex = /\b(Intellex)\b/g;
  processed = processed.replace(intellexRegex, '<span style="color: #deffaf; font-weight: 600;">$1</span>');

  const intellexUpperRegex = /\b(INTELLEX)\b/g;
  processed = processed.replace(intellexUpperRegex, '<span style="color: #deffaf; font-weight: 600;">$1</span>');

  const intellexLowerRegex = /\b(intellex)\b/g;
  processed = processed.replace(intellexLowerRegex, '<span style="color: #deffaf; font-weight: 600;">$1</span>');

  // Ensure all links have the correct color
  processed = processed.replace(/<a\s+([^>]*?)>/g, '<a style="color: #96ff00;" $1>');

  // Enhance headings
  processed = processed.replace(/<h([1-6])>(.*?)<\/h\1>/g,
    (match, level, text) => `<h${level} class="blog-heading blog-heading-${level}">
      <span class="relative z-10">${text}</span>
    </h${level}>`);

  return processed;
};

const BlogPostDetail = () => {
  const params = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const slug = params.slug as string;
  const mediumUrl = "https://medium.com/feed/intellex-ai";

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Fetch all posts first to find the one that matches our slug
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumUrl)}`
        );

        // Find the post that matches our slug
        const items = response.data.items;

        // Find the post by comparing slugs
        const foundPost = items.find((item: any) => {
          const urlParts = new URL(item.link).pathname.split('-');
          const mediumSlug = urlParts[urlParts.length - 1];
          return mediumSlug === slug || item.guid.includes(slug);
        });

        if (foundPost) {
          // Parse the HTML content
          const parser = new DOMParser();
          const doc = parser.parseFromString(foundPost.content, "text/html");

          // Extract the first image
          const img = doc.querySelector("img");
          const imageUrl = img ? img.src : "";

          // Process the full content
          // Remove first image as we'll display it separately
          if (img) img.remove();

          // Process the HTML content
          const processedContent = processHtml(doc.body.innerHTML);

          // Process the title to highlight "Intellex"
          const processedTitle = foundPost.title.replace(
            /\b(Intellex)\b/g,
            '<span style="color: #deffaf; font-weight: 600;">$1</span>'
          );

          setTimeout(() => {
            setPost({
              title: foundPost.title,
              processedTitle: processedTitle,
              link: foundPost.link,
              image: imageUrl,
              publishDate: foundPost.pubDate,
              author: foundPost.author,
              categories: foundPost.categories || [],
              content: processedContent
            });
            setLoading(false);
          }, 300); // Pequeño delay para permitir que la animación se vea bien
        } else {
          setError("Post not found");
          setLoading(false);
        }
      } catch (err) {
        setError("Error fetching blog post");
        setLoading(false);
        console.error(err);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug, mediumUrl]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (error) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="w-full flex justify-center items-center min-h-screen bg-black pt-[8rem]"
      >
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold mb-4 text-white">Post Not Found</h2>
          <p className="text-[#ff6b6b] text-lg mb-6">{error || "The post you're looking for doesn't exist or has been removed."}</p>
          <Link href="/blog" className="text-[.85rem] md:text-sm !text-[#c1f77a] border border-[#333633] rounded-full py-2 px-6 bg-[#1b1b1bee] hover:border-[#96ff00] transition-all duration-300">
            Back to Blog
          </Link>
        </div>
      </motion.div>
    );
  }

  if (loading) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="w-full flex justify-center items-center min-h-screen bg-black pt-[8rem]"
      >
        <Loader />
      </motion.div>
    );
  }

  return (

    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 0.3,
        easing: (t) => t * t * (3 * t),
      }}
    >


      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="w-full flex flex-col overflow-hidden bg-black min-h-screen  "
      >
        {/* Hero Section with Featured Image */}
        <div className="w-full h-[55dvh] 2xs:h-[50dvh] md:h-[55dvh] lg:h-[60dvh] relative ">
          <AnimatePresence>
            {post?.image ? (
              <motion.div
                key="image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-[#000000c0]"></div>
              </motion.div>
            ) : (
              <motion.div
                key="gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#121212] to-black"
              ></motion.div>
            )}
          </AnimatePresence>

          <div className="container mx-auto 2xs:px-4 h-full flex items-end pb-12 relative z-10">
            <AnimatePresence mode="wait">
              {post ? (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="max-w-5xl text-center mx-auto"
                >
                  <h1 className=" text-[1.4rem] 2xs:text-2xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white  2xs:!leading-tight mb-4">
                    {post.title.includes("Intellex") ? (
                      <span dangerouslySetInnerHTML={{ __html: post.processedTitle }} />
                    ) : post.title}
                  </h1>
                  <div className="flex items-center mt-10 text-center justify-center gap-4 text-[#ffffff8c]">
                    <span className="flex items-center gap-2">
                      <span className="text-shadowClass flex items-center gap-2 text-sm md:text-base">
                        <PulsingDot />
                        <span className="text-sm md:text-base">
                          {formatDate(post.publishDate)}
                        </span>
                      </span>
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-5xl w-full mx-auto flex flex-col items-center space-y-8"
                >
                  <div className="h-16 bg-[#ffffff10] rounded-lg w-3/4"></div>
                  <div className="h-4 bg-[#ffffff10] rounded-lg w-1/4"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto 2xs:px-4 pb-12 md:pb-16 xl:pt-5">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {post ? (
                <motion.div
                  key="post-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div
                    className="blog-content prose prose-invert lg:prose-xl max-w-none prose-headings:text-white prose-a:text-[#96ff00] prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 pt-8 border-t border-[#ffffff20]"
                  >
                    <div className="flex flex-nowrap w-full sm:flex-row sm:justify-between items-start sm:items-center gap-4">
                      <Link href="/blog" className="text-[.7rem] 2xs:text-[.85rem] md:text-sm !text-[#c1f77a] border border-[#333633] rounded-full py-2 px-6 bg-[#1b1b1bee] flex items-center gap-2 hover:border-[#96ff00] transition-all duration-300">
                        <span>←</span> Back to Blog
                      </Link>

                      <Link href={post.link} target="_blank" rel="noopener noreferrer" className="text-[.7rem] 2xs:text-[.85rem] md:text-sm !text-[#c1f77a] border border-[#333633] rounded-full py-2 px-6 bg-[#1b1b1bee] flex items-center gap-2 hover:border-[#96ff00] transition-all duration-300">
                        Read on Medium <span>→</span>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ) : !loading && !error ? (
                <motion.div
                  key="content-placeholder"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 bg-[#ffffff10] rounded-lg w-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                  ))}
                  <div className="h-24 bg-[#ffffff10] rounded-lg w-full mt-8"></div>
                  {[...Array(8)].map((_, i) => (
                    <div key={i + 6} className="h-4 bg-[#ffffff10] rounded-lg w-full" style={{ width: `${Math.random() * 60 + 40}%` }}></div>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </ReactLenis>
  );
};

export default BlogPostDetail; 
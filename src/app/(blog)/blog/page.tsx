"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ReactLenis } from "@studio-freight/react-lenis";

// Optimized animations
const contentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
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

// Component for section titles
interface SectionTitleProps {
  subtitle?: string;
  title: string;
  className?: string;
}

const SectionTitle = ({ subtitle, title, className = "" }: SectionTitleProps) => (
  <AnimatedContent className="w-full flex justify-start md:justify-center items-start md:items-center relative flex-col overflow-hidden mb-20">
    <h3 className={`titleColor text-[1.8rem] lg:text-[2.6rem] xl:text-6xl capitalize font-semibold text-start md:text-center leading-tight ${className}`}>
      {subtitle && (
        <span className="text-shadowClass flex items-center gap-4 flex-nowrap justify-start md:justify-center text-[1.4rem] xl:text-[2rem] !leading-[200%] lg:!leading-tight mb-4 pl-1">
          <PulsingDot />
          {subtitle}
        </span>
      )}
      <span>{title}</span>
    </h3>
  </AnimatedContent>
);

// Loader component
const Loader = () => (
  <div className="flex flex-col items-center justify-center w-full py-20">
    <div className="relative w-24 h-24">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-[#96ff00] rounded-full opacity-30 animate-ping"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-[#96ff00] rounded-full animate-spin"></div>
    </div>
    <p className="mt-10 text-[#c1f77a] text-lg font-medium">Loading...</p>
  </div>
);

// Blog content types
interface BlogContent {
  id: string;
  title: string;
  category: 'scientific-papers' | 'videos' | 'white-papers';
  filePath: string;
  publishDate: string;
  thumbnail?: string;
  duration?: string;
  metadataLoading?: boolean;
}

// BlogCard component for rendering each blog card
interface BlogCardProps {
  content: BlogContent;
  delay: number;
}

const BlogCard = ({ content, delay }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'scientific-papers':
        return '📄';
      case 'videos':
        return '🎥';
      case 'white-papers':
        return '📋';
      default:
        return '📄';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'scientific-papers':
        return 'border-[#3b82f6] text-[#3b82f6]';
      case 'videos':
        return 'border-[#ef4444] text-[#ef4444]';
      case 'white-papers':
        return 'border-[#8b5cf6] text-[#8b5cf6]';
      default:
        return 'border-[#96ff00] text-[#96ff00]';
    }
  };

  const handleClick = () => {
    if (content.category === 'videos') {
      // For videos, open in a modal or new tab
      window.open(content.filePath, '_blank');
    } else {
      // For PDFs, download or open in new tab
      window.open(content.filePath, '_blank');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="w-full"
    >
      <div 
        onClick={handleClick}
        className="blog-card bg-[#0a0a0a] rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:scale-[1.01] border border-[#ffffff10] hover:border-[#96ff00] shadow-lg w-full cursor-pointer"
      >
          <div className="relative h-48 xs:h-56 md:h-64 overflow-hidden">
          {content.category === 'videos' ? (
            <div className="relative w-full h-full">
              {content.thumbnail ? (
              <img 
                  src={content.thumbnail} 
                  alt={content.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#121212] to-[#202020] flex items-center justify-center">
                  <span className="text-6xl opacity-50">{getCategoryIcon(content.category)}</span>
                </div>
              )}
              {/* Video play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30">
                <div className="w-16 h-16 bg-[#96ff00] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              {/* Duration badge */}
              {content.metadataLoading ? (
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                  Loading...
                </div>
              ) : content.duration ? (
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                  {content.duration}
                </div>
              ) : null}
            </div>
          ) : content.thumbnail ? (
            <img 
              src={content.thumbnail} 
              alt={content.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#121212] to-[#202020] flex items-center justify-center">
              <span className="text-6xl opacity-50">{getCategoryIcon(content.category)}</span>
              </div>
            )}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className={`text-[.7rem] border rounded-full py-1 px-3 bg-[#1b1b1bee] ${getCategoryColor(content.category)}`}>
              {content.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          </div>
          <div className="p-4 md:p-5 flex flex-col flex-grow">
          <span className="text-[#ffffff8c] text-xs md:text-sm mb-2">{formatDate(content.publishDate)}</span>
          <h3 className="text-lg md:text-xl font-semibold mb-3 line-clamp-2 text-white">{content.title}</h3>
            <div className="mt-auto pt-4">
              <span className="text-[#96ff00] text-sm flex items-center gap-2">
              {content.category === 'videos' ? 'Watch Video' : 'View Document'} <span>→</span>
              </span>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

// Skeleton loader for blog cards
const BlogCardSkeleton = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="w-full"
  >
    <div className="bg-[#0a0a0a] rounded-xl overflow-hidden h-full flex flex-col border border-[#ffffff10] shadow-lg w-full">
      <div className="relative h-48 xs:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          <div className="h-6 w-20 bg-[#ffffff10] rounded-full"></div>
        </div>
      </div>
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <div className="h-4 w-24 bg-[#ffffff10] rounded-lg mb-2"></div>
        <div className="h-5 w-full bg-[#ffffff10] rounded-lg mb-2"></div>
        <div className="h-5 w-3/4 bg-[#ffffff10] rounded-lg mb-3"></div>
        <div className="mt-auto pt-4">
          <div className="h-4 w-24 bg-[#ffffff10] rounded-lg"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Function to extract video metadata (duration and thumbnail) - optimized
const extractVideoMetadata = (filePath: string): Promise<{duration: string, thumbnail: string}> => {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.crossOrigin = 'anonymous';
    video.preload = 'metadata';
    video.muted = true; // Mute to avoid audio issues
    
    let metadataLoaded = false;
    let seeked = false;
    
    const processMetadata = () => {
      if (!metadataLoaded || !seeked) return;
      
      // Format duration as MM:SS or HH:MM:SS
      const duration = video.duration;
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = Math.floor(duration % 60);
      
      let durationString = '';
      if (hours > 0) {
        durationString = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      } else {
        durationString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
      
      // Create thumbnail by drawing video frame to canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 320;
      canvas.height = 180;
      
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnail = canvas.toDataURL('image/jpeg', 0.7); // Lower quality for faster processing
        resolve({ duration: durationString, thumbnail });
      } else {
        resolve({ duration: durationString, thumbnail: '' });
      }
    };
    
    video.onloadedmetadata = () => {
      metadataLoaded = true;
      video.currentTime = Math.min(1, video.duration * 0.1); // Seek to 10% or 1 second, whichever is smaller
      processMetadata();
    };
    
    video.onseeked = () => {
      seeked = true;
      processMetadata();
    };
    
    video.onerror = () => {
      resolve({ duration: '00:00', thumbnail: '' });
    };
    
    // Timeout after 3 seconds to prevent hanging
    setTimeout(() => {
      if (!metadataLoaded) {
        resolve({ duration: '00:00', thumbnail: '' });
      }
    }, 3000);
    
    video.src = filePath;
  });
};

const Blogpage = () => {
  const [blogContent, setBlogContent] = useState<BlogContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'scientific-papers' | 'videos' | 'white-papers'>('scientific-papers');

  // Sample blog content data
  const sampleContent: BlogContent[] = [
    // Scientific Papers
    {
      id: '1',
      title: 'The Economic Impact of Inefficient Communication and Interoperability Gaps Across Business Units',
      category: 'scientific-papers',
      filePath: '/blog/scientific-papers/cost-of-interoperability.pdf',
      publishDate: '2025-06-10',
    },
    {
      id: '2',
      title: 'Mathematical Models for Estimating Communication Volume in Swarm-Based Multi-Agent Systems',
      category: 'scientific-papers',
      filePath: '/blog/scientific-papers/document.pdf',
      publishDate: '2025-01-19',
    },
    {
      id: '3',
      title: 'Collective Memory as a First-Class Primitive for Decentralized Federated Learning and Agent Interoperability',
      category: 'scientific-papers',
      filePath: '/blog/scientific-papers/federated_learning-2.pdf',
      publishDate: '2025-01-16',
    },
    {
      id: '4',
      title: 'Mathematical Models for Estimating Communication Volume in Swarm-Based Multi-Agent Systems',
      category: 'scientific-papers',
      filePath: '/blog/scientific-papers/modeling swarms.pdf',
      publishDate: '2025-01-19',
    },
    {
      id: '5',
      title: 'Personal Language Models, Federated Learning, and Brand Intelligence',
      category: 'scientific-papers',
      filePath: '/blog/scientific-papers/plm_federation-1.pdf',
      publishDate: '2025-05-01',
    },
    {
      id: '6',
      title: 'A Non-Linear Stochastic Model of Utilization Escalation in Cross-Chain Interoperable Multi-Agent Teams',
      category: 'scientific-papers',
      filePath: '/blog/scientific-papers/Utilization_Model_for_Intellex_Protocol.pdf',
      publishDate: '2025-03-28',
    },
    // Videos
    {
      id: '7',
      title: 'Business_interoperability',
      category: 'videos',
      filePath: '/blog/videos/Business_interoperability.mp4',
      publishDate: '2024-01-15',
    },
    {
      id: '8',
      title: 'Challenge of business interoperability',
      category: 'videos',
      filePath: '/blog/videos/Challenge of business interoperability.mp4',
      publishDate: '2024-01-20',
    },
    {
      id: '9',
      title: 'From_Sigil_to_Activation',
      category: 'videos',
      filePath: '/blog/videos/From_Sigil_to_Activation.mp4',
      publishDate: '2024-02-01',
    },
    {
      id: '10',
      title: 'Immutable_Memory',
      category: 'videos',
      filePath: '/blog/videos/Immutable_Memory.mp4',
      publishDate: '2024-02-05',
    },
    {
      id: '11',
      title: 'Intellex_and_Memory',
      category: 'videos',
      filePath: '/blog/videos/Intellex_and_Memory.mp4',
      publishDate: '2024-02-10',
    },
    {
      id: '12',
      title: 'Intellex_NEAR_business_interoperability_challenges',
      category: 'videos',
      filePath: '/blog/videos/Intellex_NEAR_business_interoperability_challenges.mp4',
      publishDate: '2024-02-15',
    },
    {
      id: '13',
      title: 'Intodaysintellige',
      category: 'videos',
      filePath: '/blog/videos/Intodaysintellige.mp4',
      publishDate: '2024-02-20',
    },
    {
      id: '14',
      title: 'Manifesto',
      category: 'videos',
      filePath: '/blog/videos/Manifesto.mp4',
      publishDate: '2024-02-25',
    },
    {
      id: '15',
      title: 'Memory_and_Multi-agent_systems',
      category: 'videos',
      filePath: '/blog/videos/Memory_and_Multi-agent_systems.mp4',
      publishDate: '2024-03-01',
    },
    {
      id: '16',
      title: 'Monetizing_Your_Memory',
      category: 'videos',
      filePath: '/blog/videos/Monetizing_Your_Memory.mp4',
      publishDate: '2024-03-05',
    },
    {
      id: '17',
      title: 'MultiAgent Systems',
      category: 'videos',
      filePath: '/blog/videos/MultiAgent Systems.mp4',
      publishDate: '2024-03-10',
    },
    {
      id: '18',
      title: 'NFT_Activators',
      category: 'videos',
      filePath: '/blog/videos/NFT_Activators.mp4',
      publishDate: '2024-03-15',
    },
    {
      id: '19',
      title: 'NFT_Activators_V2',
      category: 'videos',
      filePath: '/blog/videos/NFT_Activators_V2.mp4',
      publishDate: '2024-03-20',
    },
    {
      id: '20',
      title: 'The future of AI is memory',
      category: 'videos',
      filePath: '/blog/videos/The future of AI is memory.mp4',
      publishDate: '2024-03-25',
    },
    {
      id: '21',
      title: 'This_is_how_it_works',
      category: 'videos',
      filePath: '/blog/videos/This_is_how_it_works.mp4',
      publishDate: '2024-03-30',
    },
    {
      id: '22',
      title: 'Why_Launch',
      category: 'videos',
      filePath: '/blog/videos/Why_Launch.mp4',
      publishDate: '2024-04-01',
    },
    // White Papers
    {
      id: '23',
      title: 'From Systems of Record to a System of Work',
      category: 'white-papers',
      filePath: '/blog/white-papers/Intellex for business.docx.pdf',
      publishDate: '2025-06-10',
    },
    {
      id: '24',
      title: 'Intellex Protocol: Building a Decentralized Future Through Agent Interoperability',
      category: 'white-papers',
      filePath: '/blog/white-papers/Intellex Protocol, NEAR and Agent Interoperability.pdf',
      publishDate: '2024-02-15',
    },
    {
      id: '25',
      title: 'Failing to Bridge Stochastic AI with Deterministic Blockchain on Web3',
      category: 'white-papers',
      filePath: '/blog/white-papers/Intellex Protocol-3.pdf',
      publishDate: '2024-01-30',
    },
    {
      id: '26',
      title: 'The Memory Rail for Autonomous Agents',
      category: 'white-papers',
      filePath: '/blog/white-papers/Intellex White Paper__memory in the business ecosystem.pdf',
      publishDate: '2024-02-15',
    },
    {
      id: '27',
      title: 'Personal Language Models: From Private Memory to Collective Intelligence',
      category: 'white-papers',
      filePath: '/blog/white-papers/Personal Language Models_ From Private Memory to Collective Intelligence.pdf',
      publishDate: '2024-02-15',
    },
    {
      id: '28',
      title: 'Intellex White Paper',
      category: 'white-papers',
      filePath: '/blog/white-papers/Tokenomics Light Paper.pdf',
      publishDate: '2024-02-15',
    }
  ];

  useEffect(() => {
    // First, show content immediately without video metadata
    setBlogContent(sampleContent);
    setLoading(false);

    // Then load video metadata in the background
    const loadVideoMetadata = async () => {
      const videoContents = sampleContent.filter(content => content.category === 'videos');
      
      // First, mark all videos as loading
      setBlogContent(prevContent => 
        prevContent.map(item => 
          item.category === 'videos' 
            ? { ...item, metadataLoading: true }
            : item
        )
      );
      
      for (const content of videoContents) {
        try {
          const metadata = await extractVideoMetadata(content.filePath);
          setBlogContent(prevContent => 
            prevContent.map(item => 
              item.id === content.id 
                ? { ...item, thumbnail: metadata.thumbnail, duration: metadata.duration, metadataLoading: false }
                : item
            )
          );
        } catch (error) {
          console.error(`Error loading metadata for ${content.filePath}:`, error);
          setBlogContent(prevContent => 
            prevContent.map(item => 
              item.id === content.id 
                ? { ...item, metadataLoading: false }
                : item
            )
          );
        }
      }
    };

    // Load video metadata after a short delay to not block initial render
    setTimeout(loadVideoMetadata, 100);
  }, []);

  const filteredContent = blogContent.filter(content => content.category === selectedCategory);

  const categories = [
    { key: 'scientific-papers', label: 'Scientific Papers', count: blogContent.filter(c => c.category === 'scientific-papers').length },
    { key: 'videos', label: 'Videos', count: blogContent.filter(c => c.category === 'videos').length },
    { key: 'white-papers', label: 'White Papers', count: blogContent.filter(c => c.category === 'white-papers').length },
  ];

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
      className="w-full flex flex-col overflow-hidden bg-black min-h-screen pt-[8rem]"
    >
      <div className="container mx-auto px-4 py-16 md:py-[6rem]">
        <SectionTitle 
          subtitle="Our Blog" 
          title="Latest Insights & Updates" 
          className="max-w-[930px]"
        />
          
          {/* Category Filter */}
          <AnimatedContent className="w-full flex justify-center mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as any)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                    selectedCategory === category.key
                      ? 'bg-[#96ff00] text-black border-[#96ff00]'
                      : 'bg-[#1b1b1bee] text-[#c1f77a] border-[#333633] hover:border-[#96ff00]'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </AnimatedContent>
        
        <AnimatePresence mode="wait">
          {loading && !error ? (
            <motion.div 
              key="loading"
              exit={{ opacity: 0 }}
              className="w-full"
            >
              <Loader />
            </motion.div>
          ) : error ? (
            <motion.div 
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center items-center py-20"
            >
              <div className="text-center">
                <p className="text-[#ff6b6b] text-lg mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="text-[.85rem] md:text-sm !text-[#c1f77a] border border-[#333633] rounded-full py-2 px-6 bg-[#1b1b1bee] hover:border-[#96ff00] transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:px-[4rem]"
            >
                {filteredContent.map((content, index) => (
                  <BlogCard
                    key={content.id}
                    content={content}
                  delay={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
          {!loading && !error && filteredContent.length === 0 && (
            <AnimatedContent className="w-full flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-[#ffffff8c] text-lg mb-4">No content found for this category.</p>
                <button 
                  onClick={() => setSelectedCategory('scientific-papers')} 
                  className="text-[.85rem] md:text-sm !text-[#c1f77a] border border-[#333633] rounded-full py-2 px-6 bg-[#1b1b1bee] hover:border-[#96ff00] transition-all duration-300"
                >
                  View Scientific Papers
                </button>
              </div>
          </AnimatedContent>
        )}
      </div>
    </motion.div>
    </ReactLenis>
  );
};

export default Blogpage;
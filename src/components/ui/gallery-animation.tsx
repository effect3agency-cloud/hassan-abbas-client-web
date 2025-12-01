import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

interface ImageItem {
  url: string;
  title: string;
  desc: string;
}

interface ExpandableGalleryProps {
  images: ImageItem[];
  className?: string;
  imageOnly?: boolean;
}

const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({ images, className = '', imageOnly = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Check if component is mounted (client-side)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when modal is open and preserve scroll position
  useEffect(() => {
    if (selectedIndex !== null) {
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      // Focus the overlay for keyboard handling
      requestAnimationFrame(() => {
        overlayRef.current?.focus();
      });
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      };
    }
  }, [selectedIndex]);

  // Handle ESC to close and arrow keys for navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (images.length > 1) setSelectedIndex((idx) => (idx === null ? 0 : (idx + 1) % images.length));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (images.length > 1) setSelectedIndex((idx) => (idx === null ? 0 : (idx - 1 + images.length) % images.length));
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, images.length]);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return 1;
    }
    return hoveredIndex === index ? 2 : 0.5;
  };

  return (
    <div className={className}>
      {/* Responsive Expandable Gallery - Horizontal on desktop, Vertical on mobile */}
      <div className="flex flex-col md:flex-row gap-2 md:h-96 w-full relative z-20">
        {images.map((image, index) => (
          <motion.button
            key={index}
            type="button"
            className="relative cursor-pointer overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 h-64 md:h-auto"
            style={{ flex: 1 }}
            animate={{ flex: window.innerWidth >= 768 ? getFlexValue(index) : 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openImage(index);
            }}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover pointer-events-none"
            />
            <motion.div
              className="absolute inset-0 bg-black pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.3 }}
              transition={{ duration: 0.3 }}
            />
            {/* Show title on hover or always on mobile */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none md:opacity-0 opacity-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: window.innerWidth >= 768 ? (hoveredIndex === index ? 1 : 0) : 1, 
                y: window.innerWidth >= 768 ? (hoveredIndex === index ? 0 : 20) : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg">{image.title}</h3>
              <p className="text-white/80 text-sm">{image.desc}</p>
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Expanded View Modal */}
      {selectedIndex !== null && isMounted && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4 overflow-y-auto"
          style={{ 
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={overlayRef}
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors cursor-pointer bg-black/70 hover:bg-black/90 rounded-full p-2 md:p-3 z-[10000]"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            aria-label="Close"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer bg-black/70 hover:bg-black/90 rounded-full p-2 md:p-3 z-[10000]"
              onClick={goToPrev}
              aria-label="Previous"
            >
              <svg
                className="w-6 h-6 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Content Container - Image only or with text */}
          {imageOnly ? (
            /* Image Only Mode - Centered */
            <motion.div
              className="relative max-w-6xl w-full flex items-center justify-center px-4 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-md shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ) : (
            /* Full Mode - Image with Text */
            <motion.div
              className="relative max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center justify-center px-4 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image - First on mobile, Right on desktop */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center w-full order-1 md:order-2"
              >
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex].url}
                  alt={images[selectedIndex].title}
                  className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain rounded-md shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Text Content - Second on mobile, Left on desktop */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center text-white text-center md:text-left order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">
                  {images[selectedIndex].title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/80">
                  {images[selectedIndex].desc}
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer bg-black/70 hover:bg-black/90 rounded-full p-2 md:p-3 z-[10000]"
              onClick={goToNext}
              aria-label="Next"
            >
              <svg
                className="w-6 h-6 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image Counter */}
          <div 
            className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm bg-black/70 px-3 md:px-4 py-1.5 md:py-2 rounded-md z-[10000]"
          >
            {selectedIndex + 1} / {images.length}
          </div>
        </motion.div>,
        document.body
      )}
    </div>
  );
};

export default ExpandableGallery;

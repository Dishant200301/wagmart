import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { reels } from '../data/reels';
import { ReelItem } from '../types';
import { SectionBadge } from './SectionBadge';

const PauseIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

const MaximizeIcon = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

interface PetReelsProps {
  onSelectReel?: (reel: ReelItem) => void;
}

export const PetReels: React.FC<PetReelsProps> = ({ onSelectReel }) => {
  // Initialize Embla Carousel with loop option matching Varni layout
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Update selection indices on change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="stories" className="bg-white py-16 md:py-20 overflow-hidden relative">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Row */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <SectionBadge label="Pet Stories & Reels" className="mb-4" />
          <h2 className="font-nunito text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1F2421] tracking-tight leading-tight">
            Real Pets. <span className="text-[#7a46e5]">Real Moments.</span>
          </h2>

          {/* {onSelectReel && (
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => onSelectReel(reels[0])}
                className="group text-sm font-bold text-[#1F2421] hover:text-[#7a46e5] transition flex items-center gap-1.5 cursor-pointer py-1"
              >
                <span>View All Reels</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )} */}
        </div>

        {/* Carousel Container with Absolute Side Navigation Arrows */}
        <div className="relative px-2 md:px-0">
          
          {/* Left Arrow Button */}
          {reels.length > 0 && (
            <button
              type="button"
              onClick={scrollPrev}
              className="cursor-pointer absolute -left-2 md:-left-4 lg:-left-6 xl:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 border border-neutral-200/80 hover:border-[#7a46e5] text-neutral-800 hover:text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none hover:bg-[#7a46e5]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
          )}

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] pl-6"
                >
                  <VideoCard reel={reel} onSelectReel={onSelectReel} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          {reels.length > 0 && (
            <button
              type="button"
              onClick={scrollNext}
              className="cursor-pointer absolute -right-2 md:-right-4 lg:-right-6 xl:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 border border-neutral-200/80 hover:border-[#7a46e5] text-neutral-800 hover:text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none hover:bg-[#7a46e5]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          )}

        </div>

        {/* Pagination Dots */}
        {scrollSnaps.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-6 bg-[#7a46e5]'
                    : 'w-1.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

interface VideoCardProps {
  reel: ReelItem;
  onSelectReel?: (reel: ReelItem) => void;
}

function VideoCard({ reel, onSelectReel }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPaused(false); // Reset pause state when hovering new card
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPaused((prev) => !prev);
  };

  const shouldPlay = isHovered && !isPaused;

  return (
    <div
      className="relative aspect-[9/14] w-full rounded-[24px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.06)] group cursor-pointer bg-neutral-900 select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {/* Background Thumbnail Image */}
      <img
        src={reel.thumbnail}
        alt={reel.title}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
          shouldPlay ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        }`}
        loading="lazy"
      />

      {/* Category Pill Tag (top-left) */}
      <div
        className={`absolute top-3.5 left-3.5 z-10 transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-nunito font-extrabold tracking-wider uppercase backdrop-blur-md shadow-xs ${reel.tagBg} ${reel.tagColor}`}
        >
          {reel.tag}
        </span>
      </div>

      {/* Optional Fullscreen Modal Trigger on Top Right */}
      {onSelectReel && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectReel(reel);
          }}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer"
          title="Open Story Modal"
          aria-label="Open Story Modal"
        >
          <MaximizeIcon className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Unmuted Autoplay Video on Hover */}
      {shouldPlay && (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=0&controls=0&loop=1&playlist=${reel.youtubeId}&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-[1.35] origin-center"
            allow="autoplay; encrypted-media"
            title={reel.title}
          />
        </div>
      )}

      {/* Normal State Glassmorphism Overlay */}
      <div
        className={`absolute inset-x-4 bottom-4 z-10 backdrop-blur-md bg-white/10 rounded-[20px] p-4 shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-in-out ${
          isHovered ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Wagmart Branding inside Card */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src="/assets/WAGMART-Logo.webp"
            alt="Wagmart"
            className="h-5 w-auto object-contain filter brightness-0 invert"
          />
        </div>

        {/* Video Title */}
        <h3 className="font-nunito text-sm sm:text-base font-bold text-white line-clamp-2 leading-tight tracking-tight drop-shadow-sm">
          {reel.title}
        </h3>
      </div>

      {/* Hover State Play/Pause Icon Indicator Only */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ease-out bg-black/5 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg transition-transform duration-300 hover:scale-110">
          {isPaused ? (
            <Play className="h-7 w-7 text-white fill-white translate-x-0.5" />
          ) : (
            <PauseIcon className="h-7 w-7 text-white fill-white animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PetReels;

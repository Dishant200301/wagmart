import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ThemeButton } from './ThemeButton';

interface HeroProps {
  onShopClick: () => void;
}

interface HeroSlide {
  id: number;
  image: string;
  layout: 'center' | 'left';
  title1: string;
  titleAccent: string;
  titleAccentColor: string;
  subtitle: string;
  buttonText: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero/hero-banner-1.webp',
    layout: 'center',
    title1: 'Premium Pet Products',
    titleAccent: 'for Happier Paws',
    titleAccentColor: '#7a46e5',
    subtitle:
      'Explore our wide range of pet toys, grooming, accessories and care products for a healthier and happier life.',
    buttonText: 'Shop Now',
  },
  {
    id: 2,
    image: '/images/hero/hero-banner-2.webp',
    layout: 'left',
    title1: 'Clean Pets,',
    titleAccent: 'Happier Days',
    titleAccentColor: '#7a46e5',
    subtitle:
      'Wagmart Neem & Aloevera Shampoo keeps your pet’s coat clean, soft, fresh and naturally healthy.',
    buttonText: 'Shop Now',
  },
  {
    id: 3,
    image: '/images/hero/hero-banner-3.webp',
    layout: 'left',
    title1: 'A Cleaner Home,',
    titleAccent: 'A Happier Pet',
    titleAccentColor: '#7a46e5',
    subtitle:
      'Easily remove loose pet hair from your pet, sofa, bed, clothes and more.',
    buttonText: 'Shop Now',
  },
  {
    id: 4,
    image: '/images/hero/hero-banner-4.webp',
    layout: 'left',
    title1: 'Gentle Grooming',
    titleAccent: 'for a Happier Cat',
    titleAccentColor: '#7a46e5',
    subtitle:
      'Remove loose hair and make grooming a relaxing part of your cat’s day.',
    buttonText: 'Shop Now',
  },
  {
    id: 5,
    image: '/images/hero/hero-banner-5.webp',
    layout: 'left',
    title1: 'Fresh Water,',
    titleAccent: 'Happy Pets',
    titleAccentColor: '#7a46e5',
    subtitle:
      'Make every mealtime easier with a feeding station designed for daily comfort.',
    buttonText: 'Shop Now',
  },
];

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide((index + SLIDES.length) % SLIDES.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto-advance banner every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (deltaX > 45) {
      prevSlide();
    } else if (deltaX < -45) {
      nextSlide();
    }
    touchStartX.current = null;
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Pet Care Featured Highlights"
      className="relative w-full h-[540px] sm:h-[600px] md:h-[640px] lg:h-[680px] xl:h-[700px] max-h-[92vh] bg-[#FAF8F5] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Banners with smooth cross-fade */}
      {SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out select-none pointer-events-none ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className={`w-full h-full object-cover select-none pointer-events-none ${
                slide.layout === 'center'
                  ? 'object-center'
                  : 'object-right md:object-center'
              }`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />

            {/* For Hero slides 2 to 5: add soft left-side gradient so text is cleanly visible.
                For Hero slide 1: DO NOT add this gradient per user instruction. */}
            {slide.layout === 'left' && (
              <div className="absolute inset-y-0 left-0 w-full sm:w-[70%] md:w-[58%] lg:w-[50%] bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/65 to-transparent pointer-events-none z-[1]" />
            )}
          </div>
        );
      })}

      {/* Slide Content Container: Fully Selectable Text */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center select-text">
        {activeSlide.layout === 'center' ? (
          /* Slide 1: Center-aligned content */
          <div
            key={`slide-content-${activeSlide.id}`}
            className="w-full max-w-xl md:max-w-2xl mx-auto text-center py-6 sm:py-8 transition-all duration-500 ease-out select-text"
          >
            <h1 className="font-nunito font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.15] text-[#1E2228] select-text cursor-text">
              <span className="select-text">{activeSlide.title1}</span>
              <br />
              <span className="select-text text-[#7a46e5]">
                {activeSlide.titleAccent}
              </span>
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base lg:text-lg text-[#555E68] max-w-md sm:max-w-lg mx-auto leading-relaxed font-nunito font-medium select-text cursor-text">
              {activeSlide.subtitle}
            </p>

            <div className="mt-6 sm:mt-8 select-none">
              <ThemeButton
                onClick={onShopClick}
              >
                {activeSlide.buttonText}
              </ThemeButton>
            </div>
          </div>
        ) : (
          /* Slides 2 to 5: Left-aligned content (Fully selectable text with website branding) */
          <div
            key={`slide-content-${activeSlide.id}`}
            className="w-full max-w-md sm:max-w-lg md:max-w-[480px] lg:max-w-[520px] py-6 sm:py-8 transition-all duration-500 ease-out select-text"
          >
            {/* Clean headline strictly in code: Selectable */}
            <h1 className="font-nunito font-extrabold text-2xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] tracking-tight leading-[1.12] text-[#1E2228] select-text cursor-text">
              <span className="select-text">{activeSlide.title1}</span>
              <br />
              <span className="select-text text-[#7a46e5]">
                {activeSlide.titleAccent}
              </span>
            </h1>

            {/* Clean subtitle: Selectable */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-[16px] text-[#4F463E] font-medium leading-relaxed max-w-xs sm:max-w-sm md:max-w-[430px] select-text cursor-text">
              {activeSlide.subtitle}
            </p>

            {/* Website ThemeButton */}
            <div className="mt-6 sm:mt-7 select-none">
              <ThemeButton
                onClick={onShopClick}
              >
                {activeSlide.buttonText}
              </ThemeButton>
            </div>
          </div>
        )}
      </div>

      {/* Left Navigation Arrow Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous banner"
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md hover:shadow-lg backdrop-blur-sm border border-white/60 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>

      {/* Right Navigation Arrow Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next banner"
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md hover:shadow-lg backdrop-blur-sm border border-white/60 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>

      {/* Bottom Center Pagination Dots (no background pill container, no border, slightly smaller size) */}
      <nav
        aria-label="Banner pagination"
        className="absolute bottom-4 sm:bottom-6 md:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 transition-all"
      >
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title1} ${slide.titleAccent}`}
              aria-current={isActive ? 'true' : undefined}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? 'w-5 sm:w-6 h-2 sm:h-2 bg-[#7a46e5] shadow-xs'
                  : 'w-2 sm:w-2 h-2 sm:h-2 bg-black/25 hover:bg-black/45'
              }`}
            />
          );
        })}
      </nav>
    </section>
  );
};

export default Hero;

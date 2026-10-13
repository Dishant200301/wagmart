import React from 'react';
import { ThemeButton } from './ThemeButton';

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-[calc(100svh-60px)] min-h-[500px] flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background Banner Image: Single intact hero-banner-1.webp (No cutting, no other images) */}
      <img
        src="/assets/hero-banner-1.webp"
        alt="Premium Pet Products for Happier Paws"
        className="absolute inset-0 w-full h-full object-contain md:object-cover lg:object-contain object-center pointer-events-none select-none"
        loading="eager"
      />

      {/* Center Content: Matching reference image exactly */}
      <div className="relative z-10 w-full max-w-xl md:max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-3 sm:space-y-4 md:space-y-5">
        {/* Heading in strictly two lines */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-nunito font-bold text-[#1E2228] tracking-tight leading-[1.18] sm:leading-[1.15]">
          Premium Pet Products <br />
          for Happier Paws
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#555E68] max-w-md sm:max-w-lg mx-auto leading-relaxed font-nunito font-bold">
          Explore our wide range of pet toys, grooming, accessories and care products for a healthier and happier life.
        </p>

        {/* Shop Now Action Button */}
        <div className="pt-2 sm:pt-3">
          <ThemeButton onClick={onShopClick} className="font-nunito font-bold">
            Shop Now
          </ThemeButton>
        </div>
      </div>
    </section>
  );
};

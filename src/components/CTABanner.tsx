import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { ThemeButton } from './ThemeButton';

interface CTABannerProps {
  onShopClick: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onShopClick }) => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Upper CTA Banner: Best Pals for Your Paw Pals (matching Frame 3.png) */}
      <div className="py-16 sm:py-20 border-t border-[#EAE5D9] bg-gradient-to-r from-[#F9F7F2] via-white to-[#F9F7F2] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Left Cat */}
          <div className="hidden md:block absolute -left-10 bottom-0 w-44 lg:w-52 pointer-events-none select-none z-10">
            <img
              src="/assets/banner_cat.png"
              alt="Cat companion"
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Right Dog */}
          <div className="hidden md:block absolute -right-10 bottom-0 w-44 lg:w-52 pointer-events-none select-none z-10">
            <img
              src="/assets/banner_dog.png"
              alt="Dog companion"
              className="w-full h-auto object-contain drop-shadow-sm"
            />
          </div>

          {/* Center Text & Call to Action */}
          <div className="text-center max-w-2xl mx-auto space-y-5 relative z-20 py-4">
            <div className="text-[#C9A98A] text-2xl select-none">🐾</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-serif-title">
              Best Pals for <br />
              <span className="text-[#7a46e5]">Your Paw Pals</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
              Your Trusted Partner in Pet Care, Offering Tailored Supplies to Ensure the Health, Happiness, and Well-Being of Your Beloved Furry Companions.
            </p>

            <div className="pt-2">
              <ThemeButton onClick={onShopClick}>
                Book Now
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

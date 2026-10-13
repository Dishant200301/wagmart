import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BundleItem } from '../types';

interface ShopByNeedProps {
  onSelectBundle: (categoryFilter?: BundleItem['categoryFilter']) => void;
}

export const ShopByNeed: React.FC<ShopByNeedProps> = ({ onSelectBundle }) => {
  return (
    <section id="bundles" className="py-12 sm:py-16 lg:py-20 bg-white font-sans">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid 5-Card Layout matching Reference Image */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-4">
          {/* Top Row: 2 Cards (Dental Chews ~66.7% / Clearance Sale ~33.3%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4">
            {/* Card 1: Dental Chews & Solutions for Dogs (Top Left) */}
            <div
              onClick={() => onSelectBundle('feeding')}
              className="lg:col-span-8 group relative overflow-hidden rounded-2xl bg-[#C1BFDB] p-6 sm:p-9 lg:p-10 min-h-[290px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              {/* Left Content */}
              <div className="relative z-10 max-w-[62%] sm:max-w-[55%] lg:max-w-[50%] flex flex-col justify-between h-full space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black text-[#1D1C3E] leading-[1.12] tracking-tight">
                  Dental chews
                  <br />
                  and solutions
                  <br />
                  for Dogs
                </h3>

                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectBundle('feeding');
                    }}
                    className="inline-flex items-center justify-center bg-white text-[#1D1C3E] font-bold text-sm sm:text-base px-6 py-2.5 sm:px-7 sm:py-3 rounded-[26px] shadow-xs hover:bg-[#1D1C3E] hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Right Cutout Image (Dog + Dental Chew Pouches) */}
              <div className="absolute right-0 bottom-0 h-full w-[56%] sm:w-[50%] lg:w-[48%] pointer-events-none select-none flex items-end justify-end">
                <img
                  src="/bento/card1_dog_chews.png"
                  alt="Dental chews and solutions for Dogs"
                  className="h-full w-auto max-w-none object-contain object-right-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 2: Clearance Sale Up to 50% Off (Top Right) */}
            <div
              onClick={() => onSelectBundle('feeding')}
              className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-[#F1E0DC] p-6 sm:p-8 lg:p-9 min-h-[290px] sm:min-h-[320px] lg:min-h-[350px] flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              {/* Eyebrow */}
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.2em] text-[#8E3725]">
                CLEARANCE SALE!
              </span>

              {/* Main Headline */}
              <div className="my-auto py-2">
                <div className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black text-[#541C12] leading-[1.04] tracking-tight">
                  UP TO
                  <br />
                  50% OFF
                </div>
              </div>

              {/* Bottom Link with Circled Arrow */}
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#702619] group-hover:text-[#4A150D] transition-colors">
                <span className="underline decoration-1.5 underline-offset-4">Shop Now</span>
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#702619] group-hover:bg-[#702619] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Cards (Dog Foods, Automatic Litter Box [Only Product], Cat Food [Only Product]) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-4">
            {/* Card 3: Fresh & Frozen Dog Foods (Bottom Left) */}
            <div
              onClick={() => onSelectBundle('feeding')}
              className="sm:col-span-1 group relative overflow-hidden rounded-2xl bg-[#5BEAB0] p-5 sm:p-6 lg:p-7 min-h-[200px] sm:min-h-[215px] lg:min-h-[225px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="relative z-10 max-w-[58%] sm:max-w-[56%] flex flex-col justify-between h-full space-y-3">
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-black text-[#0D2261] leading-[1.18] tracking-tight">
                  Fresh &<br />
                  frozen<br />
                  dog foods
                </h3>

                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0D2261] group-hover:text-[#061238] transition-colors pt-1">
                  <span className="underline decoration-1 underline-offset-3">From only $4.90</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#0D2261] group-hover:bg-[#0D2261] group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Dog cutout image */}
              <div className="absolute right-0 bottom-0 h-full w-[48%] sm:w-[46%] pointer-events-none select-none flex items-end justify-end">
                <img
                  src="/bento/card3_dog.png"
                  alt="Fresh & frozen dog foods"
                  className="h-[92%] w-auto max-w-none object-contain object-right-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 4: Automatic Litter Box (Bottom Center - ONLY PRODUCT!) */}
            <div
              onClick={() => onSelectBundle('hygiene')}
              className="sm:col-span-1 group relative overflow-hidden rounded-2xl bg-[#DAD5BE] p-5 sm:p-6 lg:p-7 min-h-[200px] sm:min-h-[215px] lg:min-h-[225px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="relative z-10 max-w-[58%] sm:max-w-[56%] flex flex-col justify-between h-full space-y-2">
                <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5A5C55]">
                  SNOWSAFE+ SYSTEM
                </span>

                <h3 className="text-lg sm:text-xl lg:text-[22px] font-black text-[#2B2D2B] leading-[1.18] tracking-tight">
                  An automatic<br />
                  litter box
                </h3>

                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#2B2D2B] group-hover:text-black transition-colors pt-1">
                  <span className="underline decoration-1 underline-offset-3">Pre-order Now</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#2B2D2B] group-hover:bg-[#2B2D2B] group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* ONLY PRODUCT: Automatic robotic litter box */}
              <div className="absolute right-0 bottom-0 h-full w-[48%] sm:w-[46%] pointer-events-none select-none flex items-end justify-end">
                <img
                  src="/bento/card4_litterbox.png"
                  alt="Automatic robotic cat litter box"
                  className="h-[90%] w-auto max-w-none object-contain object-right-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 5: Complete & Balanced Cat Food (Bottom Right - ONLY PRODUCT!) */}
            <div
              onClick={() => onSelectBundle('feeding')}
              className="sm:col-span-2 lg:col-span-1 group relative overflow-hidden rounded-2xl bg-[#FBF256] p-5 sm:p-6 lg:p-7 min-h-[200px] sm:min-h-[215px] lg:min-h-[225px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="relative z-10 max-w-[60%] sm:max-w-[58%] flex flex-col justify-between h-full space-y-3">
                <h3 className="text-lg sm:text-xl lg:text-[22px] font-black text-[#1A1D20] leading-[1.18] tracking-tight">
                  Complete<br />
                  & balanced<br />
                  cat food
                </h3>

                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#1A1D20] group-hover:text-black transition-colors pt-1">
                  <span className="underline decoration-1 underline-offset-3">Shop Cat Food</span>
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#1A1D20] group-hover:bg-[#1A1D20] group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* ONLY PRODUCT: Reveal Cat Food Bag */}
              <div className="absolute right-2 sm:right-3 bottom-0 h-full w-[40%] sm:w-[38%] pointer-events-none select-none flex items-end justify-end">
                <img
                  src="/bento/card5_catfood.png"
                  alt="Reveal Complete and Balanced Cat Food"
                  className="h-[92%] w-auto max-w-none object-contain object-right-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

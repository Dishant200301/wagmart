import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

export interface PetTrustSectionProps {
  className?: string;
}

/**
 * PetTrustSection — Wagmart Premium Pet Trust & Brand Credibility Section
 *
 * Faithfully redesigned from the reference editorial case-study layout:
 * - Full-width white background with subtle border separation
 * - Centered eyebrow with purple square marker ("THE WAGMART DIFFERENCE")
 * - Centered large editorial heading ("A Happier World for Pets & Their People") & supporting copy
 * - 4-column structured editorial grid with thin vertical dividers (#EAECEF):
 *     Col 1: Wagmart brand identity, trust story & "Explore Wagmart →" link
 *     Col 2: Authentic pet lifestyle photograph (clean, edge-to-edge, no overlays/badges)
 *     Col 3: Primary trust metric ("3 Lakh+ Happy Pet Parents") on soft #F4F6FA panel with Wagmart mark
 *     Col 4: Secondary trust highlight ("Fast Delivery" everyday essentials) with Wagmart Express mark
 * - Bottom horizontal brand trust strip with 4 core values
 */
export const PetTrustSection: React.FC<PetTrustSectionProps> = ({ className = '' }) => {
  const scrollToShop = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('shop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const brandValues = [
    { label: 'Thoughtful Selection', glyph: '✜' },
    { label: 'Everyday Pet Care', glyph: '◈' },
    { label: 'Pet-Parent Focus', glyph: '◉' },
    { label: 'Wagmart Quality', glyph: '✦' },
  ];

  return (
    <section
      id="about"
      role="region"
      aria-label="The Wagmart Difference & Pet Trust"
      className={`w-full bg-white py-14 sm:py-18 lg:py-24 select-none ${className}`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. SECTION HEADER (Centered Eyebrow + Large Editorial Headline)
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          {/* Eyebrow Label */}
          <SectionBadge label="The Wagmart Difference" className="mb-6" />

          {/* Main Heading */}
          <h2 className="font-nunito font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#171717] tracking-tight leading-[1.2] mb-3">
            A Happier World for <span className="text-[#7a46e5]">Pets &amp; <br/> Their People</span>
          </h2>

          {/* Supporting Text */}
          <p className="font-nunito text-sm sm:text-[15px] text-[#6B7280] max-w-xl mx-auto leading-relaxed font-normal">
            Thoughtfully chosen essentials for everyday pet care.
          </p>
        </div>

        {/* =========================================================================
            2. MAIN EDITORIAL CONTENT GRID (4-Column Flush Grid with Thin Separators)
           ========================================================================= */}
        <div className="w-full bg-white rounded-xl sm:rounded-2xl border border-[#EAECEF] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
            {/* -------------------------------------------------------------------
                COLUMN 1: Pet-Parent Trust Story & Brand Identity
               ------------------------------------------------------------------- */}
            <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] bg-white border-b md:border-b-0 md:border-r border-[#EAECEF] group">
              <div>
                {/* Brand Logo */}
                <div className="flex items-center gap-2 mb-6 sm:mb-8">
                  <img
                    src="/assets/WAGMART-Logo.webp"
                    alt="Wagmart"
                    className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02] duration-300"
                  />
                </div>

                {/* Main Copy */}
                <h3 className="font-nunito font-semibold text-xl sm:text-[22px] text-[#171717] tracking-tight leading-snug mb-3">
                  Made for the Love They Give
                </h3>
                <p className="font-nunito text-xs sm:text-[13.5px] text-[#6B7280] leading-relaxed font-normal">
                  Discover thoughtful everyday essentials designed to make caring for your pets simpler and more enjoyable.
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-auto">
                <a
                  href="#shop"
                  onClick={scrollToShop}
                  className="font-nunito font-semibold text-xs sm:text-sm text-[#7a46e5] hover:text-[#6835d6] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200 cursor-pointer group/link"
                >
                  <span>Explore Wagmart</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                COLUMN 2: Premium Pet Lifestyle Image (Full-bleed, clean, no overlays)
               ------------------------------------------------------------------- */}
            <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden bg-[#FAF8F5] border-b md:border-b-0 lg:border-r border-[#EAECEF]">
              <img
                src="/images/testimonial/image.png"
                alt="Happy pet parent holding her small dog in a sunlit home"
                className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            {/* -------------------------------------------------------------------
                COLUMN 3: Primary Trust Metric (Light Neutral/Lavender Panel #F4F6FA)
               ------------------------------------------------------------------- */}
            <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] bg-[#F4F6FA] border-b md:border-b-0 md:border-t lg:border-t-0 md:border-r border-[#EAECEF]">
              {/* Top Subtitle */}
              <div className="text-[11px] font-nunito tracking-wider text-[#6B7280] font-semibold uppercase">
                PET-PARENT COMMUNITY
              </div>

              {/* Large Metric */}
              <div className="py-5 sm:py-7">
                <div className="font-nunito font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#171717] tracking-tight leading-none mb-2.5">
                  3 Lakh+
                </div>
                <div className="font-nunito font-medium text-xs sm:text-sm text-[#6B7280] tracking-normal">
                  Happy Pet Parents
                </div>
              </div>

              {/* Bottom Brand Mark */}
              <div className="mt-auto pt-6 flex items-center">
                <img
                  src="/assets/WAGMART-Logo.webp"
                  alt="Wagmart"
                  className="h-5 sm:h-5.5 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* -------------------------------------------------------------------
                COLUMN 4: Secondary Trust Highlight (Delivery Experience)
               ------------------------------------------------------------------- */}
            <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] bg-white md:border-t lg:border-t-0 border-[#EAECEF]">
              {/* Top Subtitle */}
              <div className="text-[11px] font-nunito tracking-wider text-[#6B7280] font-semibold uppercase">
                DELIVERY EXPERIENCE
              </div>

              {/* Highlight Content */}
              <div className="py-5 sm:py-7">
                <div className="font-nunito font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#171717] tracking-tight leading-[1.1] mb-2.5">
                  Fast Delivery
                </div>
                <div className="font-nunito font-normal text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                  Everyday essentials delivered to your door.
                </div>
              </div>

              {/* Bottom Subtle Mark */}
              <div className="mt-auto pt-6 flex items-center gap-2">
                <span className="text-[#7a46e5] text-xs font-bold" aria-hidden="true">✜</span>
                <span className="font-nunito font-bold text-[11px] sm:text-xs text-[#171717]/80 tracking-wider uppercase">
                  Wagmart Express
                </span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              3. BOTTOM BRAND LOGO / VALUES STRIP
             ========================================================================= */}
          {/* <div className="border-t border-[#EAECEF] bg-white py-4 sm:py-4.5 px-6 sm:px-10">
            <div className="flex items-center justify-around sm:justify-between flex-wrap gap-4 sm:gap-6">
              {brandValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-[#6B7280] hover:text-[#171717] transition-colors duration-200"
                >
                  <span className="text-[10px] text-[#5B3CC4] select-none" aria-hidden="true">
                    {val.glyph}
                  </span>
                  <span className="font-nunito font-medium text-xs sm:text-[13px] tracking-wide uppercase whitespace-nowrap">
                    {val.label}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
};

export default PetTrustSection;

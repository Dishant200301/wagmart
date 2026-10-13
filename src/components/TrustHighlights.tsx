import React from 'react';

export interface TrustHighlightsProps {
  className?: string;
}

// Visual accent icons for the highlights
const DeliveryAccentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#8050E8] transition-transform duration-300 group-hover:translate-x-0.5"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CatalogGridIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#8050E8]"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const SupportIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-[#8050E8]"
    aria-hidden="true"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

/**
 * TrustHighlights — Wagmart Editorial Brand Highlights Showcase
 *
 * Distinctive, asymmetrical editorial section:
 * - Left side: Brand promise statement (eyebrow, strong headline, supporting text).
 * - Right side: Four unique trust highlights arranged in a 2x2 grid.
 * - Restrained, premium color palette with Wagmart purple (#8050E8) accents.
 * - Responsive layout: 2-column editorial on desktop, naturally stacked on tablet/mobile.
 */
export const TrustHighlights: React.FC<TrustHighlightsProps> = ({ className = '' }) => {
  return (
    <section
      role="region"
      aria-label="The Wagmart Promise & Trust Highlights"
      className={`w-full bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-9 lg:p-12 border border-[#EAE5D9]/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] select-none transition-all duration-300 ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Brand Statement */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3 sm:space-y-4 text-left">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8050E8] shrink-0" />
            <span className="text-xs font-nunito font-extrabold tracking-[0.16em] text-[#8050E8] uppercase">
              THE WAGMART PROMISE
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] text-[#25212D] tracking-tight leading-[1.15]">
            Little Things. <br className="hidden sm:inline" />
            <span className="text-[#8050E8]">Happier Pets.</span>
          </h2>

          {/* Supporting Sentence */}
          <p className="font-nunito text-sm sm:text-[15px] text-[#77717F] leading-relaxed max-w-md font-medium">
            Thoughtful essentials for the pets who make every day better.
          </p>
        </div>

        {/* Right Side: Four Unique Trust Highlights in a 2x2 Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          
          {/* Highlight 01 — Happy Pet Parents (Hero Figure) */}
          <div className="bg-[#F5F0FF] rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#8050E8]/15 flex flex-col justify-between hover:border-[#8050E8]/35 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[11px] font-nunito font-bold text-[#8050E8] tracking-wider uppercase">
                01
              </span>
              <span className="text-xs text-[#8050E8]">🐾</span>
            </div>

            <div>
              <div className="font-nunito font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#8050E8] tracking-tight leading-none mb-1.5">
                3 Lakh+
              </div>
              <div className="font-nunito font-bold text-xs sm:text-[13px] text-[#25212D] tracking-tight">
                Happy Pet Parents
              </div>
            </div>
          </div>

          {/* Highlight 02 — Fast Delivery */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#EAE5D9] flex flex-col justify-between hover:border-[#8050E8]/30 hover:bg-[#FAF8F5]/50 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[11px] font-nunito font-bold text-[#77717F]/70 tracking-wider uppercase">
                02
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#F5F0FF] flex items-center justify-center shrink-0">
                <DeliveryAccentIcon />
              </div>
            </div>

            <div>
              <div className="font-nunito font-extrabold text-lg sm:text-xl lg:text-[22px] text-[#25212D] tracking-tight leading-tight mb-1">
                Fetching
              </div>
              <div className="font-nunito font-medium text-xs sm:text-[13px] text-[#77717F]">
                Fast Delivery
              </div>
            </div>
          </div>

          {/* Highlight 03 — Product Assortment */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#EAE5D9] flex flex-col justify-between hover:border-[#8050E8]/30 hover:bg-[#FAF8F5]/50 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[11px] font-nunito font-bold text-[#77717F]/70 tracking-wider uppercase">
                03
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#F5F0FF] flex items-center justify-center shrink-0">
                <CatalogGridIcon />
              </div>
            </div>

            <div>
              <div className="font-nunito font-extrabold text-lg sm:text-xl lg:text-[22px] text-[#25212D] tracking-tight leading-tight mb-1">
                Widest
              </div>
              <div className="font-nunito font-medium text-xs sm:text-[13px] text-[#77717F]">
                Assortment Ever
              </div>
            </div>
          </div>

          {/* Highlight 04 — Dedicated Support */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#EAE5D9] flex flex-col justify-between hover:border-[#8050E8]/30 hover:bg-[#FAF8F5]/50 transition-all duration-200 group">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[11px] font-nunito font-bold text-[#77717F]/70 tracking-wider uppercase">
                04
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#F5F0FF] flex items-center justify-center shrink-0">
                <SupportIcon />
              </div>
            </div>

            <div>
              <div className="font-nunito font-extrabold text-lg sm:text-xl lg:text-[22px] text-[#25212D] tracking-tight leading-tight mb-1">
                Dedicated
              </div>
              <div className="font-nunito font-medium text-xs sm:text-[13px] text-[#77717F]">
                Order Manager
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustHighlights;

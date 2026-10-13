import React from 'react';
import { testimonials } from '../data/testimonials';
import { SectionBadge } from './SectionBadge';

export const Testimonials: React.FC = () => {
  const [review1, review2, review3] = testimonials;

  // Star renderer: Custom rounded-corner stars with increased size
  // First 3 stars are dark/primary #7a46e5, last 2 are soft light #7a46e5/20
  const renderStars = () => (
    <div className="flex items-center gap-1 mb-5 sm:mb-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-5 h-5 sm:w-[20px] sm:h-[20px] transition-colors ${
            i < 3 ? 'fill-[#7a46e5] text-[#7a46e5]' : 'fill-[#7a46e5]/20 text-[#7a46e5]/25'
          }`}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <SectionBadge label="Customer Reviews" className="mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1C1814] tracking-tight leading-tight">
            The reviews say it all
          </h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#6B635B] mt-3 sm:mt-4 leading-relaxed font-normal">
            Our rating truly speaks for itself — but the words behind it speak even louder and clearer, expressing our commitment.
          </p>
        </div>

        {/* 3-Column Masonry Layout Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          
          {/* LEFT COLUMN: Testimonial Card 1 + Rating Card */}
          <div className="flex flex-col gap-6 lg:gap-7">
            {/* Card 1: David Chen - Increased height, bigger text, no border */}
            <div className="bg-[#7a46e5]/10 rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1 min-h-[300px] sm:min-h-[330px]">
              <div>
                {renderStars()}
                <p className="text-base sm:text-[17px] lg:text-[18.5px] text-[#2A241E] leading-[1.75] font-normal">
                  “{review1.quote}”
                </p>
              </div>
              <div className="flex items-center gap-3.5 mt-8 sm:mt-10">
                <img
                  src={review1.avatar}
                  alt={review1.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover shrink-0 bg-[#7a46e5]/10"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#1C1814]">
                    {review1.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A7269] font-normal mt-0.5">
                    {review1.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: 4.96/5 Rating Card - Previous height */}
            <div className="bg-[#7a46e5]/80 rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-[0_6px_25px_rgba(167,94,60,0.16)] flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[220px]">
              <span className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-none">
                4.96/5
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 my-3.5 sm:my-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-xs sm:text-sm text-white/95 font-medium tracking-wide">
                5-Star Reviews: 500+
              </span>
            </div>
          </div>

          {/* CENTER COLUMN: Tall Testimonial Card 2 (James Thornton) */}
          <div className="flex flex-col">
            <div className="bg-[#7a46e5]/10 rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full min-h-[540px] sm:min-h-[580px]">
              <div>
                {renderStars()}
                <p className="text-base sm:text-[17px] lg:text-[18.5px] text-[#2A241E] leading-[1.75] font-normal">
                  “{review2.quote}”
                </p>
              </div>
              <div className="flex items-center gap-3.5 mt-10 sm:mt-14">
                <img
                  src={review2.avatar}
                  alt={review2.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover shrink-0 bg-[#7a46e5]/10"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#1C1814]">
                    {review2.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A7269] font-normal mt-0.5">
                    {review2.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dog Image Card + Testimonial Card 3 (Marcus Williams) */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-7 md:col-span-2 lg:col-span-1">
            {/* Card 4: 1200+ Delivered Quarterly Dog Image Card - Previous height & correct image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[210px] sm:min-h-[235px] md:flex-1 lg:flex-initial flex flex-col items-center justify-center text-center p-7 sm:p-8 shadow-sm">
              <img
                src="/images/testimonial/image copy 3.png"
                alt="Happy pets"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 flex flex-col items-center">
                <svg
                  className="w-9 h-9 sm:w-10 sm:h-10 text-white stroke-[1.5]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 9.5c.5-.7 1.5-.7 2 0" />
                  <path d="M14 9.5c.5-.7 1.5-.7 2 0" />
                  <path d="M8.5 14.5c1 1.5 3 2 4.5 1.5 1-.3 2-1 2.5-1.5" />
                </svg>
                <span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-2.5">
                  1200+
                </span>
                <span className="text-xs sm:text-lg text-white/90 font-medium mt-1">
                  Happy Pets Delivered Quarterly
                </span>
              </div>
            </div>

            {/* Card 5: Marcus Williams - Previous height */}
            <div className="bg-[#7a46e5]/10 rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between flex-1 md:flex-1 min-h-[300px] sm:min-h-[330px]">
              <div>
                {renderStars()}
                <p className="text-base sm:text-[17px] lg:text-[18.5px] text-[#2A241E] leading-[1.75] font-normal">
                  “{review3.quote}”
                </p>
              </div>
              <div className="flex items-center gap-3.5 mt-8 sm:mt-10">
                <img
                  src={review3.avatar}
                  alt={review3.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover shrink-0 bg-[#7a46e5]/10"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#1C1814]">
                    {review3.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7A7269] font-normal mt-0.5">
                    {review3.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

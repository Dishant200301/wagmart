import React, { useState, useEffect, useRef } from 'react';
import { HeartHandshake, Sparkles, ShoppingBag } from 'lucide-react';
import { SectionBadge } from './SectionBadge';

// Arrow Up Right ↗ Icon
const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// Paw Print Icon
const PawPrintIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 13.5c-1.8 0-3.5 1.1-3.5 3.2 0 1.9 1.5 3.3 3.5 3.3s3.5-1.4 3.5-3.3c0-2.1-1.7-3.2-3.5-3.2zm-5.2-1.3c1.2 0 2.2-1.2 2.2-2.7s-1-2.7-2.2-2.7-2.2 1.2-2.2 2.7 1 2.7 2.2 2.7zm10.4 0c1.2 0 2.2-1.2 2.2-2.7s-1-2.7-2.2-2.7-2.2 1.2-2.2 2.7 1 2.7 2.2 2.7zm-7.6-3.8c1.3 0 2.4-1.3 2.4-2.9S10.9 2.6 9.6 2.6s-2.4 1.3-2.4 2.9 1.1 2.9 2.4 2.9zm4.8 0c1.3 0 2.4-1.3 2.4-2.9S15.7 2.6 14.4 2.6s-2.4 1.3-2.4 2.9 1.1 2.9 2.4 2.9z" />
  </svg>
);

export const WhyChooseWagmart: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counter values for the 3 statistic cards
  const [count1, setCount1] = useState(0); // target: 76
  const [count2, setCount2] = useState(0); // target: 91
  const [count3, setCount3] = useState(0); // target: 69

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasAnimated) return;

    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCount1(76);
      setCount2(91);
      setCount3(69);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const duration = 1500; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth cubic ease-out curve
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCount1(Math.round(76 * easeOut));
            setCount2(Math.round(91 * easeOut));
            setCount3(Math.round(69 * easeOut));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount1(76);
              setCount2(91);
              setCount3(69);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="why-choose-wagmart-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
          
          {/* =========================================================================
              LEFT COLUMN (~40% desktop, lg:col-span-5)
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Small Label Badge */}
              <SectionBadge label="Why Choose Wagmart" className="mb-6" />

              {/* Main Heading */}
              <h2
                id="why-choose-wagmart-heading"
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#111827] tracking-tight leading-[1.14] mb-5"
              >
                Better Care for Every Happy Paw
              </h2>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-md mb-6 font-normal">
                Thoughtfully selected pet essentials to make everyday care, grooming, feeding, and adventures easier for you and your furry companions.
              </p>

              {/* CTA Link */}
              <div>
                <a
                  href="#shop"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-[#219959] hover:text-[#177242] transition-colors cursor-pointer group"
                >
                  <span>Explore Wagmart Benefits</span>
                  <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Bottom Trust Section */}
            <div className="pt-10 sm:pt-14 lg:pt-20">
              <p className="text-xs sm:text-[13px] text-[#6B7280] leading-normal max-w-sm mb-3.5 font-normal">
                Everything you need to make everyday pet care simpler, cleaner, and more comfortable.
              </p>

              {/* Trust Row */}
              <div className="flex items-center gap-3">
                {/* Overlapping Avatar Stack */}
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img
                    src="/images/testimonial/image.png"
                    alt="Pet parent reviewer"
                    className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                    loading="lazy"
                  />
                  <img
                    src="/images/testimonial/image copy.png"
                    alt="Pet parent reviewer"
                    className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                    loading="lazy"
                  />
                  <img
                    src="/images/testimonial/image copy 2.png"
                    alt="Pet parent reviewer"
                    className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                    loading="lazy"
                  />
                  <img
                    src="/images/testimonial/image copy 3.png"
                    alt="Pet parent reviewer"
                    className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Rating Label */}
                <span className="text-xs sm:text-[12.5px] text-[#6B7280] font-medium tracking-tight">
                  — rated 4.8/5
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (~60% desktop, lg:col-span-7) — 3 Clean Statistic Cards
             ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Card 1 — Large Top Card (Full Width) */}
            <div className="bg-[#F2F2F2] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-9 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between transition-all duration-300">
              {/* Upper-Left Label & Green Icon */}
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4.5 h-4.5 text-[#219959] shrink-0" />
                <span className="text-sm sm:text-[15px] font-bold text-[#111827] tracking-tight">
                  Everyday Pet Care
                </span>
              </div>

              {/* Lower-Left Large Stat & Description */}
              <div className="mt-8 sm:mt-10">
                <div className="text-5xl sm:text-6xl lg:text-[68px] font-black text-[#111827] tracking-tight leading-none mb-2.5">
                  {count1}%
                </div>
                <p className="text-xs sm:text-[13.5px] text-[#6B7280] font-normal leading-relaxed">
                  Thoughtfully designed daily essentials keeping routines clean, stress-free, and joyful.
                </p>
              </div>
            </div>

            {/* Bottom Row — Two Equal Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 2 — Bottom Left */}
              <div className="bg-[#F2F2F2] rounded-[24px] sm:rounded-[30px] p-6 sm:p-7 lg:p-8 min-h-[210px] sm:min-h-[230px] flex flex-col justify-between transition-all duration-300">
                {/* Label & Icon */}
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-[#219959] shrink-0" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#111827] tracking-tight">
                    Grooming Essentials
                  </span>
                </div>

                {/* Stat & Description */}
                <div className="mt-8 sm:mt-10">
                  <div className="text-5xl sm:text-6xl lg:text-[62px] font-black text-[#111827] tracking-tight leading-none mb-2.5">
                    {count2}%
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#6B7280] font-normal leading-relaxed">
                    Gentle deshedding and coat hygiene pet parents love.
                  </p>
                </div>
              </div>

              {/* Card 3 — Bottom Right */}
              <div className="bg-[#F2F2F2] rounded-[24px] sm:rounded-[30px] p-6 sm:p-7 lg:p-8 min-h-[210px] sm:min-h-[230px] flex flex-col justify-between transition-all duration-300">
                {/* Label & Icon */}
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4.5 h-4.5 text-[#219959] shrink-0" />
                  <span className="text-sm sm:text-[15px] font-bold text-[#111827] tracking-tight">
                    Shopping Made Simple
                  </span>
                </div>

                {/* Stat & Description */}
                <div className="mt-8 sm:mt-10">
                  <div className="text-5xl sm:text-6xl lg:text-[62px] font-black text-[#111827] tracking-tight leading-none mb-2.5">
                    {count3}%
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#6B7280] font-normal leading-relaxed">
                    Faster routine setup with trusted, quality-tested products.
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

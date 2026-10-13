import React from 'react';
import { Phone } from 'lucide-react';
import { ThemeButton } from './ThemeButton';

// Dedicated SVG Social Icons for crisp rendering and zero dependency issues
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Shop All', href: '#shop' },
    { label: 'Dog Products', href: '#shop' },
    { label: 'Cat Products', href: '#shop' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const customerLinks = [
    { label: 'My Account', href: '#hero' },
    { label: 'Track My Order', href: '#faq' },
    { label: 'Shipping Information', href: '#faq' },
    { label: 'Returns & Refunds', href: '#faq' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="relative w-full select-none bg-[#ECE4DB] scroll-mt-24 font-sans">
      {/* 
        =========================================================================
        TOP CTA & BACKGROUND IMAGE AREA
        - Full-bleed edge-to-edge background image with golden retriever & organic wave
        - Headline & 'Call Us Now' button placed in top-left white space next to dog
        =========================================================================
      */}
      <div className="relative w-full overflow-hidden bg-white">
        <img
          src="/images/common/footer.webp"
          alt="Wagmart Pet Care Footer"
          className="w-full h-auto block select-none pointer-events-none"
          loading="eager"
        />

        {/* CTA Content Overlay */}
        <div className="absolute top-[6%] sm:top-[10%] md:top-[12%] lg:top-[15%] left-3 sm:left-6 md:left-10 lg:left-[6%] max-w-[50%] sm:max-w-[48%] md:max-w-[44%] lg:max-w-[40%] z-10 pointer-events-auto">
          <h2 className="font-serif-title text-[13px] sm:text-base md:text-2xl lg:text-3xl xl:text-6xl font-semibold text-[#1F2421] tracking-tight leading-[1.2]">
            Ready to Give Your Pet the Best Care? Contact Us Today!
          </h2>

          <div className="mt-2.5 sm:mt-4 md:mt-5 lg:mt-6">
            <ThemeButton
              href="tel:+917777985896"
              icon={<Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 stroke-[2.5]" />}
              className="text-[11px] sm:text-xs md:text-sm lg:text-base"
            >
              Call Us Now
            </ThemeButton>
          </div>
        </div>
      </div>

      {/* 
        =========================================================================
        FOOTER COLUMNS & LINKS AREA
        - Pulls up into the image's beige area directly beneath the wave
        - Seamlessly matches the #ECE4DB background with zero visible seam
        - 4 Columns matching the reference image layout:
          Col 1: Wagmart Logo + Pet Description + "FOLLOW WAGMART" + Larger Social Media Cards
          Col 2: QUICK LINKS (16px font size, brand hover color)
          Col 3: CUSTOMER SUPPORT (16px font size, brand hover color)
          Col 4: GET IN TOUCH (16px font size, Brand Phone, Email)
        - Vertical dividers between columns on desktop
        =========================================================================
      */}
      <div className="relative w-full bg-[#ECE4DB] text-[#4B3F33] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 pt-2 sm:pt-4 md:pt-6 pb-6 sm:pb-8 -mt-20 sm:-mt-28 md:-mt-44 lg:-mt-60 xl:-mt-72 z-20 pointer-events-auto">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 pb-6 sm:pb-8 border-b border-[#D8CEBF]">
            
            {/* ==================== COLUMN 1: Wagmart Branding & Social (~41% on desktop) ==================== */}
            <div className="lg:w-[41%] lg:pr-8 xl:pr-12 lg:border-r lg:border-[#D8CEBF] flex flex-col justify-between">
              <div>
                <a
                  href="#hero"
                  onClick={(e) => handleSmoothScroll(e, '#hero')}
                  className="inline-block mb-3.5 sm:mb-4 group"
                  aria-label="Wagmart Home"
                >
                  <img
                    src="/assets/WAGMART-Logo.webp"
                    alt="Wagmart"
                    className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </a>

                {/* Brand description paragraph */}
                <p className="text-[14px] sm:text-[15.5px] text-[#524538] leading-relaxed max-w-[360px] mb-6 font-normal">
                  Everything your furry friends need, from everyday essentials to thoughtful pet-care products. Making life happier for pets and easier for pet parents.
                </p>
              </div>

              {/* Social Media Follow Box with Wagmart brand color and increased size */}
              <div>
                <h4 className="font-bold text-xs sm:text-[13px] text-[#1F2421] tracking-widest uppercase mb-3 font-serif-title">
                  FOLLOW WAGMART
                </h4>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Wagmart on Facebook"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#7a46e5] hover:bg-[#6835d4] text-white rounded-[6px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Wagmart on Instagram"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#7a46e5] hover:bg-[#6835d4] text-white rounded-[6px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Wagmart on Twitter"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#7a46e5] hover:bg-[#6835d4] text-white rounded-[6px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Wagmart on YouTube"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-[#7a46e5] hover:bg-[#6835d4] text-white rounded-[6px] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* ==================== MIDDLE SECTION: Col 2 & Col 3 (~34% on desktop) ==================== */}
            <div className="lg:w-[34%] lg:px-6 xl:px-10 lg:border-r lg:border-[#D8CEBF] grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* COLUMN 2: Quick Links (16px font size, brand hover) */}
              <div className="space-y-2 sm:space-y-2.5">
                <h4 className="font-bold text-xs sm:text-[13px] text-[#1F2421] tracking-widest uppercase mb-3.5 sm:mb-4 font-serif-title">
                  QUICK LINKS
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-[15px] sm:text-[16px] font-medium">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-[#4B3F33] hover:text-[#7a46e5] transition-colors inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COLUMN 3: Customer Support (16px font size, brand hover) */}
              <div className="space-y-2 sm:space-y-2.5">
                <h4 className="font-bold text-xs sm:text-[13px] text-[#1F2421] tracking-widest uppercase mb-3.5 sm:mb-4 font-serif-title">
                  CUSTOMER SUPPORT
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-[15px] sm:text-[16px] font-medium">
                  {customerLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-[#4B3F33] hover:text-[#7a46e5] transition-colors inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ==================== COLUMN 4: Get In Touch (~25% on desktop) ==================== */}
            <div className="lg:w-[25%] lg:pl-6 xl:pl-10 space-y-2.5 sm:space-y-3">
              <h4 className="font-bold text-xs sm:text-[13px] text-[#1F2421] tracking-widest uppercase mb-3.5 sm:mb-4 font-serif-title">
                GET IN TOUCH
              </h4>

              <div className="space-y-2.5 sm:space-y-3 text-[15px] sm:text-[16px] font-medium">
                <p className="text-[#524538] leading-relaxed">
                  123 PetCare Avenue, Cityville, USA
                </p>

                <p>
                  <a
                    href="tel:+917777985896"
                    className="text-[#7a46e5] hover:text-[#6835d4] font-bold text-[16px] sm:text-[17px] transition-colors inline-block"
                  >
                    +91 77779 85896
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:support@wagmart.com"
                    className="text-[#524538] hover:text-[#7a46e5] transition-colors inline-block"
                  >
                    support@wagmart.com
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-[13px] text-[#6B5E51] font-medium text-center sm:text-left">
            <p>© {new Date().getFullYear()} Wagmart. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, '#hero')}
                className="hover:text-[#7a46e5] transition-colors"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="#hero"
                onClick={(e) => handleSmoothScroll(e, '#hero')}
                className="hover:text-[#7a46e5] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

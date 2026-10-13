import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/faqs';
import { ThemeButton } from './ThemeButton';
import { SectionBadge } from './SectionBadge';

export const FAQAccordion: React.FC = () => {
  // Second FAQ (id: 2) is open by default as required
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleFAQ = (id: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full relative bg-white overflow-hidden min-h-[780px] sm:min-h-[840px] lg:min-h-[880px]"
    >
      {/* Full-width Background Image: Locked with stable container so it never shifts or rescales when accordion items toggle */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/assets/faq.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom pointer-events-none select-none"
        />
      </div>

      {/* Content Container (Layered above background image) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-12 flex flex-col items-center">

        {/* Top Center Pill Badge */}
        <SectionBadge label="Frequently Asked Questions" className="mb-2" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mt-2.5 sm:mt-3 text-center leading-tight">
          <span className="text-[#192226]">Common </span>
          <span className="text-[#7a46e5]">Questions</span>
        </h2>

        {/* Accordion Rows: Stable min-height prevents the section and bottom CTA from shifting when items expand/collapse */}
        <div className="w-full max-w-[540px] sm:max-w-[600px] md:max-w-[650px] space-y-2.5 sm:space-y-3 mt-6 sm:mt-8 min-h-[440px] sm:min-h-[455px]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`transition-[background-color,border-color,box-shadow] duration-300 ease-in-out rounded-[22px] sm:rounded-[26px] ${
                  isOpen
                    ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
                    : 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]'
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => toggleFAQ(faq.id, e)}
                  aria-expanded={isOpen}
                  className="w-full px-4 sm:px-4 py-3 sm:py-3.5 flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    {/* Number Badge */}
                    <span
                      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full text-xs sm:text-[13px] font-bold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#7a46e5]/10 text-[#7a46e5]'
                          : 'bg-[#7a46e5]/10 text-[#192226]'
                      }`}
                    >
                      {faq.id}
                    </span>
                    {/* Question Text */}
                    <span className="font-bold text-sm sm:text-[15px] md:text-base text-[#192226] truncate sm:whitespace-normal">
                      {faq.question}
                    </span>
                  </div>

                  {/* Expand/Collapse Button */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-white text-[#192226] border border-[#D5CEBF]'
                        : 'bg-[#192226] text-white'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-2" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-2" />
                    )}
                  </div>
                </button>

                {/* Buttery Smooth Accordion Expansion via CSS Grid Rows */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pl-12 sm:pl-16 pr-8 sm:pr-10 pb-4 pt-0.5 text-xs sm:text-sm text-[#55606A] leading-[1.65] transition-opacity duration-300 ease-in-out ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Still Have Questions CTA */}
        <div className="mt-6 sm:mt-8 text-center flex flex-col items-center">
          <span className="text-xs sm:text-sm text-[#55606A] font-medium mb-2">
            Still have questions?
          </span>
          <ThemeButton href="#contact">
            Contact Us
          </ThemeButton>
        </div>

      </div>
    </section>
  );
};

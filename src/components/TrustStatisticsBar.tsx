import React from 'react';

export interface TrustStatisticsItem {
  id: string;
  heading: string;
  supportingText: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export interface TrustStatisticsBarProps {
  className?: string;
}

// 1. Happy Pet Parents — Outline Users Icon
const UsersIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// 2. Fast Delivery — Outline Delivery Truck Icon
const DeliveryTruckIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-5.2a2 2 0 0 0-.58-1.42l-3.2-3.2A2 2 0 0 0 16.8 6.6H14" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

// 3. Widest Product Assortment — Outline Catalog Grid Icon
const AssortmentGridIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

// 4. Dedicated Support — Outline Headset Support Icon
const SupportHeadsetIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

/**
 * TrustStatisticsBar — Wagmart Premium Trust Statistics Bar
 *
 * Implements:
 * - Full-width pill-shaped container with gradient:
 *   linear-gradient(110deg, #7540E8 0%, #9255F5 55%, #A16CFF 100%)
 * - 4 equal-width statistics items with white circular containers and purple icons.
 * - Single horizontal row on desktop (1024px+) & tablet (768px+).
 * - Clean 2-column, 2-row grid on mobile (<640px).
 * - Subtle, soft purple shadow with clean minimal styling.
 */
export const TrustStatisticsBar: React.FC<TrustStatisticsBarProps> = ({ className = '' }) => {
  const statisticsItems: TrustStatisticsItem[] = [
    {
      id: 'pet-parents',
      heading: '3 Lakh+',
      supportingText: 'Happy Pet Parents',
      ariaLabel: 'Over 3 Lakh happy pet parents',
      icon: <UsersIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#7540E8]" />,
    },
    {
      id: 'fast-delivery',
      heading: 'Fetching',
      supportingText: 'Fast Delivery',
      ariaLabel: 'Fetching fast delivery',
      icon: <DeliveryTruckIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#7540E8]" />,
    },
    {
      id: 'product-assortment',
      heading: 'Widest',
      supportingText: 'Assortment Ever',
      ariaLabel: 'Widest product assortment ever',
      icon: <AssortmentGridIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#7540E8]" />,
    },
    {
      id: 'dedicated-support',
      heading: 'Dedicated',
      supportingText: 'Order Manager',
      ariaLabel: 'Dedicated order manager support',
      icon: <SupportHeadsetIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#7540E8]" />,
    },
  ];

  return (
    <div
      role="region"
      aria-label="Wagmart Trust Statistics"
      className={`w-full rounded-[26px] sm:rounded-full shadow-[0_12px_32px_rgba(117,64,232,0.28)] select-none transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(110deg, #7540E8 0%, #9255F5 55%, #A16CFF 100%)',
      }}
    >
      {/* Inner flex container with approximately 88-90px desktop height and 28-40px horizontal padding */}
      <div className="min-h-[88px] sm:min-h-[90px] px-5 sm:px-8 lg:px-10 py-5 sm:py-4 flex items-center justify-center">
        {/*
          Responsive layout:
          - Desktop (1024px+): Single row of 4 equal columns with balanced spacing
          - Tablet (640px to 1023px): Single row layout preserved
          - Mobile (<640px): Clean 2-column, 2-row grid without overflow
        */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-3 sm:gap-x-4 md:gap-x-4 lg:gap-6 items-center">
          {statisticsItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 justify-start md:justify-center group"
            >
              {/* White Circular Icon Container (~48px desktop, ~40-44px tablet/mobile) */}
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Text content: White, left-aligned, tight line-height */}
              <div className="text-left min-w-0 flex flex-col justify-center gap-0.5 sm:gap-1">
                <span className="font-nunito font-extrabold text-[15px] sm:text-base lg:text-[17px] text-white leading-tight tracking-tight whitespace-nowrap">
                  {item.heading}
                </span>
                <span className="font-nunito font-normal text-xs sm:text-[13px] text-white/95 leading-tight tracking-normal whitespace-nowrap">
                  {item.supportingText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStatisticsBar;

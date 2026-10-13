import React from 'react';

export interface AnnouncementBarProps {
  /**
   * Whether the user is at the top of the page.
   * If true, the announcement bar is expanded; if false, it smoothly collapses.
   * Defaults to true if not provided.
   */
  isAtTop?: boolean;

  /**
   * Array of announcement ticker items to cycle through.
   */
  items?: string[];

  /**
   * Background color class or inline color style. Defaults to '#2e1a47'.
   */
  bgColor?: string;

  /**
   * Additional custom CSS classes for the outer container.
   */
  className?: string;
}

const DEFAULT_ANNOUNCEMENTS = [
  'every toy squeak-tested',
  '30-day chew guarantee',
  'free shipping over $40',
  'new: crinkle fish for cats',
  'every toy squeak-tested',
  '30-day chew guarantee',
  'free shipping over $40',
  'new: crinkle fish for cats',
  '100% vet-approved',
  'catalog orders: +91 77779 85896',
];

/**
 * AnnouncementBar Component
 * Seamless, slow infinite marquee ticker displayed at the top of the header.
 * Collapses smoothly on scroll down and reappears when scrolled to the top.
 */
export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  isAtTop = true,
  items = DEFAULT_ANNOUNCEMENTS,
  bgColor = '#2e1a47',
  className = '',
}) => {
  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
        isAtTop ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
      } ${className}`}
    >
      <div className="overflow-hidden">
        <div
          className="w-full text-white py-2 overflow-hidden border-b border-black/10 select-none"
          style={{ backgroundColor: bgColor }}
        >
          <div className="w-full overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex items-center">
              {/* Duplicated 2 times for seamless infinite loop with zero jump */}
              {[1, 2].map((key) => (
                <div
                  key={key}
                  className="flex items-center shrink-0 text-xs sm:text-[13px] font-bold tracking-wide"
                >
                  {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    const isPhoneOrder = item.includes('+91');

                    return (
                      <React.Fragment key={`${key}-${index}`}>
                        <span className="mx-4 sm:mx-6">
                          {isPhoneOrder ? (
                            <a
                              href="tel:+917777985896"
                              className="hover:underline transition-all"
                            >
                              {item}
                            </a>
                          ) : (
                            item
                          )}
                        </span>
                        <span
                          className={`text-white/60 ${isLast ? 'mr-4 sm:mr-6' : ''}`}
                        >
                          •
                        </span>
                      </React.Fragment>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

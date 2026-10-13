import React from 'react';

// Paw Print Icon matching Wagmart brand standards
export const PawPrintBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-3.5 h-3.5',
}) => (
  <svg
    className={`${className} fill-current`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 13.5c-1.8 0-3.5 1.1-3.5 3.2 0 1.9 1.5 3.3 3.5 3.3s3.5-1.4 3.5-3.3c0-2.1-1.7-3.2-3.5-3.2zm-5.2-1.3c1.2 0 2.2-1.2 2.2-2.7s-1-2.7-2.2-2.7-2.2 1.2-2.2 2.7 1 2.7 2.2 2.7zm10.4 0c1.2 0 2.2-1.2 2.2-2.7s-1-2.7-2.2-2.7-2.2 1.2-2.2 2.7 1 2.7 2.2 2.7zm-7.6-3.8c1.3 0 2.4-1.3 2.4-2.9S10.9 2.6 9.6 2.6s-2.4 1.3-2.4 2.9 1.1 2.9 2.4 2.9zm4.8 0c1.3 0 2.4-1.3 2.4-2.9S15.7 2.6 14.4 2.6s-2.4 1.3-2.4 2.9 1.1 2.9 2.4 2.9z" />
  </svg>
);

export interface SectionBadgeProps {
  label?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconColor?: string;
  className?: string;
}

/**
 * SectionBadge — Reusable pill badge for section headers
 * Styled according to the Wagmart design standard:
 * - Subtle neutral background: bg-[#F2F2F2]
 * - Green paw icon: text-[#219959]
 * - Clean bold text: text-xs font-bold text-[#374151] tracking-wide
 */
export const SectionBadge: React.FC<SectionBadgeProps> = ({
  label,
  children,
  icon,
  iconColor = 'text-[#219959]',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F2F2F2] select-none ${className}`}
    >
      {icon ? (
        icon
      ) : (
        <PawPrintBadgeIcon className={`w-3.5 h-3.5 ${iconColor} shrink-0`} />
      )}
      <span className="text-xs font-bold text-[#374151] tracking-wide">
        {label || children}
      </span>
    </div>
  );
};

export default SectionBadge;

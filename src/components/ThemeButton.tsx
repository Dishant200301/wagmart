import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface ThemeButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  showIcon?: boolean;
  hideArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  badgeClassName?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  icon,
  leftIcon,
  showIcon = true,
  hideArrow = false,
  size = 'md',
  fullWidth = false,
  className = '',
  badgeClassName = '',
  disabled = false,
  target,
  rel,
  ariaLabel,
}) => {
  const isIconVisible = showIcon && !hideArrow;

  // Sizing variants
  const sizeStyles = {
    sm: {
      button: isIconVisible ? 'pl-3.5 pr-1.5 py-1 text-xs gap-2' : 'px-4 py-1.5 text-xs',
      badge: 'w-6 h-6',
      icon: 'w-3 h-3 stroke-[2.5]',
    },
    md: {
      button: isIconVisible ? 'pl-4 pr-2 sm:pr-2 py-1.5 sm:py-1.5 text-xs sm:text-sm gap-3' : 'px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm',
      badge: 'w-7 h-7 sm:w-8 sm:h-8',
      icon: 'w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]',
    },
    lg: {
      button: isIconVisible ? 'pl-6 sm:pl-7 pr-2.5 py-2.5 sm:py-3 text-sm sm:text-base gap-3.5' : 'px-7 sm:px-8 py-3 text-sm sm:text-base',
      badge: 'w-8 h-8 sm:w-9 sm:h-9',
      icon: 'w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]',
    },
  }[size];

  const hasWeight = /\bfont-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black|\[\d+\])/.test(className);
  const hasCustomBg = className.includes('bg-') || className.includes('from-');
  const defaultBg = 'bg-gradient-to-r from-[#7a46e5] via-[#8451ed] to-[#9361fa] shadow-[0_10px_25px_-5px_rgba(122,70,229,0.38),0_2px_8px_rgba(122,70,229,0.18)] hover:shadow-[0_16px_32px_-4px_rgba(122,70,229,0.52)]';

  const baseStyles = `group relative inline-flex items-center justify-center rounded-full ${hasCustomBg ? '' : defaultBg} text-white ${hasWeight ? '' : 'font-semibold'} hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden border border-white/25 select-none ${
    fullWidth ? 'w-full' : ''
  } ${disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''} ${sizeStyles.button} ${className}`;

  const content = (
    <>
      {/* Shimmer sweep light effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

      {leftIcon && <span className="relative z-10 shrink-0 mr-2 flex items-center">{leftIcon}</span>}

      <span className="relative z-10 tracking-wide">{children}</span>

      {/* Unique circular arrow badge */}
      {isIconVisible && (
        <span
          className={`relative z-10 shrink-0 rounded-full bg-white text-[#7a46e5] flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:bg-white ${sizeStyles.badge} ${badgeClassName}`}
        >
          {icon || (
            <ArrowRight
              className={`${sizeStyles.icon} transition-transform duration-300 group-hover:translate-x-0.5`}
            />
          )}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={baseStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={baseStyles}
    >
      {content}
    </button>
  );
};

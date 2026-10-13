import React from 'react';
import { CalendarDays, Clock3 } from 'lucide-react';

export interface PetBlogCardProps {
  /** Featured image URL */
  featuredImage?: string;
  image?: string;
  /** Image alternative text for accessibility */
  imageAlt?: string;
  /** Category badge label, e.g. "Pet Care", "Grooming", "Nutrition" */
  category: string;
  /** Blog title */
  title: string;
  /** Blog short description/excerpt */
  description?: string;
  excerpt?: string;
  /** Publication date, e.g. "13 Oct 2026" */
  publicationDate?: string;
  date?: string;
  /** Reading time, e.g. "4 min read" */
  readingTime?: string;
  readTime?: string;
  /** Optional destination URL if navigating */
  articleUrl?: string;
  /** Optional click handler (e.g. opens modal or triggers router navigation) */
  onClick?: () => void;
  /** Optional custom class name */
  className?: string;
}

export const PetBlogCard: React.FC<PetBlogCardProps> = ({
  featuredImage,
  image,
  imageAlt,
  category,
  title,
  description,
  excerpt,
  publicationDate,
  date,
  readingTime,
  readTime,
  articleUrl,
  onClick,
  className = '',
}) => {
  const imgSrc = featuredImage || image || '/images/blog/dog-owner-happy.webp';
  const altText = imageAlt || title;
  const descText = description || excerpt || '';
  const pubDate = publicationDate || date || '13 Oct 2026';
  const timeRead = readingTime || readTime || '4 min read';

  const CardWrapper: React.ElementType = articleUrl && !onClick ? 'a' : 'article';
  const wrapperProps = articleUrl && !onClick
    ? { href: articleUrl }
    : { onClick, role: onClick ? 'button' : undefined, tabIndex: onClick ? 0 : undefined };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <CardWrapper
      {...wrapperProps}
      onKeyDown={onClick ? handleKeyDown : undefined}
      className={`group relative flex flex-col w-full max-w-[380px] sm:max-w-none bg-[#FAF8F5] rounded-[22px] p-3 pb-5 overflow-hidden border border-black/[0.04] select-none ${
        onClick || articleUrl ? 'cursor-pointer' : 'cursor-default'
      } transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06),0_4px_10px_-2px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-6px_rgba(0,0,0,0.10),0_6px_14px_-3px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 ${className}`}
      aria-label={title}
    >
      {/* 1. Large pet-related featured image container */}
      <div className="relative w-full h-[205px] sm:h-[210px] rounded-[14px] overflow-hidden bg-neutral-100 shrink-0">
        <img
          src={imgSrc}
          alt={altText}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
        />

        {/* 2. Small white category badge over upper-left corner of image */}
        <div className="absolute top-[12px] left-[12px] z-10 pointer-events-none">
          <span className="h-[24px] px-3 inline-flex items-center justify-center rounded-[7px] text-[11px] font-semibold leading-none tracking-normal bg-white text-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
            {category}
          </span>
        </div>
      </div>

      {/* Content Body: Title, Description, and Metadata */}
      <div className="flex flex-col flex-1 px-1.5 pt-3.5">
        {/* 3. Blog title directly below image */}
        <h3
          className={`font-jakarta text-[17.5px] font-bold text-[#111827] leading-[25px] line-clamp-2 text-left ${
            onClick || articleUrl ? 'group-hover:text-[#7a46e5]' : ''
          } transition-colors duration-200`}
        >
          {title}
        </h3>

        {/* 4. Short blog description below the title */}
        {descText && (
          <p className="mt-2 text-[13px] text-neutral-500 leading-[19.5px] line-clamp-2 text-left font-normal">
            {descText}
          </p>
        )}

        {/* 5. Publication date and reading time aligned horizontally at the bottom */}
        <div className="mt-auto pt-4 flex items-center text-neutral-400 text-[12px] font-normal tracking-tight">
          {/* Calendar icon & date */}
          <div className="flex items-center gap-1.5 shrink-0">
            <CalendarDays className="w-4 h-4 stroke-[1.8] text-neutral-400 shrink-0" />
            <span>{pubDate}</span>
          </div>

          {/* Subtle vertical separator */}
          <div className="h-3 w-px bg-neutral-300 mx-3 shrink-0" aria-hidden="true" />

          {/* Clock icon & reading time */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Clock3 className="w-4 h-4 stroke-[1.8] text-neutral-400 shrink-0" />
            <span>{timeRead}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PetBlogCard;

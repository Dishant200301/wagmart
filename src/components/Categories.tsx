import React from 'react';
import { ThemeButton } from './ThemeButton';
import { SectionBadge } from './SectionBadge';
import { categories } from '../data/categories';
import { CategoryItem } from '../types';

interface CategoriesProps {
  onSelectCategory: (categoryKey: CategoryItem['filterKey']) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-14 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching screenshot reference exactly */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            
            {/* Left Title & Subtitle */}
            <div className="space-y-1.5 z-10">
              <SectionBadge label="Curated Categories" className="mb-2" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2228] tracking-tight">
                Better <span className="text-[#7a46e5]">Together</span>
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] font-normal pt-0.5">
                Curated bundles for everyday pet care.
              </p>
            </div>

            {/* Center-Right Peeking Dog and Cat Image */}
            <div className="hidden lg:flex items-end justify-center flex-1 -mb-1 px-4 pointer-events-none select-none">
              <img
                src="/assets/category-pet.webp"
                alt="Happy puppy and cat peeking"
                className="max-h-24 xl:max-h-28 w-auto object-contain"
                loading="eager"
              />
            </div>

            {/* Right Action Button */}
            <div className="self-start lg:self-end z-10 pb-1">
              <ThemeButton
                href="#shop"
                onClick={(e) => {
                  const el = document.getElementById('shop');
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="md"
              >
                View All Bundles
              </ThemeButton>
            </div>

          </div>
        </div>

        {/* 5 Category Cards in Responsive Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.filterKey)}
              className={`group flex flex-col justify-between text-left rounded-[1.5rem] p-5 sm:p-6 ${cat.bgColor} ${cat.borderColor} shadow-2xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden min-h-[380px] sm:min-h-[420px]`}
            >
              {/* Card Header: 2-line title and description */}
              <div className="z-10 space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] leading-tight tracking-tight group-hover:text-[#7a46e5] transition-colors">
                  <span>{cat.titleLine1}</span> <br />
                  <span>{cat.titleLine2}</span>
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Card Image: Pinned to bottom of the card */}
              <div className="mt-auto pt-6 flex items-end justify-center w-full z-10">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full max-h-[200px] sm:max-h-[220px] object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

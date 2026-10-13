import React from 'react';
import { BookOpen } from 'lucide-react';
import { blogs } from '../data/blogs';
import { ThemeButton } from './ThemeButton';
import { SectionBadge } from './SectionBadge';
import { PetBlogCard } from './PetBlogCard';

export const BlogSection: React.FC = () => {
  return (
    <section
      id="blog"
      aria-label="Wagmart Pet Journal and Blog"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-20 lg:scroll-mt-24"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#7a46e5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#219959]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Container aligned with Header navigation (max-w-[1500px] and px-4 sm:px-6 lg:px-8) */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= Section Header ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow Pill */}
            <SectionBadge label="Pet Journal & Care Guides" className="mb-1" />

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              Expert Tips & Stories for <span className="text-[#7a46e5]">Happier, Healthier</span> Pets
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
              Explore science-backed grooming techniques, veterinary nutrition insights, and fun indoor enrichment activities curated by certified pet care specialists.
            </p>
          </div>

          {/* Quick Filter or CTA Action */}
          <div className="shrink-0 flex items-center gap-3">
            <ThemeButton
              size="md"
              icon={<BookOpen className="w-4 h-4 stroke-[2.2]" />}
            >
              Featured Article
            </ThemeButton>
          </div>
        </div>

        {/* ================= 4 Blog Cards Grid matching Navigation Width ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center sm:justify-items-stretch">
          {blogs.map((blog) => (
            <PetBlogCard
              key={blog.id}
              featuredImage={blog.image}
              imageAlt={blog.title}
              category={blog.category}
              title={blog.title}
              description={blog.excerpt}
              publicationDate={blog.date}
              readingTime={blog.readTime}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;

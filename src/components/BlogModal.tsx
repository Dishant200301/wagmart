import React, { useEffect } from 'react';
import { X, Clock, Calendar, CheckCircle, PawPrint, Share2 } from 'lucide-react';
import { BlogPost } from '../data/blogs';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-100 select-none animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-4 right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-neutral-700 hover:text-[#7a46e5] shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border border-neutral-200/60"
        >
          <X className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Cover Image */}
        <div className="relative w-full aspect-16/9 sm:aspect-21/9 overflow-hidden bg-neutral-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          
          {/* Category Pill over image */}
          <div className="absolute bottom-4 left-4 sm:left-6 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/95 text-[#7a46e5] shadow-sm backdrop-blur-xs">
              <PawPrint className="w-3.5 h-3.5" />
              {post.category}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-6">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-neutral-100">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#7a46e5]/20"
              />
              <div>
                <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                  {post.author.name}
                </h4>
                <p className="text-xs text-neutral-500 font-medium">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Read Time & Date */}
            <div className="flex items-center gap-4 text-xs font-semibold text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#7a46e5]" />
                <span>{post.readTime}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#7a46e5]" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2
            id="blog-modal-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight"
          >
            {post.title}
          </h2>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border-l-4 border-[#7a46e5]">
            {post.content.intro}
          </p>

          {/* Subheadings and paragraphs */}
          <div className="space-y-6 pt-2">
            {post.content.subheadings.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                  {section.heading}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Veterinary Care Tips Box */}
          <div className="bg-[#f5f0ff] p-5 sm:p-6 rounded-2xl border border-[#7a46e5]/15 space-y-3">
            <h4 className="text-sm font-bold text-[#7a46e5] uppercase tracking-wider flex items-center gap-2">
              <PawPrint className="w-4 h-4" />
              <span>Key Care Takeaways for Pet Parents</span>
            </h4>
            <ul className="space-y-2.5">
              {post.content.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#7a46e5] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Final Takeaway */}
          <p className="text-sm sm:text-base text-neutral-600 italic leading-relaxed pt-2">
            “{post.content.takeaway}”
          </p>

          {/* Modal Footer */}
          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400">
              Published by Wagmart Pet Care Editorial Board
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#7a46e5] hover:bg-[#6835d4] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Back to Articles
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Clock, Sparkles } from 'lucide-react';
import { ReelItem } from '../types';

interface ReelModalProps {
  reel: ReelItem | null;
  onClose: () => void;
  onShopClick: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ reel, onClose, onShopClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (reel) {
      setIsPlaying(true);
    }
  }, [reel]);

  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-sm sm:max-w-md bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl z-10 text-white animate-in zoom-in-95 duration-200 border border-neutral-800 flex flex-col">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close reel"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer border border-white/20 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Player Container (Portrait Reel Aspect Ratio) */}
        <div className="relative aspect-[9/13.5] w-full bg-black overflow-hidden flex items-center justify-center">
          {reel.youtubeId && isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={reel.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
            </div>
          )}
        </div>

        {/* Bottom Details & Call to Action */}
        <div className="p-5 sm:p-6 bg-neutral-900 border-t border-neutral-800 space-y-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase ${reel.tagBg} ${reel.tagColor}`}>
              {reel.tag}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {reel.duration}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-lg leading-snug">
              {reel.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {reel.story}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onShopClick();
            }}
            className="w-full py-2.5 bg-gradient-to-r from-[#7a46e5] to-[#9361fa] hover:opacity-95 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Shop Supplies in This Story</span>
          </button>
        </div>
      </div>
    </div>
  );
};

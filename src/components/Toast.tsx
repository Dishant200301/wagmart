import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#1E293B] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 text-xs sm:text-sm">
        <CheckCircle className="w-4 h-4 text-[#A8C7A0] flex-shrink-0" />
        <span className="font-medium">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-white/60 hover:text-white transition cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

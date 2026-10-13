import React, { useState, useEffect } from 'react';
import { Search, X, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddToCart,
  onQuickView,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickPills = ['Grooming', 'Bowls', 'Leash', 'Seat Cover', 'Wipes', 'Toys'];

  const filtered = query.trim() === ''
    ? []
    : products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-20 flex items-start justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EAE5D9] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#F0EBE1] flex items-center gap-3 bg-[#FAF8F5]">
          <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Wagmart catalog (e.g. glove, bowls, wipes, leash)..."
            className="w-full text-base sm:text-lg bg-transparent text-gray-900 placeholder-gray-400 focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Quick Search Pills */}
        <div className="px-5 py-3 bg-[#F9F7F2] border-b border-[#F0EBE1] flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            Popular:
          </span>
          {quickPills.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => setQuery(pill)}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white hover:bg-[#7a46e5] hover:text-white border border-[#EAE5D9] text-gray-700 transition cursor-pointer whitespace-nowrap shadow-2xs"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-3">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-gray-400 text-sm">
              Type keywords above to search all authentic Wagmart catalog supplies.
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-gray-500 space-y-1">
              <p className="font-semibold text-base text-gray-800">No products found</p>
              <p className="text-xs text-gray-400">
                Try searching for "grooming", "bowl", "leash", "brush", or "wipes".
              </p>
            </div>
          ) : (
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
                {filtered.length} {filtered.length === 1 ? 'Product' : 'Products'} found
              </p>
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="p-3 bg-[#FAF8F5] hover:bg-white rounded-2xl border border-[#EAE5D9] flex items-center justify-between gap-4 transition-all"
                >
                  <div
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-white rounded-xl p-1.5 border border-[#F0EBE1] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        {product.brand}
                      </span>
                      <h4 className="font-bold text-sm text-[#111827] truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#7a46e5] font-medium">
                        {product.priceDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onQuickView(product);
                        onClose();
                      }}
                      className="p-2 rounded-xl text-gray-600 hover:bg-[#F3EFE6] transition cursor-pointer"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="px-3 py-1.5 rounded-xl bg-[#1E293B] hover:bg-[#0F172A] text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

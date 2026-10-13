import React from 'react';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Phone } from 'lucide-react';
import { Product } from '../types';
import { ThemeButton } from './ThemeButton';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  isInCart: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  isInCart,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-12 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EAE5D9] overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 flex items-center justify-center shadow-md transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="bg-[#FAF8F5] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#EAE5D9]">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[320px] w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Details side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#7a46e5]/10 text-[#7a46e5] text-[11px] font-bold uppercase tracking-wider">
                  {product.brand}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {product.categoryLabel}
                </span>
              </div>

              <div className="flex items-baseline gap-2 pb-1">
                <span className="text-xl font-extrabold text-[#111827]">
                  {product.priceDisplay}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#9CA3AF] line-through">
                    {typeof product.originalPrice === 'number' && product.originalPrice < 50
                      ? `$${product.originalPrice.toFixed(2)}`
                      : `₹${product.originalPrice}`}
                  </span>
                )}
                {product.discountBadge && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#FFEBF0] text-[#E11D48]">
                    {product.discountBadge}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Feature bullets */}
              <div className="space-y-1.5 pt-2">
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Key Specifications:
                </p>
                <ul className="space-y-1 text-xs text-gray-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7a46e5] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-3 border-t border-[#F0EBE1]">
              <div className="flex items-center gap-3">
                <ThemeButton
                  size="md"
                  className="flex-1 !py-3 !px-4"
                  onClick={() => onAddToCart(product)}
                  icon={
                    isInCart ? (
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                    )
                  }
                >
                  {isInCart ? 'In Cart' : 'Add to Cart'}
                </ThemeButton>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product)}
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition cursor-pointer ${
                    isWishlisted
                      ? 'border-red-200 bg-red-50 text-red-500'
                      : 'border-[#EAE5D9] bg-[#FAF8F5] text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              <a
                href="tel:+917777985896"
                className="w-full py-2 bg-[#FAF8F5] hover:bg-[#F3EFE6] border border-[#EAE5D9] rounded-xl text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5 transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#7a46e5]" />
                <span>Call to Order via Catalog: +91 77779 85896</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

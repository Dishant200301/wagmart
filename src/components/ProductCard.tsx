import React from 'react';
import { Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity?: (productId: string, delta: number) => void;
  quantity?: number;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onUpdateQuantity,
  quantity = 0,
  onToggleWishlist,
  isWishlisted,
  onQuickView,
}) => {
  const badgeLabel = product.badge
    ? product.badge.replace(/^🐾\s*/, '')
    : product.categoryLabel || 'Pet Essential';

  return (
    <div
      onClick={() => onQuickView?.(product)}
      className="group relative flex-shrink-0 w-[85vw] max-w-[340px] sm:w-[320px] md:w-[325px] lg:w-[335px] bg-[#FAF8F5] rounded-[22px] p-3 pb-5 border border-black/[0.04] select-none transition-all duration-300 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06),0_4px_10px_-2px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-6px_rgba(0,0,0,0.10),0_6px_14px_-3px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 flex flex-col justify-between snap-start cursor-pointer"
      aria-label={product.name}
    >
      <div>
        {/* =========================================================================
            1. HERO IMAGE STAGE (Matching Blog Card Layout with Top-Left Badge & Wishlist)
           ========================================================================= */}
        <div className="relative w-full h-[205px] sm:h-[210px] rounded-[14px] overflow-hidden bg-white/80 shrink-0 select-none flex items-center justify-center p-2.5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-104"
            loading="lazy"
          />

          {/* Top-Left Category / Status Badge matching Blog Card Pill */}
          <div className="absolute top-[12px] left-[12px] z-10 pointer-events-none">
            <span className="h-[24px] px-3 inline-flex items-center justify-center rounded-[7px] text-[11px] font-semibold leading-none tracking-normal bg-white text-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              {badgeLabel}
            </span>
          </div>

          {/* Top-Right Circle Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            aria-label={`Wishlist ${product.name}`}
            className="absolute top-[12px] right-[12px] z-10 w-9 h-9 rounded-full bg-white text-neutral-800 shadow-[0_1px_4px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <Heart
              className={`w-4.5 h-4.5 transition-transform duration-200 stroke-[2] ${
                isWishlisted
                  ? 'text-[#E11D48] fill-[#E11D48] scale-105'
                  : 'text-neutral-700 hover:text-[#E11D48]'
              }`}
            />
          </button>
        </div>

        {/* =========================================================================
            2. PRODUCT TITLE & SUBTITLE (Matching Blog Card Typography Hierarchy)
           ========================================================================= */}
        <div className="px-1.5 pt-3.5">
          <h3
            className="font-jakarta text-[17.5px] font-bold text-[#111827] leading-[25px] line-clamp-1 group-hover:text-[#7a46e5] transition-colors duration-200"
            title={product.name}
          >
            {product.name}
          </h3>

          <p className="mt-2 text-[13px] text-neutral-500 leading-[19.5px] line-clamp-2 font-normal">
            {product.subtitle || product.description}
          </p>
        </div>
      </div>

      {/* =========================================================================
          3. BOTTOM ROW: PRICE LOCKUP & ADD TO CART / STEPPER
         ========================================================================= */}
      <div className="px-1.5 mt-auto pt-4 flex items-center justify-between gap-3">
        {/* Price Lockup */}
        <div className="flex items-baseline gap-1.5 min-w-0">
          <span className="font-extrabold text-[22px] sm:text-[24px] text-[#111827] tracking-tight leading-none">
            {product.priceDisplay || `₹${product.price}`}
          </span>
          {product.originalPrice && (
            <span className="text-xs sm:text-[13px] text-neutral-400 line-through font-normal">
              {typeof product.originalPrice === 'number'
                ? `₹${product.originalPrice.toLocaleString('en-IN')}`
                : product.originalPrice}
            </span>
          )}
        </div>

        {/* Right CTA Button / Quantity Stepper Transformation */}
        {quantity > 0 ? (
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-[42px] bg-black text-white px-1.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm transition-all duration-200 shrink-0"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onUpdateQuantity) onUpdateQuantity(product.id, -1);
              }}
              className="w-7.5 h-7.5 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            <span className="text-white font-extrabold text-[13px] px-1.5 min-w-[20px] text-center select-none">
              {quantity}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onUpdateQuantity) onUpdateQuantity(product.id, 1);
              }}
              className="w-7.5 h-7.5 rounded-full bg-white hover:bg-gray-100 active:scale-90 text-black flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="h-[42px] bg-black hover:bg-neutral-900 active:scale-95 text-white pl-1.5 pr-4 py-1 rounded-full flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer group/btn shrink-0"
          >
            <span className="w-7.5 h-7.5 rounded-full bg-white text-black flex items-center justify-center shrink-0 group-hover/btn:scale-105 transition-transform duration-200 shadow-xs">
              <ShoppingBag className="w-3.5 h-3.5 stroke-[2.2]" />
            </span>
            <span className="font-bold text-[13px] tracking-tight whitespace-nowrap">
              Add to Cart
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

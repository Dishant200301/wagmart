import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { SectionBadge } from './SectionBadge';

interface BestSellersProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity?: (productId: string, delta: number) => void;
  getCartQuantity?: (id: string) => number;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  isInCart: (id: string) => boolean;
  onQuickView: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onUpdateQuantity,
  getCartQuantity,
  onToggleWishlist,
  isWishlisted,
  isInCart,
  onQuickView,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    { key: 'all', label: 'All Products' },
    { key: 'grooming', label: 'Grooming & Hygiene' },
    { key: 'feeding', label: 'Feeding & Bowls' },
    { key: 'hygiene', label: 'Hygiene & Care' },
    { key: 'toys', label: 'Toys & Play' },
    { key: 'travel', label: 'Travel & Carriers' },
    { key: 'collars', label: 'Collars & Leashes' },
  ];

  // Best seller products from catalog
  const bestSellerProducts = products.filter((p) => p.isBestSeller).slice(0, 12);

  const displayedProducts =
    selectedCategory === 'all'
      ? bestSellerProducts
      : bestSellerProducts.filter((p) => p.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = direction === 'left' ? -containerWidth * 0.75 : containerWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="shop" className="py-14 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean, Minimal & Balanced */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <SectionBadge label="Our Best Sellers" className="mb-4" />
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#111827] tracking-tight leading-tight mb-3">
            Loved by Pets, Chosen by Pet Parents
          </h2>
          <p className="font-nunito text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
            Discover our most popular products for happier, healthier pets.
          </p>
        </div>

        {/* Product Categories - Compact Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onSelectCategory(tab.key)}
                className={`px-4 py-2 rounded-full text-xs font-nunito font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2B1B47] text-white shadow-xs'
                    : 'bg-white text-[#4B5563] hover:text-[#111827] hover:bg-[#F3EFEA] border border-[#E5E0D5]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Carousel with Responsive Cards */}
        <div className="relative group/carousel">
          
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Previous products"
            className="hidden sm:flex absolute -left-3 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E5E0D5] items-center justify-center text-[#111827] hover:text-[#7a46e5] hover:border-[#7a46e5]/40 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Next products"
            className="hidden sm:flex absolute -right-3 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E5E0D5] items-center justify-center text-[#111827] hover:text-[#7a46e5] hover:border-[#7a46e5]/40 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1 snap-x snap-mandatory"
          >
            {displayedProducts.map((product) => {
              const wishlisted = isWishlisted(product.id);
              const inCart = isInCart(product.id);
              const quantity = getCartQuantity ? getCartQuantity(product.id) : inCart ? 1 : 0;

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onUpdateQuantity={onUpdateQuantity}
                  quantity={quantity}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlisted}
                  onQuickView={onQuickView}
                />
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

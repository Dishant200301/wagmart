import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';
import { ThemeButton } from './ThemeButton';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onShopClick: () => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  onAddToCart,
  onShopClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#EAE5D9] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#F0EBE1] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111827]">
                  Your Wishlist
                </h3>
                <p className="text-xs text-[#6B7280]">
                  {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EAE5D9] flex items-center justify-center text-gray-300">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base text-gray-900">Your wishlist is empty</h4>
                  <p className="text-xs text-gray-500 max-w-xs">
                    Save your favorite pet supplies by tapping the heart icon on any product card.
                  </p>
                </div>
                <ThemeButton
                  size="md"
                  onClick={() => {
                    onClose();
                    onShopClick();
                  }}
                >
                  Discover Products
                </ThemeButton>
              </div>
            ) : (
              wishlistItems.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#EAE5D9] flex items-center gap-3.5"
                >
                  <div className="w-16 h-16 bg-white rounded-xl p-1.5 border border-[#F0EBE1] flex-shrink-0 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      {product.brand}
                    </span>
                    <h4 className="font-bold text-sm text-[#111827] truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#7a46e5] font-medium">
                      {product.priceDisplay}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <ThemeButton
                        size="sm"
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        icon={<ShoppingBag className="w-3 h-3 stroke-[2.5]" />}
                      >
                        Move to Cart
                      </ThemeButton>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveFromWishlist(product.id)}
                    aria-label="Remove from wishlist"
                    className="p-2 text-gray-400 hover:text-red-500 transition cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

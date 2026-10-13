import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, AlertCircle } from 'lucide-react';
import { CartItem } from '../types';
import { ThemeButton } from './ThemeButton';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onShopClick: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShopClick,
}) => {
  if (!isOpen) return null;

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#EAE5D9] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#F0EBE1] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#7a46e5]/10 text-[#7a46e5] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111827]">
                  Your Cart
                </h3>
                <p className="text-xs text-[#6B7280]">
                  {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} selected
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

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-gray-500">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#EAE5D9] flex items-center justify-center text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base text-gray-900">Your cart is empty</h4>
                  <p className="text-xs text-gray-500 max-w-xs">
                    Explore Wagmart's best selling pet accessories and grooming essentials.
                  </p>
                </div>
                <ThemeButton
                  size="md"
                  onClick={() => {
                    onClose();
                    onShopClick();
                  }}
                >
                  Start Shopping
                </ThemeButton>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Selected Items
                  </span>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 bg-[#FAF8F5] rounded-2xl border border-[#EAE5D9] flex items-center gap-3.5"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 bg-white rounded-xl p-1.5 border border-[#F0EBE1] flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">
                        {item.product.brand}
                      </span>
                      <h4 className="font-bold text-sm text-[#111827] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#7a46e5] font-medium">
                        {item.product.priceDisplay}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="w-6 h-6 rounded-lg bg-white border border-[#D5CEBF] flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-gray-800 min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="w-6 h-6 rounded-lg bg-white border border-[#D5CEBF] flex items-center justify-center text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label="Remove item"
                      className="p-2 text-gray-400 hover:text-red-500 transition cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#FAF8F5] border-t border-[#F0EBE1] space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span className="font-bold text-gray-900">{totalQuantity}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Catalog Pricing</span>
                  <span className="font-bold text-[#7a46e5]">Price on site</span>
                </div>
              </div>

              {/* Honest demo notification */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2 text-xs text-amber-800">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
                <p>
                  <strong>Preview Catalog Demo:</strong> Live online checkout and payment processing are disabled. Call <strong>+91 77779 85896</strong> for orders.
                </p>
              </div>

              <ThemeButton
                href="tel:+917777985896"
                fullWidth
                size="lg"
              >
                Call to Order Catalog Items
              </ThemeButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Heart, ShoppingBag, Menu, X, Search, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'about', href: '#about', id: 'about' },
    { label: 'product', href: '#shop', id: 'shop' },
    { label: 'blog', href: '#blog', id: 'blog' },
    { label: 'contact us', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">

      {/* 
        =========================================================================
        MAIN NAVBAR
        - Background: Pure crisp white bg-white/95 with subtle border
        - Desktop (lg+): Left (about, product, blog, contact us), Center (Logo), Right (Wishlist, Shopping Cart)
        - Mobile & Tablet (<lg): Left (Menu Icon), Center (Logo), Right (ONLY Shopping Cart Icon)
        =========================================================================
      */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-[#EAECEF] transition-colors">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
          
          {/* ==================== LEFT SECTION ==================== */}
          <div className="flex-1 flex items-center justify-start">
            {/* Desktop Navigation Links — All identical without pill/ring borders */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative py-1 text-sm font-bold tracking-wide transition-colors ${
                      isActive
                        ? 'text-[#7a46e5]'
                        : 'text-[#1F2937] hover:text-[#7a46e5]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#7a46e5] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile & Tablet: Left Hamburger Menu Icon (No ring border) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-[#1F2937] hover:text-[#7a46e5] flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* ==================== CENTER SECTION ==================== */}
          <div className="flex items-center justify-center shrink-0">
            <a href="#hero" className="flex items-center group">
              <img
                src="/assets/WAGMART-Logo.webp"
                alt="Wagmart Logo"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          {/* ==================== RIGHT SECTION ==================== */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
            {/* Desktop: Wishlist Icon Button (Lucide Heart, ring border removed) */}
            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label="View wishlist"
              className="hidden lg:flex relative p-2 text-[#1F2937] hover:text-[#7a46e5] transition-colors active:scale-95 cursor-pointer"
            >
              <Heart
                className={`w-6 h-6 stroke-[1.8] transition-colors ${
                  wishlistCount > 0 ? 'fill-red-500 text-red-500 stroke-red-500' : ''
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Desktop, Tablet & Mobile: Shopping Cart Icon Button (Lucide ShoppingBag, ring border removed) */}
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="View shopping cart"
              className="relative p-2 text-[#1F2937] hover:text-[#7a46e5] transition-colors active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.8] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#7a46e5] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 
        =========================================================================
        MOBILE & TABLET SLIDE-DOWN DRAWER
        =========================================================================
      */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAECEF] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-bold tracking-wide border-b border-[#EAECEF] flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#7a46e5]' : 'text-[#1F2937]'
                }`}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            {/* Wishlist Link inside Mobile Drawer */}
            <button
              type="button"
              onClick={() => {
                onOpenWishlist();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-[#EAECEF] text-[#1F2937] font-bold text-sm hover:bg-[#FAF8F5] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                <span>My Wishlist</span>
              </div>
              {wishlistCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Search Catalog Button */}
            <button
              type="button"
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FAF4E6] rounded-xl text-sm font-bold text-[#2e1a47] border border-[#2e1a47]/10"
            >
              <Search className="w-4 h-4" />
              <span>Search Catalog</span>
            </button>

            {/* Phone Orders */}
            <a
              href="tel:+917777985896"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#7a46e5] text-white rounded-xl text-sm font-semibold shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Catalog Orders: +91 77779 85896</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

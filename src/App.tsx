import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PetTrustSection } from './components/PetTrustSection';
import { Categories } from './components/Categories';
import { BestSellers } from './components/BestSellers';
import { ShopByNeed } from './components/ShopByNeed';
import { PetReels } from './components/PetReels';
import { Testimonials } from './components/Testimonials';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ReelModal } from './components/ReelModal';
import { BlogSection } from './components/BlogSection';
import { PetCategoryBanner } from './components/PetCategoryBanner';

import { products } from './data/products';
import type { Product, CartItem, ReelItem, BundleItem, CategoryItem } from './types';

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[1], quantity: 1 },
  ]);

  // Initial wishlist items
  const [wishlist, setWishlist] = useState<Product[]>([
    products[0],
    products[3],
  ]);

  // Filtering & Modal States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'categories', 'shop', 'bundles', 'about', 'stories', 'blog', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // Scroll to Shop Section helper
  const scrollToShop = () => {
    const el = document.getElementById('shop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catKey: CategoryItem['filterKey']) => {
    setSelectedCategory(catKey);
    scrollToShop();
  };

  const handleSelectBundle = (categoryFilter?: BundleItem['categoryFilter']) => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    } else {
      setSelectedCategory('all');
    }
    scrollToShop();
  };

  const handleSelectPet = (petType: 'dog' | 'cat') => {
    if (petType === 'dog') {
      setSelectedCategory('collars');
    } else {
      setSelectedCategory('feeding');
    }
    scrollToShop();
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F2937] flex flex-col font-sans">
      {/* 1. Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Banner */}
        <Hero onShopClick={scrollToShop} />

        {/* 3. Shop by Category (Better Together) */}
        <Categories onSelectCategory={handleSelectCategory} />

       
        {/* 4. Best Sellers / Featured Products */}
        <BestSellers
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
          getCartQuantity={(id) => cartItems.find((item) => item.product.id === id)?.quantity || 0}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={(id) => wishlist.some((item) => item.id === id)}
          isInCart={(id) => cartItems.some((item) => item.product.id === id)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* 5. Shop by Need / Bundles */}
        <ShopByNeed onSelectBundle={handleSelectBundle} />
        {/* 3.5 Shop By Pet: FOR DOG & FOR CAT Banner */}
        <PetCategoryBanner onSelectPet={handleSelectPet} />

        {/* 11. Wagmart Premium Pet Trust & Brand Credibility Section (Editorial Case-Study Grid) */}
        <PetTrustSection />

        {/* 7. Pet Reels / Stories */}
        <PetReels onSelectReel={(reel) => setActiveReel(reel)} />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Pet Blog & Care Guides */}
        <BlogSection />

        {/* 10. FAQ Accordion */}
        <FAQAccordion />

       
      </main>

      {/* 10. CTA + Footer matching Reference Image 2 */}
      <Footer />

      {/* Slide-over Drawers and Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onShopClick={scrollToShop}
      />

      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onShopClick={scrollToShop}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.some((w) => w.id === quickViewProduct.id) : false}
        isInCart={quickViewProduct ? cartItems.some((c) => c.product.id === quickViewProduct.id) : false}
      />

      <ReelModal
        reel={activeReel}
        onClose={() => setActiveReel(null)}
        onShopClick={scrollToShop}
      />
    </div>
  );
}

export default App;

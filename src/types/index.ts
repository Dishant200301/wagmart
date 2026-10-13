export interface Product {
  id: string;
  name: string;
  brand: 'WAGMART';
  category: 'grooming' | 'feeding' | 'collars' | 'travel' | 'toys' | 'beds' | 'hygiene';
  categoryLabel: string;
  image: string;
  priceDisplay: string;
  price?: number;
  originalPrice?: number;
  discountBadge?: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  rating?: number;
  reviewCount?: number;
  description: string;
  features: string[];
  chips?: { icon: string; label: string }[];
  isBestSeller?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  itemCount: number;
  filterKey: Product['category'];
  bgColor: string;
  borderColor: string;
  accentColor?: string;
}

export interface BundleItem {
  id: string;
  petType: 'DOG' | 'CAT';
  title: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  descLine1?: string;
  descLine2?: string;
  image: string;
  bgColor: string;
  imagePositionClass?: string;
  tagBg?: string;
  tagColor?: string;
  categoryFilter?: Product['category'];
}

export interface ReelItem {
  id: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  titleLine1?: string;
  titleLine2?: string;
  duration: string;
  thumbnail: string;
  story: string;
  youtubeId?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

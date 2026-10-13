import type { CategoryItem } from '../types';

export const categories: CategoryItem[] = [
  {
    id: 'cat-fashion',
    name: 'Fashion Store',
    titleLine1: 'Fashion',
    titleLine2: 'Store',
    description: 'Stylish clothing, collars, harnesses and more for your furry friends.',
    image: '/assets/category-1.webp',
    itemCount: 14,
    filterKey: 'collars',
    bgColor: 'bg-[#FDF0F0]',
    borderColor: 'border-[#FADBD8]',
    accentColor: '#E06B6B'
  },
  {
    id: 'cat-accessories',
    name: 'Accessories Store',
    titleLine1: 'Accessories',
    titleLine2: 'Store',
    description: 'Collars, leashes, beds, carriers and everyday essentials.',
    image: '/assets/category-2.webp',
    itemCount: 18,
    filterKey: 'travel',
    bgColor: 'bg-[#EAF4FB]',
    borderColor: 'border-[#D4EBF8]',
    accentColor: '#4A90E2'
  },
  {
    id: 'cat-grooming',
    name: 'Grooming Store',
    titleLine1: 'Grooming',
    titleLine2: 'Store',
    description: 'Shampoos, brushes, nail care and all grooming essentials.',
    image: '/assets/category-3.webp',
    itemCount: 16,
    filterKey: 'grooming',
    bgColor: 'bg-[#FCF4E9]',
    borderColor: 'border-[#F8E5CA]',
    accentColor: '#D99B43'
  },
  {
    id: 'cat-supplements',
    name: 'Supplements Store',
    titleLine1: 'Supplements',
    titleLine2: 'Store',
    description: 'Vitamins, supplements and healthcare products for a stronger, healthier pet.',
    image: '/assets/category-4.webp',
    itemCount: 12,
    filterKey: 'hygiene',
    bgColor: 'bg-[#EAF7EE]',
    borderColor: 'border-[#D0EFD8]',
    accentColor: '#4CA767'
  },
  {
    id: 'cat-toys',
    name: 'Toys Store',
    titleLine1: 'Toys',
    titleLine2: 'Store',
    description: 'Fun and durable toys to keep your pets active, happy and engaged.',
    image: '/assets/category-5.webp',
    itemCount: 15,
    filterKey: 'toys',
    bgColor: 'bg-[#F5EEF8]',
    borderColor: 'border-[#EBD7F0]',
    accentColor: '#9B51E0'
  }
];

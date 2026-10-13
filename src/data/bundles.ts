import type { BundleItem } from '../types';

export const bundles: BundleItem[] = [
  {
    id: 'bundle-dogs',
    petType: 'DOG',
    title: 'Essentials for Happy Dogs',
    titleLine1: 'Essentials',
    titleLine2: 'for Happy Dogs',
    description: 'Food, accessories and more for their everyday needs.',
    descLine1: 'Food, accessories and more',
    descLine2: 'for their everyday needs.',
    image: '/assets/bento-grid-1.webp',
    bgColor: 'bg-[#F7F2ED]',
    imagePositionClass: 'right-0 bottom-0',
    categoryFilter: 'feeding'
  },
  {
    id: 'bundle-cats',
    petType: 'CAT',
    title: 'Everything for Happy Cats',
    titleLine1: 'Everything',
    titleLine2: 'for Happy Cats',
    description: 'Comfort, care and fun for your feline friend.',
    descLine1: 'Comfort, care and fun',
    descLine2: 'for your feline friend.',
    image: '/assets/bento-grid-2.webp',
    bgColor: 'bg-[#EDF5EE]',
    imagePositionClass: 'right-0 bottom-0',
    categoryFilter: 'beds'
  },
  {
    id: 'bundle-travel',
    petType: 'DOG',
    title: 'Travel & Outdoor Essentials',
    titleLine1: 'Travel &',
    titleLine2: 'Outdoor Essentials',
    description: 'Keep them safe, hydrated and comfortable on the go.',
    descLine1: 'Keep them safe, hydrated',
    descLine2: 'and comfortable on the go.',
    image: '/assets/bento-grid-3.webp',
    bgColor: 'bg-[#E6F2FA]',
    imagePositionClass: '-right-2 sm:-right-4 lg:-right-6 bottom-0',
    categoryFilter: 'travel'
  },
  {
    id: 'bundle-care',
    petType: 'CAT',
    title: 'Comfort & Daily Care',
    titleLine1: 'Comfort &',
    titleLine2: 'Daily Care',
    description: 'Clean, cozy and stress-free for your cat.',
    descLine1: 'Clean, cozy and stress-free',
    descLine2: 'for your cat.',
    image: '/assets/bento-grid-4.webp',
    bgColor: 'bg-[#F8EFF0]',
    imagePositionClass: 'right-0 bottom-0',
    categoryFilter: 'grooming'
  }
];


# 🐾 Wagmart — Premium Pet Supplies & Wellness

> Everything for happier, healthier pets. A modern, high-performance e-commerce storefront for dogs and cats.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange)](https://oxc.rs/)

---

## 🌟 Overview

**Wagmart** is a thoughtfully crafted, modern pet supplies storefront built for the contemporary pet parent. Engineered with **React 19**, **TypeScript**, and **Tailwind CSS v4**, Wagmart delivers a warm, delightful shopping experience featuring rich micro-interactions, curated essentials, interactive pet stories, and seamless checkout preparation.

---

## ✨ Key Features

- **🐾 Hero Experience & Interactive Banner** — Eye-catching headline, promotional badges, customer social proof count, and instant shop links.
- **🏷️ Curated Categories & Pet Bundles** — Explore collections by pet type (*Dogs* & *Cats*) or category (*Grooming*, *Feeding*, *Collars & Leashes*, *Travel*, *Hygiene*).
- **⭐ Best Sellers Carousel** — Powered by [Embla Carousel](https://www.embla-carousel.com/) for fluid, touch-friendly product browsing.
- **🎯 Shop By Need** — Targeted filtering tailored to real-life pet parenting needs:
  - *Gentle Grooming & Coat Care*
  - *Whisker-Friendly Feeding & Hydration*
  - *Outdoor Travel & Car Safety*
  - *Calming Sleep & Orthopedic Comfort*
  - *Active Play & Dental Chew Health*
- **🎥 Pet Reels Showcase** — Social-style video clips featuring happy pets using Wagmart essentials, complete with full-screen interactive modals.
- **🛒 Dynamic Cart Drawer** — Slide-over cart with live subtotal calculation, quantity adjusters, promotional discount display, and threshold indicators.
- **❤️ Wishlist Modal** — Dedicated favorite manager to bookmark items for later purchases.
- **⚡ Instant Product Search** — Real-time modal search with live keyword filtering across product titles, descriptions, and tags.
- **🔍 Quick View Modal** — Instant product preview modal with feature bullet points, hygiene chips, pricing breakdown, and one-click add to cart.
- **🛡️ Pet Trust Guarantees** — Dedicated credibility badges: *Vet-Approved Formulations*, *Cruelty-Free Materials*, and *30-Day Happiness Guarantee*.
- **💬 Pet Parent Testimonials** — Authentic customer reviews highlighting real pet transformations.
- **📖 Pet Care Blog & Interactive FAQs** — Informative pet health guides and expandable accordions answering shipping, sizing, and care questions.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Latest UI component architecture with hooks |
| **TypeScript 6** | Strict type-safety across models and components |
| **Vite 8** | Ultra-fast HMR and optimized production bundling |
| **Tailwind CSS v4** | Next-generation utility-first styling engine |
| **Embla Carousel** | Lightweight, high-performance carousel slider |
| **Lucide React** | Clean, accessible icon system |
| **Oxlint** | High-performance JavaScript/TypeScript linter |

---

## 📁 Project Structure

```text
wagmart/
├── public/                     # Static assets & SEO files
│   ├── assets/                 # Icons and branding assets
│   ├── catalog/                # Catalog product photography
│   ├── images/                 # High-resolution hero & marketing images
│   ├── _redirects              # Static SPA routing fallback
│   ├── robots.txt              # Search crawler instructions
│   └── sitemap.xml             # Search engine XML sitemap
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── BestSellers.tsx     # Product carousel slider
│   │   ├── BlogSection.tsx     # Curated pet wellness articles
│   │   ├── CartDrawer.tsx      # Slide-out interactive shopping cart
│   │   ├── Categories.tsx      # Pet category cards
│   │   ├── FAQAccordion.tsx    # Interactive FAQ accordion
│   │   ├── Footer.tsx          # Multi-column footer & newsletter
│   │   ├── Header.tsx          # Sticky navigation, badges & search trigger
│   │   ├── Hero.tsx            # Main hero banner & value proposition
│   │   ├── PetCategoryBanner.tsx # Dog & Cat bundle showcases
│   │   ├── PetReels.tsx        # Video reels gallery
│   │   ├── PetTrustSection.tsx # Trust badges & satisfaction guarantees
│   │   ├── ProductCard.tsx     # Card component with badges & quick actions
│   │   ├── QuickViewModal.tsx  # Product deep-dive modal
│   │   ├── ReelModal.tsx       # Video reel modal player
│   │   ├── SearchModal.tsx     # Instant fuzzy search modal
│   │   ├── ShopByNeed.tsx      # Solution-based product filters
│   │   ├── Testimonials.tsx    # Customer review cards
│   │   └── WishlistModal.tsx   # Saved products drawer
│   ├── data/                   # Mock products, categories & testimonials
│   ├── types/                  # TypeScript interface definitions
│   ├── App.tsx                 # Root application composition & state
│   ├── index.css               # Design system & font configurations
│   └── main.tsx                # React DOM entry point
├── .gitignore                  # Git ignore rules for node, dist & env
├── package.json                # Project dependencies and npm scripts
├── rewrite.json                # Vercel rewrite configuration reference
├── vercel.json                 # Automatic Vercel SPA routing configuration
└── vite.config.ts              # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wagmart.git
   cd wagmart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

4. **Lint the code**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

---

## ☁️ Deploying to Vercel

Wagmart is configured for zero-configuration, instant deployment on **Vercel**.

### Method 1: Deploy via GitHub (Recommended)

1. Push your repository to **GitHub**:
   ```bash
   git add .
   git commit -m "Deploy Wagmart storefront"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your `wagmart` repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. The site will be live within seconds!

### Method 2: Deploy using Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Run deployment from the project root:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

> **Note on Rewrites & Routing:**
> Both `vercel.json` and `rewrite.json` are included in the project root with the following configuration:
> ```json
> {
>   "rewrites": [
>     {
>       "source": "/(.*)",
>       "destination": "/index.html"
>     }
>   ]
> }
> ```
> This guarantees that client-side SPA routing and deep links reload cleanly without returning `404 Not Found` errors.

---

## 🔍 SEO & Web Standards

All essential search engine files are located in the `public/` directory:
- **`public/sitemap.xml`** — Pre-configured URL map with crawl priorities for major sections and categories.
- **`public/robots.txt`** — Clean crawler directives with sitemap declaration.
- **`public/_redirects`** — Fallback rewrite rule for Netlify, Cloudflare Pages, and static hosting platforms.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

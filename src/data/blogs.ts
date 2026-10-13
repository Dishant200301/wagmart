export interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor?: {
    bg: string;
    text: string;
    border: string;
  };
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  image: string;
  content: {
    intro: string;
    subheadings: {
      heading: string;
      body: string;
    }[];
    tips: string[];
    takeaway: string;
  };
}

export const blogs: BlogPost[] = [
  {
    id: 'pet-happy-healthy',
    title: 'Simple Ways to Keep Your Pet Happy and Healthy',
    category: 'Pet Care',
    categoryColor: {
      bg: 'bg-[#7a46e5]/10',
      text: 'text-[#7a46e5]',
      border: 'border-[#7a46e5]/20',
    },
    readTime: '4 min read',
    date: '13 Oct 2026',
    author: {
      name: 'Dr. Maya Patel',
      role: 'Chief Veterinary Officer & Pet Wellness Specialist',
      avatar: '/images/testimonial/image.png',
    },
    excerpt:
      'Discover simple everyday habits that help your furry companion feel comfortable, active, and cared for.',
    image: '/images/blog/dog-owner-happy.webp',
    content: {
      intro:
        'A truly thriving pet needs more than just good nutrition and a warm bed. Fostering daily habits that nurture their mental state, physical joints, and emotional bond creates a happier companion and adds joyful years to their life.',
      subheadings: [
        {
          heading: '1. Mindful Daily Routines & Calming Transitions',
          body: 'Pets thrive on predictable rhythms. Setting consistent morning walks, regular grooming brush-downs, and quiet decompression time after vigorous outdoor play reduces cortisol levels and separation anxiety.',
        },
        {
          heading: '2. Low-Impact Movement & Joint Longevity',
          body: 'Consistent moderate exercise—such as brisk neighborhood strolls or gentle indoor play—strengthens connective ligaments without overstraining growing hips or aging joints. Always allow 5 minutes of cool-down time.',
        },
        {
          heading: '3. Hydration & Wholesome Nutrient Balance',
          body: 'Ensure round-the-clock access to fresh filtered water and incorporate moisture-rich whole foods or bone broths to protect kidney vitality and support a glossy, resilient coat.',
        },
      ],
      tips: [
        'Establish 10 minutes of intentional one-on-one play every evening.',
        'Inspect paws, ears, and teeth weekly during relaxed brushing sessions.',
        'Use interactive enrichment games to channel curiosity and prevent boredom.',
      ],
      takeaway:
        'Small, compassionate daily actions add up to immense comfort and longevity for your pet.',
    },
  },
  {
    id: 'grooming-coat-health',
    title: "How to Keep Your Pet's Coat Healthy & Tangle-Free",
    category: 'Grooming',
    categoryColor: {
      bg: 'bg-[#7a46e5]/10',
      text: 'text-[#7a46e5]',
      border: 'border-[#7a46e5]/20',
    },
    readTime: '5 min read',
    date: '12 Oct 2026',
    author: {
      name: 'Dr. Maya Patel',
      role: 'Veterinary Grooming Specialist',
      avatar: '/images/testimonial/image.png',
    },
    excerpt:
      'A calm, gentle step-by-step grooming routine using slicker brushes, de-shedding gloves, and natural coat balms to keep shedding under control.',
    image: '/images/blog/dog-groomed.webp',
    content: {
      intro:
        'Regular grooming is much more than keeping your pet looking camera-ready—it is one of the most effective ways to bond, inspect skin health, and prevent painful matting before it starts.',
      subheadings: [
        {
          heading: '1. Establish a Calming 5-Minute Routine',
          body: 'Never rush into full deshedding when your pet is energized or stressed. Begin with gentle hand strokes, introduce the brush with light praise, and groom short sections daily rather than facing a 40-minute ordeal once a month.',
        },
        {
          heading: '2. Choosing the Right Tool for the Coat Type',
          body: 'Double-coated breeds like Golden Retrievers and German Shepherds require an undercoat rake and slicker brush, whereas short-haired pets benefit greatly from silicone grooming gloves that capture loose hairs while providing a soothing massage.',
        },
        {
          heading: '3. Bathing Temperature & Natural Shampoos',
          body: 'Always use lukewarm water (never hot) and hypoallergenic, sulfate-free oatmeal shampoos. Harsh human soaps strip the natural lipid moisture barrier, leading to itchy dandruff and dry skin patches.',
        },
      ],
      tips: [
        'Brush before bathing—water tightens existing mats and knots.',
        'Check paw pads and trim excess fur to avoid slipping on hardwood floors.',
        'Reward with a favorite healthy treat right after every session.',
      ],
      takeaway:
        'With consistent short sessions and the right gentle tools, grooming transforms into a joyful relaxation ritual your furry friend genuinely looks forward to.',
    },
  },
  {
    id: 'slow-feeder-nutrition',
    title: 'The Complete Guide to Slow Feeders & Healthy Digestion',
    category: 'Nutrition',
    categoryColor: {
      bg: 'bg-[#219959]/10',
      text: 'text-[#219959]',
      border: 'border-[#219959]/20',
    },
    readTime: '4 min read',
    date: '08 Oct 2026',
    author: {
      name: 'Kabir Sharma',
      role: 'Canine Nutritionist & Behavior Consultant',
      avatar: '/images/testimonial/image copy 2.png',
    },
    excerpt:
      'Why rapid eating can trigger dangerous bloating and how interactive maze bowls turn everyday mealtime into a relaxing, satisfying mental puzzle.',
    image: '/images/blog/slow-feeder-nutrition.webp',
    content: {
      intro:
        'Does your dog inhale their bowl of kibble in under thirty seconds? Rapid eating is an instinctual behavior that can lead to severe gastrointestinal discomfort, regurgitation, and life-threatening canine bloat (GDV).',
      subheadings: [
        {
          heading: '1. Slowing Down the Meal Pace by 10x',
          body: 'Maze-designed slow feeder bowls and textured silicone lick mats compel pets to navigate crevices, extending a 45-second gulp into an engaging 8-to-12 minute mindful eating experience.',
        },
        {
          heading: '2. Releasing Endorphins Through Licking',
          body: 'Repetitive licking activates soothing neurotransmitters in a dog’s nervous system, significantly reducing post-meal hyperactivity and easing anxiety during thunderstorms or alone time.',
        },
        {
          heading: '3. Boosting Nutrient Absorption & Hydration',
          body: 'Chewing and gradual swallowing allow digestive enzymes in saliva to break down starches and proteins properly, leading to firmer stools and far less post-meal gas.',
        },
      ],
      tips: [
        'Spread bone broth or plain greek yogurt onto a lick mat and freeze it for extra enrichment.',
        'Choose food-grade BPA-free silicone bowls that are dishwasher safe and non-slip.',
        'Transition gradually so pets do not become frustrated—start with wider grooves.',
      ],
      takeaway:
        'A slow feeder is not just a dish; it is a proven wellness tool that protects digestive health while keeping pets happily entertained.',
    },
  },
  {
    id: 'indoor-enrichment-games',
    title: 'Simple Indoor Enrichment Games for Cats and Dogs',
    category: 'Pet Wellness',
    categoryColor: {
      bg: 'bg-[#f59e0b]/10',
      text: 'text-[#d97706]',
      border: 'border-[#f59e0b]/20',
    },
    readTime: '6 min read',
    date: '29 Sep 2026',
    author: {
      name: 'Ananya Roy',
      role: 'Certified Animal Behavior Specialist',
      avatar: '/images/testimonial/image copy.png',
    },
    excerpt:
      'Keep your furry companions mentally stimulated and curb separation anxiety on rainy days with interactive puzzle toys and nosework games.',
    image: '/images/blog/cat-relaxing.webp',
    content: {
      intro:
        'A tired dog is a good dog, but mental stimulation tires pets out five times faster than a simple walk around the block. Indoor enrichment challenges their natural foraging instincts.',
      subheadings: [
        {
          heading: '1. The Power of Scent Work ("Find It" Game)',
          body: 'A dog’s sense of smell is roughly 10,000 to 100,000 times more acute than ours. Hiding natural treats under cups or rolled-up towels lets them activate the sensory cortex, burning energy peacefully.',
        },
        {
          heading: '2. Multi-Level Interactive Puzzle Boards',
          body: 'Slide-and-seek puzzle boards encourage cats and dogs to solve tactile challenges: nudging disks, lifting pegs, and unlocking reward compartments with their paws and snouts.',
        },
        {
          heading: '3. Preventing Destructive Chewing Indoors',
          body: 'Boredom is the #1 trigger for chewed shoes, couch scratching, and persistent barking. Providing structured puzzle sessions replaces destructive impulses with rewarding cognitive play.',
        },
      ],
      tips: [
        'Rotate toys every 3 days so games always feel novel and exciting.',
        '15 minutes of scent puzzle work equals roughly 45 minutes of physical running.',
        'Supervise initial play sessions to celebrate wins and build your pet’s confidence.',
      ],
      takeaway:
        'Mental enrichment keeps pets sharp, content, and relaxed, making indoor rainy days just as rewarding as outdoor park adventures.',
    },
  },
];

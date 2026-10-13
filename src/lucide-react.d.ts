declare module 'lucide-react' {
  import * as React from 'react';
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type Icon = React.FC<LucideProps>;
  export const Search: Icon;
  export const Heart: Icon;
  export const ShoppingBag: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Phone: Icon;
  export const User: Icon;
  export const ArrowRight: Icon;
  export const Sparkles: Icon;
  export const ShieldCheck: Icon;
  export const HeartHandshake: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const Eye: Icon;
  export const Check: Icon;
  export const Package: Icon;
  export const Truck: Icon;
  export const Play: Icon;
  export const Clock: Icon;
  export const Star: Icon;
  export const Quote: Icon;
  export const Plus: Icon;
  export const Minus: Icon;
  export const MapPin: Icon;
  export const Mail: Icon;
  export const CheckCircle: Icon;
  export const AlertCircle: Icon;
  export const Trash2: Icon;
  export const Filter: Icon;
  export const Calendar: Icon;
  export const CalendarDays: Icon;
  export const Clock3: Icon;
  export const PawPrint: Icon;
  export const BookOpen: Icon;
  export const Share2: Icon;
  const icons: { [key: string]: Icon };
  export default icons;
}

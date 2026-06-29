export interface Feature {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface PricingFeature {
  text: string;
  disabled?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string | number;
  pricePrefix?: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText: string;
  ctaVariant: "ghost" | "primary";
}

export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface NichoItem {
  emoji: string;
  label: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

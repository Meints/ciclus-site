import {
  features,
  nicho,
  steps,
  stats,
  pricing,
  testimonials,
  faqs,
} from "@/models/data";

import type {
  Feature,
  NichoItem,
  Step,
  Stat,
  PricingPlan,
  Testimonial,
  FAQItem,
} from "@/models/index";

export function getFeatures(): Feature[] {
  return features;
}

export function getNichoItems(): NichoItem[] {
  return nicho;
}

export function getSteps(): Step[] {
  return steps;
}

export function getStats(): Stat[] {
  return stats;
}

export function getPricingPlans(): PricingPlan[] {
  return pricing;
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getFAQItems(): FAQItem[] {
  return faqs;
}

export function getLandingPageData() {
  return {
    features: getFeatures(),
    nicho: getNichoItems(),
    steps: getSteps(),
    stats: getStats(),
    pricing: getPricingPlans(),
    testimonials: getTestimonials(),
    faqs: getFAQItems(),
  };
}

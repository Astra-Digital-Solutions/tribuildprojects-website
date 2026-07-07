export interface RouteConfig {
  name: string;
  href: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const services: RouteConfig[] = [
  { name: "Residential Scaffolding", href: "/services/residential-scaffolding", changeFrequency: "monthly", priority: 0.8 },
  { name: "Edge Protection", href: "/services/edge-protection", changeFrequency: "monthly", priority: 0.8 },
  { name: "Roof Access Scaffolding", href: "/services/roof-access", changeFrequency: "monthly", priority: 0.8 },
  { name: "Scaffold Erect & Dismantle", href: "/services/erect-dismantle", changeFrequency: "monthly", priority: 0.8 },
  { name: "Mobile Scaffold Hire", href: "/services/mobile-scaffold-hire", changeFrequency: "monthly", priority: 0.8 },
  { name: "Builder & Roofer Access Solutions", href: "/services/builder-roofer-access", changeFrequency: "monthly", priority: 0.8 },
  { name: "Temporary Fence Hire", href: "/services/temporary-fence-hire", changeFrequency: "monthly", priority: 0.8 },
];

export const mainPages: RouteConfig[] = [
  { name: "Home", href: "/", changeFrequency: "monthly", priority: 1.0 },
  { name: "Contact", href: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export const legalPages: RouteConfig[] = [
  { name: "Privacy Policy", href: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { name: "Terms & Conditions", href: "/terms-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export const allPublicPages = [...mainPages, ...services, ...legalPages];

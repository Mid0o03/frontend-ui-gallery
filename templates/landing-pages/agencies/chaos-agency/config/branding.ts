export const BRANDING = {
  // General Site Info
  siteName: 'Chaos Agency', // User can change this
  tagline: 'We build digital cults.', // User can change this
  
  // Contact Info
  email: 'contact@midodev.fr',
  phone: '+33 6 00 00 00 00', // Placeholder
  address: 'Paris, France', // Placeholder
  
  // Social Links
  socials: {
    instagram: '#',
    twitter: '#',
    linkedin: '#',
    behance: '#'
  },

  // SEO Defaults
  seo: {
    title: 'Chaos Agency - Creative Digital Studio',
    description: 'A creative agency building digital cults through branding, web design, and strategies.',
    keywords: 'creative agency, web design, branding, digital strategy, chaos agency',
    ogImage: '/og-image.jpg', // Should be added to public/
    twitterHandle: '@chaosagency'
  },
  
  // Colors (if user wants to override Tailwind config here, though usually done in tailwind.config.ts)
  colors: {
    primary: '#000000',
    accent: '#FFFF00'
  }
};

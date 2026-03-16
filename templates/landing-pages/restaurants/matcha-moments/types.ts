export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  tagline?: string;
  description?: string;
  category?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Branding {
  name: string;
  logo: {
    icon: string;
    text: string;
  };
  colors: {
    primary: string;
    primaryDark: string;
    primaryDarker: string;
    backgroundLight: string;
    backgroundDark: string;
    accentGold: string;
    secondary: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    image: string;
  };
  philosophy: {
    title: string;
    text: string;
    image: string;
    cta: string;
  };
  trustBuilders: {
    icon: string;
    title: string;
    desc: string;
  }[];
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  footer: {
    quickLinksTitle: string;
    followUsTitle: string;
    copyright: string;
  };
  contactPage: {
    title: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  aboutPage: {
    title: string;
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    philosophyTitle: string;
    philosophyDescription: string;
    philosophyCards: {
      icon: string;
      title: string;
      text: string;
    }[];
    journeyTitle: string;
    journeySubtitle: string;
    founderTitle: string;
    founderQuote: string;
    founderName: string;
    founderImage: string;
  };
  shopPage: {
    title: string;
    filters: string[];
    loadMore: string;
  };
  productDetail: {
    breadcrumbs: {
      home: string;
      shop: string;
    };
    reviewsTitle: string;
    reviewSummary: {
      rating: string;
      countText: string;
    };
    reviews: {
      name: string;
      date: string;
      stars: number;
      title: string;
      content: string;
    }[];
    sections: {
      [key: string]: {
        title: string;
        content: string;
      };
    };
  };
  products: Product[];
}
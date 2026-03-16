
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

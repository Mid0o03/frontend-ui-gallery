
import { NavItem, BenefitItem, TestimonialItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Problème', href: '#probleme' },
  { label: 'Solution', href: '#solution' },
  { label: 'Bénéfices', href: '#benefices' },
  { label: 'Témoignages', href: '#temoignages' },
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Vitesse Supersonique",
    description: "Exécutez vos projets à une vitesse que vos concurrents ne peuvent qu'imaginer.",
    icon: "speed"
  },
  {
    title: "Intelligence d'Avance",
    description: "Prenez des décisions visionnaires grâce à des analyses prédictives que personne d'autre ne possède.",
    icon: "insights"
  },
  {
    title: "Impact Mémorable",
    description: "Créez des expériences uniques qui marquent les esprits et fidélisent vos clients.",
    icon: "auto_awesome"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Jeanne Dubois",
    role: "Directrice Marketing",
    company: "Innovatech",
    quote: "C'est plus qu'un outil, c'est une arme secrète. On a littéralement laissé la concurrence sur place.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVVnzl9tuTCRGbwo3Mor6vpnOKfs-6_lMAWtrnfI1M1fsYh_TzM5nGvsgnWTRapGySNJFaWHTuRiXfa1x-DL9JsAsRJob8D8xkMlARHXF6Y9LrgYYtsQzEtXuQPFyM7nmTp3QGjXNqFnW02VH25vKllRwwgYDZBHycCpJEiG9qvlgRr4av12OGPECpQZrX999GYKywOUNFfs15fNqO0kAwBKERWM7sqe95iDWVyzOaKqyKoCLbw09rscvnBCPbHNVVC7IjLhjGBmSe"
  },
  {
    name: "Marc Petit",
    role: "CEO",
    company: "Startup Vision",
    quote: "Leur approche est radicale et c'est exactement ce dont nous avions besoin. Si vous voulez juste 'mieux', allez voir ailleurs. Si vous voulez 'différent', c'est ici.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRI2OrDkR8am5814ax63rqS-KTM4Ik2ExuRf6qj4df08LrGT0JfyRqFvOJxkXDN_-WX5O2oShB9m3whcxueK0Z5SREdXl5_MglWvHlkhvJzlQOgwwcNZSg74Am3k5fAppl9b2ahzSEogFONaPrQ4WgdU2BtO2GcIR1YR4nt-aYkJEnqibh6h_FWSgZ24SUuuorHM7uJFxkaPYIZ-e7B8bV7YRXZNVkRobzX76YxB4fLFjBri5vJblKJ7FlT70Vg_Mjakht6jw1a44v"
  }
];

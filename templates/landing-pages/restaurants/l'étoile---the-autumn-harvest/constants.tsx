
import { ChapterData } from './types';

export const CHAPTERS: ChapterData[] = [
  {
    id: "chapter1",
    chapterNumber: "Chapter I",
    title: "The Foraged Earth",
    intro: "Our journey begins beneath the canopy. We celebrate the silent growth of the forest—wild mushrooms, damp moss, and the earthy richness of the soil itself.",
    dishes: [
      {
        name: "Amuse-bouche: The Forest Floor",
        description: "Chanterelle duxelles, pine needle oil, truffle soil, and micro-sorrel.",
        pairing: "NV Jacques Selosse 'Initial' Grand Cru"
      },
      {
        name: "Heritage Carrot & Smoke",
        description: "Slow-roasted salt-crust carrots, whipped buttermilk, hay-smoked oil.",
        pairing: "2019 Domaine Huet Vouvray 'Le Mont'"
      }
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgpZW88NRorrojFU_6IYY2n8DSpplqOr8Sf2x1PIcTXq9xXtfYYyG5B0krjok3Nf40Md2iL0n9masWaZnvs_KHCzV5zgzhrikVWtyBAkc9h4WceSCo38NxTQnYr-dx1uP2F4wuyiA8jXv5947VEsAMjcgG3B7mZkagsS_yWMrR2cnLNHRI_WXLfHVXJ5RMzgfcFwAwqiDKRs5lbz128Mgh6C7PZJmXAz0AEDl5HJV7Eu1RYrNLspsLw08-Svxl2Z5Npqw4HqtIFaE",
    imageCaption: "Photographed at L'Étoile Kitchen",
    imageAlt: "Artistic arrangement of wild mushrooms and herbs"
  },
  {
    id: "chapter2",
    chapterNumber: "Chapter II",
    title: "The Cold Current",
    intro: "Honoring the pristine waters of the Atlantic. Each dish captures the saline essence of the sea and the delicate texture of its inhabitants.",
    dishes: [
      {
        name: "Hand-Dived Scallop",
        description: "Thinly sliced raw scallop, bergamot, sea lettuce, and chilled dashi.",
        pairing: "2021 Keller Riesling 'Von der Fels'"
      },
      {
        name: "Wild Turbot & Leek",
        description: "Butter-poached turbot, young leeks, caviar velouté, bronze fennel.",
        pairing: "2018 Meursault 1er Cru 'Charmes'"
      }
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuByolT2tEAvgx6YcPthXTKIOsFFfmW0U-7n4K-WShbLSwYIg-T91pLqQRu6YJDawWlDJc_5TYl0T0YEhVTV6_A0Ofz14f22Z_j7hyljp8NJY8MjR4qiaiGXFgN5MJBTIIXweUdIH1Wjv2JWpaZPj2gR-R4-9t18z-dsPbV0HlUxssYQLE8D9GmpxxAfPHFWdztjlm1HM7zhVuE2EaNrxXOuT1TunsZ5a9Goj5p_b0Uu9jaBZCQKi8zau6yqGn2S9MFVCnC3U7pilpI",
    imageCaption: "Sourced from Brittany Coast",
    imageAlt: "Exquisite seafood plating with foam and microgreens"
  }
];

export const CHAPTER_THREE: ChapterData = {
  id: "chapter3",
  chapterNumber: "Chapter III",
  title: "Land & Orchards",
  intro: "A culmination of richness and precision, bridging the wild lands with the sweet harvest of the trees.",
  dishes: [
    {
      name: "Highland Venison",
      description: "Loin of venison, salt-baked celeriac, blackberry reduction, and juniper jus.",
      pairing: "2016 Gevrey-Chambertin 1er Cru"
    },
    {
      name: "The Crisp Apple",
      description: "Green apple sorbet, tarragon sponge, honey-infused yoghurt, walnut brittle.",
      pairing: "2015 Château d'Yquem (375ml)"
    },
    {
      name: "Petit Fours",
      description: "A selection of seasonally inspired mignardises from our pastry kitchen.",
      pairing: ""
    }
  ],
  imageUrl: "", // We will use grid layout here
  imageCaption: "",
  imageAlt: ""
};

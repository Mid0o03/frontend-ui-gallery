
import { Expedition } from '../types';

export const EXPEDITIONS: Expedition[] = [
  {
    id: '1',
    title: 'The Great Migration',
    duration: 12,
    description: 'Witness the raw power of the Serengeti during the annual river crossing. Expert-led photography sessions and private bush camps await you in this once-in-a-lifetime journey.',
    location: 'Serengeti National Park',
    country: 'Tanzania',
    departureDate: 'OCT 12, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Massive herd of wildebeest crossing a river',
    isLimited: true,
    region: 'Safari'
  },
  {
    id: '2',
    title: 'Arctic Silence',
    duration: 8,
    description: 'Navigate the frozen wilderness of the Svalbard archipelago under the polar sun. Encounters with polar bears and majestic glaciers in one of Earth\'s final frontiers.',
    location: 'Svalbard Archipelago',
    country: 'Norway',
    departureDate: 'NOV 05, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Icebergs floating in a dark blue arctic sea',
    isLimited: false,
    region: 'Arctic'
  },
  {
    id: '3',
    title: 'Andean Peaks Trek',
    duration: 14,
    description: 'Traverse the spine of South America through ancient Incan trails. High-altitude adventure meeting local Quechua communities and exploring the majestic ruins of Machu Picchu.',
    location: 'Cusco Region',
    country: 'Peru',
    departureDate: 'DEC 02, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Inca ruins on a high mountain peak',
    isLimited: false,
    region: 'Andes'
  },
  {
    id: '4',
    title: 'Amazon Basin Bio-Search',
    duration: 10,
    description: 'Join biologists in cataloging rare species deep in the Amazon. A hands-on scientific expedition in the world\'s largest lung, exploring both land and water ecosystems.',
    location: 'Manaus Region',
    country: 'Brazil',
    departureDate: 'JAN 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1440847899694-90043f92c7f9?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Lush green rainforest canopy from above',
    isLimited: false,
    region: 'Rainforest'
  },
  {
    id: '5',
    title: 'Galapagos Marine Wonders',
    duration: 9,
    description: 'Dive into the pristine waters of the Galapagos. Encounter sea lions, hammerhead sharks, and ancient tortoises while learning about evolutionary biology.',
    location: 'Galapagos Islands',
    country: 'Ecuador',
    departureDate: 'FEB 20, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Underwater shot of a sea turtle',
    isLimited: true,
    region: 'Marine'
  },
  {
    id: '6',
    title: 'Polar Bear Kingdom',
    duration: 7,
    description: 'Travel to the "Polar Bear Capital of the World" during the autumn freeze. Observe these majestic creatures in their natural habitat from specialized tundra vehicles.',
    location: 'Churchill',
    country: 'Canada',
    departureDate: 'NOV 22, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Polar bear walking on snow',
    isLimited: false,
    region: 'Arctic'
  }
];


import React from 'react';
import { Artist, ExperienceItem, TicketTier } from './types';

export const ARTISTS: Artist[] = [
  { name: 'ZHU', tier: 'headliner' },
  { name: 'DEADMAU5', tier: 'headliner' },
  { name: 'REZZ', tier: 'headliner' },
  { name: 'Liquid Stranger', tier: 'supporting' },
  { name: 'CloZee', tier: 'supporting' },
  { name: 'G Jones', tier: 'supporting' },
  { name: 'Moore Kismet', tier: 'supporting' },
  { name: 'Ivy Lab', tier: 'emerging' },
  { name: 'ISOxo', tier: 'emerging' },
  { name: 'Deathpact', tier: 'emerging' },
  { name: 'Eprom', tier: 'emerging' },
  { name: 'Of The Trees', tier: 'emerging' },
  { name: 'Wreckno', tier: 'emerging' },
  { name: 'Alix Perez', tier: 'emerging' },
  { name: 'Shades', tier: 'emerging' },
  { name: 'Apashe', tier: 'emerging' },
  { name: 'Lucii', tier: 'emerging' },
  { name: 'Vampa', tier: 'emerging' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'void',
    title: 'The Void Stage',
    description: '360-degree immersive visual mapping',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAdzX4wtf6Lh53vPb7p8e2TRvX7KRvZRH4Wp3MLJfYqw1RFNgZEDo7PgLVLbdAgrQUdCNQYbw6Oc4pVokoes0ARDM-gGknHyZl-n1fdZ1thwvkZjb39sxsE3V0W2IXaRpnMrO883g-_E8hGq1qUXUD_6cqxdWzbzAgDjcq9k4O0Y5lOhEbDG8Ss3YUwPgfzaAwTSVtEoaWXsshXkyMO5Z0krHhuCD1OdGcwsaD28jj0NqoxUnbPTJmwkm7fH3E0lPRURbKmYTmy3o'
  },
  {
    id: 'pulse',
    title: 'Infinite Pulse',
    description: 'Experience the energy of 50,000 souls',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyvByN_hBprubpGMRTmXK91ViHo1H4ndph9NOT6O-dhabQYFM9BKuvF6X5FPXl97fUH4CC-OBoHt9NOaVSUz1nsD4Jium9isHLZ-iYns8LD_5LQuqjKlHW2K3m0rfl8WXosI_o_sdTYizsJdHN3drfXTXsqrR041ka-VgabcvCmL9TIH7mY8BkMrT0iYK-udiwpaVHSZpO54Astn_dGWx1yMvveuNSV9Dhp9ch6rd-IOtDwouCbDvU1HLOa-D8BFrKVmjdJ5O4sME'
  },
  {
    id: 'art',
    title: 'Art District',
    description: 'Interactive glitch art installations',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbwwZ2MEg4wv1yRFkWuId_e7bfbNAn5j4-SIERz15T1rfOhwagbce3TZ_sybVEapUVZOonP_QdP-VeEByF5WDjIgwPgpa8YrgMfrxAQa1sBF8E3Y5Y950Xbew8Lm85jiyQJR4YMbHW6pAhmiYjTyjzFTuBL80rj0ChV0F15SUO6Mly8vj9HcerVOlIVZq43tyhi0hXsIRnhw6nshjUZich1OGHDO8ZxGTZNw32NI9n8j4dOQU1AaFYwjbXMnb34oMnwCIXeUXj8Z4'
  },
  {
    id: 'lab',
    title: 'Workshop Lab',
    description: 'Masterclasses by industry legends',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlRvaBb3REbxt-hEZ9h697V1HMh1i19FHWt6nsp_yZ9qd-iromg84fh6QHDvnWUkahhGR7ipbLQgxo4MIZpOIClvnoehuINTCAjzGAzfOg_IgXtas5f4Sze9bjtiYVBVLzoidEzzBgboMB48hf5Nq5xFbwYdPDNQX6a-aR9CUVEPahPVooWvuXDVQRSo4Z7cROYYj8hnNi7S51lwL4_mwQBrQvnvvAnNrqj4B13hHpPfvL0ssFWTW7XC36coVS4u7Recp6pt3w7_g'
  }
];

export const TICKETS: TicketTier[] = [
  {
    id: 'general',
    name: 'General',
    price: '249',
    tagline: '3-Day Pass',
    features: ['Access to all 4 stages', 'Food & Vendor alley access', 'Standard entry points'],
    color: 'primary'
  },
  {
    id: 'vip',
    name: 'VIP Pulse',
    price: '499',
    tagline: 'Limited Entry',
    features: ['Priority fast-track entry', 'VIP Viewing decks at all stages', 'Private climate-controlled lounges', 'Premium bar access'],
    isPopular: true,
    color: 'primary'
  },
  {
    id: 'ultra',
    name: 'Neon Ultra',
    price: '999',
    tagline: 'The All-Access',
    features: ['Behind-the-scenes artist lounge', 'Exclusive main stage side-view', 'Personal concierge & transport', 'All-inclusive food & beverage'],
    color: 'neon-pink'
  }
];

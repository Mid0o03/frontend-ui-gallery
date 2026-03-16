
import React from 'react';
import { Service } from '../types';

const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Bilan Complet',
    description: 'Prévention, détartrage et examens radiologiques numériques pour un suivi de précision dès votre première visite.',
    icon: 'stethoscope',
    features: ['Radiographie 3D', 'Dépistage caries']
  },
  {
    id: '2',
    title: 'Implants Dentaires',
    description: 'Remplacement de dents manquantes par des racines en titane biocompatibles. Solutions esthétiques et fonctionnelles à vie.',
    icon: 'dentistry',
    features: ['Chirurgie guidée', 'Couronnes céramiques'],
    highlighted: true
  },
  {
    id: '3',
    title: 'Blanchiment',
    description: 'Éclat naturel et soin professionnel supervisé pour un résultat durable sans fragiliser votre émail dentaire.',
    icon: 'auto_fix_high',
    features: ['Lampe LED froide', 'Gouttières sur mesure']
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const isHighlighted = service.highlighted;
  
  return (
    <div className={`p-10 rounded-3xl border transition-all group ${
      isHighlighted 
        ? 'border-[#13a4ec]/20 bg-[#13a4ec]/[0.02] shadow-2xl shadow-[#13a4ec]/10' 
        : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-[#13a4ec]/5'
    }`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
        isHighlighted ? 'bg-[#13a4ec] text-white' : 'bg-[#13a4ec]/10 text-[#13a4ec]'
      }`}>
        {service.id === '1' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        )}
        {service.id === '2' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        )}
        {service.id === '3' && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
        )}
      </div>
      
      <h4 className="text-xl font-bold mb-4">{service.title}</h4>
      <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
      
      <ul className="space-y-3 text-sm text-slate-600">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#13a4ec]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-[#13a4ec] font-bold tracking-widest text-sm uppercase mb-3">Nos Spécialités</h2>
            <h3 className="text-4xl font-black tracking-tight mb-4">Une gamme complète de soins dentaires expertises.</h3>
            <p className="text-slate-500">Nous utilisons les dernières technologies numériques pour des résultats précis, durables et indolores.</p>
          </div>
          <a className="text-[#13a4ec] font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer" href="#">
            Tous nos services 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

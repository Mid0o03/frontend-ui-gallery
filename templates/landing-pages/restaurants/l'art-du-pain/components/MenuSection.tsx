
import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => (
  <div className="flex justify-between items-start group">
    <div className="flex flex-col gap-1">
      <span className="text-lg font-bold group-hover:text-primary transition-colors">{name}</span>
      <p className="text-ink-dark/60 text-sm italic">{description}</p>
    </div>
    <span className="font-bold text-primary">{price}</span>
  </div>
);

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="bg-kraft-paper py-24 px-6 md:px-20 lg:px-40">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Le Quotidien</span>
          <h3 className="text-4xl md:text-5xl font-bold mt-2 text-ink-dark italic">Menu du Jour</h3>
          <div className="w-24 h-px bg-primary/40 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Boulangerie */}
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-bold border-b border-ink-dark/10 pb-2">Boulangerie</h4>
            <div className="flex flex-col gap-8">
              <MenuItem 
                name="Pain de Campagne" 
                description="Stone-ground organic flour, 24h cold fermentation, thick crust." 
                price="€6.50" 
              />
              <MenuItem 
                name="Baguette Tradition" 
                description="Natural levain, airy crumb, sea salt from Guerande." 
                price="€1.40" 
              />
              <MenuItem 
                name="Pain au Seigle" 
                description="Heritage rye with toasted pumpkin seeds and honey." 
                price="€7.20" 
              />
            </div>
          </div>

          {/* Viennoiserie */}
          <div className="flex flex-col gap-8">
            <h4 className="text-2xl font-bold border-b border-ink-dark/10 pb-2">Viennoiserie</h4>
            <div className="flex flex-col gap-8">
              <MenuItem 
                name="Croissant Pur Beurre" 
                description="AOP Charentes-Poitou butter, hand-laminated for 3 days." 
                price="€2.20" 
              />
              <MenuItem 
                name="Pain au Chocolat" 
                description="Valrhona dark chocolate batons, golden flaky layers." 
                price="€2.60" 
              />
              <MenuItem 
                name="Kouign-Amann" 
                description="Breton salted caramel pastry, crispy and decadent." 
                price="€4.50" 
              />
            </div>
          </div>
        </div>

        {/* Reservation Block */}
        <div className="mt-20 p-8 border border-primary/20 bg-primary/5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4 items-center">
            <span className="material-symbols-outlined text-4xl text-primary">schedule</span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider">Today's Batch</p>
              <p className="text-ink-dark/70">Fresh out of the oven every morning at 7:00 AM.</p>
            </div>
          </div>
          <button className="bg-ink-dark text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors shadow-lg active:scale-95">
            Reserve Your Loaf
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

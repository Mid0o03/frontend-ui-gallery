
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 flex flex-col gap-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary w-fit">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Freshly picked this morning</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-[#181411]">
            Farm-to-Table, <br />
            <span className="text-primary italic underline decoration-sage-soft underline-offset-8">Delivered.</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-500 max-w-[540px] leading-relaxed">
            Experience the peak of harvest. Fresh, seasonal vegetables grown with organic love by local boutique farmers, delivered straight to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex min-w-[180px] items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1">
              Shop the Harvest
            </button>
            <button className="flex min-w-[180px] items-center justify-center rounded-xl h-14 px-8 border-2 border-[#181411] text-[#181411] text-base font-bold hover:bg-[#181411] hover:text-white transition-all hover:-translate-y-1">
              Watch the Story
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center items-center h-[400px] lg:h-[600px]">
          {/* Organic Background Shape */}
          <div className="absolute inset-0 organic-shape bg-sage-soft opacity-60 scale-110 lg:scale-125"></div>
          
          {/* Floating Vegetables */}
          <div className="relative w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-64 lg:h-64 animate-float" style={{ animationDelay: '0s' }}>
              <img 
                src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=600&auto=format&fit=crop" 
                alt="Fresh Carrots" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 lg:w-56 lg:h-56 animate-float" style={{ animationDelay: '1.5s' }}>
              <img 
                src="https://images.unsplash.com/photo-1524179524541-1bb1ce403bb5?q=80&w=600&auto=format&fit=crop" 
                alt="Fresh Kale" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 lg:w-32 lg:h-32 animate-float" style={{ animationDelay: '3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=600&auto=format&fit=crop" 
                alt="Fresh Radishes" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

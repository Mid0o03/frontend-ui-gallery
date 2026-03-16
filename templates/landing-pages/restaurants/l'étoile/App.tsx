
import React from 'react';
import Header from './components/Header';
import Chapter from './components/Chapter';
import SidebarNav from './components/SidebarNav';
import ImaginationGallery from './components/ImaginationGallery';
import { CHAPTERS, CHAPTER_THREE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SidebarNav />

      <main className="pt-40 pb-20">
        {/* Hero Section */}
        <section id="hero" className="max-w-[1000px] mx-auto text-center px-6 mb-40 md:mb-60">
          <span className="text-primary text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block font-sans">
            Seasonal Experience
          </span>
          <h1 className="text-6xl md:text-[110px] font-bold mb-12 leading-[1] md:leading-[0.9] tracking-tight">
            The Autumn <br className="hidden md:block"/> Harvest
          </h1>
          <div className="w-24 h-[1px] bg-primary mx-auto mb-12"></div>
          <p className="text-2xl md:text-3xl italic text-accent-green/80 max-w-3xl mx-auto leading-relaxed font-light">
            "A curated journey through the flavors of the season, from the damp forest floors to the crisp morning orchards, meticulously crafted by Chef Julian Thorne."
          </p>
        </section>

        {/* Chapters 1 & 2 */}
        {CHAPTERS.map((chapter, index) => (
          <Chapter 
            key={chapter.id} 
            data={chapter} 
            reversed={index % 2 !== 0} 
          />
        ))}

        {/* Imagination Tool Section */}
        <ImaginationGallery />

        {/* Decorative Divider */}
        <div className="max-w-[1200px] mx-auto px-10 py-12 md:py-24 flex justify-center opacity-10">
          <span className="material-symbols-outlined text-8xl text-text-dark select-none">
            eco
          </span>
        </div>

        {/* Centerpiece Quote Section */}
        <section id="centerpiece" className="bg-primary/5 py-32 md:py-52 px-6 md:px-12 mb-40 md:mb-60 overflow-hidden relative">
          <div className="absolute -right-40 -top-40 opacity-[0.03] pointer-events-none rotate-12">
            <span className="material-symbols-outlined text-[600px] text-text-dark">
              restaurant_menu
            </span>
          </div>
          <div className="max-w-[900px] mx-auto text-center relative z-10">
            <span className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-10 block font-sans">
              The Centerpiece
            </span>
            <h2 className="text-4xl md:text-7xl font-bold mb-12 italic leading-tight">
              "Respect for the product is the beginning of all flavor."
            </h2>
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed max-w-2xl mx-auto font-light mb-16">
              At L’Étoile, we do not dictate to the ingredients. We listen to them. Our farmers and foragers are as much a part of our kitchen as our chefs. 
            </p>
            
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-primary mb-2">24</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-black opacity-30">Local Partners</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-primary mb-2">9</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-black opacity-30">Courses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-primary mb-2">3</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-black opacity-30">Michelin Stars</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3 - Custom Grid Layout */}
        <section id="chapter3" className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-start">
            <div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-8 block font-sans">
                {CHAPTER_THREE.chapterNumber}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-12">{CHAPTER_THREE.title}</h2>
              
              <div className="space-y-16">
                {CHAPTER_THREE.dishes.map((dish, index) => (
                  <div key={index} className={`group ${dish.name === 'Petit Fours' ? 'border-t border-text-dark/5 pt-16' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="italic opacity-70 text-lg mb-4">
                      {dish.description}
                    </p>
                    {dish.pairing && (
                      <div className="flex items-center gap-3">
                        <span className="w-4 h-px bg-primary/30"></span>
                        <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-bold opacity-40">
                          Paired with: {dish.pairing}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              <div className="bg-primary/5 aspect-[3/4] overflow-hidden shadow-xl transform translate-y-8">
                <img 
                  alt="Elegant chocolate dessert" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj0Wiq9NpD_A76LMQBV8lKFWn4MgmOLnZLP8pqdZgSMqdXeaVf_Egy3msUEa1cHR4Se35tLi5zr3yRvmdd-doXCO1R75WL9b39gECwT87NZlFKVkY48fECGh8Kr531ngMlWyaCfYAoc3xLzmlNGT5ODkn_kx9yCbWtCIP0_e9zR-aEKUgfSOhDbYFtXQFYL6b4QQ-8InTcQ2NCaYhAflDsW0hBYX0a0F_gkm4XDrjp6XWFy81idZW1saobBHlidLnu8bOphm6f0eo" 
                />
              </div>
              <div className="bg-primary/5 aspect-[3/4] overflow-hidden shadow-xl transform -translate-y-8 mt-12">
                <img 
                  alt="The chef's hands plating a dish" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v_5vKULIcFGr2CfaqErfHlrS6SFoIx3zsdKoiKzYT4qY1iE6bWe2scpBSYnaG2oDaaKHPTJqAaQOlgPOb3VB5SJnzPtnpl1jGBzvLdSH2VtGh6JxkLb3hSnQrOu99rGndja_6-h5Un2l5eHXAK4OdDaQiVsEru6HQouXiQUJRK8XFTEoMywjqDRFgJNYS1juSzTp_lDeeeqzwLXjX8vm23hpq3GJbyeYBXZypWyGATdBiTRg7QsxKhC9KA_dpUDXoNqT38dk048" 
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t border-text-dark/5 pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-32">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 font-sans opacity-40">The Tasting Experience</h4>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center group">
                  <span className="opacity-60">Autumn Harvest Menu</span>
                  <span className="font-bold font-sans text-sm tracking-widest">£245</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="opacity-60">Wine Pairing</span>
                  <span className="font-bold font-sans text-sm tracking-widest">£165</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="opacity-60">Prestige Pairing</span>
                  <span className="font-bold font-sans text-sm tracking-widest">£310</span>
                </div>
              </div>
              <p className="text-[11px] italic opacity-40 mt-10 leading-relaxed max-w-[240px]">
                *Please allow 3 to 4 hours for the complete journey. We cater to all dietary requirements with 48 hours notice.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 font-sans opacity-40">Location</h4>
              <p className="text-xl leading-relaxed font-medium">
                12 Mayfair Gardens<br />
                London, W1J 7JZ<br />
                United Kingdom
              </p>
              <a href="#" className="inline-block mt-8 text-xs font-bold uppercase tracking-[0.2em] font-sans text-primary hover:underline decoration-2 underline-offset-8">
                Get Directions
              </a>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-10 font-sans opacity-40">Stay Informed</h4>
              <p className="text-sm opacity-60 mb-8 leading-relaxed">
                Subscribe to receive seasonal menu updates and exclusive event invitations.
              </p>
              <div className="flex border-b border-text-dark/20 pb-4 group focus-within:border-primary transition-colors">
                <input 
                  className="bg-transparent border-none focus:ring-0 text-lg w-full placeholder:text-text-dark/20 font-serif" 
                  placeholder="Email Address" 
                  type="email" 
                />
                <button className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-text-dark/5 pt-12 text-[10px] font-black uppercase tracking-[0.4em] font-sans opacity-30">
            <span>© 2024 L'ÉTOILE RESTAURANT GROUP</span>
            <div className="flex gap-12">
              <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group flex items-center bg-white border border-text-dark/5 shadow-2xl rounded-full pl-8 pr-3 py-3 gap-6 hover:border-primary hover:scale-[1.02] transition-all active:scale-95">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] font-sans text-text-dark">Inquire for Table</span>
          <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg">
            <span className="material-symbols-outlined text-2xl">calendar_today</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;

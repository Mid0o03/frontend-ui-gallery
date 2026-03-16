
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="localisation" className="bg-ink-dark text-background-light py-20 px-6 md:px-20 lg:px-40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Branding Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
              <h4 className="text-2xl font-bold italic">L'Art du Pain</h4>
            </div>
            <p className="text-background-light/60 max-w-xs leading-relaxed italic">
              Bringing the soul of the traditional French boulangerie to your table. Sustainable, seasonal, and always handmade.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.248-1.687 4.771-4.919 4.917-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.249 1.691-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
            </div>
          </div>

          {/* Hours Column */}
          <div className="flex flex-col gap-6">
            <h5 className="text-lg font-bold">Heures d'Ouverture</h5>
            <ul className="flex flex-col gap-3 text-background-light/60">
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Lundi - Vendredi</span>
                <span className="text-white">07:00 - 19:30</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Samedi</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-1">
                <span>Dimanche</span>
                <span className="text-white italic">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h5 className="text-lg font-bold">Contact</h5>
            <div className="flex flex-col gap-3 text-background-light/60">
              <p>12 Rue de la Boulangerie</p>
              <p>75004 Paris, France</p>
              <p className="text-primary font-bold mt-2 text-lg leading-none">+33 1 45 67 89 00</p>
              <p className="underline cursor-pointer hover:text-primary transition-colors">bonjour@lartdupain.fr</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="sepia-map w-full h-[400px] bg-slate-200 rounded-xl overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBE4sNXg3ZT2JFSkTjcDG6qVb-VGXc6k2xovDxGLXkYwXNi0pU1QeUDByZza0uf-iFVYOzeBb96N3LcPyDGAwyryO5PhOEk0aqs2RGN4opyqC2FNvODjHfbWfrC1_KvEBl4QTRYqeyGtinjLyCrrZE4TQSD36ocLbxi7y03ypEuqcEtPeqRRLEph_YiFz8ShF88JZrGhPVfHFWfSKrDSWBdAcvHK1fv0n8TbX_thNQqIiKXHa3W3yk3aFyoP2tW6l3xSMf6o6cYQdJ3')` }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-primary text-white p-3 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
              <span className="material-symbols-outlined text-4xl">location_on</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-background-light/40 italic">
          <p>© 2024 L'Art du Pain Boulangerie Artisanale. Crafted with respect for tradition.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-primary transition-colors" href="#">Mentions Légales</a>
            <a className="hover:text-primary transition-colors" href="#">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

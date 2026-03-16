import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../config/content';

export const Home: React.FC = () => {
  return (
    <main className="flex-1 w-full">
      {/* Hero Section */}
      <section className="w-full p-4 md:p-8">
        <div
          className="relative flex min-h-[60vh] md:min-h-[80vh] flex-col items-center justify-center gap-8 rounded-2xl p-8 text-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${content.hero.image}")`
          }}
        >
          <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-sm">
              {content.hero.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-sm">
              {content.hero.subtitle}
            </p>
            <Link
              to="/shop"
              className="mt-4 flex items-center justify-center h-14 px-8 rounded-lg bg-primary text-white text-base font-bold tracking-wide hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg"
            >
              {content.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-xl"
            style={{
              backgroundImage: `url("${content.philosophy.image}")`
            }}
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">{content.philosophy.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {content.philosophy.text}
            </p>
            <Link to="/about" className="text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-1">
              {content.philosophy.cta}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-center text-slate-900 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.products.map((product) => (
              <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{product.name}</h3>
                    <p className="text-secondary font-medium">{product.price}</p>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="mt-auto w-full flex items-center justify-center h-10 rounded-lg bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {content.trustBuilders.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-xl text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
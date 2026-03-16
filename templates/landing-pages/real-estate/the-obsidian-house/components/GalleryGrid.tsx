
import React from 'react';

const images = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZN4ghAHhks4G5WXHkC_OLaOnUnHvTpoFKdSN-Ad3PzOiih2tda0pZrmFGt734VfvuM6iOHx43hPTwG1ja8GL1F3B5TKfHEiVEqDxTehnE0LSB_6oBKoUCLtPymyot1QsZ90QDgfs07aj-6V5qdc_Jo6-SbCod1OUh-lchTs7e0oxAU8yZDyzJ90iGdi8SPLwhuBFCRC42AsipwKjU_7Wgj_tmIN4vTWJh0-i42lDUeAlqeGTAgVoK2tHTohVmEtIF7qQohPQGlA",
    label: "01 / Interior Volume",
    title: "The Great Hall",
    col: "md:col-span-5",
    aspect: "aspect-[4/5]"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRelk-036mDWUYQ3zMsDkIpnhoMqtHdWFqwFOarsD4x3g3wlB_ya8AnZXpG0KTvHG1pxcpbI5_VVbjIlZbsZ4p1ELKT8KCO_SvyPxYnhrTOU9oVb2TEJ_6W89rOl5wQ9Wie0LayXQUqaA8WWY1iaYHhcpvOV50c8DMgjoxGri9pnjHWhJkSPLct8h9raeJofMs7StfV8Mn1mvoOxmJ5JB-1H-4MpsM1Z47kTb8dZwBybEYdsBcrO8s9NTQiPXzPwfEJk60kx6tre4",
    label: "02 / Materiality",
    title: "Nero Marquina",
    description: "Nero Marquina marble surfaces with hand-honed finishes.",
    col: "md:col-span-6 md:mt-32",
    aspect: "aspect-square"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrEnCoe3Uka08ihFYTnWABpKKLXhZJfBX2Pe7RFb-aJ4_ZM6i57iqB8TvOPv1xu1sqaPL-ghk-yXkihpFi0q09SR6Y0VSWIKsQdTVRKh3UfxainJytlXL8OZA3K4MePecc1vzL84VX92HxF48IeDgOqgs2Kjge-6ecMSWPqeO5DViKjMIsuxvLubLtRgdgtgSyct9tLuvHvhq29wua-vK4RcKox33dgTP8qW8Ik9193p9wg849LKOeA9k5hOQTc2fJZ0PaOq8q9zo",
    label: "Full Width / Atmosphere",
    title: "Culinary Atelier",
    col: "md:col-span-12 my-12",
    aspect: "aspect-[21/9]"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBlQ-_KzIjJTmMbq7RtxhYHpWkXjtUr4rHFV34LXO1MxgLx1ER1s0nsslvfLbfqOBrAGY4sHLOeTe7YIzniS_qnV6R5C8gXfc4E11GtfTbwKEny57nh5iStFjddoCKqo3UBNUjM7ustWZfzg_0IOSzSLPyuVwl090k_H0dJypcpg0eEZnvBPIebFLsNqneQcWxCE0IkCxr4bqdaQcDVC_XRlM0_g_DT2NPF9XVXQgUEmgBEJlSBI30H3KfFO87nRfdhyllgVVwils",
    label: "03 / Verticality",
    title: "Sculptural Ascent",
    col: "md:col-span-4",
    aspect: "aspect-[3/4]"
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU7Kb18RIYLa7YP3ixqUu4Bsj24mtxvd66lomqTNBB3jO7pFbJRSgAjQ_qIehvpFrdwSGKCW7DZosttZsIxnc2jfU63bI7_sbjAU6KYpSwHxlPU1ubUNC1C6vJbIKiBkPJkwnHDhs7wAHj-8a3gWhYLJMC5FxFupNds7aXWxDojMK81T1DJP0MUidYePret6yJz8YMs2T-sQRmaE-X6D5yPoH2XUzAtxmMAGXhZL09WjthHmtTrN7dQ82tEQaWH9yfC5iHtX2yUXY",
    label: "04 / Private Sanctuaries",
    title: "Master Suite",
    col: "md:col-span-8",
    aspect: "aspect-video"
  }
];

const GalleryGrid: React.FC = () => {
  return (
    <section id="gallery" className="px-6 py-24 md:px-24 bg-background-dark">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-24 items-start max-w-[1600px] mx-auto">
        {images.map((img, i) => (
          <div key={i} className={`${img.col} group cursor-crosshair`}>
            <div className={`relative overflow-hidden rounded-sm ${img.aspect} bg-white/5`}>
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold border-b border-white/30 pb-2">
                  View Detail
                </span>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 font-light">
                  {img.label}
                </p>
                <h3 className="text-xl font-medium tracking-tight uppercase">{img.title}</h3>
              </div>
              {img.description && (
                <p className="max-w-[220px] text-[11px] text-white/50 leading-relaxed italic text-right">
                  {img.description}
                </p>
              )}
            </div>
          </div>
        ))}

        <div className="md:col-span-12 py-32 text-center">
           <div className="inline-flex items-center justify-center p-6 border border-white/10 rounded-full mb-12">
             <span className="material-symbols-outlined text-primary text-5xl animate-pulse">
               all_inclusive
             </span>
           </div>
           <h4 className="text-4xl md:text-7xl font-extralight tracking-tighter mb-16 max-w-3xl mx-auto leading-tight">
             The experience continues beyond the lens.
           </h4>
           <button className="inline-flex items-center gap-6 border border-white/20 px-12 py-5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-500 group relative overflow-hidden">
             <span className="uppercase tracking-[0.4em] text-[10px] font-bold relative z-10">Download Digital Brochure</span>
             <span className="material-symbols-outlined relative z-10 group-hover:translate-x-2 transition-transform">
               arrow_right_alt
             </span>
           </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;

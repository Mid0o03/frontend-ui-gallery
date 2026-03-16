import React from 'react';
import Button from './ui/Button';
import { content } from '../config/content';
import { branding } from '../config/branding';

const Contact: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-t-[3px] border-black" id="contact">

      {/* Map Image Side */}
      <div className="relative bg-gray-200 min-h-[400px] lg:min-h-full border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black group overflow-hidden">
        <img
          className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 transition-transform duration-1000 group-hover:scale-105"
          src={content.contact.map_image}
          alt={`Map view of ${branding.address.line2}`}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-primary border-[3px] border-black p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_#000] text-center max-w-xs rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl mb-2">location_on</span>
            <h3 className="font-black text-xl">{branding.address.title}</h3>
            <p className="font-bold">{branding.address.line1}<br />{branding.address.line2}</p>
          </div>
        </div>
      </div>

      {/* Contact Form Side */}
      <div className="bg-primary p-8 md:p-16 flex flex-col justify-center">
        <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-[0.9]" dangerouslySetInnerHTML={{ __html: content.contact.title.replace(' ', '<br />') }}>
        </h2>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="font-black text-sm uppercase ml-2">{content.contact.form.name.label}</label>
            <input
              className="bg-white border-[3px] border-black rounded-lg p-4 font-bold placeholder:text-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow"
              placeholder={content.contact.form.name.placeholder}
              type="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-black text-sm uppercase ml-2">{content.contact.form.email.label}</label>
            <input
              className="bg-white border-[3px] border-black rounded-lg p-4 font-bold placeholder:text-gray-400 focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow"
              placeholder={content.contact.form.email.placeholder}
              type="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-black text-sm uppercase ml-2">{content.contact.form.projectType.label}</label>
            <div className="relative">
              <select className="w-full bg-white border-[3px] border-black rounded-lg p-4 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#000] transition-shadow appearance-none cursor-pointer">
                <option>WEB DESIGN</option>
                <option>BRANDING</option>
                <option>DEVELOPMENT</option>
                <option>STRATEGY</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="material-symbols-outlined font-bold">expand_more</span>
              </div>
            </div>
          </div>

          <Button variant="black" className="mt-4 rounded-xl text-xl py-5" fullWidth>
            {content.contact.form.cta} <span className="material-symbols-outlined">send</span>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
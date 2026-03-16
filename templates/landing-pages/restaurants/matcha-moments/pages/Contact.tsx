import React from 'react';
import { branding } from '../config/branding';
import { content } from '../config/content';

export const Contact: React.FC = () => {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-12 md:py-24">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#333333] mb-4">{content.contactPage.title}</h1>
          <p className="text-[#333333]/80 max-w-xl text-lg">
            {content.contactPage.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: 'mail', title: branding.contact.email, sub: 'General Inquiries' },
              { icon: 'call', title: branding.contact.phone, sub: 'Customer Support' },
              { icon: 'location_on', title: branding.contact.address, sub: 'Our Office' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#3A5B4D]/10 flex items-center justify-center text-[#3A5B4D] flex-shrink-0">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="font-medium text-[#333333] text-lg">{item.title}</p>
                  <p className="text-[#333333]/60">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="pt-8 flex gap-6 text-[#333333]/70">
              <a href={branding.social.instagram} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#3A5B4D] transition-colors"><span className="material-symbols-outlined">public</span></a>
              <a href={branding.social.facebook} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#3A5B4D] transition-colors"><span className="material-symbols-outlined">share</span></a>
              <a href={branding.social.twitter} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#3A5B4D] transition-colors"><span className="material-symbols-outlined">chat</span></a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-[#333333] mb-2">{content.contactPage.form.name}</label>
                <input type="text" placeholder={content.contactPage.form.namePlaceholder} className="w-full bg-[#F9F6F0] border-0 rounded-lg px-4 py-3 text-[#333333] focus:ring-2 focus:ring-[#3A5B4D] placeholder-[#333333]/40" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#333333] mb-2">{content.contactPage.form.email}</label>
                <input type="email" placeholder={content.contactPage.form.emailPlaceholder} className="w-full bg-[#F9F6F0] border-0 rounded-lg px-4 py-3 text-[#333333] focus:ring-2 focus:ring-[#3A5B4D] placeholder-[#333333]/40" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#333333] mb-2">{content.contactPage.form.message}</label>
                <textarea rows={6} placeholder={content.contactPage.form.messagePlaceholder} className="w-full bg-[#F9F6F0] border-0 rounded-lg px-4 py-3 text-[#333333] focus:ring-2 focus:ring-[#3A5B4D] placeholder-[#333333]/40 resize-none"></textarea>
              </div>
              <button className="w-full bg-[#3A5B4D] text-white font-bold py-3 rounded-lg hover:bg-[#2c453a] transition-colors shadow-lg">
                {content.contactPage.form.submit}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
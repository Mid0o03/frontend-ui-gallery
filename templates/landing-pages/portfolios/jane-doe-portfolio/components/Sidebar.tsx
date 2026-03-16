import React from 'react';
import { Mail, ArrowUpRight, FolderOpen, User, FileText } from 'lucide-react';
import { branding } from '../config/branding';
import { content } from '../config/content';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[320px] xl:w-[400px] flex-shrink-0 flex flex-col bg-background-dark overflow-y-auto lg:overflow-visible h-auto lg:h-full z-20">
      {/* Profile Header */}
      <div className="p-6 border-b border-border-color flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div
            className="size-16 rounded-full bg-cover bg-center border-2 border-primary"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5Tp-FURm5fF-OtXlsVUYIE0UCQu_i-i5PL9xJijmc3vv72cSFPrSL0vncFHeWl6IRsURPAJX9Jnm8iEGMWL7UhCtHbUPpcs05tkftg67JE4tmM8A8Y4onqmtUbCXvkDw_oRLaMTJ-O2bLMfGTnEKRuWgowIrIeAYYos5jX4lbuNQArpWZnqwd7uqbcclPIso7Tfr5mvGbowJUmvNs7lYKLsqhmYGndyRM7fVx4VJnnDpItEKlJLyChLsg-F6z1UkCcNRm1J8in8w_')" }}
            role="img"
            aria-label={`Portrait of ${branding.name}`}
          />
          <div className="flex gap-2">
            <a href={`mailto:${branding.email}`} className="p-2 hover:text-primary transition-colors duration-200">
              <Mail size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold leading-none tracking-tight text-white">{branding.name}</h1>
          <p className="text-primary font-mono text-xs mt-2 tracking-widest uppercase">{branding.role}</p>
        </div>

        <div className="text-sm text-gray-400 leading-relaxed font-mono">
          {content.sidebar.bio}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col p-4 gap-2">
        {content.sidebar.navItems.map((item) => {
          const Icon = {
            ArrowUpRight,
            FolderOpen,
            User,
            FileText
          }[item.icon] || FolderOpen;

          return (
            <NavItem
              key={item.label}
              label={item.label}
              icon={<Icon size={20} />}
              active={item.active}
            />
          );
        })}
      </nav>

      {/* Footer Meta */}
      <div className="p-6 border-t border-border-color mt-auto">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span>Socials</span>
            <span>{branding.version}</span>
          </div>
          <div className="flex gap-4">
            {branding.socials.map((social) => (
              <SocialLink
                key={social.label}
                icon={<span className="w-2 h-2 rounded-full bg-current" />}
                label={social.label}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ label: string; icon: React.ReactNode; active?: boolean }> = ({ label, icon, active }) => {
  return (
    <a
      href="#"
      className={`group flex items-center justify-between px-4 py-3 rounded-full transition-colors border ${active
          ? 'bg-primary text-background-dark border-primary'
          : 'hover:bg-surface-dark border-transparent hover:border-border-color text-gray-300'
        }`}
    >
      <span className={`font-medium ${!active && 'group-hover:text-primary'} transition-colors`}>{label}</span>
      <span className={`${active ? 'text-background-dark' : 'text-gray-500 group-hover:text-primary'}`}>
        {icon}
      </span>
    </a>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; label: string; url: string }> = ({ icon, label, url }) => {
  return (
    <a href={url} className="text-white hover:text-primary transition-colors flex items-center gap-1 text-sm">
      {icon} {label}
    </a>
  );
};

export default Sidebar;
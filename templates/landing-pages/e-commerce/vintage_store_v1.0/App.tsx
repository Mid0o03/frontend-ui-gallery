import React from 'react';
import { ArrowLeft, ArrowRight, X, Home, Globe, Search, Folder, Minimize2, FolderOpen } from 'lucide-react';
import { Window } from './components/Window';
import { Taskbar } from './components/Taskbar';
import { DesktopIcon } from './components/DesktopIcon';
import { WinButton } from './components/WinButton';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { branding } from './config/branding';
import { content } from './config/content';

/**
 * Main Application Component
 * 
 * This is the entry point of the Retro Vintage Store template.
 * It uses a centralized configuration system (branding and content) 
 * to manage all text and visual elements easily.
 */
const App: React.FC = () => {
  const { browser, widgets, desktopIcons, products } = content;

  return (
    <>
      {/* Desktop Icons */}
      <div className="fixed top-20 left-4 z-0 flex flex-col gap-6 text-white text-center w-24">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon key={index} label={icon.label} iconType={icon.iconType} />
        ))}
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-[1200px] mx-auto p-4 flex flex-col gap-8 pt-10 pb-20">

        {/* Top Navigation Window - Internet Explorer Style */}
        <Window
          title={browser.windowTitle}
          icon={<Globe size={16} />}
        >
          {/* Address Bar Area */}
          <div className="flex flex-col gap-1 p-1">
            <div className="flex items-center gap-4 text-black text-sm mb-1 px-1">
              <span className="underline cursor-pointer">F</span>ile
              <span className="underline cursor-pointer">E</span>dit
              <span className="underline cursor-pointer">V</span>iew
              <span className="underline cursor-pointer">F</span>avorites
              <span className="underline cursor-pointer">H</span>elp
            </div>
            <div className="flex items-center gap-2 border-t border-white pt-2 pb-1">
              <div className="flex gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-retro-gray shadow-win95 active:shadow-win95-in hover:brightness-105">
                  <ArrowLeft size={18} className="text-gray-800" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-retro-gray shadow-win95 active:shadow-win95-in hover:brightness-105">
                  <ArrowRight size={18} className="text-gray-800" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-retro-gray shadow-win95 active:shadow-win95-in hover:brightness-105">
                  <X size={18} className="text-red-600" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-retro-gray shadow-win95 active:shadow-win95-in hover:brightness-105">
                  <Home size={18} className="text-gray-800" />
                </button>
              </div>
              <div className="h-6 w-[1px] bg-gray-400 mx-1"></div>
              <span className="text-black text-xs hidden sm:inline">Address</span>
              <div className="flex-1 bg-white shadow-win95-in px-2 py-1 flex items-center h-8">
                <div className="flex items-center gap-2 w-full overflow-hidden">
                  <Globe size={14} className="text-gray-500 min-w-[14px]" />
                  <span className="text-black font-mono-retro text-lg leading-none mt-1 w-full truncate">
                    {browser.addressBar}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Window>

        {/* Marquee Section */}
        <div className="bg-retro-gray p-1 shadow-win95 max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-between bg-gradient-to-r from-retro-blue to-[#1084d0] px-2 py-0.5">
            <span className="text-white font-bold text-xs tracking-wider">System Notification</span>
          </div>
          <div className="bg-black p-2 font-mono-retro text-primary text-xl overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block">
              {browser.systemNotification}
            </div>
          </div>
        </div>

        {/* Hero Section Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Hero Window */}
          <div className="lg:col-span-8 h-full">
            <HeroSection />
          </div>

          {/* Sidebar Widgets */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Search Widget */}
            <div className="bg-retro-gray p-1 shadow-win95">
              <div className="bg-retro-blue px-2 py-1 mb-1 text-white font-bold text-sm">{widgets.findFiles.title}</div>
              <div className="p-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Search size={24} className="text-black" />
                  <span className="text-black text-sm">{widgets.findFiles.label}</span>
                </div>
                <input
                  type="text"
                  placeholder={widgets.findFiles.placeholder}
                  className="w-full bg-white border-none shadow-win95-in p-2 text-black font-mono-retro text-lg focus:ring-0 outline-none"
                />
                <WinButton className="mt-2 w-full py-1">{widgets.findFiles.button}</WinButton>
              </div>
            </div>

            {/* Categories List */}
            <div className="bg-retro-gray p-1 shadow-win95 flex-1">
              <div className="bg-[#808080] px-2 py-1 mb-1 text-white font-bold text-sm flex justify-between items-center">
                <span>{widgets.categories.title}</span>
                <Minimize2 size={14} />
              </div>
              <div className="bg-white shadow-win95-in h-full p-2 overflow-y-auto max-h-[300px]">
                <ul className="space-y-1">
                  {widgets.categories.items.map((cat, i) => (
                    <li key={i} className="flex items-center gap-2 hover:bg-retro-blue hover:text-white group p-1 cursor-pointer transition-colors">
                      <Folder size={18} className="text-yellow-500 group-hover:text-yellow-300 fill-yellow-500" />
                      <span className="font-mono-retro text-lg">{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-retro-gray p-1 shadow-win95 w-full">
          <div className="flex items-center gap-2 px-2 py-1 bg-white shadow-win95-in overflow-x-auto">
            <FolderOpen size={20} className="text-yellow-500 fill-yellow-500 min-w-[20px]" />
            <span className="text-black font-mono-retro text-lg whitespace-nowrap">
              {browser.breadcrumbPath}
            </span>
          </div>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </main>

      {/* Taskbar */}
      <Taskbar />
    </>
  );
};

export default App;

import React from 'react';

const JoinLegacy: React.FC = () => {
  return (
    <section id="membership" className="py-24 px-6 lg:px-20 bg-primary text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/20 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-6xl font-display italic font-medium mb-10 leading-tight">
            Join the Legacy
          </h2>
          <p className="text-xl text-blue-100 font-display italic leading-relaxed mb-12 max-w-lg">
            Membership at The Heritage Club is by invitation only. We welcome applications from those who appreciate the sporting life and value the preservation of our shared traditions.
          </p>
          
          <ul className="space-y-6">
            {[
              'Full access to all sporting facilities',
              'Exclusive invitation to the Annual Founder\'s Gala',
              'Priority booking for private events'
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-5">
                <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-sm font-bold">check</span>
                </div>
                <span className="text-lg font-medium text-white tracking-wide">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full max-w-xl">
          <div className="bg-white p-8 md:p-14 rounded-sm shadow-2xl relative">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-10 text-center uppercase tracking-[0.3em]">
              Adhésion
            </h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">First Name</label>
                  <input 
                    type="text" 
                    className="w-full border-0 border-b border-slate-200 focus:border-primary focus:ring-0 p-0 pb-2 text-slate-900 text-sm bg-transparent placeholder-slate-300"
                    placeholder="Enter first name"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full border-0 border-b border-slate-200 focus:border-primary focus:ring-0 p-0 pb-2 text-slate-900 text-sm bg-transparent placeholder-slate-300"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Email Address</label>
                <input 
                  type="email" 
                  className="w-full border-0 border-b border-slate-200 focus:border-primary focus:ring-0 p-0 pb-2 text-slate-900 text-sm bg-transparent placeholder-slate-300"
                  placeholder="name@email.com"
                />
              </div>

              <div className="relative group">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Primary Interest</label>
                <select className="w-full border-0 border-b border-slate-200 focus:border-primary focus:ring-0 p-0 pb-2 text-slate-900 text-sm bg-transparent">
                  <option>Tennis</option>
                  <option>Golf</option>
                  <option>Social & Dining</option>
                </select>
              </div>

              <button className="w-full bg-primary text-white py-5 px-8 text-[11px] font-bold uppercase tracking-[0.25em] rounded-sm hover:bg-blue-800 transition-all shadow-lg mt-4">
                Request Invitation
              </button>
              
              <p className="text-[10px] text-slate-400 text-center leading-loose max-w-xs mx-auto">
                By submitting this form, you agree to our Terms of Service and acknowledge our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinLegacy;


import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out. We will get back to you soon!");
  };

  return (
    <section className="bg-seafoam-muted py-24" id="contact">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info Side */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h2 className="text-4xl font-extrabold text-text-dark md:text-5xl">Begin your journey.</h2>
              <p className="mt-6 text-lg text-text-muted max-w-[450px]">
                Reach out today for a confidential introductory consultation. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-text-muted tracking-wider">Email</span>
                  <span className="text-text-dark font-semibold">hello@cabinetconsulting.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-text-muted tracking-wider">Location</span>
                  <span className="text-text-dark font-semibold">124 Avenue de la République, Paris</span>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Clock size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase text-text-muted tracking-wider">Availability</span>
                  <span className="text-text-dark font-semibold">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="rounded-[2rem] bg-white p-8 shadow-2xl lg:p-12">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="rounded-xl border-gray-100 bg-background-light p-3.5 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" 
                    placeholder="Jane" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-text-dark">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="rounded-xl border-gray-100 bg-background-light p-3.5 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all" 
                    placeholder="jane@example.com" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">How can I help you?</label>
                <select className="rounded-xl border-gray-100 bg-background-light p-3.5 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%234e9785%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_0.5rem_center] bg-no-repeat">
                  <option>Individual Consultation</option>
                  <option>Professional Coaching</option>
                  <option>Group Workshop</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text-dark">Message</label>
                <textarea 
                  rows={4} 
                  required
                  className="rounded-xl border-gray-100 bg-background-light p-3.5 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none" 
                  placeholder="Tell me a bit about what brings you here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full rounded-xl bg-primary py-4 text-base font-bold text-text-dark shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.98] hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

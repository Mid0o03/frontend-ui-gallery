
import React, { useState } from 'react';
import { BrutalButton } from './ui/BrutalButton';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inscrit avec: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-white border-y-4 border-black py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-6xl md:text-7xl font-black uppercase mb-4 tracking-tighter">
          Restez Informé
        </h2>
        <p className="text-xl font-bold uppercase mb-12 text-gray-700">
          Receive brutal updates every Tuesday. No spam, just pure signal.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-stretch">
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="VOTRE@EMAIL.COM"
            className="flex-1 border-4 border-black p-4 text-xl font-bold focus:outline-none focus:bg-gray-50 placeholder:text-gray-400"
            required
          />
          <BrutalButton 
            type="submit"
            className="bg-brutal-primary text-white px-10 py-4 text-xl md:border-l-0"
            shadowSize="sm"
          >
            S'inscrire
          </BrutalButton>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

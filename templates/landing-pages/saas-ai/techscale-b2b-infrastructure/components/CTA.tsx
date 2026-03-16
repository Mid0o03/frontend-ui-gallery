
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Ready to scale your vision?</h2>
        <p className="text-xl text-gray-500 mb-10">
          Join thousands of enterprises building their future on TechScale infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#135bec] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg border border-gray-200 bg-white hover:bg-gray-50 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

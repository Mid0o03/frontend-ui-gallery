import React, { useState, useLayoutEffect, useRef } from 'react';
import { content } from '../src/config/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 cursor-pointer text-left focus:outline-none"
    >
      <span className="text-lg font-bold">{question}</span>
      <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        expand_more
      </span>
    </button>
    <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="p-6 pt-0 text-gray-600 leading-relaxed">
        {answer}
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        gsap.from(itemsRef.current.children, {
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = content.faq;

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <div ref={itemsRef} className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


import React from 'react';
import { Hero } from '../../components/Hero';
import { TestimonialCard } from '../../components/TestimonialCard';
import { CTA } from '../../components/CTA';
import { TESTIMONIALS } from '../../constants';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />

            {/* Testimonials Grid */}
            <section className="px-6 md:px-20 lg:px-40 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {TESTIMONIALS.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        {...testimonial}
                    />
                ))}
            </section>

            <CTA />
        </>
    );
};

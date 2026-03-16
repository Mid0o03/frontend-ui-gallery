import React from 'react';

const Space: React.FC = () => {
    return (
        <div className="py-24 px-6">
            <div className="mx-auto max-w-[1200px] text-center">
                <h2 className="text-4xl font-extrabold tracking-tight text-text-dark md:text-5xl mb-8">The Space</h2>
                <div className="mx-auto h-1.5 w-24 rounded-full bg-primary/40 mb-12"></div>
                <p className="max-w-2xl mx-auto text-lg text-text-muted mb-12">
                    Designed to be a sanctuary of calm and focus. Our consulting rooms are quiet, private, and naturally lit to foster open communication and deep reflection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-3xl bg-soft-beige/50 p-12 flex items-center justify-center min-h-[300px]">
                        <span className="text-text-muted italic">Professional Environment</span>
                    </div>
                    <div className="rounded-3xl bg-soft-beige/50 p-12 flex items-center justify-center min-h-[300px]">
                        <span className="text-text-muted italic">Private Consultation Room</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Space;

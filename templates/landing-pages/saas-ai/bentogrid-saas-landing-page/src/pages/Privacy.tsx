import React from 'react';
import { branding } from '../config/branding';


const Privacy: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-background-light">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
                    <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy <span className="text-primary">Policy</span></h1>

                    <div className="space-y-8 prose prose-gray max-w-none">
                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                                Information We Collect
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                We collect information you provide directly to us, such as when you create an account, update your profile, or contact customer support. This may include your name, email address, and payment information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                                How We Use Your Information
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about your account and updates to our service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                                Data Sharing and Disclosure
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                We do not share your personal information with third parties except as described in this policy, such as with service providers like Stripe who assist us in operating our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                                Data Security
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">5</span>
                                Your Rights
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                You have the right to access, update, or delete your personal information. You can do this by logging into your account or by contacting us directly.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between text-sm text-gray-400">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        <p>© {new Date().getFullYear()} {branding.name} Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;

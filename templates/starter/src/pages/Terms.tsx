import React from 'react';
import { branding } from '../config/branding';


const Terms: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-background-light">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
                    <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of <span className="text-primary">Service</span></h1>

                    <div className="space-y-8 prose prose-gray max-w-none">
                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                                Acceptance of Terms
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                By accessing and using {branding.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                                Description of Service
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                BentoGrid SaaS provides a platform for building dashboard interfaces. We reserve the right to modify or discontinue the service at any time without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                                User Obligations
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                Users are responsible for maintaining the confidentiality of their accounts and for all activities that occur under their account. You must provide accurate and complete information when creating an account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                                Payment Terms
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                Certain features of our service require payment of fees. All fees are non-refundable unless otherwise stated. We use Stripe for payment processing.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">5</span>
                                Limitation of Liability
                            </h2>
                            <p className="text-gray-500 leading-relaxed">
                                BentoGrid SaaS shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.
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

export default Terms;

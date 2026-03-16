import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStripe } from '../lib/stripe';
import { supabase } from '../lib/supabase';
import { content } from '../config/content';

const Pricing: React.FC = () => {
    const navigate = useNavigate();
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
    const [loading, setLoading] = useState<string | null>(null);

    const plans = [
        {
            name: 'Starter',
            id: 'price_starter_id', // Template users should replace these
            price: billingCycle === 'monthly' ? '$0' : '$0',
            desc: 'Free forever for individuals.',
            features: ['3 Projects', 'Basic Analytics', 'Community Support', '1GB Storage'],
            button: 'Get Started',
            highlight: false
        },
        {
            name: 'Pro',
            id: 'price_pro_id',
            price: billingCycle === 'monthly' ? '$29' : '$290',
            desc: 'Ideal for growing teams.',
            features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '10GB Storage', 'Custom Domains'],
            button: 'Buy Pro',
            highlight: true
        },
        {
            name: 'Business',
            id: 'price_business_id',
            price: billingCycle === 'monthly' ? '$99' : '$990',
            desc: 'The power of scale.',
            features: ['Enterprise Security', 'Dedicated Manager', 'API Access', '100GB Storage', 'Custom Branding'],
            button: 'Buy Business',
            highlight: false
        }
    ];

    const handleCheckout = async (priceId: string, planName: string) => {
        // Handle 'Starter' (Free) plan by redirecting to signup
        if (planName === 'Starter') {
            navigate('/signup');
            return;
        }

        setLoading(planName);

        // Check for active user session before proceeding to payment
        const { data: { session } } = await supabase.auth.getSession();

        if (!session) {
            navigate('/login');
            return;
        }

        // --- STRIPE INTEGRATION LOGIC ---
        // In a production environment, you would call a backend endpoint (Edge Function)
        // to create a Stripe Checkout Session.
        try {
            const stripe = await getStripe();
            if (!stripe) throw new Error('Stripe failed to load');

            // Template Notice: The code below demonstrates the logic.
            // You must implement your own backend endpoint to handle security & state.
            alert(`Redirecting to Stripe Checkout for ${planName} (${priceId})...\n\nNotice: Template users must implement the backend /create-checkout-session endpoint.`);

            /*
            // PROD EXAMPLE:
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ priceId, customerEmail: session.user.email })
            });
            const session = await response.json();
            await stripe.redirectToCheckout({ sessionId: session.id });
            */
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(null);
        }
    };

    return (
        <div className="pt-32 pb-20 bg-background-light min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        {content.pricing.title} <span className="text-primary truncate">{content.pricing.titleAccent}</span>
                    </h1>
                    <p className="text-xl text-gray-500">
                        {content.pricing.subtitle}
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                            className="w-14 h-8 bg-gray-200 rounded-full p-1 transition-all relative"
                        >
                            <div className={`size-6 bg-white rounded-full shadow-sm transition-all transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`}></div>
                        </button>
                        <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>Yearly <span className="text-green-500 text-xs ml-1">Save 20%</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {plans.map((plan, i) => (
                        <div key={i} className={`p-10 rounded-[2.5rem] bg-white border flex flex-col justify-between transition-all hover:scale-[1.02] ${plan.highlight ? 'border-primary shadow-2xl shadow-primary/10 ring-1 ring-primary' : 'border-gray-100 shadow-xl shadow-gray-200/50'}`}>
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{plan.name}</h3>
                                    {plan.highlight && <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold uppercase tracking-wider">Most Popular</span>}
                                </div>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                                    <span className="text-gray-400 font-medium">{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-8 leading-relaxed">{plan.desc}</p>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => handleCheckout(plan.id, plan.name)}
                                disabled={loading !== null}
                                className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-[0.98] ${plan.highlight ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90' : 'bg-gray-50 text-gray-900 hover:bg-gray-100'}`}
                            >
                                {loading === plan.name ? 'Processing...' : plan.button}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Secure Payments Info */}
                <div className="max-w-4xl mx-auto p-12 rounded-[3.5rem] bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex items-center gap-6">
                        <div className="size-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Secure Payments with Stripe</h4>
                            <p className="text-gray-400 text-sm">256-bit AES encryption & PCI compliance</p>
                        </div>
                    </div>
                    <div className="flex gap-4 grayscale opacity-50">
                        <span className="material-symbols-outlined text-4xl">credit_card</span>
                        <span className="material-symbols-outlined text-4xl">account_balance</span>
                        <span className="material-symbols-outlined text-4xl">contactless</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;

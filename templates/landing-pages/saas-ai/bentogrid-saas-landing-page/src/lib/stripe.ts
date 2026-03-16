import { loadStripe } from '@stripe/stripe-js';

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

export const getStripe = () => {
    if (!stripePublishableKey) {
        console.warn('Stripe publishable key missing. Please check your .env file.');
        return null;
    }
    return loadStripe(stripePublishableKey);
};

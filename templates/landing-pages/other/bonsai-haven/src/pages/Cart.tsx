import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
    return (
        <div className="pt-10 pb-20 px-6 max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 bg-moss/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🪴</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-moss dark:text-white mb-4">Your cart is empty</h1>
            <p className="text-moss/60 dark:text-white/60 mb-8">It looks like you haven't added any trees to your sanctuary yet.</p>

            <Link to="/shop" className="flex items-center gap-2 bg-primary text-background-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                <ArrowLeft size={18} />
                <span>Return to Shop</span>
            </Link>
        </div>
    );
};

export default Cart;

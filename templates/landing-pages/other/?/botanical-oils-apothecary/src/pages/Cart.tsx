import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart: React.FC = () => {
    return (
        <div className="py-24 px-6 lg:px-20 max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart size={48} className="text-primary" />
            </div>
            <h1 className="text-3xl font-extrabold text-forest-green dark:text-white mb-4">Your Cart is Empty</h1>
            <p className="text-slate-500 mb-8">Looks like you haven't added any botanical extracts yet.</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">Start Shopping</button>
        </div>
    );
};

export default Cart;

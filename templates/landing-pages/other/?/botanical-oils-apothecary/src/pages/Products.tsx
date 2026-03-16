import React from 'react';
import ProductSection from '../components/ProductSection';

const Products: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
    return (
        <div className="pt-10">
            <ProductSection onAddToCart={onAddToCart} />
        </div>
    );
};

export default Products;

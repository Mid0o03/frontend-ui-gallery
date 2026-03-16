import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

// Pages
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import About from './src/pages/About';
import Learn from './src/pages/Learn';
import Cart from './src/pages/Cart';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar cartCount={cartCount} />
        <main>
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/products" element={<Products onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/cart" element={<Cart />} />
            {/* Fallback routes for footer links */}
            <Route path="*" element={<Home onAddToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

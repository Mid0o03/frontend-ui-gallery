
import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { BrutalButton } from './ui/BrutalButton';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b-4 border-black bg-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <LayoutGrid size={32} strokeWidth={3} />
          <span className="text-2xl font-black tracking-tighter uppercase">Design Platform</span>
        </Link>

        <div className="hidden md:flex gap-8 font-bold text-lg uppercase">
          <Link to="/courses" className="hover:underline decoration-4 underline-offset-4">Courses</Link>
          <Link to="/workshops" className="hover:underline decoration-4 underline-offset-4">Workshops</Link>
          <Link to="/resources" className="hover:underline decoration-4 underline-offset-4">Resources</Link>
        </div>

        <BrutalButton className="bg-brutal-primary text-white text-sm px-6 py-2" shadowSize="sm">
          Login
        </BrutalButton>
      </div>
    </nav>
  );
};

export default Navbar;

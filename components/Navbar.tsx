
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-rose-600 rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-500 border-2 border-white">
              <span className="text-white font-serif font-bold text-xl md:text-2xl leading-none">RR</span>
              <div className="absolute -top-1 -right-1">
                <Sparkles size={16} className="text-amber-300 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold font-serif leading-none ${isScrolled ? 'text-rose-900' : 'text-rose-800 md:text-white lg:text-rose-800'}`}>
                Raj Rani®
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold leading-none mt-1 ${isScrolled ? 'text-stone-500' : 'text-stone-200 md:text-white/80 lg:text-stone-500'}`}>
                Ladies Beauty Parlour
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-rose-600 ${
                  isActive(link.path) 
                    ? 'text-rose-600 border-b-2 border-rose-600' 
                    : isScrolled ? 'text-stone-700' : 'text-stone-700 md:text-white lg:text-stone-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-rose-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${isScrolled ? 'text-rose-900' : 'text-white'}`}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 py-6 absolute top-full w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-5 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold ${isActive(link.path) ? 'text-rose-600' : 'text-stone-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="bg-rose-600 text-white text-center py-4 rounded-2xl font-bold shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

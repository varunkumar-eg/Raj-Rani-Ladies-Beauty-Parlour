
import React, { useState, useEffect } from 'react';
// Correct standard named imports for react-router-dom v6
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Menu, X, Phone, MapPin, Award, BookOpen, Star, 
  ChevronRight, Scissors, Sparkles, Heart, ShieldCheck, 
  Instagram, Facebook, MessageSquare 
} from 'lucide-react';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BeautyConsultant from './components/BeautyConsultant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isScrolled={isScrolled} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <BeautyConsultant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

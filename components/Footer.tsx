
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Award, AlertTriangle, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 flex items-center justify-center bg-rose-600 rounded-full border-2 border-stone-700 shadow-xl shadow-rose-900/40">
                <span className="text-white font-serif font-bold text-xl">RR</span>
                <div className="absolute -top-1 -right-1">
                  <Sparkles size={12} className="text-amber-300" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold font-serif text-white block leading-tight">Raj Rani®</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Ladies Beauty Parlour</span>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Muzaffarpur's Original Choice since 2007. Official UDYAM & Trade Mark Registered organization.
            </p>
            <div className="bg-amber-900/20 border border-amber-600/30 p-4 rounded-xl flex items-start space-x-3 mb-6">
              <AlertTriangle className="text-amber-500 shrink-0" size={18} />
              <p className="text-[10px] text-amber-200/70 font-bold uppercase tracking-wide">Warning: No authorised branches elsewhere. Stay vigilant.</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 underline decoration-rose-600 underline-offset-8">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-stone-400 hover:text-rose-500 transition-colors text-sm font-medium">Home</Link></li>
              <li><Link to="/services" className="text-stone-400 hover:text-rose-500 transition-colors text-sm font-medium">Services</Link></li>
              <li><Link to="/education" className="text-stone-400 hover:text-rose-500 transition-colors text-sm font-medium">Academy</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-rose-500 transition-colors text-sm font-medium">Directions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 underline decoration-rose-600 underline-offset-8">Amenities</h4>
            <ul className="space-y-4">
              <li className="text-stone-400 text-sm font-medium">Personal Building</li>
              <li className="text-stone-400 text-sm font-medium">Private Parking</li>
              <li className="text-stone-400 text-sm font-medium">Waiting Hall</li>
              <li className="text-stone-400 text-sm font-medium">Free Fiber Wifi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 underline decoration-rose-600 underline-offset-8">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-rose-600 w-5 h-5 shrink-0" />
                <span className="text-stone-400 text-sm">Main Market, Rama Talkies Lane, Saraiya, Muzaffarpur</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-rose-600 w-5 h-5 shrink-0" />
                <span className="text-stone-400 text-sm font-bold">+91 8539997115</span>
              </li>
              <li className="flex items-start space-x-3 mt-4 bg-stone-800/50 p-4 rounded-xl border border-stone-700">
                <Award className="text-rose-600 w-6 h-6 shrink-0" />
                <div>
                   <p className="text-xs uppercase tracking-widest font-bold text-white">Registered Brand</p>
                   <p className="text-[10px] text-stone-500 mt-1">MSME & Trade Mark Certified®</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© 2007-2025 Raj Rani® Ladies Beauty Parlour. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0 italic font-medium">
            <span>Owner: Mrs. Sananta Kumari</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

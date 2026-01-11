
import React from 'react';
import { Phone, MapPin, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, AlertCircle, Wifi, Car, Coffee } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-serif font-bold text-stone-900 mb-6">Visit Our Parlour</h1>
            <p className="text-lg text-stone-600 mb-10">We are located in the heart of Muzaffarpur's Main Market. Enjoy premium comfort with our private building facilities.</p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-rose-600">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Our Address</h4>
                  <p className="text-stone-600 mt-1">Main Market, Rama Talkies Lane, Saraiya,<br />Muzaffarpur, Bihar - 843126</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-rose-600">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Call Us</h4>
                  <p className="text-stone-600 mt-1">+91 8539997115</p>
                  <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest font-bold">Mon-Sun: 10AM - 8PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-rose-600">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Official & Secure</h4>
                  <p className="text-stone-600 mt-1">Personal Building | MSME & Trade Mark Registered®</p>
                  <p className="text-rose-600 font-bold mt-1 text-sm">NO BRANCH AUTHORISED ELSEWHERE</p>
                </div>
              </div>
            </div>

            {/* Quick Amenities Icons */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                 <Car size={20} className="text-rose-600 mb-2" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Private Parking</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                 <Coffee size={20} className="text-rose-600 mb-2" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Waiting Hall</span>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex flex-col items-center text-center">
                 <Wifi size={20} className="text-rose-600 mb-2" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Free Internet</span>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="https://facebook.com" className="p-3 bg-white border border-stone-200 rounded-full hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm">
                <MessageSquare className="text-stone-600" />
              </a>
              <a href="https://instagram.com" className="p-3 bg-white border border-stone-200 rounded-full hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm">
                <ExternalLink className="text-stone-600" />
              </a>
            </div>
          </div>

          {/* Shop Photo */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mb-8">
               <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1200" 
                alt="Raj Rani Ladies Beauty Parlour Shop Front" 
                className="w-full h-[400px] object-cover"
               />
               <div className="absolute top-6 left-6 bg-rose-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center space-x-2">
                 <AlertCircle size={16} />
                 <span>Original Main Market Branch</span>
               </div>
            </div>
            
            <div className="bg-stone-900 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-serif font-bold mb-4 italic text-rose-400">Premium Comforts</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-sm text-stone-300">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                  <span>Dedicated Personal Building</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-stone-300">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                  <span>Private Secure Parking Space</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-stone-300">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                  <span>Guardian/Husband Waiting Hall</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-stone-300">
                  <div className="w-1.5 h-1.5 bg-rose-600 rounded-full"></div>
                  <span>Ultra-Clean Personal Washrooms</span>
                </li>
              </ul>
              <button className="w-full bg-rose-600 py-4 rounded-xl font-bold hover:bg-rose-700 transition-all shadow-lg flex items-center justify-center space-x-2">
                <span>Navigate to Main Market</span>
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

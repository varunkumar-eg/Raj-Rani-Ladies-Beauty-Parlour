
import React from 'react';
import { Sparkles, Scissors, Heart, User, Clock, Check } from 'lucide-react';

const services = [
  {
    category: 'Skin Care',
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      { name: 'O3+ Diamond Facial', price: '₹1500+', desc: 'For instant glow and tan removal' },
      { name: 'Hydra Facial', price: '₹2500+', desc: 'Deep cleansing and hydration' },
      { name: 'Fruit Cleanup', price: '₹500+', desc: 'Refreshing natural treatment' },
      { name: 'De-Tan Treatment', price: '₹350+', desc: 'Remove sun damage effectively' },
    ]
  },
  {
    category: 'Hair Artistry',
    icon: <Scissors className="w-6 h-6" />,
    items: [
      { name: 'Hair Smoothing', price: '₹3000+', desc: 'Silky and manageable hair' },
      { name: 'Keratin Treatment', price: '₹4000+', desc: 'Protein therapy for frizzy hair' },
      { name: 'Global Hair Color', price: '₹1800+', desc: 'Vibrant shades with shine' },
      { name: 'Laser Hair Cut', price: '₹500+', desc: 'Modern precision styling' },
    ]
  },
  {
    category: 'Makeup & Bridal',
    icon: <Heart className="w-6 h-6" />,
    items: [
      { name: 'HD Bridal Makeup', price: '₹8000+', desc: 'Flawless look for your big day' },
      { name: 'Airbrush Makeup', price: '₹12000+', desc: 'Ultra-lightweight and durable' },
      { name: 'Party Makeup', price: '₹2000+', desc: 'Quick glam for events' },
      { name: 'Draping & Styling', price: '₹500+', desc: 'Saree and dupatta styling' },
    ]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Our Premium Services</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Luxury treatments designed to enhance your natural beauty. Experience the royalty with Mrs. Sananta Kumari's expertise.</p>
        </div>

        {/* Pricing Table Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((section, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 flex flex-col">
              <div className="bg-stone-900 p-8 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold">{section.category}</h3>
                  <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">Professional Care</p>
                </div>
                <div className="bg-rose-600 p-3 rounded-2xl">
                  {section.icon}
                </div>
              </div>
              <div className="p-8 space-y-8 flex-grow">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start group cursor-default">
                    <div>
                      <h4 className="font-bold text-stone-900 group-hover:text-rose-600 transition-colors">{item.name}</h4>
                      <p className="text-sm text-stone-500 mt-1">{item.desc}</p>
                    </div>
                    <span className="font-bold text-rose-600 ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button className="w-full py-3 border-2 border-stone-900 text-stone-900 font-bold rounded-xl hover:bg-stone-900 hover:text-white transition-all">
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-20 bg-rose-600 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500 rounded-full translate-x-1/4 translate-y-1/4 opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">Unlock Your Royal Privileges</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-3xl font-bold mb-2">5 + 1 FREE</h4>
                <p className="text-rose-100">Subscribe to any 5 services and enjoy your 6th visit completely on us. Perfect for your monthly routines!</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h4 className="text-3xl font-bold mb-2">50% OFF</h4>
                <p className="text-rose-100">Become a Yearly Member today and slash your bills by half. The most premium value for our regulars.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

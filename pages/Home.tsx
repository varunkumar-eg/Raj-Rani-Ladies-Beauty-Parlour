
import React, { useState, useEffect } from 'react';
// Added missing Phone import
import { 
  ShieldCheck, Award, Star, Scissors, Sparkles, Heart, 
  ChevronRight, CheckCircle2, ChevronLeft, AlertTriangle, 
  MapPin, Camera, Building2, Car, Coffee, Wifi, UserCheck,
  Plus, Minus, Quote, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1920",
    title: "Raj Rani® Legacy",
    subtitle: "Muzaffarpur's Most Trusted Main Market Destination Since 2007.",
    tag: "Original Brand"
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1920",
    title: "Exquisite Bridal Care",
    subtitle: "Creating timeless memories with HD & Airbrush bridal artistry.",
    tag: "Bridal Expert"
  },
  {
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1920",
    title: "Royal Infrastructure",
    subtitle: "Private Building, Personal Parking & Guardian Waiting Hall.",
    tag: "Premium Facilities"
  }
];

const REVIEWS = [
  {
    name: "Priya Sharma",
    service: "Bridal Makeup",
    text: "The best bridal experience in Muzaffarpur. Mrs. Sananta personally ensured my look was perfect. The airbrush makeup lasted all day!",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    service: "Hair Smoothing",
    text: "I've been coming here since 2012. The quality is unmatched. I love that they have a private building and safe parking.",
    rating: 5
  },
  {
    name: "Sneha Verma",
    service: "O3+ Facial",
    text: "Very hygienic and professional. The 5+1 free scheme is great for regular customers like me. Highly recommended!",
    rating: 5
  }
];

const FAQS = [
  {
    question: "Where is Raj Rani® exactly located?",
    answer: "We are located at Rama Talkies Lane, Saraiya, in the heart of the Main Market, Muzaffarpur. We are housed in our own personal building for your privacy."
  },
  {
    question: "Do you have any other branches in Bihar?",
    answer: "No. Raj Rani® Ladies Beauty Parlour has NO authorised branches anywhere else. We are the original and only registered brand under Mrs. Sananta Kumari's leadership."
  },
  {
    question: "What is the 5+1 Free scheme?",
    answer: "It's our loyalty program! When you take any 5 services from us, your 6th visit/service is absolutely free. It's our way of thanking our regular clients."
  },
  {
    question: "Is there a place for my husband/guardian to wait?",
    answer: "Yes! We have a dedicated, air-conditioned Guardian Waiting Hall specifically designed for husbands or guardians who accompany our clients."
  },
  {
    question: "Do I need to book an appointment?",
    answer: "While we do accept walk-ins, we highly recommend booking an appointment via our 'Book Now' button or calling 8539997115 to avoid waiting during peak hours."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="overflow-hidden">
      {/* Top Banner Notice Section */}
      <div className="bg-white border-b border-stone-100 py-4 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-2xl md:text-3xl font-serif font-black text-rose-700 tracking-tight text-center md:text-left">
            1st Choice of Ladies from 2007
          </p>
          <div className="bg-rose-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 animate-blink shadow-lg border-2 border-rose-400">
            <AlertTriangle size={20} className="text-white" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
              Not our authorised branch any where
            </span>
          </div>
        </div>
      </div>

      {/* Hero Slider Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-stone-900">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 scale-105 animate-[kenburns_20s_infinite_alternate]">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/40 to-transparent"></div>
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-600/20 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
                  <Sparkles size={14} />
                  <span>{slide.tag}</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold font-serif text-white leading-tight mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-stone-200 mb-10 font-light max-w-lg leading-relaxed italic">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    to="/services" 
                    className="group bg-rose-600 text-white px-10 py-5 rounded-full font-bold text-center hover:bg-rose-700 transition-all flex items-center justify-center space-x-2 shadow-2xl hover:shadow-rose-600/40"
                  >
                    <span>Explore Our Services</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-12 right-12 z-30 flex items-center space-x-4">
          <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all group">
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all group">
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Meet the Owner - Brand Seal Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 flex flex-col items-center justify-center p-12 bg-stone-900 rounded-[4rem] shadow-2xl aspect-[4/5]">
                <div className="w-48 h-48 rounded-full border-4 border-rose-600 flex items-center justify-center mb-8 relative">
                   <span className="text-white font-serif font-bold text-8xl">RR</span>
                   <div className="absolute -top-4 -right-4 bg-rose-600 p-3 rounded-full shadow-lg">
                     <Award className="text-white w-8 h-8" />
                   </div>
                </div>
                <div className="text-center">
                   <h3 className="text-white font-serif text-3xl italic mb-2">Raj Rani®</h3>
                   <div className="h-0.5 w-32 bg-rose-600 mx-auto mb-4"></div>
                   <p className="text-stone-400 text-xs uppercase tracking-[0.4em] font-black">Trade Mark Registered</p>
                   <p className="text-stone-500 text-[10px] mt-4 uppercase tracking-widest italic">Quality Excellence Since 2007</p>
                </div>
                
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/20 whitespace-nowrap text-center">
                   <p className="font-serif font-bold text-white text-xl">Mrs. Sananta Kumari</p>
                   <p className="text-[10px] text-rose-400 uppercase tracking-[0.3em] font-black">Head Designer & Owner</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rose-50 rounded-full -z-0"></div>
              <div className="absolute -top-12 -right-12 bg-rose-600 text-white p-10 rounded-[2.5rem] z-20 hidden lg:flex flex-col items-center shadow-2xl text-center">
                <Star className="w-10 h-10 mb-4" fill="currentColor" />
                <p className="text-4xl font-bold">15+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">Years Excellence</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-rose-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block text-center md:text-left">Professional Vision</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-8 leading-tight text-center md:text-left underline decoration-rose-600 decoration-4 underline-offset-8">Direct Ownership</h2>
              <p className="text-stone-500 text-xl leading-relaxed mb-10 italic font-light text-center md:text-left">
                "Raj Rani® is not just a business; it is a promise of quality I personally oversee. Every makeover and every student trained in our academy reflects our 15-year commitment to excellence in Muzaffarpur."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Owner Supervised Services",
                  "Trade Mark Registered®",
                  "Personal Building Privacy",
                  "Premium Main Market Hub"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="bg-rose-100 p-1 rounded-full">
                      <CheckCircle2 className="text-rose-600 w-5 h-5" />
                    </div>
                    <span className="text-stone-700 font-bold text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center space-x-3 bg-stone-900 text-white px-10 py-5 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl group">
                  <span>Contact Owner Directly</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - VOICES OF ROYALTY */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Voices of Royalty</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 flex flex-col relative group hover:shadow-xl transition-all">
                <div className="absolute top-8 right-8 text-stone-100 group-hover:text-rose-50 transition-colors">
                  <Quote size={64} />
                </div>
                <div className="flex space-x-1 mb-6 relative">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 italic leading-relaxed mb-8 relative line-clamp-4">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-6 border-t border-stone-100 relative">
                  <h4 className="font-bold text-stone-900">{review.name}</h4>
                  <p className="text-rose-600 text-xs uppercase tracking-widest font-bold mt-1">{review.service}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-stone-500 font-bold text-sm uppercase tracking-widest hover:text-rose-600 transition-colors inline-flex items-center space-x-2">
              <span>Read more reviews on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Royal Infrastructure & Amenities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Royal Amenities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">World-Class Infrastructure</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Providing a secure, comfortable, and luxurious environment for Muzaffarpur's elite clientele.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Building</h3>
              <p className="text-stone-500 text-sm">Our own dedicated property in Rama Talkies Lane ensures complete privacy and no shared distractions.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Parking</h3>
              <p className="text-stone-500 text-sm">Secure parking for your vehicle right at our door-step, away from the market crowd.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                <Coffee className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Guardian Waiting Hall</h3>
              <p className="text-stone-500 text-sm">A dedicated, air-conditioned space for husbands and guardians to wait in comfort.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                <Wifi className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Fiber Internet</h3>
              <p className="text-stone-500 text-sm">High-speed fiber connectivity for our clients to stay connected or work while being pampered.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                <UserCheck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Washrooms</h3>
              <p className="text-stone-500 text-sm">Exclusively clean and hygienic private washroom facilities for the lady clients only.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Main Market Hub</h3>
              <p className="text-stone-500 text-sm">The most accessible location in Muzaffarpur, in the heart of the bustling shopping district.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - COMMON QUERIES */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-stone-400">Everything you need to know about Muzaffarpur's #1 Ladies Parlour.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-stone-800 rounded-2xl overflow-hidden transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl">{faq.question}</span>
                  <div className="bg-rose-600 p-1 rounded-lg">
                    {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-6 pt-0 text-stone-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center">
             <p className="text-stone-300 mb-6 font-medium italic text-lg">Still have questions? Our AI Consultant is available 24/7 or call us directly.</p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="bg-rose-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-rose-700 transition-all flex items-center space-x-2">
                  <Phone size={18} />
                  <span>8539997115</span>
                </Link>
                <p className="text-stone-500 uppercase tracking-widest font-black text-xs">Always at your service</p>
             </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

// Simple helper for external links missing in current scope if needed, but ExternalLink is standard in lucide
const ExternalLink = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

export default Home;


import React from 'react';
import { BookOpen, Award, GraduationCap, CheckCircle2, Star, Users } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-stone-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-rose-400 font-bold uppercase tracking-widest text-xs mb-4">
              <BookOpen size={16} />
              <span>Vocational Training Academy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">Empowering Future Beauty Experts</h1>
            <p className="text-stone-400 text-lg mb-8">
              Raj Rani Academy provides professional education in cosmetology, skin care, and hair artistry. 
              Get certified and start your career with India's trusted brand.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-stone-900 bg-stone-700" src={`https://picsum.photos/seed/student${i}/100/100`} alt="Student" />
                ))}
              </div>
              <div>
                <p className="font-bold">500+ Students</p>
                <p className="text-xs text-stone-500 uppercase">Successfully Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-8">Professional Courses</h2>
              <div className="space-y-6">
                {[
                  { title: 'Diploma in Cosmetology', duration: '6 Months', desc: 'Comprehensive study of hair, skin, and makeup' },
                  { title: 'Advanced Hair Styling', duration: '3 Months', desc: 'Chemical treatments, cuts, and modern styling' },
                  { title: 'Bridal Makeup Mastery', duration: '2 Months', desc: 'HD and Airbrush techniques for destination weddings' },
                  { title: 'Skin Aesthetics', duration: '3 Months', desc: 'Facials, anatomy, and advanced skin machines' },
                ].map((course, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start space-x-4">
                    <div className="bg-rose-100 text-rose-600 p-3 rounded-xl">
                      <GraduationCap />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{course.title}</h4>
                      <p className="text-xs text-stone-500 font-medium mb-1">Duration: {course.duration}</p>
                      <p className="text-sm text-stone-600">{course.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/edu1/400/500" className="rounded-2xl shadow-lg mt-8" alt="Training" />
                <img src="https://picsum.photos/seed/edu2/400/500" className="rounded-2xl shadow-lg" alt="Training" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl border border-stone-100 text-center">
                <Award size={48} className="text-rose-600 mx-auto mb-4" />
                <h3 className="font-serif font-bold text-xl mb-1">Certified by</h3>
                <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Raj Rani Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Why Train With Us?</h2>
          <p className="text-stone-600">We don't just teach skills; we build careers.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { icon: <CheckCircle2 />, title: 'Hands-on Practice', desc: 'Work with real clients and professional products.' },
            { icon: <Users />, title: 'Placement Assistance', desc: 'We help you find jobs in top salons or start your own.' },
            { icon: <Star />, title: 'Expert Guidance', desc: 'Learn directly from Mrs. Sananta Kumari and her technical team.' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-8 bg-stone-50 rounded-3xl group hover:bg-rose-600 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-rose-600 shadow-md group-hover:bg-white/20 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white">{item.title}</h3>
              <p className="text-stone-600 group-hover:text-rose-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;

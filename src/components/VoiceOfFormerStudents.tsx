import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  Sparkles,
} from 'lucide-react';

export const VoiceOfFormerStudents: React.FC = () => {
  const { testimonials } = useSchool();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40 border-b border-emerald-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Alumni Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Voice of Our Former Students
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Hear from Triveni graduates who are now leading agricultural extension in municipalities, founding hi-tech nurseries, and pursuing higher degrees at top universities.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg shadow-emerald-950/5 border border-emerald-100 relative">
            <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 text-emerald-100 -z-0" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              {/* Student Photo & Identity */}
              <div className="shrink-0 text-center md:text-left">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-500/40">
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-amber-950 p-1 rounded-full">
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{current.name}</h3>
                  <p className="text-xs font-semibold text-emerald-700">{current.batch}</p>
                  <p className="text-[11px] text-slate-500">{current.gradeCompleted}</p>
                </div>
              </div>

              {/* Testimonial Quote & Highlights */}
              <div className="flex-1 flex flex-col justify-between text-center md:text-left">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-lg mb-4">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{current.keyHighlight}</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    "{current.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-slate-900">{current.currentRole}</span>
                    <span className="text-slate-400 mx-1.5">·</span>
                    <span className="text-emerald-700">{current.currentInstitution}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{current.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between sm:justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 shadow-md border border-slate-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 shadow-md border border-slate-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

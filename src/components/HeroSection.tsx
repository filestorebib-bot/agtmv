import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ArrowRight,
  FileText,
  Sprout,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  MapPin,
  Sparkles,
} from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80',
    caption: 'Modern Agronomy & Field Demonstration at Katari-4, Udayapur',
    badge: 'Technical Secondary Education (CDC / NEB Nepal)',
  },
  {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
    caption: 'Climate-Controlled Polyhouse & Commercial Vegetable Cultivation',
    badge: 'Practical Greenhouse Technology & Drip Fertigation',
  },
  {
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1600&q=80',
    caption: 'Hands-on Seedling Propagation & Organic Plant Protection',
    badge: 'On-the-Job Training & Extension Attachment',
  },
];

export const HeroSection: React.FC = () => {
  const { navigateToPage } = useSchool();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-emerald-950 text-white">
      {/* Background Slideshow with Parallax/Fade */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover object-center brightness-40"
            />
          </div>
        ))}

        {/* Gradient overlays for readability & luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-transparent"></div>
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">
          {/* Institutional Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Koshi Province Agricultural Center of Excellence</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="hidden sm:inline text-emerald-200/80 font-normal">NEB Affiliated</span>
          </div>

          {/* Main School & Department Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Triveni Secondary School
            <span className="block text-2xl sm:text-4xl lg:text-5xl text-emerald-300 font-bold mt-2">
              Department of Plant Science
            </span>
          </h1>

          {/* Location & Tagline */}
          <div className="flex items-center gap-2 text-emerald-200/90 text-sm sm:text-base font-medium mt-3">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Katari-4, Udayapur, Koshi Province, Nepal · Phone: 035-450-154</span>
          </div>

          <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
            Nurturing future agricultural scientists, agronomists, and agri-entrepreneurs through four years of rigorous technical secondary education (Classes 9–12), cutting-edge polyhouse farming, and comprehensive On-the-Job Training.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigateToPage('programs')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-900/50 hover:shadow-emerald-700/60 transition-all flex items-center gap-2.5 group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigateToPage('notices')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>View Notices & Routine</span>
            </button>

            <button
              onClick={() => navigateToPage('ojt')}
              className="px-5 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-200 text-sm font-medium border border-emerald-700/50 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>OJT Field Training</span>
            </button>
          </div>

          {/* Trust Metric Highlights */}
          <div className="mt-12 pt-8 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-700/30 backdrop-blur-xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">4 Years</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">Classes 9 to 12 Technical</p>
            </div>
            <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-700/30 backdrop-blur-xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">100%</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">Practical OJT Exposure</p>
            </div>
            <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-700/30 backdrop-blur-xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">5+ Ropani</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">Research Farm & Polyhouse</p>
            </div>
            <div className="bg-emerald-900/30 p-3 rounded-xl border border-emerald-700/30 backdrop-blur-xs">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">JTA / B.Sc.</p>
              <p className="text-xs text-emerald-200/80 mt-0.5">Career & Degree Pathways</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-1.5 px-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-6 bg-emerald-400' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

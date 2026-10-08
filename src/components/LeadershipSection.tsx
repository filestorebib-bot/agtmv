import React, { useState, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
  Award,
  ShieldCheck,
} from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const { leadership, gallery, setLightboxImage } = useSchool();
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);

  const coordinator = leadership.find((l) => l.role === 'Coordinator') || leadership[0];
  const principal = leadership.find((l) => l.role === 'Principal') || leadership[1];

  // Center slider items: use images from gallery
  const sliderItems = gallery.slice(0, 8);

  useEffect(() => {
    if (sliderItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentGalleryIdx((prev) => (prev + 1) % sliderItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [sliderItems.length]);

  const nextGallery = () => {
    setCurrentGalleryIdx((prev) => (prev + 1) % sliderItems.length);
  };

  const prevGallery = () => {
    setCurrentGalleryIdx((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  };

  const currentItem = sliderItems[currentGalleryIdx] || {
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    title: 'Triveni Secondary School Campus',
    caption: 'Academic and Agricultural Demonstration Facility at Katari-4, Udayapur',
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
            Academic Governance & Leadership
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guiding Triveni Towards Agricultural Excellence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dedicated leadership steering technical plant science education, cutting-edge agronomic fieldwork, and strong community partnerships in Udayapur.
          </p>
        </div>

        {/* 3-Column Professional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column — Coordinator (Kailash Rayamajhi) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Profile Photo */}
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-500/30">
                  <img
                    src={coordinator.photo}
                    alt={coordinator.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white p-1 rounded-full shadow-xs">
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Coordinator
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{coordinator.name}</h3>
                  {coordinator.nepaliName && (
                    <p className="text-xs font-medium text-emerald-800">{coordinator.nepaliName}</p>
                  )}
                  <p className="text-xs text-slate-500 mt-1 font-medium">{coordinator.designation}</p>
                </div>

                {/* Short Introduction */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed text-justify">
                  <p>{coordinator.introduction}</p>
                </div>
              </div>

              {/* Contact Information & Credentials */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{coordinator.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{coordinator.email}</span>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">Credentials:</span>
                  <div className="flex flex-wrap gap-1">
                    {coordinator.credentials.map((c, i) => (
                      <span key={i} className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column — School Image Gallery Slider */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full bg-slate-900 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between border border-slate-800 group relative">
              {/* Slider Viewport */}
              <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] overflow-hidden">
                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Lightbox Trigger on Click */}
                <button
                  onClick={() =>
                    setLightboxImage({
                      url: currentItem.imageUrl,
                      title: currentItem.title,
                      caption: currentItem.caption,
                    })
                  }
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-emerald-600 text-white rounded-xl backdrop-blur-md transition-colors shadow-lg z-10"
                  title="Expand to Fullscreen Lightbox"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Slider Gradient Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-400 mb-1">
                    <span className="px-2 py-0.5 bg-emerald-950/80 rounded border border-emerald-700/50">
                      {currentItem.category || 'Practical Demonstration'}
                    </span>
                    <span>·</span>
                    <span>Katari-4, Udayapur</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-xs">
                    {currentItem.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {currentItem.caption}
                  </p>
                </div>

                {/* Prev / Next Nav Buttons */}
                <button
                  onClick={prevGallery}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-md transition-colors"
                  aria-label="Previous gallery image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextGallery}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-emerald-600 text-white backdrop-blur-md transition-colors"
                  aria-label="Next gallery image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slider Bottom Controls & Dots */}
              <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-t border-slate-800">
                <span className="text-[11px] text-slate-400 font-mono">
                  Image {currentGalleryIdx + 1} of {sliderItems.length}
                </span>

                <div className="flex items-center gap-1.5">
                  {sliderItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentGalleryIdx(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentGalleryIdx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                      }`}
                      aria-label={`Jump to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setLightboxImage({
                      url: currentItem.imageUrl,
                      title: currentItem.title,
                      caption: currentItem.caption,
                    })
                  }
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                >
                  <span>Lightbox</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column — Principal (Gyanendra Bahadur Karki) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="h-full bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Profile Photo */}
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-500/30">
                  <img
                    src={principal.photo}
                    alt={principal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-emerald-700 text-white p-1 rounded-full shadow-xs">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Principal
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{principal.name}</h3>
                  {principal.nepaliName && (
                    <p className="text-xs font-medium text-emerald-800">{principal.nepaliName}</p>
                  )}
                  <p className="text-xs text-slate-500 mt-1 font-medium">{principal.designation}</p>
                </div>

                {/* Short Introduction */}
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed text-justify">
                  <p>{principal.introduction}</p>
                </div>
              </div>

              {/* Contact Information & Credentials */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{principal.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{principal.email}</span>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase block mb-1">Credentials:</span>
                  <div className="flex flex-wrap gap-1">
                    {principal.credentials.map((c, i) => (
                      <span key={i} className="text-[10px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

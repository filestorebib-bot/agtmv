import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Image as ImageIcon,
  Maximize2,
  Calendar,
  MapPin,
  Filter,
} from 'lucide-react';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const { gallery, setLightboxImage } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Campus Life',
    'Polyhouse & Nursery',
    'Field Practicals',
    'Lab & Soil Science',
    'OJT & Farm Visits',
  ];

  const filteredGallery = gallery.filter((item) =>
    selectedCategory === 'All' ? true : item.category === selectedCategory
  );

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Campus & Practical Field Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            A photographic tour of agricultural demonstration plots, polyhouses, student laboratory activities, and OJT attachments at Katari-4, Udayapur.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                setLightboxImage({
                  url: item.imageUrl,
                  title: item.title,
                  caption: item.caption,
                })
              }
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-400 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-emerald-400" />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{item.location || 'Katari-4, Udayapur'}</span>
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

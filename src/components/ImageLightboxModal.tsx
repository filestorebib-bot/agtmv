import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, ZoomIn, Download, Image as ImageIcon } from 'lucide-react';

export const ImageLightboxModal: React.FC = () => {
  const { lightboxImage, setLightboxImage } = useSchool();

  if (!lightboxImage) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = lightboxImage.url;
    link.download = `${lightboxImage.title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
    link.target = '_blank';
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between text-white pb-3 border-b border-white/10 mb-3">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-semibold truncate text-white">
              {lightboxImage.title}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs"
              title="Download Image"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={() => setLightboxImage(null)}
              className="p-2 bg-white/10 hover:bg-rose-600 text-white rounded-lg transition-colors"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High Res Image */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/10">
          <img
            src={lightboxImage.url}
            alt={lightboxImage.title}
            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl transition-all"
            loading="lazy"
          />
        </div>

        {/* Caption */}
        {lightboxImage.caption && (
          <div className="w-full mt-3 bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xs sm:text-sm text-slate-300">
              {lightboxImage.caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

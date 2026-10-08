import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { Bell, ArrowRight, Sparkles } from 'lucide-react';
import { Notice } from '../types';

export const NoticeTicker: React.FC = () => {
  const { notices, navigateToPage, setPdfModalNotice } = useSchool();

  const handleNoticeClick = (notice: Notice) => {
    if (notice.type === 'pdf') {
      setPdfModalNotice(notice);
    } else {
      navigateToPage('notice-detail', { notice });
    }
  };

  // Duplicate notices array so loop is seamless without blanks
  const displayNotices = [...notices, ...notices];

  return (
    <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white border-b border-emerald-700/50 shadow-xs relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Ticker Lead Tag */}
        <div className="shrink-0 z-10 flex items-center gap-2 bg-emerald-950/90 text-emerald-200 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider border-r border-emerald-700/60 shadow-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>
          <Bell className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden sm:inline">Notice Board:</span>
          <span className="sm:hidden">Notice:</span>
        </div>

        {/* Marquee Track Container */}
        <div className="relative flex-1 overflow-hidden py-2 cursor-pointer group">
          <div className="animate-marquee flex items-center gap-8 pl-4 select-none">
            {displayNotices.map((notice, idx) => (
              <button
                key={`${notice.id}-${idx}`}
                onClick={() => handleNoticeClick(notice)}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-emerald-50 hover:text-amber-200 transition-colors whitespace-nowrap group/item focus:outline-hidden"
                title={`Click to read: ${notice.title}`}
              >
                {notice.important && (
                  <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                    Urgent
                  </span>
                )}

                <span className="font-medium group-hover/item:underline underline-offset-4 decoration-amber-300">
                  {notice.title}
                </span>

                <span className="text-[11px] text-emerald-300/80 font-mono">
                  ({notice.nepaliDate || notice.date})
                </span>

                <span className="text-emerald-400/60 ml-2">
                  <ArrowRight className="w-3.5 h-3.5 inline group-hover/item:translate-x-1 transition-transform" />
                </span>
              </button>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-emerald-900 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-teal-900 to-transparent"></div>
        </div>

        {/* Quick link to all notices */}
        <div className="hidden md:flex shrink-0 z-10 px-3 py-2 bg-emerald-950/40 border-l border-emerald-700/60">
          <button
            onClick={() => navigateToPage('notices')}
            className="text-xs text-emerald-200 hover:text-white font-semibold transition-colors flex items-center gap-1"
          >
            <span>All Notices</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

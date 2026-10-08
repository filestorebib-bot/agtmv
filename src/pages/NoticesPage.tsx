import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Sparkles,
  Building,
  Image as ImageIcon,
  BookOpen,
} from 'lucide-react';
import { Notice, NoticeCategory } from '../types';

export const NoticesPage: React.FC = () => {
  const {
    notices,
    navigateToPage,
    setPdfModalNotice,
    setLightboxImage,
  } = useSchool();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const categories: (string)[] = [
    'All',
    'Admission',
    'OJT',
    'Examination',
    'Scholarship',
    'Academic',
    'General',
  ];

  // Filtering
  const filteredNotices = notices.filter((notice) => {
    const matchesCategory =
      selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate =
      !dateFilter ||
      notice.date.includes(dateFilter) ||
      (notice.nepaliDate && notice.nepaliDate.includes(dateFilter));
    return matchesCategory && matchesSearch && matchesDate;
  });

  const handleView = (notice: Notice) => {
    if (notice.type === 'pdf') {
      setPdfModalNotice(notice);
    } else if (notice.type === 'image' && notice.fileUrl) {
      setLightboxImage({
        url: notice.fileUrl,
        title: notice.title,
        caption: notice.description,
      });
    } else {
      navigateToPage('notice-detail', { notice });
    }
  };

  const handleDownload = (notice: Notice) => {
    const content = `TRIVENI SECONDARY SCHOOL - DEPARTMENT OF PLANT SCIENCE\nKatari-4, Udayapur\nNotice: ${notice.title}\nDate: ${notice.nepaliDate || notice.date}\nCategory: ${notice.category}\n\n${notice.description}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${notice.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Circulars</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Notices & Announcements
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Published circulars regarding technical admissions, exam routines, OJT internship schedules, scholarships, and school activities in Katari.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notices by title or keyword..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Date filter input */}
            <div className="w-full md:w-auto flex items-center gap-2">
              <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">Filter Date:</span>
              <input
                type="text"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                placeholder="YYYY-MM or २०८२..."
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden w-full md:w-36"
              />
              {(searchQuery || dateFilter || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setDateFilter('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs text-rose-600 hover:underline px-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Cards Grid */}
        {filteredNotices.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">No Notices Found</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting search filters or choosing a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {notice.category}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {notice.nepaliDate || notice.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {notice.title}
                  </h3>

                  {notice.important && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md mt-2">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>Priority Notice</span>
                    </div>
                  )}

                  <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {notice.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleView(notice)}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View {notice.type.toUpperCase()}</span>
                  </button>

                  <button
                    onClick={() => handleDownload(notice)}
                    className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors flex items-center gap-1 text-xs"
                    title="Download Notice"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-[11px] font-medium hidden sm:inline">Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

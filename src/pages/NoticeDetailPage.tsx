import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ArrowLeft,
  Calendar,
  FileText,
  Printer,
  Download,
  Building,
  ShieldCheck,
  Eye,
} from 'lucide-react';
import { Notice } from '../types';

export const NoticeDetailPage: React.FC = () => {
  const {
    selectedNotice,
    notices,
    navigateToPage,
    setPdfModalNotice,
  } = useSchool();

  const notice: Notice = selectedNotice || notices[0];

  const handleDownload = () => {
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
    <div className="py-10 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateToPage('notices')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Notices</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-xl border border-slate-200 text-xs flex items-center gap-1.5 font-medium shadow-2xs"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print Notice</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Notice Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2 text-xs mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold font-mono">
                {notice.category}
              </span>
              <span className="text-slate-400 font-mono">
                Published: {notice.nepaliDate || notice.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {notice.title}
            </h1>
            {notice.nepaliTitle && (
              <p className="text-sm font-semibold text-emerald-900 mt-1">
                {notice.nepaliTitle}
              </p>
            )}

            <p className="text-xs text-slate-500 mt-2">
              Issuer: {notice.publishedBy} · Triveni Secondary School (Katari-4, Udayapur)
            </p>
          </div>

          {/* Body */}
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-4">
            <p className="text-base font-normal leading-relaxed text-slate-800">
              {notice.description}
            </p>

            {notice.type === 'pdf' && (
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
                <FileText className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Official PDF Document Attached</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  This announcement includes full official letterhead and signature pages in PDF format.
                </p>
                <button
                  onClick={() => setPdfModalNotice(notice)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-2 shadow-xs"
                >
                  <Eye className="w-4 h-4" />
                  <span>Launch Embedded PDF Viewer</span>
                </button>
              </div>
            )}
          </div>

          {/* Footer Official Stamp */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Institutional Notice</span>
            </div>
            <span className="font-mono text-[11px]">Ref: TSS/NOTICE/{notice.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

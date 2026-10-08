import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  X,
  Download,
  Printer,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileText,
  ShieldCheck,
  Calendar,
  Building,
} from 'lucide-react';

export const PdfViewerModal: React.FC = () => {
  const { pdfModalNotice, setPdfModalNotice } = useSchool();
  const [zoom, setZoom] = useState(100);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!pdfModalNotice) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text blob for downloading
    const content = pdfModalNotice.pdfPages?.join('\n\n--- Page Break ---\n\n') || pdfModalNotice.description;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pdfModalNotice.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-100 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden border border-slate-300">
        {/* PDF Viewer Header Toolbar */}
        <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-1.5 bg-emerald-700/60 rounded-lg text-emerald-300 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold truncate text-slate-100" title={pdfModalNotice.title}>
                {pdfModalNotice.title}
              </h3>
              <p className="text-[11px] text-slate-400 flex items-center gap-2">
                <span>PDF Document Viewer</span>
                <span>·</span>
                <span>{pdfModalNotice.nepaliDate || pdfModalNotice.date}</span>
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={() => setZoom((z) => Math.max(75, z - 15))}
                className="p-1.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white transition-colors"
                title="Zoom Out"
                disabled={zoom <= 75}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-slate-300">{zoom}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(150, z + 15))}
                className="p-1.5 hover:bg-slate-700 rounded text-slate-300 hover:text-white transition-colors"
                title="Zoom In"
                disabled={zoom >= 150}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold shadow-xs"
              title="Download Document"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Downloaded!' : 'Download'}</span>
            </button>

            <button
              onClick={() => setPdfModalNotice(null)}
              className="p-2 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 rounded-lg transition-colors ml-1"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Document Canvas Viewport */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-slate-200">
          <div
            id="printable-content"
            style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
            className="w-full max-w-2xl bg-white rounded-sm shadow-xl p-6 sm:p-10 border border-slate-300 text-slate-800 transition-transform duration-150"
          >
            {/* School Letterhead Emblem */}
            <div className="border-b-2 border-emerald-800 pb-5 mb-6 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-700 text-emerald-800 mb-2">
                <Building className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-emerald-950">
                Triveni Secondary School
              </h2>
              <h3 className="text-sm font-semibold text-emerald-800 uppercase tracking-widest mt-0.5">
                Department of Plant Science
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Katari-4, Udayapur, Koshi Province, Nepal · Phone: 035-450-154
              </p>
              <p className="text-[11px] text-slate-500 italic">
                (Affiliated to National Examination Board & Technical Curriculum Development Centre)
              </p>

              <div className="flex justify-between items-center text-xs text-slate-600 mt-4 pt-3 border-t border-slate-200 px-2 font-mono">
                <span>Ref: TSS/DPS/2083-DOC</span>
                <span>Date: {pdfModalNotice.nepaliDate || pdfModalNotice.date}</span>
              </div>
            </div>

            {/* Document Title Banner */}
            <div className="text-center my-6">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 underline underline-offset-4 decoration-emerald-600 uppercase">
                {pdfModalNotice.title}
              </h1>
              {pdfModalNotice.nepaliTitle && (
                <p className="text-sm font-medium text-emerald-900 mt-1">
                  {pdfModalNotice.nepaliTitle}
                </p>
              )}
            </div>

            {/* Document Content */}
            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans space-y-4 text-slate-700">
              {pdfModalNotice.pdfPages && pdfModalNotice.pdfPages.length > 0 ? (
                pdfModalNotice.pdfPages.map((page, idx) => (
                  <div key={idx} className="bg-slate-50/70 p-4 rounded-lg border border-slate-200/60 font-mono text-xs leading-6">
                    {page}
                  </div>
                ))
              ) : (
                <p>{pdfModalNotice.description}</p>
              )}
            </div>

            {/* Official Stamps and Signatures */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-end text-xs">
              <div className="text-center">
                <div className="w-24 border-b border-slate-400 mb-1"></div>
                <p className="font-semibold text-slate-900">Kailash Rayamajhi</p>
                <p className="text-[11px] text-slate-500">Coordinator</p>
                <p className="text-[10px] text-emerald-700 font-mono">Dept. of Plant Science</p>
              </div>

              {/* Verified Digital Seal */}
              <div className="hidden sm:flex flex-col items-center justify-center p-2 rounded-full border border-dashed border-emerald-600/40 text-emerald-800">
                <ShieldCheck className="w-6 h-6 text-emerald-700" />
                <span className="text-[9px] uppercase font-bold tracking-tight">Verified TSS Notice</span>
              </div>

              <div className="text-center">
                <div className="w-24 border-b border-slate-400 mb-1"></div>
                <p className="font-semibold text-slate-900">Gyanendra Bdr. Karki</p>
                <p className="text-[11px] text-slate-500">Principal</p>
                <p className="text-[10px] text-emerald-700 font-mono">Triveni Secondary School</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-900 text-slate-400 text-xs px-4 py-2.5 flex justify-between items-center border-t border-slate-800">
          <span>Official Institutional Document · Triveni Secondary School</span>
          <button
            onClick={() => setPdfModalNotice(null)}
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

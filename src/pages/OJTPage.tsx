import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Briefcase,
  Clock,
  Award,
  CheckCircle2,
  Download,
  Calendar,
  Building,
  FileText,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  Users,
} from 'lucide-react';
import { OJTGradeInfo } from '../types';

export const OJTPage: React.FC = () => {
  const { ojtInfo, setLightboxImage } = useSchool();
  const [activeGrade, setActiveGrade] = useState<10 | 11 | 12>(12);

  const currentInfo: OJTGradeInfo = ojtInfo[activeGrade];

  const handleDownloadDoc = (doc: { title: string; downloadUrl: string }) => {
    // Simulated instant download helper
    const content = `TRIVENI SECONDARY SCHOOL - DEPARTMENT OF PLANT SCIENCE\nKatari-4, Udayapur\nDocument: ${doc.title}\nGrade: ${activeGrade}\nOfficial OJT Form`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Vocational Field Apprenticeship</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            On-the-Job Training (OJT)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Bridging academic theory with commercial agricultural practice. All technical Plant Science students undergo progressive field attachments across Grades 10, 11, and a capstone 6-month residency in Grade 12.
          </p>
        </div>

        {/* Grade Selection Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl shadow-inner max-w-xl w-full">
            {([10, 11, 12] as const).map((grade) => (
              <button
                key={grade}
                onClick={() => setActiveGrade(grade)}
                className={`flex-1 py-3 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all text-center ${
                  activeGrade === grade
                    ? 'bg-white text-emerald-800 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>OJT Grade {grade}</span>
                <span className="block text-[10px] font-normal opacity-80 mt-0.5">
                  {grade === 10 ? '4 Weeks (Nursery)' : grade === 11 ? '8 Weeks (Agribusiness)' : '6 Months (Capstone)'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Grade Content Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-10">
          {/* Header row */}
          <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">
                Technical Plant Science Stream
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                {currentInfo.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <strong>Duration:</strong> {currentInfo.duration}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <strong>Evaluation Weight:</strong> {currentInfo.creditHours} Credit Hours
                </span>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 max-w-xs text-xs text-slate-700 space-y-1">
              <p className="font-bold text-emerald-950">Field Placement Supervision:</p>
              <p>Under Katari Municipality Agriculture Section & Krishi Gyan Kendra oversight.</p>
            </div>
          </div>

          {/* Introduction & Objectives */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Module Introduction
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {currentInfo.introduction}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Learning Objectives</span>
                </h3>
                <div className="space-y-2">
                  {currentInfo.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical Activities & Responsibilities */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Daily Practical Activities
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentInfo.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Student Responsibilities & Code
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentInfo.studentResponsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Evaluation System Banner */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                Evaluation & Assessment System
              </p>
              <h4 className="text-base font-bold text-white mt-1">
                Formal Grading Rubric (100 Marks Total)
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed max-w-2xl">
                {currentInfo.evaluationSystem}
              </p>
            </div>
            <div className="shrink-0 bg-emerald-800/60 px-4 py-2 rounded-xl border border-emerald-600/40 text-center">
              <span className="text-xs text-emerald-200 block">Grade Weight</span>
              <span className="text-lg font-bold font-mono text-white">Credit: {currentInfo.creditHours}</span>
            </div>
          </div>

          {/* Verified Partner Institutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-600" />
              <span>Placement & Internship Partner Institutions</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentInfo.partnerInstitutions.map((inst, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                  <span>{inst}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OJT Photos & Lightbox */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Field Action Photos (Grade {activeGrade} OJT)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentInfo.photos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setLightboxImage({
                      url: photo.url,
                      title: `Grade ${activeGrade} OJT Practical`,
                      caption: photo.caption,
                    })
                  }
                  className="relative rounded-2xl overflow-hidden aspect-16/10 cursor-pointer group shadow-sm"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <p className="text-xs text-white leading-relaxed">{photo.caption}</p>
                  </div>
                  <div className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Documents & Logbooks */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Downloadable Official Logbooks & Guidelines</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentInfo.documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-slate-900">{doc.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-tight">{doc.description}</p>
                    <span className="text-[10px] font-mono text-emerald-700 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-1">
                      {doc.format} · {doc.size}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDownloadDoc(doc)}
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-xs ml-3 shrink-0"
                    title="Download document template"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

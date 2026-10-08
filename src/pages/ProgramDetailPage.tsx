import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ArrowLeft,
  Share2,
  Clock,
  GraduationCap,
  CheckCircle2,
  Briefcase,
  BookOpen,
  FileText,
  Building,
  Sprout,
  ShieldCheck,
} from 'lucide-react';

export const ProgramDetailPage: React.FC = () => {
  const {
    selectedProgram,
    programs,
    notices,
    navigateToPage,
    setShareModalData,
    setPdfModalNotice,
  } = useSchool();

  const program = selectedProgram || programs[0];

  const handleShare = () => {
    setShareModalData({
      title: program.title,
      url: window.location.href,
      description: program.tagline,
    });
  };

  const relatedNotices = notices.filter(
    (n) => n.category === 'Admission' || n.category === 'OJT' || n.category === 'Academic'
  );

  return (
    <div className="py-10 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back navigation & Share row */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateToPage('programs')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-slate-200 text-xs font-semibold shadow-xs transition-colors"
          >
            <Share2 className="w-4 h-4 text-emerald-600" />
            <span>Share Program</span>
          </button>
        </div>

        {/* Hero Banner Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <div className="relative aspect-21/9 min-h-[220px] sm:min-h-[300px]">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold inline-block mb-2">
                {program.duration}
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {program.title}
              </h1>
              {program.nepaliTitle && (
                <p className="text-sm font-medium text-emerald-300 mt-1">
                  {program.nepaliTitle}
                </p>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Tagline & Full Description */}
            <div>
              <p className="text-base sm:text-lg font-medium text-emerald-800 mb-3">
                {program.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                {program.fullDescription}
              </p>
            </div>

            {/* Eligibility & Curriculum Framework */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-emerald-700" />
                  <span>Entry Eligibility</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">{program.eligibility}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>National Curriculum Standard</span>
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">{program.curriculumOverview}</p>
              </div>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Program Learning Objectives</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {program.objectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Infrastructure & Features */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-emerald-600" />
                <span>Practical Training & Facilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.practicalFeatures.map((feat, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Subjects Grid */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <span>Core Subject Areas Covered</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {program.majorSubjects.map((sub, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200">
                    {sub}
                  </div>
                ))}
              </div>
            </div>

            {/* Career & Higher Education Opportunities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                  <span>Immediate Career Pathways</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {program.careerOpportunities.map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>Higher Academic Progression</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {program.higherStudies.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Notices snippet */}
            {relatedNotices.length > 0 && (
              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Related Admission & Academic Notices</span>
                </h4>
                <div className="space-y-2">
                  {relatedNotices.slice(0, 2).map((notice) => (
                    <div
                      key={notice.id}
                      onClick={() => {
                        if (notice.type === 'pdf') {
                          setPdfModalNotice(notice);
                        } else {
                          navigateToPage('notice-detail', { notice });
                        }
                      }}
                      className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 transition-colors flex items-center justify-between cursor-pointer"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-800">{notice.title}</p>
                        <p className="text-[11px] text-slate-500">{notice.nepaliDate || notice.date} · {notice.category}</p>
                      </div>
                      <span className="text-xs text-emerald-700 font-semibold">View Notice &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

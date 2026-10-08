import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  GraduationCap,
  Clock,
  ArrowRight,
  Share2,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Briefcase,
  Users,
  Building,
} from 'lucide-react';
import { Program } from '../types';

export const ProgramsPage: React.FC = () => {
  const { programs, navigateToPage, setShareModalData } = useSchool();

  const handleShare = (e: React.MouseEvent, prog: Program) => {
    e.stopPropagation();
    setShareModalData({
      title: prog.title,
      url: window.location.href,
      description: prog.tagline,
    });
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Technical Streams</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Academic Programs in Plant Science
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Comprehensive vocational and academic training for Classes 9, 10, 11, and 12, culminating in commercial field certifications and university pathways.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-8">
          {programs.map((prog, idx) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Program Image Column */}
              <div className="lg:col-span-5 relative aspect-16/10 lg:aspect-auto min-h-[260px] overflow-hidden bg-slate-100">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md">
                    {prog.duration}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                    {prog.level}
                  </p>
                  <h3 className="text-xl font-bold mt-0.5 drop-shadow-xs">{prog.title}</h3>
                </div>
              </div>

              {/* Program Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-xs font-semibold text-emerald-700">{prog.tagline}</p>
                    <button
                      onClick={(e) => handleShare(e, prog)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors flex items-center gap-1 text-xs"
                      title="Share this program"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
                    <div>
                      <p className="font-bold text-slate-800 uppercase text-[11px] mb-2">
                        Core Subject Areas:
                      </p>
                      <ul className="space-y-1.5 text-slate-600">
                        {prog.majorSubjects.slice(0, 3).map((sub, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-bold text-slate-800 uppercase text-[11px] mb-2">
                        Career & Higher Studies:
                      </p>
                      <ul className="space-y-1.5 text-slate-600">
                        {prog.careerOpportunities.slice(0, 3).map((career, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Briefcase className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA Row */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => navigateToPage('program-detail', { program: prog })}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-xs"
                  >
                    <span>Read More Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => navigateToPage('classes')}
                      className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View Class Subjects</span>
                    </button>
                    <button
                      onClick={(e) => handleShare(e, prog)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-emerald-700 text-xs font-medium flex items-center gap-1.5"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Program</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Agricultural Framework Banner */}
        <div className="bg-emerald-950 text-emerald-100 p-8 rounded-3xl border border-emerald-800/80">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-xl font-bold text-white">
              National Examination Board (NEB) Certification
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
              Upon successful completion of Grade 12 Plant Science and the capstone 6-month On-the-Job Training, students receive the National Technical Secondary School Certificate. Graduates qualify for junior technical positions in government municipalities, commercial agro-enterprises, or direct enrollment into university degree programs (B.Sc. Ag, B.Tech Food, B.Sc. Forestry).
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-amber-300">
              <span>· Class 9 & 10 Secondary Technical Stream</span>
              <span>· Class 11 & 12 Technical Higher Secondary</span>
              <span>· Mandatory Capstone OJT (6 Months)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

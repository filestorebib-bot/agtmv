import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Award,
  CheckCircle2,
  Download,
  FileText,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const SubjectDetailPage: React.FC = () => {
  const {
    selectedSubject,
    subjects,
    navigateToPage,
    notices,
    setPdfModalNotice,
  } = useSchool();

  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const [downloadFeedback, setDownloadFeedback] = useState<string | null>(null);

  const subject = selectedSubject || subjects[0];

  const toggleUnit = (unitNumber: number) => {
    setExpandedUnit((prev) => (prev === unitNumber ? null : unitNumber));
  };

  const handleDownloadResource = (res: { title: string; format: string }) => {
    const content = `TRIVENI SECONDARY SCHOOL - DEPARTMENT OF PLANT SCIENCE\nSubject: ${subject.name} (${subject.code})\nResource: ${res.title}\nCDC / NEB Curriculum Standards`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${res.title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadFeedback(res.title);
    setTimeout(() => setDownloadFeedback(null), 3000);
  };

  return (
    <div className="py-10 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <div>
          <button
            onClick={() => navigateToPage('class-grade', { grade: subject.grade })}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Class {subject.grade} Subjects</span>
          </button>
        </div>

        {/* Subject Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                  {subject.code}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Class {subject.grade} Technical Plant Science
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {subject.name}
              </h1>
              {subject.nepaliName && (
                <p className="text-sm font-semibold text-emerald-900 mt-1">
                  {subject.nepaliName}
                </p>
              )}
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4 text-xs font-mono text-emerald-950 shrink-0">
              <div>
                <span className="block text-slate-500 text-[10px]">CREDIT</span>
                <strong className="text-lg">{subject.creditHours} CH</strong>
              </div>
              <div className="w-px h-8 bg-emerald-200"></div>
              <div>
                <span className="block text-slate-500 text-[10px]">THEORY</span>
                <strong>{subject.theoryHours} Hrs</strong>
              </div>
              <div className="w-px h-8 bg-emerald-200"></div>
              <div>
                <span className="block text-slate-500 text-[10px]">PRACTICAL</span>
                <strong>{subject.practicalHours} Hrs</strong>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Course Introduction & Description
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {subject.description}
            </p>
          </div>

          {/* Learning Objectives */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Competencies & Learning Objectives</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {subject.objectives.map((obj, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chapters / Units Accordion */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Course Syllabus: Chapters & Units ({subject.units.length} Units)</span>
            </h3>
            <div className="space-y-3">
              {subject.units.map((unit) => {
                const isExpanded = expandedUnit === unit.unitNumber;

                return (
                  <div
                    key={unit.unitNumber}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      onClick={() => toggleUnit(unit.unitNumber)}
                      className="w-full text-left p-4 bg-slate-50/70 hover:bg-emerald-50/50 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                          U{unit.unitNumber}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            {unit.title}
                          </h4>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {unit.hours} Instructional Hours
                          </span>
                        </div>
                      </div>

                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 bg-white border-t border-slate-100 space-y-2">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Covered Topics:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {unit.topics.map((top, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                              <span>{top}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Practical Activities Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Mandatory Practical Field Activities</span>
            </h3>
            <div className="space-y-2">
              {subject.practicalActivities.map((act, idx) => (
                <div key={idx} className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Downloadable Syllabus & Lab Manuals</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subject.resources.map((res) => (
                <div
                  key={res.id}
                  className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{res.title}</h5>
                    <span className="text-[10px] font-mono text-emerald-700 bg-white px-1.5 py-0.5 rounded border border-slate-200 inline-block mt-0.5">
                      {res.format} · {res.size}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDownloadResource(res)}
                    className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors flex items-center gap-1 text-xs"
                    title="Download file"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                </div>
              ))}
            </div>
            {downloadFeedback && (
              <p className="text-xs text-emerald-700 font-semibold mt-2">
                Downloaded resource: {downloadFeedback}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

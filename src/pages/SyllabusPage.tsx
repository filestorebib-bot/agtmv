import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  FileText,
  Search,
  Download,
  BookOpen,
  Printer,
  ZoomIn,
  ZoomOut,
  ChevronRight,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Subject } from '../types';

export const SyllabusPage: React.FC = () => {
  const { subjects, navigateToPage } = useSchool();
  const [selectedGrade, setSelectedGrade] = useState<9 | 10 | 11 | 12>(9);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(
    subjects.find((s) => s.grade === 9)?.id || subjects[0]?.id
  );
  const [syllabusSearch, setSyllabusSearch] = useState('');
  const [readerZoom, setReaderZoom] = useState(100);

  // Filter subjects by grade
  const gradeSubjects = subjects.filter((s) => s.grade === selectedGrade);
  const currentSubject = subjects.find((s) => s.id === selectedSubjectId) || gradeSubjects[0] || subjects[0];

  const handleGradeSelect = (g: 9 | 10 | 11 | 12) => {
    setSelectedGrade(g);
    const firstSub = subjects.find((s) => s.grade === g);
    if (firstSub) {
      setSelectedSubjectId(firstSub.id);
    }
  };

  const handleDownload = () => {
    const content = `TRIVENI SECONDARY SCHOOL - DEPARTMENT OF PLANT SCIENCE\nKatari-4, Udayapur\nOFFICIAL SYLLABUS DOCUMENT\nSubject: ${currentSubject.name} (${currentSubject.code})\nClass: ${currentSubject.grade}\nCredit Hours: ${currentSubject.creditHours}\n\nUNITS AND CHAPTERS:\n${currentSubject.units
      .map(
        (u) =>
          `Unit ${u.unitNumber}: ${u.title} (${u.hours} Hours)\nTopics:\n${u.topics.map((t) => ` - ${t}`).join('\n')}`
      )
      .join('\n\n')}\n\nPRACTICAL ACTIVITIES:\n${currentSubject.practicalActivities.map((p) => ` - ${p}`).join('\n')}`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Syllabus_${currentSubject.code}_Grade_${currentSubject.grade}.txt`;
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
            <Layers className="w-3.5 h-3.5" />
            <span>Curriculum Development Centre (CDC) & NEB</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Syllabus & Curriculum Portal
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Browse complete course outlines organized by Class &rarr; Subject &rarr; Unit/Chapter &rarr; Resources. Read syllabi within the browser or download official guides.
          </p>
        </div>

        {/* Grade Selector Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl shadow-inner max-w-lg w-full">
            {([9, 10, 11, 12] as const).map((g) => (
              <button
                key={g}
                onClick={() => handleGradeSelect(g)}
                className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                  selectedGrade === g
                    ? 'bg-white text-emerald-800 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Class {g}
              </button>
            ))}
          </div>
        </div>

        {/* Main Syllabus Workspace: Left Sidebar (Subjects) + Right Viewport (Reader) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Subjects for Selected Grade */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Class {selectedGrade} Subjects</span>
              </h3>
              <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded">
                {gradeSubjects.length} Courses
              </span>
            </div>

            {/* Subject selector list */}
            <div className="space-y-1.5">
              {gradeSubjects.map((sub) => {
                const isSelected = sub.id === currentSubject?.id;

                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubjectId(sub.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-mono block ${isSelected ? 'text-emerald-100' : 'text-emerald-700'}`}>
                        {sub.code}
                      </span>
                      <p className="text-xs sm:text-sm font-bold truncate max-w-[200px]">{sub.name}</p>
                      <span className={`text-[11px] block ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                        {sub.creditHours} CH · {sub.units.length} Units
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 text-center">
              <button
                onClick={() => navigateToPage('class-grade', { grade: selectedGrade })}
                className="text-xs font-semibold text-emerald-700 hover:underline flex items-center justify-center gap-1 mx-auto"
              >
                <span>View Full Class {selectedGrade} Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Syllabus Viewer */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Viewer Toolbar */}
            <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold truncate max-w-xs sm:max-w-md">
                    {currentSubject?.name} ({currentSubject?.code})
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Class {currentSubject?.grade} · CDC Syllabus Viewer
                  </p>
                </div>
              </div>

              {/* Action tools */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                  <button
                    onClick={() => setReaderZoom((z) => Math.max(80, z - 10))}
                    className="p-1 hover:bg-slate-700 rounded text-slate-300"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono px-2 text-slate-300">{readerZoom}%</span>
                  <button
                    onClick={() => setReaderZoom((z) => Math.min(140, z + 10))}
                    className="p-1 hover:bg-slate-700 rounded text-slate-300"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => window.print()}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors text-xs flex items-center gap-1"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors text-xs font-semibold flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Syllabus</span>
                </button>
              </div>
            </div>

            {/* Embedded Reader Body */}
            <div
              style={{ fontSize: `${readerZoom}%` }}
              className="p-6 sm:p-10 space-y-8 bg-slate-50/60 overflow-y-auto max-h-[70vh] transition-all"
            >
              {/* Header Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  OFFICIAL CURRICULUM SPECIFICATION
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentSubject?.name}
                </h2>
                {currentSubject?.nepaliName && (
                  <p className="text-sm font-semibold text-emerald-900">
                    {currentSubject?.nepaliName}
                  </p>
                )}
                <p className="text-xs text-slate-600 pt-2 leading-relaxed">
                  {currentSubject?.description}
                </p>
              </div>

              {/* Units & Chapters Detailed Breakdown */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Units & Chapter Outline ({currentSubject?.units.length} Units)
                </h3>

                {currentSubject?.units.map((unit) => (
                  <div
                    key={unit.unitNumber}
                    className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold flex items-center justify-center">
                          {unit.unitNumber}
                        </span>
                        <span>{unit.title}</span>
                      </h4>
                      <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                        {unit.hours} Hours
                      </span>
                    </div>

                    <div className="pl-7 pt-1">
                      <p className="text-[11px] font-bold text-slate-500 uppercase">Specific Topics:</p>
                      <ul className="mt-1 space-y-1 text-xs text-slate-700">
                        {unit.topics.map((t, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Practical Evaluation Guidelines */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Practical Task Requirements ({currentSubject?.practicalHours} Hours Allocated)
                </h3>
                <div className="space-y-2">
                  {currentSubject?.practicalActivities.map((act, i) => (
                    <div key={i} className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-slate-800 flex items-start gap-2">
                      <span className="font-mono font-bold text-emerald-700">{i + 1}.</span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Viewer Bottom Bar */}
            <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>National Curriculum Development Centre (CDC) Approved</span>
              <button
                onClick={handleDownload}
                className="text-emerald-700 hover:text-emerald-900 font-semibold"
              >
                Save as File (.txt)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

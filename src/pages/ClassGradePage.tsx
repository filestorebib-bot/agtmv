import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  ArrowLeft,
  BookOpen,
  ArrowRight,
  Clock,
  Award,
  CheckCircle2,
  FileText,
  Download,
  GraduationCap,
} from 'lucide-react';
import { Subject } from '../types';

export const ClassGradePage: React.FC = () => {
  const {
    selectedGrade,
    setSelectedGrade,
    subjects,
    navigateToPage,
  } = useSchool();

  const grade = selectedGrade || 9;
  const gradeSubjects = subjects.filter((s) => s.grade === grade);

  const gradeDescriptions: Record<9 | 10 | 11 | 12, { title: string; nepali: string; desc: string; focus: string }> = {
    9: {
      title: 'Class 9 — Technical Plant Science',
      nepali: 'कक्षा ९ (बाली विज्ञान)',
      desc: 'Introductory stage establishing botanical and agronomic foundations. Students learn soil profiles, seed identification, crop growth stages, and basic orchard layout.',
      focus: 'Foundational Agronomy, Botany, Soil Physical Analysis, Horticulture I',
    },
    10: {
      title: 'Class 10 — Technical Plant Science',
      nepali: 'कक्षा १० (बाली विज्ञान)',
      desc: 'Second stage deepening practical expertise in pulse and oilseed management, entomology, botanical pest repellants, and agricultural extension with local farmers.',
      focus: 'Cash Crops, Plant Protection, Entomology, Agri Extension, Seedbeds',
    },
    11: {
      title: 'Class 11 — Technical Plant Science',
      nepali: 'कक्षा ११ (बाली विज्ञान)',
      desc: 'Higher secondary technical stream focusing on plant breeding genetics, seed certification classes, pathogen diagnosis under the microscope, and protected polyhouse operations.',
      focus: 'Plant Breeding, Plant Pathology, Micro-propagation, Commercial Polyhouse Cultivation',
    },
    12: {
      title: 'Class 12 — Technical Plant Science',
      nepali: 'कक्षा १२ (बाली विज्ञान)',
      desc: 'Graduating senior year integrating agribusiness economics, bank proposal drafting, post-harvest fruit preservation, and the mandatory 6-month continuous field OJT.',
      focus: 'Agribusiness Management, Post-Harvest Processing, 6-Month Intensive Capstone OJT',
    },
  };

  const currentGradeMeta = gradeDescriptions[grade];

  return (
    <div className="py-10 sm:py-14 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Back Row & Grade Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={() => navigateToPage('classes')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Classes Hub</span>
          </button>

          {/* Quick grade switcher pills */}
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl">
            {([9, 10, 11, 12] as const).map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  grade === g
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Class {g}
              </button>
            ))}
          </div>
        </div>

        {/* Grade Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                GRADE {grade} PORTAL
              </span>
              <span className="text-xs text-slate-500 font-semibold">{currentGradeMeta.nepali}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {currentGradeMeta.title}
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentGradeMeta.desc}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-emerald-800 font-medium">
              <span className="bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                Core Focus: {currentGradeMeta.focus}
              </span>
            </div>
          </div>

          <div className="shrink-0 p-5 bg-emerald-950 text-white rounded-2xl border border-emerald-800 text-center min-w-[180px]">
            <p className="text-3xl font-extrabold font-mono text-emerald-300">
              {gradeSubjects.length}
            </p>
            <p className="text-xs text-emerald-100 font-semibold mt-1">Specialized Subjects</p>
            <p className="text-[11px] text-emerald-400/80 mt-1">CDC / NEB Syllabus</p>
          </div>
        </div>

        {/* Subjects List Grid (Clickable Cards) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-700" />
              <span>Subjects Taught in Class {grade}</span>
            </h2>
            <button
              onClick={() => navigateToPage('syllabus')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
            >
              <span>Download Full Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gradeSubjects.map((sub) => (
              <div
                key={sub.id}
                onClick={() => navigateToPage('subject-detail', { subject: sub, grade: sub.grade })}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-400 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      Code: {sub.code}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {sub.creditHours} Credit Hours
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {sub.name}
                  </h3>
                  {sub.nepaliName && (
                    <p className="text-xs font-semibold text-emerald-900 mt-0.5">
                      {sub.nepaliName}
                    </p>
                  )}

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>

                  {/* Hours breakdown */}
                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Theory: {sub.theoryHours} Hrs</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>Practical: {sub.practicalHours} Hrs</span>
                    </div>
                  </div>

                  {/* Units count */}
                  <div className="mt-3 text-xs text-slate-600 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{sub.units.length} Curriculum Units · {sub.practicalActivities.length} Field Practicals</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-950">
                  <span>Open Subject Syllabus & Chapters</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

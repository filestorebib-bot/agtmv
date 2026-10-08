import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  BookOpen,
  ArrowRight,
  GraduationCap,
  Clock,
  CheckCircle2,
  FileText,
} from 'lucide-react';

export const ClassesHubPage: React.FC = () => {
  const { navigateToPage, subjects } = useSchool();

  const gradeCards = [
    {
      grade: 9 as const,
      title: 'Class 9 (Grade 9)',
      nepaliTitle: 'कक्षा ९ - प्राविधिक धार',
      tagline: 'Foundations of Agricultural Science & Botanical Principles',
      overview:
        'Introduces students to crop taxonomy, regional agro-ecological zones of Nepal, basic tillage implements, soil physical chemistry, and foundational pomology.',
      credits: 32,
      majorSubjects: ['Agronomy & Cereal Crops', 'Fundamentals of Horticulture', 'Soil Science & Plant Nutrition', 'General Science & Applied Botany'],
      ojtDuration: 'On-Campus Practical Plots (Field Observations)',
    },
    {
      grade: 10 as const,
      title: 'Class 10 (Grade 10)',
      nepaliTitle: 'कक्षा १० - प्राविधिक धार',
      tagline: 'Crop Production, Entomology & Plant Protection',
      overview:
        'Expands into cash crop packages of practice, insect anatomy, life cycles of agricultural pests, Integrated Pest Management (IPM), and community extension.',
      credits: 32,
      majorSubjects: ['Grain Legumes, Oilseeds & Cash Crops', 'Plant Protection & Entomology', 'Agricultural Extension & Communication'],
      ojtDuration: '4-Week Field Apprenticeship (Nursery Operations)',
    },
    {
      grade: 11 as const,
      title: 'Class 11 (Grade 11)',
      nepaliTitle: 'कक्षा ११ - प्राविधिक उच्च माध्यमिक',
      tagline: 'Seed Technology, Plant Pathology & High-Tunnel Horticulture',
      overview:
        'Advanced technical coursework covering Mendelian genetics, emasculation techniques, certified seed production, fungal and viral plant diagnostics, and commercial polyhouses.',
      credits: 32,
      majorSubjects: ['Plant Breeding & Seed Technology', 'Plant Pathology & Disease Management', 'Commercial Vegetable Production & Polyhouse Tech'],
      ojtDuration: '8-Week Structured Practicum (Agribusiness & Farms)',
    },
    {
      grade: 12 as const,
      title: 'Class 12 (Grade 12)',
      nepaliTitle: 'कक्षा १२ - प्राविधिक उच्च माध्यमिक',
      tagline: 'Agribusiness Enterprise, Post-Harvest & Capstone OJT',
      overview:
        'Prepares students for commercial entrepreneurship, bank loan project planning, fruit processing, value-chain logistics, and an intensive 6-month continuous field residency.',
      credits: 32,
      majorSubjects: ['Agribusiness Management & Marketing', 'Post-Harvest Technology & Food Processing', 'On-the-Job Training Practicum & Project Work'],
      ojtDuration: '6-Month Comprehensive Capstone Internship (720 Hours)',
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Structure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Classes & Academic Portals
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Triveni Secondary School conducts four consecutive years of specialized technical agricultural education. Select any grade below to explore individual subject curriculums, syllabi, practical tasks, and lesson notes.
          </p>
        </div>

        {/* 4 Major Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gradeCards.map((card) => {
            const gradeSubjects = subjects.filter((s) => s.grade === card.grade);

            return (
              <div
                key={card.grade}
                onClick={() => navigateToPage('class-grade', { grade: card.grade })}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                        NEB Technical Stream
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                        {card.title}
                      </h2>
                      <p className="text-xs font-semibold text-emerald-900 mt-0.5">
                        {card.nepaliTitle}
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-mono text-xl font-bold flex items-center justify-center shadow-md shrink-0">
                      G{card.grade}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-emerald-800 mb-2">
                    {card.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {card.overview}
                  </p>

                  {/* Subjects preview */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                      <span>Course Subjects ({gradeSubjects.length} Registered):</span>
                      <span className="font-mono text-[11px] text-emerald-700">{card.credits} Credits</span>
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {card.majorSubjects.map((sub, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OJT preview */}
                  <div className="text-xs text-slate-600 flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>OJT Component:</strong> {card.ojtDuration}</span>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-950">
                  <span>Enter Class {card.grade} Subject Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Syllabus Quick Nav */}
        <div className="p-6 sm:p-8 bg-emerald-950 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Looking for CDC & NEB Course Syllabus?</h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
              Browse our unified digital syllabus catalog with downloadable chapter PDFs, hours distribution, and practical requirements.
            </p>
          </div>
          <button
            onClick={() => navigateToPage('syllabus')}
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 shrink-0 shadow-lg"
          >
            <FileText className="w-4 h-4" />
            <span>Open Syllabus System</span>
          </button>
        </div>
      </div>
    </div>
  );
};

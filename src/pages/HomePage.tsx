import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { HeroSection } from '../components/HeroSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { VoiceOfFormerStudents } from '../components/VoiceOfFormerStudents';
import { TeachersSection } from '../components/TeachersSection';
import {
  GraduationCap,
  Sprout,
  ArrowRight,
  Share2,
  BookOpen,
  Calendar,
  FileText,
  ShieldCheck,
  CheckCircle,
  FlaskConical,
  Trees,
  SunMedium,
  Award,
} from 'lucide-react';
import { Program, Notice } from '../types';

export const HomePage: React.FC = () => {
  const {
    programs,
    notices,
    navigateToPage,
    setShareModalData,
    setPdfModalNotice,
  } = useSchool();

  const handleProgramShare = (e: React.MouseEvent, prog: Program) => {
    e.stopPropagation();
    setShareModalData({
      title: prog.title,
      url: window.location.href,
      description: prog.tagline,
    });
  };

  const handleNoticeClick = (notice: Notice) => {
    if (notice.type === 'pdf') {
      setPdfModalNotice(notice);
    } else {
      navigateToPage('notice-detail', { notice });
    }
  };

  return (
    <div className="space-y-0">
      {/* 4.1 Hero Section */}
      <HeroSection />

      {/* 4.2 School Leadership Section (Coordinator, Image Slider, Principal) */}
      <LeadershipSection />

      {/* Program Information Showcase */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Sprout className="w-3.5 h-3.5" />
                <span>Technical Academic Curriculum</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Academic Programs & Technical Streams
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Structured across Classes 9 to 12 following the National Curriculum Framework for Secondary Technical Agriculture education.
              </p>
            </div>

            <button
              onClick={() => navigateToPage('programs')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm transition-colors border border-emerald-200 shrink-0"
            >
              <span>View All Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/9 overflow-hidden bg-slate-100">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md">
                        {prog.duration}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={(e) => handleProgramShare(e, prog)}
                        className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-emerald-700 backdrop-blur-xs transition-colors shadow-md"
                        title="Share this program"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs text-emerald-300 font-medium">{prog.level}</p>
                      <h3 className="text-lg sm:text-xl font-bold leading-snug drop-shadow-xs">
                        {prog.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {prog.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Subjects & Competencies:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prog.majorSubjects.slice(0, 4).map((sub, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => navigateToPage('program-detail', { program: prog })}
                    className="text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-600 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Complete Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => handleProgramShare(e, prog)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Fast Access Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Classes 9, 10, 11 & 12</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Curriculum Portals by Grade
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Access individual subject syllabi, CDC learning outcomes, practical tasks, and study guides for each grade level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                grade: 9 as const,
                title: 'Class 9',
                nepali: 'कक्षा ९',
                focus: 'Foundation Agronomy, Soil Basics, Botany & Horticulture I',
                credits: '32 Credit Hours',
                subjectsCount: 4,
                accent: 'border-emerald-400 bg-emerald-50/50',
              },
              {
                grade: 10 as const,
                title: 'Class 10',
                nepali: 'कक्षा १०',
                focus: 'Cash Crops, Entomology, IPM, Agri Extension & Field Apprenticeship',
                credits: '32 Credit Hours',
                subjectsCount: 3,
                accent: 'border-teal-400 bg-teal-50/50',
              },
              {
                grade: 11 as const,
                title: 'Class 11',
                nepali: 'कक्षा ११',
                focus: 'Plant Breeding, Plant Pathology, Polyhouse Tech & Commercial Veg',
                credits: '32 Credit Hours',
                subjectsCount: 3,
                accent: 'border-lime-400 bg-lime-50/50',
              },
              {
                grade: 12 as const,
                title: 'Class 12',
                nepali: 'कक्षा १२',
                focus: 'Agribusiness, Post-Harvest Processing & 6-Month Intensive OJT',
                credits: '32 Credit Hours',
                subjectsCount: 3,
                accent: 'border-amber-400 bg-amber-50/50',
              },
            ].map((cls) => (
              <div
                key={cls.grade}
                onClick={() => navigateToPage('class-grade', { grade: cls.grade })}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-400 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono group-hover:text-emerald-700 transition-colors">
                      {cls.title}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {cls.nepali}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cls.focus}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <p className="flex items-center justify-between">
                      <span>Curriculum:</span>
                      <strong className="text-slate-700">{cls.credits}</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span>Major Subjects:</span>
                      <strong className="text-slate-700">{cls.subjectsCount} Specialized</strong>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-900">
                  <span>Open Class Portal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Infrastructure & Facilities Highlights */}
      <section className="py-16 sm:py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-2">
              On-Campus Experiential Learning
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Modern Agricultural Infrastructure at Katari
            </h2>
            <p className="mt-3 text-sm sm:text-base text-emerald-100/90">
              We bridge textbook theory with dirt-under-the-fingernails mastery through our dedicated scientific facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300 mb-4">
                <SunMedium className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Automated Polyhouse</h3>
              <p className="text-xs text-emerald-200/80 mt-2 leading-relaxed">
                UV-stabilized 200-micron structure with inline drip fertigation and foggers for off-season vegetable research.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300 mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Soil & Pathology Lab</h3>
              <p className="text-xs text-emerald-200/80 mt-2 leading-relaxed">
                Equipped with compound microscopes, pH and conductivity meters, nutrient kits, and autoclaves for pathogen culture.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300 mb-4">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Commercial Fruit Nursery</h3>
              <p className="text-xs text-emerald-200/80 mt-2 leading-relaxed">
                Dedicated training grounds for mango, litchi, citrus, and avocado grafting, air-layering, and seedling hardening.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-700/50 backdrop-blur-xs">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Organic Composting Unit</h3>
              <p className="text-xs text-emerald-200/80 mt-2 leading-relaxed">
                Vermicomposting pits, bio-pesticide fermentation drums (Jholmal), and zero-waste biomass recycling units.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voice of Former Students (Testimonial Carousel) */}
      <VoiceOfFormerStudents />

      {/* Latest Notices Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>Notice Board</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Latest Notices & Announcements
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Official circulars regarding admissions, exam routines, OJT allocations, and scholarships.
              </p>
            </div>

            <button
              onClick={() => navigateToPage('notices')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 font-semibold text-xs sm:text-sm transition-colors border border-slate-200 shrink-0 shadow-xs"
            >
              <span>View All Notices</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notices.slice(0, 3).map((notice) => (
              <div
                key={notice.id}
                onClick={() => handleNoticeClick(notice)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {notice.category}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {notice.nepaliDate || notice.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {notice.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {notice.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 group-hover:underline">
                    {notice.type === 'pdf' ? 'Read Document (PDF) →' : 'View Notice →'}
                  </span>
                  <span className="text-slate-400 uppercase text-[10px] font-mono">
                    Format: {notice.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Teachers Section */}
      <TeachersSection />
    </div>
  );
};

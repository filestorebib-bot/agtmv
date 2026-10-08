import React, { useState, useEffect, useRef } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Search,
  X,
  FileText,
  BookOpen,
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    notices,
    subjects,
    programs,
    teachers,
    gallery,
    navigateToPage,
  } = useSchool();

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Keyboard shortcut Ctrl+K / Cmd+K and Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search Results
  const matchedNotices = trimmed
    ? notices.filter(
        (n) =>
          n.title.toLowerCase().includes(trimmed) ||
          n.description.toLowerCase().includes(trimmed) ||
          n.category.toLowerCase().includes(trimmed)
      )
    : [];

  const matchedSubjects = trimmed
    ? subjects.filter(
        (s) =>
          s.name.toLowerCase().includes(trimmed) ||
          s.code.toLowerCase().includes(trimmed) ||
          s.description.toLowerCase().includes(trimmed) ||
          s.units.some((u) => u.title.toLowerCase().includes(trimmed) || u.topics.some((t) => t.toLowerCase().includes(trimmed)))
      )
    : [];

  const matchedPrograms = trimmed
    ? programs.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.majorSubjects.some((s) => s.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedTeachers = trimmed
    ? teachers.filter(
        (t) =>
          t.name.toLowerCase().includes(trimmed) ||
          t.subject.toLowerCase().includes(trimmed) ||
          t.designation.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults =
    matchedNotices.length + matchedSubjects.length + matchedPrograms.length + matchedTeachers.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-emerald-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notices, subjects, syllabus, teachers, OJT..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-medium text-slate-400 hover:text-slate-700 px-2 py-1 bg-slate-200/60 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {!trimmed && (
            <div className="py-8 text-center">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-slate-700">Quick Portal Search</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Type keywords like "Agronomy", "OJT", "Admission", "Syllabus", or "Kailash" to find records immediately.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Admission 2083', 'Class 9 Agronomy', 'OJT Grade 12', 'Plant Pathology', 'Syllabus'].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => setQuery(quick)}
                    className="text-xs px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 rounded-lg transition-colors border border-slate-200"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>
          )}

          {trimmed && totalResults === 0 && (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm">No results found matching "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try another search term or browse the navigation menu.</p>
            </div>
          )}

          {/* Notices Results */}
          {matchedNotices.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>Notices & Announcements ({matchedNotices.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedNotices.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToPage('notice-detail', { notice: n });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200 group flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                        {n.title}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                        <span>{n.category}</span>
                        <span>·</span>
                        <span>{n.nepaliDate || n.date}</span>
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Subjects Results */}
          {matchedSubjects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Subjects & Syllabus ({matchedSubjects.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedSubjects.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToPage('subject-detail', { subject: s, grade: s.grade });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200 group flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-700">{s.code}</span>
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                          {s.name}
                        </p>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Class {s.grade} · {s.creditHours} Credit Hours · {s.units.length} Units
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Programs Results */}
          {matchedPrograms.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Programs ({matchedPrograms.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedPrograms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToPage('program-detail', { program: p });
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200 group flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                        {p.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{p.duration}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Teachers Results */}
          {matchedTeachers.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Faculty & Instructors ({matchedTeachers.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedTeachers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToPage('about');
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200 group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-500">{t.designation} · {t.subject}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Search Triveni Secondary School Portal</span>
          <span className="font-mono text-[11px]">Katari-4, Udayapur</span>
        </div>
      </div>
    </div>
  );
};

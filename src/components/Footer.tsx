import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Sprout,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Heart,
  Code2,
  Lock,
} from 'lucide-react';
import { PageView } from '../types';

export const Footer: React.FC = () => {
  const {
    navigateToPage,
    setIsDeveloperModalOpen,
    setIsAdminLoginOpen,
    isAdmin,
  } = useSchool();

  const handleNav = (page: PageView, grade?: 9 | 10 | 11 | 12) => {
    navigateToPage(page, grade ? { grade } : undefined);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — School Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight leading-tight">
                  Triveni Secondary School
                </h3>
                <p className="text-xs font-semibold text-emerald-400">
                  Department of Plant Science
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Katari's flagship technical agriculture institution, empowering students from Class 9 to 12 with modern agronomy, greenhouse horticulture, and practical field apprenticeships under NEB standards.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Katari-4, Udayapur, Koshi Province, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Office: 035-450-154</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home Page', page: 'home' as PageView },
                { label: 'About School & Department', page: 'about' as PageView },
                { label: 'Academic Programs', page: 'programs' as PageView },
                { label: 'On-the-Job Training (OJT)', page: 'ojt' as PageView },
                { label: 'Classes & Curriculum', page: 'classes' as PageView },
                { label: 'Official Notices & Results', page: 'notices' as PageView },
                { label: 'Campus & Field Gallery', page: 'gallery' as PageView },
                { label: 'Contact Us', page: 'contact' as PageView },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Academic Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 border-b border-slate-800 pb-2">
              Academic & Classes
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Class 9 — Foundation Agronomy', grade: 9 as const },
                { label: 'Class 10 — Crop Science & Plant Protection', grade: 10 as const },
                { label: 'Class 11 — Seed Tech & Horticulture', grade: 11 as const },
                { label: 'Class 12 — Agribusiness & 6-Mo OJT', grade: 12 as const },
              ].map((cls, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('class-grade', cls.grade)}
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 group text-slate-300"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{cls.label}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('syllabus')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold"
                >
                  <ArrowRight className="w-3 h-3" />
                  <span>Syllabus & Course Downloads</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ojt')}
                  className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold"
                >
                  <ArrowRight className="w-3 h-3" />
                  <span>OJT Logbook & Guidelines</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact & Administrative Desk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 border-b border-slate-800 pb-2">
              Department Desk
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p>
                Coordinator Kailash Rayamajhi and administrative staff are available Sunday through Friday during school operating hours.
              </p>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <p className="font-semibold text-slate-200">Office Working Hours:</p>
                <p className="text-[11px]">Sun – Thu: 10:00 AM – 4:00 PM</p>
                <p className="text-[11px]">Friday: 10:00 AM – 2:00 PM</p>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:info.plantscience@trivenischool.edu.np"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>info.plantscience@trivenischool.edu.np</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    if (isAdmin) {
                      handleNav('admin');
                    } else {
                      setIsAdminLoginOpen(true);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-300 text-[11px] transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>{isAdmin ? 'School CMS Dashboard' : 'Administrator CMS Login'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-900 border-t border-slate-800/80 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright Note */}
          <div>
            <p>
              © {new Date().getFullYear()} <strong className="text-slate-200">Triveni Secondary School — Department of Plant Science</strong>. Katari-4, Udayapur. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Approved under National Examination Board (NEB) technical stream regulations.
            </p>
          </div>

          {/* Prominent Developer Credit - CLICKABLE as mandated */}
          <div className="flex items-center gap-1.5 bg-slate-950/70 border border-emerald-900/50 px-4 py-2 rounded-xl shadow-xs">
            <span className="text-slate-400 text-xs">Website designed & developed by</span>
            <button
              onClick={() => setIsDeveloperModalOpen(true)}
              className="font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500 hover:decoration-amber-400 transition-all inline-flex items-center gap-1 focus:outline-hidden"
              title="Click to view Bibash Lamichhane's developer profile & portfolio"
            >
              <span>Bibash Lamichhane</span>
              <ExternalLink className="w-3 h-3 inline text-emerald-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Sprout,
  Menu,
  X,
  ChevronDown,
  Search,
  Lock,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  FileText,
  Briefcase,
  Users,
  Info,
  Home,
  CheckCircle,
} from 'lucide-react';
import { PageView } from '../types';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    navigateToPage,
    setIsSearchOpen,
    isAdmin,
    setIsAdminLoginOpen,
    logoutAdmin,
  } = useSchool();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [classesDropdownOpen, setClassesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setClassesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageView, grade?: 9 | 10 | 11 | 12) => {
    navigateToPage(page, grade ? { grade } : undefined);
    setMobileMenuOpen(false);
    setClassesDropdownOpen(false);
  };

  const navItems: { label: string; page: PageView; icon: React.ReactNode }[] = [
    { label: 'Home', page: 'home', icon: <Home className="w-4 h-4" /> },
    { label: 'About Us', page: 'about', icon: <Info className="w-4 h-4" /> },
    { label: 'Programs', page: 'programs', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'OJT', page: 'ojt', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Notices', page: 'notices', icon: <FileText className="w-4 h-4" /> },
    { label: 'Gallery', page: 'gallery', icon: <Users className="w-4 h-4" /> },
    { label: 'Contact Us', page: 'contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-emerald-950 text-emerald-100/90 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Katari-4, Udayapur, Koshi Province, Nepal</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Phone: 035-450-154</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-emerald-300/80">
              Technical Secondary Stream (Plant Science · CDC/NEB)
            </span>
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('admin')}
                  className="inline-flex items-center gap-1 text-amber-300 font-semibold hover:text-amber-200 transition-colors"
                >
                  <Lock className="w-3 h-3" /> Admin Dashboard
                </button>
                <button
                  onClick={logoutAdmin}
                  className="text-xs text-rose-300 hover:text-rose-100 transition-colors ml-2"
                >
                  (Log Out)
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAdminLoginOpen(true)}
                className="inline-flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
              >
                <Lock className="w-3 h-3" /> Admin Portal
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* School Branding & Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3.5 text-left group focus:outline-hidden"
              aria-label="Triveni Secondary School Homepage"
            >
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-0.5 shadow-md group-hover:shadow-emerald-200 transition-shadow">
                <div className="w-full h-full bg-emerald-900/10 rounded-[10px] flex items-center justify-center text-white">
                  <Sprout className="w-7 h-7 text-emerald-200 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                    Triveni Secondary School
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-700 tracking-wide flex items-center gap-1">
                  <span>Department of Plant Science</span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="hidden sm:inline text-slate-500 text-[11px] font-normal">Est. Katari</span>
                </div>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  currentPage === 'home'
                    ? 'border-emerald-600 text-emerald-800 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  currentPage === 'about'
                    ? 'border-emerald-600 text-emerald-800 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('programs')}
                className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  currentPage === 'programs' || currentPage === 'program-detail'
                    ? 'border-emerald-600 text-emerald-800 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                Programs
              </button>

              <button
                onClick={() => handleNavClick('ojt')}
                className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  currentPage === 'ojt'
                    ? 'border-emerald-600 text-emerald-800 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                OJT
              </button>

              {/* Classes Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setClassesDropdownOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                    currentPage === 'classes' || currentPage === 'class-grade' || currentPage === 'subject-detail'
                      ? 'border-emerald-600 text-emerald-800 font-semibold'
                      : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                  }`}
                  aria-expanded={classesDropdownOpen}
                >
                  <span>Classes</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                      classesDropdownOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {classesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-emerald-800">Technical Agriculture Stream</p>
                      <p className="text-[11px] text-slate-500">Curriculum & Subject Portals</p>
                    </div>

                    <button
                      onClick={() => handleNavClick('classes')}
                      className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between"
                    >
                      <span>Classes Overview</span>
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    </button>

                    <div className="my-1 border-t border-slate-100"></div>

                    {[9, 10, 11, 12].map((grade) => (
                      <button
                        key={grade}
                        onClick={() => handleNavClick('class-grade', grade as 9 | 10 | 11 | 12)}
                        className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-between group"
                      >
                        <div>
                          <span className="font-semibold text-slate-900 group-hover:text-emerald-800">
                            Class {grade}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {grade === 9
                              ? 'Foundation Agronomy & Botany'
                              : grade === 10
                              ? 'Crop Science & Plant Protection'
                              : grade === 11
                              ? 'Seed Tech, Pathology & Horticulture'
                              : 'Agribusiness & Capstone OJT'}
                          </span>
                        </div>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono">
                          Grade {grade}
                        </span>
                      </button>
                    ))}

                    <div className="my-1 border-t border-slate-100"></div>
                    <button
                      onClick={() => handleNavClick('syllabus')}
                      className="w-full text-left px-4 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50 flex items-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Browse Full Syllabus System</span>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('notices')}
                className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  currentPage === 'notices' || currentPage === 'notice-detail'
                    ? 'border-emerald-600 text-emerald-800 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                Notices
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
                  currentPage === 'contact'
                    ? 'border-emerald-600 text-emerald-800 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-emerald-700 hover:border-emerald-200'
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Action Buttons: Global Search & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 text-xs sm:text-sm font-medium transition-colors border border-slate-200"
                aria-label="Open search dialog"
              >
                <Search className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">Search portal...</span>
                <kbd className="hidden md:inline-block text-[10px] font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                  Ctrl+K
                </kbd>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-hidden"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-3 transition-colors ${
                    currentPage === item.page
                      ? 'bg-emerald-50 text-emerald-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                  }`}
                >
                  <span className="text-emerald-600">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}

              {/* Classes in mobile */}
              <div className="pt-2 pb-1 border-t border-slate-100">
                <div className="px-3 py-1 text-xs font-semibold text-emerald-800 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Classes & Subjects (Plant Science)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 px-2">
                  {[9, 10, 11, 12].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => handleNavClick('class-grade', grade as 9 | 10 | 11 | 12)}
                      className="px-3 py-2 bg-slate-50 hover:bg-emerald-50 text-left rounded-lg text-xs font-semibold text-slate-800 border border-slate-100 flex items-center justify-between"
                    >
                      <span>Class {grade}</span>
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => handleNavClick('syllabus')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 rounded-lg flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Syllabus & Curriculum System</span>
                </button>
              </div>

              {/* Admin mobile button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-3">
                <span>School Office Katari: 035-450-154</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (isAdmin) {
                      handleNavClick('admin');
                    } else {
                      setIsAdminLoginOpen(true);
                    }
                  }}
                  className="text-emerald-700 font-semibold"
                >
                  {isAdmin ? 'Admin Dashboard' : 'Admin Login'}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

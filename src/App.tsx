/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Navbar } from './components/Navbar';
import { NoticeTicker } from './components/NoticeTicker';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { OJTPage } from './pages/OJTPage';
import { ClassesHubPage } from './pages/ClassesHubPage';
import { ClassGradePage } from './pages/ClassGradePage';
import { SubjectDetailPage } from './pages/SubjectDetailPage';
import { NoticesPage } from './pages/NoticesPage';
import { NoticeDetailPage } from './pages/NoticeDetailPage';
import { SyllabusPage } from './pages/SyllabusPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';

// Modals
import { PdfViewerModal } from './components/PdfViewerModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { SearchModal } from './components/SearchModal';
import { ShareModal } from './components/ShareModal';
import { DeveloperModal } from './components/DeveloperModal';
import { AdminLoginModal } from './components/AdminLoginModal';

const AppContent: React.FC = () => {
  const { currentPage } = useSchool();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'program-detail':
        return <ProgramDetailPage />;
      case 'ojt':
        return <OJTPage />;
      case 'classes':
        return <ClassesHubPage />;
      case 'class-grade':
        return <ClassGradePage />;
      case 'subject-detail':
        return <SubjectDetailPage />;
      case 'notices':
        return <NoticesPage />;
      case 'notice-detail':
        return <NoticeDetailPage />;
      case 'syllabus':
        return <SyllabusPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Notice Ticker right below navigation */}
      <NoticeTicker />

      {/* Main Page Viewport */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Multi-column Footer with clickable Bibash Lamichhane developer profile */}
      <Footer />

      {/* Modals & Interactive Overlays */}
      <PdfViewerModal />
      <ImageLightboxModal />
      <SearchModal />
      <ShareModal />
      <DeveloperModal />
      <AdminLoginModal />
    </div>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <AppContent />
    </SchoolProvider>
  );
}

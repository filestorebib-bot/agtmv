import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Notice,
  Teacher,
  LeadershipMember,
  Program,
  Subject,
  OJTGradeInfo,
  GalleryItem,
  Testimonial,
  PageView,
} from '../types';
import {
  initialLeadership,
  initialTeachers,
  initialNotices,
  initialPrograms,
  initialSubjects,
  initialOJTInfo,
  initialGallery,
  initialTestimonials,
} from '../data/initialData';

interface SchoolContextType {
  // Navigation & Page routing
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  selectedGrade: 9 | 10 | 11 | 12;
  setSelectedGrade: (grade: 9 | 10 | 11 | 12) => void;
  selectedNotice: Notice | null;
  setSelectedNotice: (notice: Notice | null) => void;
  selectedSubject: Subject | null;
  setSelectedSubject: (subject: Subject | null) => void;
  selectedProgram: Program | null;
  setSelectedProgram: (program: Program | null) => void;
  selectedTeacher: Teacher | null;
  setSelectedTeacher: (teacher: Teacher | null) => void;

  // Modals & Overlays
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  pdfModalNotice: Notice | null;
  setPdfModalNotice: (notice: Notice | null) => void;
  lightboxImage: { url: string; title: string; caption?: string } | null;
  setLightboxImage: (img: { url: string; title: string; caption?: string } | null) => void;
  isDeveloperModalOpen: boolean;
  setIsDeveloperModalOpen: (open: boolean) => void;
  shareModalData: { title: string; url: string; description: string } | null;
  setShareModalData: (data: { title: string; url: string; description: string } | null) => void;
  isAdminLoginOpen: boolean;
  setIsAdminLoginOpen: (open: boolean) => void;

  // Admin Auth State
  isAdmin: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;

  // Data Collections (Stateful & editable via CMS)
  leadership: LeadershipMember[];
  teachers: Teacher[];
  notices: Notice[];
  programs: Program[];
  subjects: Subject[];
  ojtInfo: Record<10 | 11 | 12, OJTGradeInfo>;
  gallery: GalleryItem[];
  testimonials: Testimonial[];

  // CMS mutations
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (id: string, updated: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;

  addTeacher: (teacher: Omit<Teacher, 'id'>) => void;
  updateTeacher: (id: string, updated: Partial<Teacher>) => void;
  deleteTeacher: (id: string) => void;

  addSubject: (subject: Omit<Subject, 'id'>) => void;
  updateSubject: (id: string, updated: Partial<Subject>) => void;
  deleteSubject: (id: string) => void;

  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;

  addTestimonial: (item: Omit<Testimonial, 'id'>) => void;
  deleteTestimonial: (id: string) => void;

  updateOJT: (grade: 10 | 11 | 12, data: Partial<OJTGradeInfo>) => void;
  resetAllDataToDefault: () => void;

  // Navigation helpers
  navigateToPage: (page: PageView, params?: { grade?: 9 | 10 | 11 | 12; notice?: Notice; subject?: Subject; program?: Program }) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

const STORAGE_KEYS = {
  NOTICES: 'tss_plant_science_notices_v1',
  TEACHERS: 'tss_plant_science_teachers_v1',
  SUBJECTS: 'tss_plant_science_subjects_v1',
  GALLERY: 'tss_plant_science_gallery_v1',
  TESTIMONIALS: 'tss_plant_science_testimonials_v1',
  OJT: 'tss_plant_science_ojt_v1',
  IS_ADMIN: 'tss_plant_science_is_admin_v1',
};

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation states
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedGrade, setSelectedGrade] = useState<9 | 10 | 11 | 12>(9);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [pdfModalNotice, setPdfModalNotice] = useState<Notice | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; caption?: string } | null>(null);
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);
  const [shareModalData, setShareModalData] = useState<{ title: string; url: string; description: string } | null>(null);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);

  // Admin auth
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEYS.IS_ADMIN) === 'true';
  });

  // Persistent Collections
  const [leadership] = useState<LeadershipMember[]>(initialLeadership);

  const [teachers, setTeachers] = useState<Teacher[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TEACHERS);
    return saved ? JSON.parse(saved) : initialTeachers;
  });

  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NOTICES);
    return saved ? JSON.parse(saved) : initialNotices;
  });

  const [programs] = useState<Program[]>(initialPrograms);

  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
    return saved ? JSON.parse(saved) : initialSubjects;
  });

  const [ojtInfo, setOjtInfo] = useState<Record<10 | 11 | 12, OJTGradeInfo>>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.OJT);
    return saved ? JSON.parse(saved) : initialOJTInfo;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  // Sync to LocalStorage on updates
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(teachers));
  }, [teachers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.OJT, JSON.stringify(ojtInfo));
  }, [ojtInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.IS_ADMIN, isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  // Auth functions
  const loginAdmin = (password: string) => {
    // Allows password 'admin' or 'admin123' or 'katari2083'
    if (password === 'admin' || password === 'admin123' || password === 'katari2083') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    if (currentPage === 'admin') {
      setCurrentPage('home');
    }
  };

  // Nav helper
  const navigateToPage = (
    page: PageView,
    params?: { grade?: 9 | 10 | 11 | 12; notice?: Notice; subject?: Subject; program?: Program }
  ) => {
    if (params?.grade) setSelectedGrade(params.grade);
    if (params?.notice) setSelectedNotice(params.notice);
    if (params?.subject) setSelectedSubject(params.subject);
    if (params?.program) setSelectedProgram(params.program);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mutators
  const addNotice = (newNotice: Omit<Notice, 'id'>) => {
    const notice: Notice = {
      ...newNotice,
      id: `notice-${Date.now()}`,
    };
    setNotices((prev) => [notice, ...prev]);
  };

  const updateNotice = (id: string, updated: Partial<Notice>) => {
    setNotices((prev) => prev.map((n) => (n.id === id ? { ...n, ...updated } : n)));
    if (selectedNotice && selectedNotice.id === id) {
      setSelectedNotice((prev) => (prev ? { ...prev, ...updated } : null));
    }
  };

  const deleteNotice = (id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
    if (selectedNotice && selectedNotice.id === id) {
      setSelectedNotice(null);
    }
  };

  const addTeacher = (newTeacher: Omit<Teacher, 'id'>) => {
    const teacher: Teacher = {
      ...newTeacher,
      id: `teacher-${Date.now()}`,
    };
    setTeachers((prev) => [...prev, teacher]);
  };

  const updateTeacher = (id: string, updated: Partial<Teacher>) => {
    setTeachers((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    if (selectedTeacher && selectedTeacher.id === id) {
      setSelectedTeacher((prev) => (prev ? { ...prev, ...updated } : null));
    }
  };

  const deleteTeacher = (id: string) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
  };

  const addSubject = (newSubject: Omit<Subject, 'id'>) => {
    const subject: Subject = {
      ...newSubject,
      id: `sub-${Date.now()}`,
    };
    setSubjects((prev) => [...prev, subject]);
  };

  const updateSubject = (id: string, updated: Partial<Subject>) => {
    setSubjects((prev) => prev.map((s) => (s.id === id ? { ...s, ...updated } : s)));
    if (selectedSubject && selectedSubject.id === id) {
      setSelectedSubject((prev) => (prev ? { ...prev, ...updated } : null));
    }
  };

  const deleteSubject = (id: string) => {
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  const addGalleryItem = (newItem: Omit<GalleryItem, 'id'>) => {
    const item: GalleryItem = {
      ...newItem,
      id: `gal-${Date.now()}`,
    };
    setGallery((prev) => [item, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  const addTestimonial = (newItem: Omit<Testimonial, 'id'>) => {
    const item: Testimonial = {
      ...newItem,
      id: `test-${Date.now()}`,
    };
    setTestimonials((prev) => [item, ...prev]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const updateOJT = (grade: 10 | 11 | 12, data: Partial<OJTGradeInfo>) => {
    setOjtInfo((prev) => ({
      ...prev,
      [grade]: {
        ...prev[grade],
        ...data,
      },
    }));
  };

  const resetAllDataToDefault = () => {
    localStorage.removeItem(STORAGE_KEYS.NOTICES);
    localStorage.removeItem(STORAGE_KEYS.TEACHERS);
    localStorage.removeItem(STORAGE_KEYS.SUBJECTS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
    localStorage.removeItem(STORAGE_KEYS.OJT);
    setNotices(initialNotices);
    setTeachers(initialTeachers);
    setSubjects(initialSubjects);
    setGallery(initialGallery);
    setTestimonials(initialTestimonials);
    setOjtInfo(initialOJTInfo);
  };

  return (
    <SchoolContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedGrade,
        setSelectedGrade,
        selectedNotice,
        setSelectedNotice,
        selectedSubject,
        setSelectedSubject,
        selectedProgram,
        setSelectedProgram,
        selectedTeacher,
        setSelectedTeacher,
        isSearchOpen,
        setIsSearchOpen,
        pdfModalNotice,
        setPdfModalNotice,
        lightboxImage,
        setLightboxImage,
        isDeveloperModalOpen,
        setIsDeveloperModalOpen,
        shareModalData,
        setShareModalData,
        isAdminLoginOpen,
        setIsAdminLoginOpen,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        leadership,
        teachers,
        notices,
        programs,
        subjects,
        ojtInfo,
        gallery,
        testimonials,
        addNotice,
        updateNotice,
        deleteNotice,
        addTeacher,
        updateTeacher,
        deleteTeacher,
        addSubject,
        updateSubject,
        deleteSubject,
        addGalleryItem,
        deleteGalleryItem,
        addTestimonial,
        deleteTestimonial,
        updateOJT,
        resetAllDataToDefault,
        navigateToPage,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};

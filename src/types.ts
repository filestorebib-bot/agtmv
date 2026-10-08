export type NoticeCategory = 'Admission' | 'OJT' | 'Examination' | 'Scholarship' | 'General' | 'Academic';
export type NoticeFormat = 'pdf' | 'image' | 'text';

export interface Notice {
  id: string;
  title: string;
  nepaliTitle?: string;
  date: string;
  nepaliDate?: string;
  category: NoticeCategory;
  type: NoticeFormat;
  fileUrl?: string;
  description: string;
  important: boolean;
  publishedBy: string;
  pdfPages?: string[]; // simulated pages for embedded reader
  downloadUrl?: string;
  views?: number;
  descriptionDetailed?: string;
}

export interface Teacher {
  id: string;
  name: string;
  nepaliName?: string;
  designation: string;
  qualification: string;
  subject: string;
  department: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  specializations: string[];
  experienceYears: number;
}

export interface LeadershipMember {
  id: string;
  name: string;
  nepaliName?: string;
  role: 'Coordinator' | 'Principal';
  designation: string;
  photo: string;
  phone: string;
  email: string;
  introduction: string;
  message: string;
  credentials: string[];
}

export interface ProgramSubject {
  code: string;
  name: string;
  type: 'Theory' | 'Practical' | 'Both';
  hours: number;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  nepaliTitle?: string;
  tagline: string;
  level: string;
  duration: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  eligibility: string;
  majorSubjects: string[];
  careerOpportunities: string[];
  higherStudies: string[];
  practicalFeatures: string[];
  image: string;
  curriculumOverview: string;
}

export interface SubjectUnit {
  unitNumber: number;
  title: string;
  topics: string[];
  hours: number;
}

export interface SubjectResource {
  id: string;
  title: string;
  format: 'PDF' | 'DOCX' | 'PPTX' | 'ZIP';
  size: string;
  downloadUrl: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  nepaliName?: string;
  grade: 9 | 10 | 11 | 12;
  description: string;
  creditHours: number;
  theoryHours: number;
  practicalHours: number;
  objectives: string[];
  units: SubjectUnit[];
  practicalActivities: string[];
  resources: SubjectResource[];
  syllabusContent?: string;
}

export interface OJTGradeInfo {
  grade: 10 | 11 | 12;
  title: string;
  duration: string;
  creditHours: number;
  introduction: string;
  objectives: string[];
  activities: string[];
  studentResponsibilities: string[];
  evaluationSystem: string;
  documents: {
    title: string;
    format: string;
    size: string;
    downloadUrl: string;
    description: string;
  }[];
  photos: {
    url: string;
    caption: string;
  }[];
  partnerInstitutions: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Polyhouse & Nursery' | 'Field Practicals' | 'Lab & Soil Science' | 'OJT & Farm Visits' | 'Campus Life';
  imageUrl: string;
  caption: string;
  date: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  batch: string;
  gradeCompleted: string;
  currentRole: string;
  currentInstitution: string;
  location: string;
  quote: string;
  photo: string;
  keyHighlight: string;
}

export interface Spokesperson {
  name: string;
  position: string;
  phone: string;
  email: string;
  photo: string;
  department: string;
  availability: string;
}

export interface DeveloperProfile {
  name: string;
  title: string;
  photo: string;
  bio: string;
  skills: {
    category: string;
    items: string[];
  }[];
  education: string;
  experience: string[];
  webProjects: {
    title: string;
    role: string;
    description: string;
    tech: string[];
  }[];
  graphicDesign: {
    title: string;
    description: string;
    tools: string[];
  }[];
  contact: {
    email: string;
    phone?: string;
    location: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export type PageView = 
  | 'home' 
  | 'about' 
  | 'programs' 
  | 'program-detail' 
  | 'ojt' 
  | 'classes' 
  | 'class-grade' 
  | 'subject-detail'
  | 'notices' 
  | 'notice-detail' 
  | 'syllabus' 
  | 'gallery' 
  | 'contact' 
  | 'developer'
  | 'admin';

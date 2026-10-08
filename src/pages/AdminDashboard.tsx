import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Lock,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  FileText,
  Users,
  GraduationCap,
  Briefcase,
  BookOpen,
  Image as ImageIcon,
  MessageSquare,
  CheckCircle2,
  X,
} from 'lucide-react';
import { Notice, Teacher, Subject, GalleryItem, Testimonial, NoticeCategory } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    isAdmin,
    setIsAdminLoginOpen,
    notices,
    addNotice,
    deleteNotice,
    teachers,
    addTeacher,
    deleteTeacher,
    subjects,
    addSubject,
    deleteSubject,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    resetAllDataToDefault,
    navigateToPage,
  } = useSchool();

  const [activeTab, setActiveTab] = useState<
    'notices' | 'teachers' | 'subjects' | 'gallery' | 'testimonials'
  >('notices');

  const [successMsg, setSuccessMsg] = useState('');

  // Notice Form State
  const [newNotice, setNewNotice] = useState({
    title: '',
    nepaliTitle: '',
    category: 'Admission' as NoticeCategory,
    date: new Date().toISOString().split('T')[0],
    nepaliDate: '२०८३ बैशाख ०१',
    type: 'pdf' as 'pdf' | 'image' | 'text',
    description: '',
    important: false,
    publishedBy: 'Plant Science Department',
  });

  // Teacher Form State
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    nepaliName: '',
    designation: '',
    qualification: '',
    subject: '',
    department: 'Department of Plant Science',
    email: '',
    phone: '035-450-154',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: '',
    specializations: 'Agronomy, Horticulture',
    experienceYears: 5,
  });

  // Gallery Form State
  const [newGallery, setNewGallery] = useState({
    title: '',
    category: 'Field Practicals' as any,
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1200&q=80',
    caption: '',
    date: new Date().toISOString().split('T')[0],
  });

  // Testimonial Form State
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    batch: 'Batch of 2082',
    gradeCompleted: 'Grade 12 Plant Science Graduate',
    currentRole: 'Junior Technical Assistant (JTA)',
    currentInstitution: 'Local Municipality Agriculture Section',
    location: 'Koshi Province',
    quote: '',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    keyHighlight: 'Outstanding Academic & Practical Performer',
  });

  const notify = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.description) return;
    addNotice({
      ...newNotice,
      pdfPages: [
        `TRIVENI SECONDARY SCHOOL\nDEPARTMENT OF PLANT SCIENCE\nKatari-4, Udayapur\n\n${newNotice.title.toUpperCase()}\n\nDate: ${newNotice.nepaliDate} (${newNotice.date})\n\n${newNotice.description}\n\nPublished By: ${newNotice.publishedBy}`,
      ],
    });
    setNewNotice({
      title: '',
      nepaliTitle: '',
      category: 'Admission',
      date: new Date().toISOString().split('T')[0],
      nepaliDate: '२०८३ बैशाख ०१',
      type: 'pdf',
      description: '',
      important: false,
      publishedBy: 'Plant Science Department',
    });
    notify('Notice successfully published to website and notice ticker!');
  };

  const handleCreateTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTeacher.name || !newTeacher.designation) return;
    addTeacher({
      ...newTeacher,
      specializations: newTeacher.specializations.split(',').map((s) => s.trim()),
    });
    setNewTeacher({
      name: '',
      nepaliName: '',
      designation: '',
      qualification: '',
      subject: '',
      department: 'Department of Plant Science',
      email: '',
      phone: '035-450-154',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      bio: '',
      specializations: 'Agronomy, Horticulture',
      experienceYears: 5,
    });
    notify('Teacher successfully added to Faculty roster!');
  };

  const handleCreateGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGallery.title || !newGallery.imageUrl) return;
    addGalleryItem(newGallery);
    setNewGallery({
      title: '',
      category: 'Field Practicals',
      imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1200&q=80',
      caption: '',
      date: new Date().toISOString().split('T')[0],
    });
    notify('Photo added to School Gallery!');
  };

  const handleCreateTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.quote) return;
    addTestimonial(newTestimonial);
    setNewTestimonial({
      name: '',
      batch: 'Batch of 2082',
      gradeCompleted: 'Grade 12 Plant Science Graduate',
      currentRole: 'Junior Technical Assistant (JTA)',
      currentInstitution: 'Local Municipality Agriculture Section',
      location: 'Koshi Province',
      quote: '',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      keyHighlight: 'Outstanding Academic & Practical Performer',
    });
    notify('Student testimonial added to homepage!');
  };

  if (!isAdmin) {
    return (
      <div className="py-24 text-center bg-slate-50 min-h-screen px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <Lock className="w-12 h-12 text-emerald-600 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">Administrator Access Required</h2>
          <p className="text-xs text-slate-500">
            You must be logged in as an authorized school administrator to access the Content Management System.
          </p>
          <button
            onClick={() => setIsAdminLoginOpen(true)}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Sign In with Password
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-14 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                CMS DASHBOARD
              </span>
              <span className="text-xs text-slate-500">Triveni Secondary School</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Content Management System
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage notices, faculty profiles, subjects, gallery photos, and student testimonials with instant live updates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset all website data back to official initial state?')) {
                  resetAllDataToDefault();
                  notify('Data reset to default values.');
                }
              }}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
            <button
              onClick={() => navigateToPage('home')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              View Live Website &rarr;
            </button>
          </div>
        </div>

        {successMsg && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* CMS Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'notices', label: `Notices (${notices.length})`, icon: <FileText className="w-4 h-4" /> },
            { id: 'teachers', label: `Teachers (${teachers.length})`, icon: <Users className="w-4 h-4" /> },
            { id: 'subjects', label: `Subjects (${subjects.length})`, icon: <BookOpen className="w-4 h-4" /> },
            { id: 'gallery', label: `Gallery (${gallery.length})`, icon: <ImageIcon className="w-4 h-4" /> },
            { id: 'testimonials', label: `Testimonials (${testimonials.length})`, icon: <MessageSquare className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Notices Manager */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            {/* Create Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>Publish New Notice / Circular</span>
              </h3>

              <form onSubmit={handleCreateNotice} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Notice Title (English)</label>
                    <input
                      type="text"
                      required
                      value={newNotice.title}
                      onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                      placeholder="e.g. Admission Notice 2083 Plant Science"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nepali Title (Optional)</label>
                    <input
                      type="text"
                      value={newNotice.nepaliTitle}
                      onChange={(e) => setNewNotice({ ...newNotice, nepaliTitle: e.target.value })}
                      placeholder="e.g. भर्ना सम्बन्धी सूचना २०८३"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Category</label>
                    <select
                      value={newNotice.category}
                      onChange={(e) => setNewNotice({ ...newNotice, category: e.target.value as any })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-xs"
                    >
                      <option value="Admission">Admission</option>
                      <option value="OJT">OJT</option>
                      <option value="Examination">Examination</option>
                      <option value="Scholarship">Scholarship</option>
                      <option value="Academic">Academic</option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Format Type</label>
                    <select
                      value={newNotice.type}
                      onChange={(e) => setNewNotice({ ...newNotice, type: e.target.value as any })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-xs"
                    >
                      <option value="pdf">PDF Document</option>
                      <option value="text">Text Notice</option>
                      <option value="image">Image Notice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Date (Nepali BS)</label>
                    <input
                      type="text"
                      value={newNotice.nepaliDate}
                      onChange={(e) => setNewNotice({ ...newNotice, nepaliDate: e.target.value })}
                      placeholder="२०८३ बैशाख ०१"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-xs"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-6">
                    <input
                      type="checkbox"
                      id="important-checkbox"
                      checked={newNotice.important}
                      onChange={(e) => setNewNotice({ ...newNotice, important: e.target.checked })}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="important-checkbox" className="font-semibold text-slate-700 text-xs">
                      Mark as Priority Notice
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Description / Content</label>
                  <textarea
                    rows={3}
                    required
                    value={newNotice.description}
                    onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })}
                    placeholder="Enter full notice announcement details..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Publish Notice
                </button>
              </form>
            </div>

            {/* Existing List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4">Existing Notices ({notices.length})</h3>
              <div className="space-y-3">
                {notices.map((n) => (
                  <div
                    key={n.id}
                    className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {n.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{n.title}</h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Date: {n.nepaliDate || n.date} · Type: {n.type.toUpperCase()}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete notice: "${n.title}"?`)) {
                          deleteNotice(n.id);
                          notify('Notice deleted.');
                        }
                      }}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shrink-0"
                      title="Delete notice"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Teachers Manager */}
        {activeTab === 'teachers' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>Add New Faculty Member</span>
              </h3>

              <form onSubmit={handleCreateTeacher} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={newTeacher.name}
                      onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                      placeholder="e.g. Ramesh Rayamajhi"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Designation</label>
                    <input
                      type="text"
                      required
                      value={newTeacher.designation}
                      onChange={(e) => setNewTeacher({ ...newTeacher, designation: e.target.value })}
                      placeholder="e.g. Instructor in Agronomy"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Qualification</label>
                    <input
                      type="text"
                      value={newTeacher.qualification}
                      onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })}
                      placeholder="e.g. B.Sc. Agriculture (IAAS)"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Subject Taught</label>
                    <input
                      type="text"
                      value={newTeacher.subject}
                      onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
                      placeholder="e.g. Crop Science & Horticulture"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={newTeacher.email}
                      onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                      placeholder="ramesh@trivenischool.edu.np"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Photo Image URL</label>
                    <input
                      type="url"
                      value={newTeacher.photo}
                      onChange={(e) => setNewTeacher({ ...newTeacher, photo: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Bio / Profile Summary</label>
                  <textarea
                    rows={2}
                    value={newTeacher.bio}
                    onChange={(e) => setNewTeacher({ ...newTeacher, bio: e.target.value })}
                    placeholder="Short introduction of teaching and practical background..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Add Teacher
                </button>
              </form>
            </div>

            {/* List */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4">Current Faculty ({teachers.length})</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teachers.map((t) => (
                  <div key={t.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{t.name}</h4>
                        <p className="text-[11px] text-emerald-700 font-medium">{t.designation}</p>
                        <p className="text-[10px] text-slate-500">{t.subject}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm(`Remove teacher: ${t.name}?`)) {
                          deleteTeacher(t.id);
                          notify('Teacher removed.');
                        }
                      }}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Subjects Manager */}
        {activeTab === 'subjects' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 mb-4">Curriculum Subjects ({subjects.length})</h3>
            <div className="space-y-3">
              {subjects.map((sub) => (
                <div key={sub.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        Class {sub.grade} · {sub.code}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">{sub.name}</h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {sub.creditHours} Credit Hours · {sub.units.length} Units · Theory: {sub.theoryHours}h · Practical: {sub.practicalHours}h
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      if (window.confirm(`Delete subject: ${sub.name}?`)) {
                        deleteSubject(sub.id);
                        notify('Subject removed.');
                      }
                    }}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Gallery Manager */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>Upload / Add Gallery Photo</span>
              </h3>

              <form onSubmit={handleCreateGallery} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Image Title</label>
                    <input
                      type="text"
                      required
                      value={newGallery.title}
                      onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                      placeholder="e.g. Polyhouse Tomato Pruning"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Category</label>
                    <select
                      value={newGallery.category}
                      onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value as any })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    >
                      <option value="Campus Life">Campus Life</option>
                      <option value="Polyhouse & Nursery">Polyhouse & Nursery</option>
                      <option value="Field Practicals">Field Practicals</option>
                      <option value="Lab & Soil Science">Lab & Soil Science</option>
                      <option value="OJT & Farm Visits">OJT & Farm Visits</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Image URL</label>
                    <input
                      type="url"
                      required
                      value={newGallery.imageUrl}
                      onChange={(e) => setNewGallery({ ...newGallery, imageUrl: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Caption</label>
                  <input
                    type="text"
                    value={newGallery.caption}
                    onChange={(e) => setNewGallery({ ...newGallery, caption: e.target.value })}
                    placeholder="Brief description of the activity and student participation..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Add Photo to Gallery
                </button>
              </form>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4">Gallery Images ({gallery.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {gallery.map((item) => (
                  <div key={item.id} className="relative rounded-xl overflow-hidden aspect-4/3 group border border-slate-200">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-between text-white">
                      <p className="text-[10px] font-bold line-clamp-2">{item.title}</p>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete image: ${item.title}?`)) {
                            deleteGalleryItem(item.id);
                            notify('Image deleted.');
                          }
                        }}
                        className="p-1 bg-rose-600 hover:bg-rose-700 rounded text-white self-end"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Testimonials Manager */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                <span>Add Former Student Testimonial</span>
              </h3>

              <form onSubmit={handleCreateTestimonial} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Student Full Name</label>
                    <input
                      type="text"
                      required
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                      placeholder="e.g. Sita Adhikari"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Current Role / Profession</label>
                    <input
                      type="text"
                      value={newTestimonial.currentRole}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, currentRole: e.target.value })}
                      placeholder="e.g. Junior Technical Assistant"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Institution / Organization</label>
                    <input
                      type="text"
                      value={newTestimonial.currentInstitution}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, currentInstitution: e.target.value })}
                      placeholder="e.g. Katari Municipality"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Testimonial Quote</label>
                  <textarea
                    rows={3}
                    required
                    value={newTestimonial.quote}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                    placeholder="Student's feedback regarding plant science education at Triveni..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Add Testimonial
                </button>
              </form>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-4">Current Testimonials ({testimonials.length})</h3>
              <div className="space-y-3">
                {testimonials.map((t) => (
                  <div key={t.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                        <p className="text-xs text-emerald-700">{t.currentRole} · {t.currentInstitution}</p>
                        <p className="text-xs text-slate-500 italic line-clamp-1">"{t.quote}"</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete testimonial of ${t.name}?`)) {
                          deleteTestimonial(t.id);
                          notify('Testimonial removed.');
                        }
                      }}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

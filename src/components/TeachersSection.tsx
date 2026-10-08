import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Teacher } from '../types';
import {
  Users,
  GraduationCap,
  Mail,
  Phone,
  BookOpen,
  X,
  Sparkles,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export const TeachersSection: React.FC = () => {
  const { teachers } = useSchool();
  const [activeModalTeacher, setActiveModalTeacher] = useState<Teacher | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Faculty & Practical Instructors</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Teachers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A dedicated team of agricultural scientists, agronomists, horticulturists, and farm supervisors bringing academic excellence and field mastery to every lesson.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => setActiveModalTeacher(teacher)}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 p-5 shadow-xs hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative mb-4 overflow-hidden rounded-xl aspect-4/3 bg-slate-100">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2.5 left-2.5 text-white">
                    <span className="text-[11px] font-semibold bg-emerald-700/80 backdrop-blur-xs px-2 py-0.5 rounded">
                      {teacher.experienceYears}+ Years Field Experience
                    </span>
                  </div>
                </div>

                {/* Identity */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {teacher.name}
                </h3>
                {teacher.nepaliName && (
                  <p className="text-xs font-medium text-emerald-800">{teacher.nepaliName}</p>
                )}
                <p className="text-xs font-semibold text-emerald-700 mt-1">
                  {teacher.designation}
                </p>

                {/* Qualification & Subject */}
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1" title={teacher.qualification}>
                      {teacher.qualification}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1" title={teacher.subject}>
                      {teacher.subject}
                    </span>
                  </div>
                </div>

                {/* Short Bio snippet */}
                <p className="mt-3 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {teacher.bio}
                </p>
              </div>

              {/* Card Footer button */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold group-hover:underline">
                  View Full Profile &rarr;
                </span>
                <span className="text-slate-400 text-[11px] font-mono">035-450-154</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Detailed Modal */}
      {activeModalTeacher && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-start pb-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-500 shrink-0">
                  <img
                    src={activeModalTeacher.photo}
                    alt={activeModalTeacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {activeModalTeacher.department}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                    {activeModalTeacher.name}
                  </h3>
                  {activeModalTeacher.nepaliName && (
                    <p className="text-xs font-semibold text-emerald-800">
                      {activeModalTeacher.nepaliName}
                    </p>
                  )}
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    {activeModalTeacher.designation}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveModalTeacher(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto py-5 space-y-5 text-xs sm:text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  About the Instructor
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {activeModalTeacher.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <h5 className="text-xs font-bold text-emerald-900 uppercase mb-1">Qualification</h5>
                  <p className="text-xs text-slate-700 font-medium">{activeModalTeacher.qualification}</p>
                </div>
                <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <h5 className="text-xs font-bold text-emerald-900 uppercase mb-1">Subject Specialization</h5>
                  <p className="text-xs text-slate-700 font-medium">{activeModalTeacher.subject}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Areas of Practical Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalTeacher.specializations.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contact info */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Official Ext: {activeModalTeacher.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Email: {activeModalTeacher.email}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalTeacher(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

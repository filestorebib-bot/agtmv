import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { developerBibashLamichhane } from '../data/initialData';
import {
  X,
  Code2,
  Palette,
  ExternalLink,
  Mail,
  MapPin,
  Globe,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Award,
} from 'lucide-react';

export const DeveloperModal: React.FC = () => {
  const { isDeveloperModalOpen, setIsDeveloperModalOpen } = useSchool();

  if (!isDeveloperModalOpen) return null;

  const dev = developerBibashLamichhane;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Hero Banner */}
        <div className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 sm:p-8">
          <button
            onClick={() => setIsDeveloperModalOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            title="Close Profile"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-emerald-400 to-amber-300 p-1 shadow-xl">
                <img
                  src={dev.photo}
                  alt={dev.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-400 text-amber-950 p-1.5 rounded-full shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 mb-2">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Web Architect & UI/UX Specialist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{dev.name}</h2>
              <p className="text-sm text-emerald-100/90 mt-1">{dev.title}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-emerald-200/80 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {dev.contact.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {dev.contact.email}
                </span>
                {dev.contact.website && (
                  <a
                    href={dev.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-amber-300 hover:text-white transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>tankanath.com.np</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Biography */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Biography</h3>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              {dev.bio}
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {dev.skills.map((skillGroup, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    {idx === 0 ? <Code2 className="w-3.5 h-3.5" /> : idx === 1 ? <GraduationCap className="w-3.5 h-3.5" /> : <Palette className="w-3.5 h-3.5" />}
                    <span>{skillGroup.category}</span>
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Projects */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-emerald-700" />
              <span>Web Development Work & Projects</span>
            </h3>
            <div className="space-y-3">
              {dev.webProjects.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-colors shadow-xs">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">{proj.title}</h4>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {proj.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphic Design Work */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-emerald-700" />
              <span>Graphic Design & Creative Work</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dev.graphicDesign.map((gd, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
                  <h4 className="text-xs font-bold text-slate-900">{gd.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{gd.description}</p>
                  <p className="text-[11px] text-slate-400 mt-2 font-mono">Tools: {gd.tools.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Background */}
          <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-emerald-900 uppercase">Education</h4>
              <p className="text-xs text-slate-700 mt-0.5">{dev.education}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <span>Website designed & engineered for Triveni Secondary School</span>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${dev.contact.email}`}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Developer</span>
            </a>
            <button
              onClick={() => setIsDeveloperModalOpen(false)}
              className="px-3 py-1.5 text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

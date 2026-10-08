import React from 'react';
import { useSchool } from '../context/SchoolContext';
import {
  Sprout,
  Target,
  Compass,
  CheckCircle2,
  Building,
  GraduationCap,
  Leaf,
  Users,
  Award,
  Shield,
  Lightbulb,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { leadership } = useSchool();

  const coreValues = [
    {
      title: 'Quality Education',
      desc: 'Rigorous academic standards adhering to the National Curriculum Framework (CDC/NEB).',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Practical Learning',
      desc: 'Hands-on nursery management, soil chemical analysis, grafting, and farm equipment operation.',
      icon: <Leaf className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Agricultural Innovation',
      desc: 'Pioneering protected polyhouse cultivation, drip fertigation, and Integrated Pest Management in Udayapur.',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Academic Discipline',
      desc: 'Cultivating professional work ethics, rigorous logbook documentation, and workplace responsibility.',
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Environmental Sustainability',
      desc: 'Promoting organic bio-fertilizers (Jholmal), vermicomposting, and soil conservation methods.',
      icon: <Sprout className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Agriculture Development',
      desc: 'Strengthening Koshi Province’s farming economy through research, farmer clinics, and seed quality enhancement.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Student Empowerment',
      desc: 'Preparing self-reliant graduates who can establish profitable agro-enterprises or excel in university studies.',
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Community Service',
      desc: 'Active extension demonstrations, farmer field schools, and soil testing outreach for Katari municipality farmers.',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-emerald-700" />
            <span>Institutional Profile</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Triveni Secondary School
          </h1>
          <p className="mt-3 text-base sm:text-lg text-emerald-800 font-medium">
            Department of Plant Science · Katari-4, Udayapur, Koshi Province
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded with a commitment to academic excellence and technical agrarian empowerment, Triveni Secondary School is shaping the agricultural leaders of tomorrow through experiential plant science education.
          </p>
        </div>

        {/* Section 1: School Introduction & History */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              School Introduction & Academic Philosophy
            </h2>
            <div className="prose text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Triveni Secondary School is situated in Katari-4, Udayapur, at the crossroads of the Chure hills and the fertile valleys of Koshi Province. Over the years, the institution has provided high-caliber general secondary education to students from across Udayapur, Sindhuli, and Siraha districts.
              </p>
              <p>
                Recognizing Nepal's urgent requirement for technically competent, locally grounded agricultural professionals, the school expanded its academic offerings to establish the specialized <strong>Technical Secondary Stream in Agriculture (Plant Science)</strong>, affiliated with the National Examination Board (NEB) and the Curriculum Development Centre (CDC).
              </p>
              <p>
                Our academic philosophy rests on the conviction that scientific education must bear tangible fruit in the soil. We bridge classical classroom pedagogy with daily field chores, scientific soil testing, micro-propagation, nursery management, and commercial agribusiness planning.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-800">
              <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Affiliated with National Examination Board (NEB)
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                CDC Technical Agriculture Curriculum
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-500/20 aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                alt="Triveni Secondary School Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-xs font-medium">
                  Main Academic Complex & Agricultural Farm · Katari-4
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Department of Plant Science Focus */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/60">
              <Leaf className="w-3.5 h-3.5" />
              <span>Specialized Department Focus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Agriculture & Plant Science Education?
            </h2>
            <div className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed space-y-3 font-light">
              <p>
                Agriculture remains the foundational backbone of Nepal's economy and food security. However, traditional subsistence farming must evolve into commercial, high-value, climate-resilient agribusiness to satisfy 21st-century economic needs.
              </p>
              <p>
                The Department of Plant Science at Triveni Secondary School addresses this gap by training students in modern agronomy, protective polyhouse farming, micro-irrigation, integrated pest management (IPM), and post-harvest food preservation.
              </p>
              <p>
                By enrolling in this 4-year technical stream (Classes 9 to 12), students earn the national secondary certificate while qualifying as certified <strong>Junior Technical Assistants (JTAs)</strong>, opening immediate career opportunities in municipal agriculture divisions, regional seed companies, and cooperatives, or continuing into degree programs such as B.Sc. Agriculture.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-emerald-800">
              <div className="bg-emerald-900/50 p-3.5 rounded-xl border border-emerald-700/40">
                <p className="text-base font-bold text-amber-300">Classroom to Field</p>
                <p className="text-[11px] text-emerald-200/80 mt-1">
                  50% practical hours allocated in laboratories and crop demonstration plots.
                </p>
              </div>
              <div className="bg-emerald-900/50 p-3.5 rounded-xl border border-emerald-700/40">
                <p className="text-base font-bold text-emerald-300">OJT Apprenticeship</p>
                <p className="text-[11px] text-emerald-200/80 mt-1">
                  6-month commercial field residency at verified agro-enterprises in Grade 12.
                </p>
              </div>
              <div className="bg-emerald-900/50 p-3.5 rounded-xl border border-emerald-700/40">
                <p className="text-base font-bold text-amber-300">Dual Readiness</p>
                <p className="text-[11px] text-emerald-200/80 mt-1">
                  Equipped for direct employment or competitive university B.Sc. Ag scholarships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To establish Triveni Secondary School as the foremost center of technical plant science education in Koshi Province, producing scientifically enlightened, ethical, and entrepreneurial agricultural leaders capable of revolutionizing rural farming systems in Nepal.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
              Transforming agrarian livelihoods through vocational excellence.
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Deliver rigorous, CDC/NEB compliant technical agriculture education for Classes 9–12.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Provide state-of-the-art polyhouse, soil testing, and nursery facilities for continuous hands-on practice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Facilitate immersive On-the-Job Training (OJT) attachments with research farms and local cooperatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Foster community extension programs that empower local farming families in Katari municipality.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
              Excellence in instruction · Integrity in field research.
            </div>
          </div>
        </div>

        {/* Section 4: Core Values Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Core Institutional Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              The fundamental guiding principles that anchor our teachers, students, and administration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 bg-emerald-50 rounded-xl w-fit mb-3">
                    {val.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Bios snippet */}
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Institutional Leadership Messages
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Reflections from Principal Gyanendra Bahadur Karki and Coordinator Kailash Rayamajhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((l) => (
              <div key={l.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <img src={l.photo} alt={l.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{l.name}</h4>
                    <p className="text-xs text-emerald-700 font-semibold">{l.designation}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  "{l.message}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

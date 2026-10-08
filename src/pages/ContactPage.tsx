import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { spokespersonInfo } from '../data/initialData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  CheckCircle2,
  AlertCircle,
  Users,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    // Basic email check
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Phone className="w-3.5 h-3.5" />
            <span>Official Communications</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Us & Administration
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Get in touch with the Department of Plant Science at Triveni Secondary School for technical admissions, OJT inquiries, syllabus consultations, and school visits.
          </p>
        </div>

        {/* Main Grid: Form (Left) & Contact Details + Spokesperson (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Send an Inquiry or Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Our administrative staff and agricultural department coordinator review incoming queries daily.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-base font-bold text-emerald-950">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Triveni Secondary School. Our administration or Department Coordinator will respond to your provided email/phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Karki"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. student@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9842851234"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Subject / Query Category
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Admission / OJT Inquiry"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your detailed questions or remarks here..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to School</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Office Details (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Triveni Secondary School
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    Department of Plant Science
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Address:</strong>
                    <span>Katari-4, Udayapur, Koshi Province, Nepal</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Telephone:</strong>
                    <span>035-450-154</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Official Email:</strong>
                    <span>info.plantscience@trivenischool.edu.np</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Office Working Hours:</strong>
                    <span>Sunday – Thursday: 10:00 AM – 4:00 PM</span>
                    <span className="block">Friday: 10:00 AM – 2:00 PM (Closed Saturdays)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Spokesperson Profile Section */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-900 px-2.5 py-0.5 rounded-full">
                Designated School Spokesperson
              </span>

              <div className="flex items-center gap-4 pt-1">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-500 shrink-0">
                  <img
                    src={spokespersonInfo.photo}
                    alt={spokespersonInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{spokespersonInfo.name}</h4>
                  <p className="text-xs text-emerald-300 font-medium">{spokespersonInfo.position}</p>
                  <p className="text-[11px] text-emerald-400/80">{spokespersonInfo.department}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-800/80 text-xs text-emerald-200/90 space-y-1">
                <p><strong>Direct Phone:</strong> {spokespersonInfo.phone}</p>
                <p><strong>Official Desk:</strong> {spokespersonInfo.email}</p>
                <p className="text-[11px] text-emerald-400 pt-1">Availability: {spokespersonInfo.availability}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map for Katari, Udayapur */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>Interactive Campus Location</span>
              </h3>
              <p className="text-xs text-slate-500">
                Katari-4, Udayapur, Koshi Province, Nepal (Along the Siddhi Charan Highway / Katari Bazaar)
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
              Katari, Udayapur
            </span>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative">
            <iframe
              title="Triveni Secondary School Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://www.openstreetmap.org/export/embed.html?bbox=86.3800%2C26.9600%2C86.4600%2C27.0300&amp;layer=mapnik&amp;marker=26.9930%2C86.4180"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

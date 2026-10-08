import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { Lock, X, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';

export const AdminLoginModal: React.FC = () => {
  const {
    isAdminLoginOpen,
    setIsAdminLoginOpen,
    loginAdmin,
    navigateToPage,
  } = useSchool();

  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isAdminLoginOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setError(false);
      setIsAdminLoginOpen(false);
      setPassword('');
      navigateToPage('admin');
    } else {
      setError(true);
    }
  };

  const handleQuickDemoLogin = () => {
    loginAdmin('admin');
    setError(false);
    setIsAdminLoginOpen(false);
    navigateToPage('admin');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Admin Portal</h3>
              <p className="text-[11px] text-slate-500">Triveni School CMS Access</p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsAdminLoginOpen(false);
              setError(false);
            }}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Administrator Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password (e.g. admin)"
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          {error && (
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Incorrect password. Hint: Use <strong>admin</strong> or <strong>admin123</strong></span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
          >
            Sign In to CMS
          </button>

          {/* Quick Demo Access */}
          <div className="pt-2 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold underline underline-offset-2 flex items-center justify-center gap-1 mx-auto"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>One-Click Demo Administrator Access</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

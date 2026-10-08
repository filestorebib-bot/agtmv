import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { X, Copy, Check, Share2, MessageCircle, Facebook, Send } from 'lucide-react';

export const ShareModal: React.FC = () => {
  const { shareModalData, setShareModalData } = useSchool();
  const [copied, setCopied] = useState(false);

  if (!shareModalData) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : shareModalData.url;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(`${shareModalData.title} - Triveni Secondary School (Dept. of Plant Science)`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareModalData.title,
          text: shareModalData.description,
          url: currentUrl,
        });
        setShareModalData(null);
      } catch {
        // user cancelled
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden p-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">Share Program</h3>
          </div>
          <button
            onClick={() => setShareModalData(null)}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm font-semibold text-slate-800 mb-1">{shareModalData.title}</p>
        <p className="text-xs text-slate-500 mb-5">{shareModalData.description}</p>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* WhatsApp */}
          <a
            href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl font-medium text-xs transition-colors border border-emerald-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-xl font-medium text-xs transition-colors border border-blue-200"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
            <span>Facebook</span>
          </a>

          {/* Messenger */}
          <a
            href={`https://www.messenger.com/t/?link=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 rounded-xl font-medium text-xs transition-colors border border-indigo-200"
          >
            <Send className="w-4 h-4 text-indigo-600" />
            <span>Messenger</span>
          </a>

          {/* Native mobile share if supported */}
          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-2 p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl font-medium text-xs transition-colors border border-slate-200"
          >
            <Share2 className="w-4 h-4 text-slate-600" />
            <span>Native Share</span>
          </button>
        </div>

        {/* Copy Link input */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="bg-transparent text-xs text-slate-600 px-2 flex-1 focus:outline-hidden font-mono truncate"
          />
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, caseStudy }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Trap focus inside modal would go here in a production app using a library like headless-ui
  // For this version, we stick to pure React/Tailwind.

  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-[fadeIn_0.2s_ease-out]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900/50 p-6 sm:p-8 border-b border-emerald-500/10 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{caseStudy.emoji}</span>
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              {caseStudy.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[70vh] sm:max-h-[80vh]">
          
          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-sm uppercase tracking-wider text-emerald-500 font-bold">The Challenge</h4>
              <p className="text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm uppercase tracking-wider text-emerald-500 font-bold">The Solution</h4>
              <p className="text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-emerald-900/10 rounded-xl p-6 border border-emerald-500/20">
            <h4 className="text-sm uppercase tracking-wider text-emerald-400 font-bold mb-4">Measurable Results</h4>
            <ul className="space-y-3">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

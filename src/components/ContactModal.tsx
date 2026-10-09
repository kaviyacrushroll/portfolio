import React, { useState, useEffect } from 'react';
import { X, Check, Mail, Copy, Send, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$3k - $5k',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@jack3dcreator.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md transition-opacity">
      <div
        className="relative w-full max-w-2xl bg-[#121212] border border-[#2A2E35] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B600A8]">
            Get In Touch
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#D7E2EA] tracking-tight mt-1">
            Let&apos;s Build Together
          </h3>
          <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-2 font-light">
            Have a 3D modeling, rendering, or motion project in mind? Share your concept and let&apos;s create something unforgettable.
          </p>

          {/* Quick email copy */}
          <div className="mt-4 flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-[#181A1F] border border-[#262A32]">
            <Mail className="w-4 h-4 text-[#D7E2EA]/80 shrink-0" />
            <span className="text-sm font-mono text-[#D7E2EA] select-all">hello@jack3dcreator.com</span>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white bg-[#262A32] hover:bg-[#343A46] rounded-full transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {formSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#B600A8]/20 border border-[#B600A8] flex items-center justify-center text-white">
              <Sparkles className="w-8 h-8 text-[#B600A8]" />
            </div>
            <h4 className="text-2xl font-bold uppercase tracking-wide text-white">
              Message Sent!
            </h4>
            <p className="text-sm text-[#D7E2EA]/80 max-w-md">
              Thank you for reaching out! Jack will review your project details and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1D23] border border-[#2B303B] text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@studio.design"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1D23] border border-[#2B303B] text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                  Primary Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1D23] border border-[#2B303B] text-white focus:outline-none focus:border-[#B600A8] transition-colors text-sm cursor-pointer"
                >
                  <option value="3D Modeling">3D Modeling</option>
                  <option value="Rendering">Photorealistic Rendering</option>
                  <option value="Motion Design">Motion Design</option>
                  <option value="Branding">3D Brand Identity</option>
                  <option value="Web Design">Web & Interactive 3D</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                  Estimated Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1D23] border border-[#2B303B] text-white focus:outline-none focus:border-[#B600A8] transition-colors text-sm cursor-pointer"
                >
                  <option value="$2k - $3k">$2,000 - $3,000</option>
                  <option value="$3k - $5k">$3,000 - $5,000</option>
                  <option value="$5k - $10k">$5,000 - $10,000</option>
                  <option value="$10k+">$10,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80 mb-1.5">
                Project Overview
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about the project goals, creative direction, and timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1A1D23] border border-[#2B303B] text-white placeholder-white/30 focus:outline-none focus:border-[#B600A8] transition-colors text-sm resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 font-medium uppercase tracking-widest text-white text-sm transition-all duration-300 hover:brightness-110 cursor-pointer"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                  outline: '2px solid white',
                  outlineOffset: '-3px',
                }}
              >
                <Send className="w-4 h-4" />
                <span>Send Proposal Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

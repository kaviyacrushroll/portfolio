import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#111317] border border-[#2B303B] rounded-3xl p-5 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2B303B] pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black text-[#D7E2EA]">
                {project.number}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold px-2 py-0.5 rounded-full bg-[#B600A8]/10 border border-[#B600A8]/30">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#D7E2EA] tracking-tight mt-1">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/70">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/70">
              <Layers className="w-3.5 h-3.5" />
              {project.tools.join(', ')}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#D7E2EA]/85 font-light leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16181D]">
              <img
                src={project.col1TopImage}
                alt={`${project.name} preview 1`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16181D]">
              <img
                src={project.col1BottomImage}
                alt={`${project.name} preview 2`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16181D] flex items-center">
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-[#2B303B] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            High-Fidelity 3D Simulation & Materials
          </div>

          <a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!project.liveUrl) {
                e.preventDefault();
                alert(`Viewing interactive showcase for ${project.name}`);
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 uppercase text-xs tracking-widest font-medium transition-colors"
          >
            <span>Open Interactive Viewer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

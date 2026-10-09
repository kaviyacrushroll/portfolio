import React from 'react';
import { ArrowUp } from 'lucide-react';
import FadeIn from './FadeIn';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 sm:px-10 py-12 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <FadeIn delay={0.1} y={15}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-black uppercase tracking-tight text-[#D7E2EA]">
              Jack
            </span>
            <p className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest mt-1">
              3D Creator & Visual Designer &middot; All Rights Reserved &copy; {new Date().getFullYear()}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={15}>
          <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
            <span aria-hidden="true" className="opacity-30">&middot;</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <span aria-hidden="true" className="opacity-30">&middot;</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span aria-hidden="true" className="opacity-30">&middot;</span>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ArtStation
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} y={15}>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-wider text-[#D7E2EA]/70 hover:text-white hover:border-white/30 transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;

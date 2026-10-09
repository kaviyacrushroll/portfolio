import React from 'react';
import { FadeIn } from './FadeIn';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
      <ul className="flex items-center justify-between w-full px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] list-none">
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer whitespace-nowrap"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#price"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('price');
            }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer whitespace-nowrap"
          >
            Price
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('projects');
            }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer whitespace-nowrap"
          >
            Projects
          </a>
        </li>
        <li>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer whitespace-nowrap uppercase bg-transparent border-0 text-[#D7E2EA] font-medium tracking-wider text-sm md:text-lg lg:text-[1.4rem] p-0"
          >
            Contact
          </button>
        </li>
      </ul>
    </FadeIn>
  );
};

export default Navbar;

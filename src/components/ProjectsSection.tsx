import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';
import { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nextlevel-studio',
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1TopImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1BottomImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      'Comprehensive 3D environment visualization and cinematic motion graphics designed for Nextlevel Studio brand rebirth.',
    year: '2026',
    tools: ['Blender 4.2', 'Octane Render', 'Cinema 4D'],
  },
  {
    id: 'aura-brand-identity',
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1TopImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1BottomImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'Tactile generative 3D sculptures and fluid procedural materials capturing ethereal light physics and futuristic luxury branding.',
    year: '2025',
    tools: ['Houdini', 'Redshift', 'Substance Painter'],
  },
  {
    id: 'solaris-digital',
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1TopImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1BottomImage:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'Solaris planetary simulation suite with custom space vessels, cosmic particulate engines, and real-time interactive shaders.',
    year: '2026',
    tools: ['Unreal Engine 5', 'Blender', 'After Effects'],
  },
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion useScroll targeting container with offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl relative"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number (huge, same style as services) */}
            <span
              className="font-black text-[#D7E2EA] leading-none shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 90px)' }}
            >
              {project.number}
            </span>

            {/* Category label + Project name */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-base sm:text-2xl md:text-3xl text-[#D7E2EA] tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Button */}
          <LiveProjectButton onClick={() => onOpenProject(project)} />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          {/* Left column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Left top image */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#16171B] border border-white/5 cursor-pointer group"
              style={{
                height: 'clamp(130px, 16vw, 230px)',
              }}
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1TopImage}
                alt={`${project.name} asset 1`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Left bottom image */}
            <div
              className="w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#16171B] border border-white/5 cursor-pointer group"
              style={{
                height: 'clamp(160px, 22vw, 340px)',
              }}
              onClick={() => onOpenProject(project)}
            >
              <img
                src={project.col1BottomImage}
                alt={`${project.name} asset 2`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div
            className="md:col-span-7 overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#16171B] border border-white/5 cursor-pointer group flex"
            style={{
              minHeight: '220px',
            }}
            onClick={() => onOpenProject(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} showcase tall`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 md:pb-36"
    >
      {/* Heading: "Project" (singular) using .hero-heading gradient */}
      <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* 3 sticky-stacking project cards */}
      <div className="flex flex-col relative w-full max-w-6xl mx-auto space-y-6 md:space-y-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            onOpenProject={onOpenProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

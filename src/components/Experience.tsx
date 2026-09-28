import React from 'react';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    year: "2025 - Present",
    duration: "Current",
    company: "Independent / Resuvo",
    role: "Software Engineer",
    technologies: "React · Astro · Go · PostgreSQL"
  },
  {
    year: "2024 - 2025",
    duration: "1 year",
    company: "Freelance",
    role: "Software Engineer",
    technologies: "Next.js · Tailwind CSS · Node.js"
  }
];

export const Experience = () => {
  return (
    <section className="py-24 relative">
      <div className="px-6 md:px-12 flex justify-end mb-16">
        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display text-white">Work</h2>
      </div>

      <div className="flex flex-col border-t border-border-subtle">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col md:flex-row border-b border-border-subtle hover:bg-white transition-colors duration-500 cursor-pointer"
          >
            <div className="w-full md:w-1/4 p-6 md:p-8 md:pl-12 border-b md:border-b-0 md:border-r border-border-subtle group-hover:border-gray-200 transition-colors duration-500">
              <p className="font-display text-white group-hover:text-bg-inner mb-1 text-sm md:text-base">{exp.year}</p>
              <p className="text-xs text-gray-500 group-hover:text-gray-medium">{exp.duration}</p>
            </div>
            
            <div className="w-full md:w-1/4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border-subtle group-hover:border-gray-200 transition-colors duration-500 flex items-center justify-between">
              <h3 className="text-white group-hover:text-bg-inner font-medium text-lg md:text-xl">{exp.company}</h3>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-bg-inner">
                <ArrowRight size={20} />
              </div>
            </div>
            
            <div className="w-full md:w-2/4 p-6 md:p-8 flex items-center">
              <p className="text-gray-light group-hover:text-bg-inner flex items-center text-sm md:text-base">
                <span className="font-medium mr-2">{exp.role}</span>
                <span className="text-gray-500 group-hover:text-gray-medium mx-3">|</span>
                <span className="font-display text-xs">{exp.technologies}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-12 mt-12 flex justify-end text-sm">
        <div className="text-right">
          <p className="text-gray-light">Work experience</p>
          <p className="font-display text-white italic mt-1">2+ years</p>
        </div>
      </div>
    </section>
  );
};

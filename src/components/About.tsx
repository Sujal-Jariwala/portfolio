import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const About = ({ portraitSrc }: { portraitSrc?: string }) => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative border-t border-border-subtle">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
        <div className="md:w-1/3">
          <p className="font-display text-sm tracking-wider">... /About me ...</p>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl text-white mb-6 max-w-2xl font-light leading-snug">
            Hello! I'm Sujal, a software engineer.
          </h2>
          <p className="text-lg md:text-xl text-gray-light max-w-2xl leading-relaxed">
            I build things for the web, with a focus on clean interfaces, reliable backend systems, and useful products. I work across frontend and backend development to create seamless digital experiences.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* LEFT: Skills */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <SkillCard 
            title="Front-end" 
            skills={["React", "Astro", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"]}
          />
          <SkillCard 
            title="Back-end" 
            skills={["Go", "REST APIs", "PostgreSQL", "Redis"]}
          />
          
          <div className="flex gap-6">
            <div className="w-1/3 pt-6">
              <p className="text-xs text-gray-light italic">
                Some of my favorite technologies, topics, or tools that I worked with
              </p>
            </div>
            <div className="w-2/3">
              <SkillCard 
                title="DevOps & Other" 
                skills={["Git", "GitHub", "VPS", "Linux"]}
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="lg:w-1/2 relative">
          <div className="w-full aspect-4/5 md:aspect-square lg:aspect-auto lg:h-full bg-gray-medium/10 rounded-4xl overflow-hidden border border-border-subtle relative">
            
            {portraitSrc ? (
              <img src={portraitSrc} alt="Portrait" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-sm text-gray-medium tracking-widest uppercase rotate-90">Portrait Placeholder</p>
              </div>
            )}
            
          </div>
          <a href="https://github.com/Sujal-Jariwala" target="_blank" rel="noopener noreferrer" className="absolute bottom-8 left-8 w-12 h-12 bg-white text-bg-inner rounded-full flex items-center justify-center hover:scale-110 hover:-translate-y-1 hover:rotate-12 transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }: { title: string, skills: string[] }) => (
  <div className="border border-border-subtle rounded-[24px] p-8 hover:border-white hover:-translate-y-1 hover:bg-white/[0.02] hover:shadow-2xl transition-all duration-500">
    <h3 className="font-display text-white text-xl mb-6">{title}</h3>
    <div className="flex flex-wrap gap-2 text-sm text-gray-light">
      {skills.map((skill, i) => (
        <span key={i} className="inline-block">
          {skill} {i < skills.length - 1 && <span className="mx-1 text-gray-medium">/</span>}
        </span>
      ))}
    </div>
  </div>
);

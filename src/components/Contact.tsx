import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative border-t border-border-subtle overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-circle rounded-full pointer-events-none z-0"></div>
      
      <div className="flex justify-center mb-16 relative z-10">
        <p className="font-display text-sm tracking-wider">... /Contacts ...</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end relative z-10">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display text-white leading-[1.1] mb-6">
            <span className="block">Jariwala</span>
            <span className="block">Sujal</span>
          </h2>
          <p className="font-display text-gray-medium text-lg">Software Engineer</p>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
          <p className="text-xl md:text-2xl text-white italic max-w-md md:text-right mb-12 leading-relaxed">
            Have an idea, project, or opportunity?<br/>Let's talk.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-start md:justify-end">
            <a href="https://github.com/Sujal-Jariwala" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-border-subtle rounded-full px-6 py-3 hover:border-white hover:text-white hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-300 text-sm group">
              <Github size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sujal-jariwala-b9b814267/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-border-subtle rounded-full px-6 py-3 hover:border-white hover:text-white hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-300 text-sm group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:thisisjariwalasujal@gmail.com" className="flex items-center space-x-2 border border-border-subtle rounded-full px-6 py-3 hover:border-white hover:text-white hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-300 text-sm group">
              <Mail size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

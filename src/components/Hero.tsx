import React, { useRef } from 'react';
import { ArrowRight, ArrowLeft, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

const carouselItems = [
  {
    title: "Engineering a zero-trust document upload pipeline",
    description: "Implementing ClamAV and Content Disarm to ensure secure document handling.",
    link: "https://medium.com/@jariwalasujal668/engineering-a-zero-trust-document-upload-pipeline-implementing-clamav-and-content-disarm-a8ceddc4c814?sharedUserId=jariwalasujal668"
  },
  {
    title: "Building a resume builder with Astro",
    description: "Why I chose SSG for marketing/SEO and CSR for the editor.",
    link: "https://medium.com/@jariwalasujal668/building-a-resume-builder-with-astro-why-i-chose-ssg-for-marketing-seo-and-csr-for-the-editor-081f865cd1d8?sharedUserId=jariwalasujal668"
  }
];

export const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative pt-24 pb-16 px-6 md:px-12 flex flex-col min-h-[80vh] justify-center overflow-hidden">
      
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[1.1] mb-8 tracking-tight">
            <span className="block text-white">Software</span>
            <span className="block text-white">Engineer</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-lg text-gray-light leading-relaxed italic border-l border-border-subtle pl-4 mb-8 md:mb-0">
            I build clean, fast and useful software for the web. Focused on thoughtful interfaces, reliable backends, and products that solve real problems.
          </p>
        </div>
        
        <div className="flex items-center space-x-3 self-start md:self-end mt-8 md:mt-0">
          <a href="#projects" className="bg-white text-bg-inner font-display px-8 py-3 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/20">
            Projects
          </a>
          <a href="#projects" className="flex items-center justify-center w-12 h-12 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-bg-inner hover:scale-105 transition-all duration-300 group">
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45" />
          </a>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-24 relative z-10">
        <a href="https://github.com/Sujal-Jariwala" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-border-subtle rounded-full px-5 py-2 hover:border-white hover:text-white hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-300 text-sm group">
          <Github size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/sujal-jariwala-b9b814267/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-border-subtle rounded-full px-5 py-2 hover:border-white hover:text-white hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-300 text-sm group">
          <Linkedin size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:thisisjariwalasujal@gmail.com" className="flex items-center space-x-2 border border-border-subtle rounded-full px-5 py-2 hover:border-white hover:text-white hover:-translate-y-1 hover:bg-white/[0.02] transition-all duration-300 text-sm group">
          <Mail size={16} className="group-hover:scale-110 transition-transform duration-300" />
          <span>Email</span>
        </a>
      </div>
      
      <div className="w-full relative z-10 md:max-w-xl mx-auto">
        <div 
          ref={scrollRef}
          className="scrollbar-hide flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Add a style tag for webkit scrollbar hiding just for this container */}
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}</style>
          
          {carouselItems.map((item, idx) => (
            <div key={idx} className="min-w-[85vw] md:min-w-full snap-center bg-gray-medium/10 border border-border-subtle rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-white/30 transition-colors duration-300">
              <div>
                <h3 className="text-2xl md:text-3xl text-white mb-4 font-display leading-tight">{item.title}</h3>
                <p className="text-gray-light text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>
              <div className="flex gap-3 mt-10">
                 <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white text-bg-inner text-sm px-6 py-2 rounded-full font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300">Read article</a>
                 <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-transparent border border-white text-white flex items-center justify-center rounded-full hover:bg-white hover:text-bg-inner hover:scale-110 transition-all duration-300"><ArrowRight size={16}/></a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-4 md:mt-8">
          <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-border-subtle bg-bg-inner/50 flex items-center justify-center hover:bg-white hover:text-bg-inner hover:scale-110 transition-all duration-300 backdrop-blur-md cursor-pointer text-white">
             <ArrowLeft size={20} />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-border-subtle bg-bg-inner/50 flex items-center justify-center hover:bg-white hover:text-bg-inner hover:scale-110 transition-all duration-300 backdrop-blur-md cursor-pointer text-white">
             <ArrowRight size={20} />
          </button>
        </div>
      </div>
      
    </section>
  );
};

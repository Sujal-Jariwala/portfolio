import { ArrowUpRight } from 'lucide-react';

export const Projects = ({ previewSrc, editorSrc }: { previewSrc?: string, editorSrc?: string }) => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative border-t border-border-subtle overflow-hidden">
      <div className="flex justify-center mb-24">
        <p className="font-display text-sm tracking-wider">... /Projects ...</p>
      </div>

      <div className="flex flex-col gap-32">
        {/* Project 1: Resumetop */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

            {/* Project Info */}
            <div className="lg:w-1/3 order-2 lg:order-1 sticky top-12">
              <h3 className="text-4xl text-white font-display mb-8">Resumetop</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Astro", "React", "TypeScript", "Tailwind CSS", "Go", "PostgreSQL", "Redis"].map((tech) => (
                  <span key={tech} className="border border-border-subtle rounded-full px-4 py-1 text-xs text-white font-display">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-light leading-relaxed mb-6 italic text-sm">
                An AI-powered resume builder designed to help professionals create stronger, ATS-friendly resumes with modern templates and a streamlined editing experience.
              </p>

              <div className="flex items-center gap-4 mt-8">
                <a href="https://resumetop.net" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-bg-inner flex items-center justify-center hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                  <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Project Images - Asymmetric Composition */}
            <div className="lg:w-2/3 order-1 lg:order-2 relative w-full h-[600px]">
              {/* Wide Hero Image */}
              <div className="absolute top-0 right-0 w-4/5 h-[400px] bg-gray-medium/10 rounded-[32px] border border-border-subtle overflow-hidden z-10 group">
                {previewSrc ? (
                  <img src={previewSrc} alt="Resumetop Preview" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-bg-inner/40 to-transparent z-10" />
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <p className="font-display text-xs text-gray-medium tracking-widest uppercase">resumetop.net preview</p>
                    </div>
                  </>
                )}
              </div>

              {/* Tall Secondary Image */}
              <div className="absolute bottom-0 left-0 w-2/5 h-[350px] bg-bg-inner rounded-[32px] border border-border-subtle overflow-hidden z-20 group shadow-2xl">
                {editorSrc ? (
                  <img src={editorSrc} alt="Resumetop Editor" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-10" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gray-medium/20 z-0" />
                    <div className="w-full h-full flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-700">
                      <p className="font-display text-xs text-gray-medium tracking-widest uppercase text-center">editor<br />mobile</p>
                    </div>
                  </>
                )}
              </div>

              {/* Small Floating Element */}
              <a href="https://resumetop.net" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-1/3 w-32 h-32 bg-black/30 backdrop-blur-md rounded-2xl border border-white/20 z-30 flex items-center justify-center hover:bg-black/50 hover:scale-105 transition-all duration-300 group cursor-pointer shadow-xl">
                <ArrowUpRight size={32} strokeWidth={2.5} className="text-white drop-shadow-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
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

export const Articles = () => {
  return (
    <section id="articles" className="py-24 px-6 md:px-12 relative border-t border-border-subtle">
      <div className="flex justify-end mb-16">
        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display text-white">Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="border border-border-subtle rounded-4xl p-8 hover:border-white hover:-translate-y-2 hover:bg-white/[0.02] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[300px]">
            <div>
              <h3 className="font-display text-white text-2xl mb-4 leading-tight">{article.title}</h3>
              <p className="text-gray-light text-sm italic">{article.description}</p>
            </div>
            
            <div className="flex items-center gap-4 mt-12">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="bg-white text-bg-inner font-medium text-sm px-6 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                Read more
              </a>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-bg-inner transition-colors duration-500">
                <ArrowRight size={16} className="transition-transform duration-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

export interface Articles {
  title: string,
  desc: string,
  link: string,
}
const articles: Articles[] = [
  {
    title: "Circumstances Don't Define a Man. His Choices Do.",
    desc: "We are often quick to attribute character to circumstances. But if circumstances alone defined a person, wouldn't everyone raised in similar environments turn out the same?",
    link: "/blog/circumstances-dont-define-a-man"
  },
  {
    title: "Engineering a zero-trust document upload pipeline",
    desc: "Implementing ClamAV and Content Disarm to ensure secure document handling.",
    link: "/blog/zero-trust-upload-pipeline"
  },
  {
    title: "Building a resume builder with Astro",
    desc: "Why I chose SSG for marketing/SEO and CSR for the editor.",
    link: "/blog/ssgoverssr"
  },
  {
    title: "The Cache I Didn’t Build: Client State in a Resume Builder",
    desc: "A decision record on browser storage, multi-tab sync, and why the right amount of machinery turned out to be very little.",
    link: "/blog/the-cache-i-didnt-build"
  }
];

export const Articles = () => {
  return (
    <section id="articles" className="py-24 px-6 md:px-12 relative border-t border-border-subtle">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <p className="font-display text-sm tracking-wider text-gray-light mb-2">... /Writing ...</p>
          <a href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-light hover:text-white transition-colors font-display group">
            <span>Explore all blog posts</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display text-white">Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.link}
            className="border border-border-subtle rounded-3xl sm:rounded-4xl p-6 sm:p-8 hover:border-white hover:-translate-y-2 hover:bg-white/[0.02] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between min-h-[280px] sm:min-h-[300px] cursor-pointer block text-inherit no-underline"
          >
            <div>
              <h3 className="font-display text-white text-xl sm:text-2xl mb-4 leading-tight group-hover:text-white transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-light text-sm italic">{article.desc}</p>
            </div>

            <div className="flex items-center justify-end gap-2 sm:gap-4 mt-8 pt-5 sm:pt-6 border-t border-border-subtle/50">
              <span className="bg-white text-bg-inner font-medium text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full whitespace-nowrap group-hover:bg-gray-200 group-hover:scale-105 transition-all duration-300">
                Read more
              </span>
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-white group-hover:bg-white group-hover:text-bg-inner transition-colors duration-500">
                <ArrowRight size={14} className="sm:w-4 sm:h-4 transition-transform duration-500 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

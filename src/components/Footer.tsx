import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border-subtle relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
        <div className="font-display text-white text-xl uppercase tracking-widest">
          Jariwala Sujal
        </div>
        
        <div className="flex flex-wrap gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Main</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#articles" className="hover:text-white transition-colors">Articles</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between text-xs text-gray-medium pt-8 border-t border-border-subtle">
        <p>Handcrafted by ME / Designed by inspiration</p>
        <p className="mt-2 md:mt-0">Built with Astro / React / Tailwind CSS</p>
      </div>
    </footer>
  );
};

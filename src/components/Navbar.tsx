import React, { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center py-8 px-6 md:px-12 border-b border-border-subtle z-50">
      <div className="font-display text-white text-sm leading-tight tracking-wider uppercase">
        <span className="block">Jariwala Sujal</span>
      </div>
            
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12 text-sm">
        <a href="#about" className="hover:text-white hover:-translate-y-0.5 hover:drop-shadow-md transition-all duration-300 inline-block">About</a>
        <a href="#projects" className="hover:text-white hover:-translate-y-0.5 hover:drop-shadow-md transition-all duration-300 inline-block">Projects</a>
        <a href="#articles" className="hover:text-white hover:-translate-y-0.5 hover:drop-shadow-md transition-all duration-300 inline-block">Articles</a>
        <a href="#contact" className="hover:text-white hover:-translate-y-0.5 hover:drop-shadow-md transition-all duration-300 inline-block">Contact</a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-bg-outer md:hidden transition-all duration-300 overflow-hidden z-40 ${isMenuOpen ? 'max-h-64 border-b border-border-subtle' : 'max-h-0'}`}>
        <div className="flex flex-col items-center space-y-6 text-sm py-6">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">Projects</a>
          <a href="#articles" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">Articles</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

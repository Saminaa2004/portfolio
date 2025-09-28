import React, { useState, useEffect } from 'react';
import { CircleArrowDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume/Samina_Shaikh_SDE.pdf'; // Replace with your actual resume path
    link.download = '/resume/Samina_Shaikh_SDE.pdf'; // Replace with your preferred filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      {/* Navbar */}
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out w-[calc(100%-2.5rem)] max-w-2xl ${
          isScrolled
            ? 'bg-black/80 border-white/20 py-2.5 px-5 top-2.5'
            : 'bg-white/5 border-white/10 py-3 px-6'
        } backdrop-blur-xl border rounded-full flex items-center justify-between gap-6`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1 hover:opacity-80 transition-opacity"
        >
          <img
            src="/images/logo.png"
            alt="Johan Beker Logo"
            className="w-8 h-10 rounded-full object-cover"
          />
          <span className="text-white font-bold text-lg tracking-tight">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative text-sm font-medium transition-colors duration-300 py-2 ${
                  activeLink === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1 p-1 group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>

        {/* CTA Button - Get Resume */}
        <button
          onClick={handleResumeDownload}
          className="hidden sm:flex items-center gap-2 bg-transparent border border-gray-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:border-gray-400 "
        >
          Get Resume
          <CircleArrowDown size={20} />
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-[calc(100%-2.5rem)] max-w-2xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`block text-lg font-medium transition-colors duration-300 py-2 ${
                    activeLink === link.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10">
            <button
              onClick={handleResumeDownload}
              className="flex items-center justify-center gap-2 w-full bg-transparent border border-gray-500 text-white px-5 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-white/5 transition-all duration-300"
            >
              <CircleArrowDown size={20} />
              Get Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

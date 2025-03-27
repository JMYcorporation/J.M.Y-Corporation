
import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-navy-950/90 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-white mr-1">JMY</span>
              <span className="text-green-500 text-xl font-bold">Corporation</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-green-500 transition-colors">
              Home
            </a>
            <a href="#search" className="text-white hover:text-green-500 transition-colors">
              Licitações
            </a>
            <a href="#about" className="text-white hover:text-green-500 transition-colors">
              Sobre Nós
            </a>
            <a href="#contact" className="text-white hover:text-green-500 transition-colors">
              Contato
            </a>
            <button className="btn-accent flex items-center">
              <Search size={16} className="mr-2" />
              Pesquisar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden navy-glass py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-white hover:text-green-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#search" 
              className="text-white hover:text-green-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Licitações
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-green-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-green-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <button className="btn-accent flex items-center justify-center">
              <Search size={16} className="mr-2" />
              Pesquisar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

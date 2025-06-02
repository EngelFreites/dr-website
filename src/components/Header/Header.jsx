import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "glass-effect shadow-soft py-2" : "bg-transparent py-4"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-400 mr-2" />
            <span className="font-serif text-2xl font-semibold text-beige-900">
              Serenity
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="font-medium text-beige-800 hover:text-rose-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium text-beige-800 hover:text-rose-500 transition-colors"
            >
              Sobre Nosotros
            </a>
            <a
              href="#team"
              className="font-medium text-beige-800 hover:text-rose-500 transition-colors"
            >
              Equipo
            </a>
            <a
              href="#services"
              className="font-medium text-beige-800 hover:text-rose-500 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#testimonials"
              className="font-medium text-beige-800 hover:text-rose-500 transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#contact"
              className="font-medium text-beige-800 hover:text-rose-500 transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-beige-800 hover:text-beige-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect shadow-md">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#team"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-beige-800 hover:bg-beige-100/50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

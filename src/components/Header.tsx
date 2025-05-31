
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6f579bdb-593b-4cd0-bc65-3e6e860fb908.png" 
              alt="Shree Enterprises Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-shree-gray hover:text-shree-blue transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-shree-gray hover:text-shree-blue transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-shree-gray hover:text-shree-blue transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-shree-gray hover:text-shree-blue transition-colors duration-300 font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-shree-gray hover:text-shree-blue transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-shree-blue"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 text-left"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-shree-gray hover:text-shree-blue transition-colors duration-300 py-2 text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

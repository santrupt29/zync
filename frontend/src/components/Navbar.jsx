import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/auth");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-2xl">
            <img src="/Zync2.png" alt="Zync" className="w-8 h-8" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ZYNC
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 font-medium hover:text-purple-400 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-300 font-medium hover:text-purple-400 transition-colors">
              Reviews
            </a>
            <button 
              onClick={handleLogin} 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-8 py-4 bg-gray-800/95 backdrop-blur-md border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 font-medium hover:text-purple-400 transition-colors py-2"
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 font-medium hover:text-purple-400 transition-colors py-2"
              >
                Reviews
              </a>
              <button 
                onClick={() => {
                  handleLogin();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl w-full mt-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

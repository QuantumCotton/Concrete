import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-md text-gray-800' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="text-2xl font-bold flex items-center gap-2">
              {/* Logo Icon */}
              <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="whitespace-nowrap text-2xl font-bold tracking-tight" style={{fontFamily: 'inherit'}}>
                The Elite <span className="text-sky-600">Service Hub</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="#home" 
                className={`hover:text-sky-600 transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Home
              </Link>
              
              <div className="relative">
                <button 
                  className={`flex items-center hover:text-sky-600 transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                  onClick={toggleServices}
                >
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      href="#finishing" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Concrete Finishing
                    </Link>
                    <Link 
                      href="#stamped" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Stamped Concrete
                    </Link>
                    <Link 
                      href="#ada" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      ADA Compliance
                    </Link>
                    <Link 
                      href="#scanning" 
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      3D Laser Scanning
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="#portfolio" 
                className={`hover:text-sky-600 transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                Portfolio
              </Link>
              
              <Link 
                href="#about" 
                className={`hover:text-sky-600 transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                About
              </Link>
              
              <Link 
                href="#contact" 
                className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                scrolled ? 'text-gray-800' : 'text-white'
              } hover:text-sky-600 transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link 
              href="#home" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            
            <button 
              className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={toggleServices}
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link 
                  href="#finishing" 
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Concrete Finishing
                </Link>
                <Link 
                  href="#stamped" 
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Stamped Concrete
                </Link>
                <Link 
                  href="#ada" 
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  ADA Compliance
                </Link>
                <Link 
                  href="#scanning" 
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  3D Laser Scanning
                </Link>
              </div>
            )}
            
            <Link 
              href="#portfolio" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Portfolio
            </Link>
            
            <Link 
              href="#about" 
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              About
            </Link>
            
            <Link 
              href="#contact" 
              className="block px-3 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
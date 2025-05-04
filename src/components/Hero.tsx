import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      heroRef.current.style.opacity = `${1 - scrollPosition / 700}`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/275908819_132276832660910_8646977086707048979_n.jpg')",
          filter: "brightness(0.6)",
        }}
        ref={heroRef}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Welcome to <span className="text-sky-400">The Elite Service Hub</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner for premium service solutions – expert finishing, ADA compliance, and 3D laser scanning for homeowners and small businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors text-center"
              >
                Get a Quote
              </a>
              
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <a 
            href="#services" 
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
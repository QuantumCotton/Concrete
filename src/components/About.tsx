import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-sky-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-100 rounded-lg z-0"></div>
              
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chris - Concrete Expert" 
                className="relative rounded-lg shadow-xl z-10 w-full object-cover h-[500px]"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-sky-600">Chris</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              As a former project manager for ADA concrete consultation and union carpenter, I bring over 15 years of expertise to every concrete project. My journey in the concrete industry began with a passion for creating functional, beautiful, and durable surfaces that stand the test of time.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              While many companies focus on the big picture, I founded this business to provide personalized attention to homeowners and small business owners who deserve the same quality and expertise as large-scale projects.
            </p>
            
            <div className="border-l-4 border-sky-600 pl-4 mb-8">
              <p className="text-gray-700 italic">
                "My goal is to deliver premium concrete solutions with transparency, integrity, and unmatched craftsmanship. Every project, no matter the size, receives my personal attention to ensure it exceeds expectations."
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">My Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ADA Compliance</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stamped Concrete</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>3D Laser Scanning</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flatness Reports</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Decorative Finishes</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Project Management</span>
              </div>
            </div>
            
            <a 
              href="#contact"
              className="inline-block bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
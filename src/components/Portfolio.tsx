import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const categories = ['All', 'Residential', 'Commercial', 'Decorative', 'ADA'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 7,
      title: "Jobsite Action Shot",
      category: "All",
      imageSrc: "/IMG_8645-3.jpg",
      description: "Dust control and precision work in progress at a recent concrete finishing project."
    },
    {
      id: 8,
      title: "ADA Markings",
      category: "ADA",
      imageSrc: "/DJI_0287-2-2.jpg",
      description: "Fresh ADA-compliant striping and accessible ramp installation."
    },
    {
      id: 9,
      title: "Slate Stamped Patio",
      category: "Decorative",
      imageSrc: "/stamped slate.jpg",
      description: "Beautiful stamped slate patio with custom color and pattern."
    },
    {
      id: 10,
      title: "Laser Scan Report",
      category: "All",
      imageSrc: "/unnamed.png",
      description: "3D laser scanning for flatness and quality control on a large slab."
    },
    {
      id: 11,
      title: "Concrete Finishing Crew",
      category: "All",
      imageSrc: "/270172881_108703951684865_6128011456257280832_n.jpg",
      description: "Our skilled crew delivering high-end concrete finishing."
    },
    {
      id: 12,
      title: "Floral Plaza Design",
      category: "Decorative",
      imageSrc: "/275908819_132276832660910_8646977086707048979_n.jpg",
      description: "Eye-catching decorative concrete floral plaza centerpiece."
    },
    {
      id: 13,
      title: "Classic Curb Appeal",
      category: "All",
      imageSrc: "/20161027_131313.jpg",
      description: "Traditional concrete work for residential curb and gutter."
    },
    {
      id: 14,
      title: "Team at Work",
      category: "All",
      imageSrc: "/270297947_108706571684603_396565958937664122_n.jpg",
      description: "Our crew preparing forms and reinforcing steel for a new pour."
    },
    {
      id: 15,
      title: "Finishing Touches",
      category: "All",
      imageSrc: "/270310107_108703855018208_5577140383671323916_n.jpg",
      description: "Final finishing and detailing for a quality result."
    },
    {
      id: 16,
      title: "Stamped Walkway",
      category: "Decorative",
      imageSrc: "/271203536_111039688117958_6222977183567812394_n.jpg",
      description: "Decorative stamped walkway with defined patterns."
    },
    {
      id: 17,
      title: "Community Plaza",
      category: "Decorative",
      imageSrc: "/275940180_132276905994236_3623548990476825664_n.jpg",
      description: "Large decorative concrete plaza for public space."
    },
    {
      id: 18,
      title: "Aerial Concrete Pour",
      category: "Commercial",
      imageSrc: "/469693900_598898399332082_5532414771402839697_n.jpg",
      description: "Aerial view of a large-scale concrete pour with team at work on a patterned slab."
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-sky-600">Portfolio</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Explore our concrete projects showcasing quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 space-x-2" data-aos="fade-up">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium mb-2 transition-colors ${
                activeCategory === category
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal for project details */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <img 
                  src={activeProject.imageSrc}
                  alt={activeProject.title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={() => setActiveProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeProject.title}</h3>
                <span className="inline-block bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {activeProject.category}
                </span>
                <p className="text-gray-700 mb-4">{activeProject.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Premium concrete materials used</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Completed within project timeline</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>High customer satisfaction rating</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="#contact"
                    className="inline-block bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProject(null);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Request Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  id: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, icon, imageSrc, id }) => {
  return (
    <div 
      id={id}
      className="group flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
      data-aos="fade-up"
    >
      <div className="relative w-full md:w-3/5 h-56 md:h-72 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-bold text-lg">Learn More</span>
        </div>
      </div>
      
      <div className="p-6 md:w-2/5 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 bg-sky-100 rounded-full text-sky-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <a 
          href="#contact" 
          className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors"
        >
          Request Service
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      id: "finishing",
      title: "High-End Concrete Finishing",
      description: "Our skilled team provides premium concrete finishing services that ensure durability, aesthetics, and quality craftsmanship for your residential or commercial project.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      imageSrc: "/270172881_108703951684865_6128011456257280832_n.jpg"
    },
    {
      id: "stamped",
      title: "Decorative & Stamped Concrete",
      description: "Transform your outdoor spaces with our decorative and stamped concrete solutions that mimic the look of stone, brick, or tile at a fraction of the cost while maintaining durability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      imageSrc: "/stamped slate.jpg"
    },
    {
      id: "ada",
      title: "ADA Compliance Consultation",
      description: "Ensure your property meets all ADA requirements with our expert consultation services. We provide detailed assessments and solutions to make your concrete surfaces fully accessible.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      imageSrc: "/DJI_0287-2-2.jpg"
    },
    {
      id: "scanning",
      title: "3D Laser Scanning & Reports",
      description: "Utilizing cutting-edge technology, our 3D laser scanning services provide precise measurements and detailed flatness reports to ensure your concrete projects meet the highest standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      imageSrc: "/unnamed.png"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Concrete <span className="text-sky-600">Services</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              From high-end finishing to specialized consultation, we offer comprehensive concrete solutions for homeowners and small businesses.
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {services.map((service, index) => (
            <Service
              key={index}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
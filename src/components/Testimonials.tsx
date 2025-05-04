import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Chris and his team transformed our backyard with a beautiful stamped concrete patio. Their attention to detail and professionalism exceeded our expectations. The quality of work is outstanding and we've received countless compliments from friends and family.",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      content: "I needed ADA compliant concrete work for my new retail space and ConcretePro delivered exceptional results. Chris's expertise in ADA requirements saved me from potential compliance issues. The project was completed on time and within budget.",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Amanda Peters",
      role: "Real Estate Developer",
      content: "The 3D laser scanning service provided invaluable data for our multi-unit development. We were able to identify and correct potential issues before they became costly problems. Chris's team is professional, thorough, and highly skilled.",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-sky-800 to-sky-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-sky-100">
              Don't just take our word for it. Hear from our satisfied customers.
            </p>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center mt-6">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-sky-100">
                  <img 
                    src={testimonials[activeIndex].imageSrc} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-6">
                <div className="flex mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonials[activeIndex].content}"</p>
                
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
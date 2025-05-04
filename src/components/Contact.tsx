import React, { useState } from 'react';
import useWeb3Forms from '@web3forms/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const { submit } = useWeb3Forms({
    access_key: '8e63e7e3-ab53-43a9-80c5-ebc113c25912',
    settings: {
      from_name: 'The Elite Service Hub',
      subject: 'New Contact Form Submission',
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      await submit({
        ...formData,
        from_name: formData.name,
      });
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-sky-600">Touch</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Ready to transform your concrete surfaces? Contact us today for a free consultation and estimate.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="bg-white rounded-lg shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-sky-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600 mt-1">Chris Cotton: (650) 501-7659</p>
                    <p className="text-gray-500 text-sm mt-1">Monday to Friday, 8am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-sky-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">chris@theliteservicehub.com</p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond promptly to your inquiry</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-sky-100 rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600 mt-1">Daly City, California</p>
                    <p className="text-gray-500 text-sm mt-1">Serving the greater Bay Area</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="concrete-finishing">Concrete Finishing</option>
                      <option value="stamped-concrete">Stamped Concrete</option>
                      <option value="ada-compliance">ADA Compliance</option>
                      <option value="3d-scanning">3D Laser Scanning</option>
                      <option value="flatness-report">Flatness Reports</option>
                      <option value="other">Other (specify in message)</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full bg-sky-600 text-white py-3 px-6 rounded-lg font-medium ${
                      submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-sky-700'
                    } transition-colors`}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-green-50 text-green-700 rounded-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
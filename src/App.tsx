import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useAnimations } from './utils/animations';

function App() {
  // Initialize animations
  useAnimations();
  
  // Update page title
  useEffect(() => {
    document.title = "The Elite Service Hub | Premium Service Solutions";
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
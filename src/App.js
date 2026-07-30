import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Featured from './components/Featured';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App grain relative">
      <div className="bg-glow" />
      <div className="relative z-[2]">
        <Navbar />
        <Hero />
        <Marquee />
        <Featured />
        <About />
        <Work />
        <Experience />
        <Toolkit />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

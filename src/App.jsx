import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* Subtle Ambient Glow Background Orbs */}
      <div className="ambient-blob blob-1" />
      <div className="ambient-blob blob-2" />
      <div className="ambient-blob blob-3" />

      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />
        <div className="section-divider" />

        {/* About Section */}
        <About />
        <div className="section-divider" />

        {/* Skills Section */}
        <Skills />
        <div className="section-divider" />

        {/* What I Do (Services) Section */}
        <Services />
        <div className="section-divider" />

        {/* My Best Work (Portfolio) Section */}
        <Portfolio />
        <div className="section-divider" />

        {/* Our Trusted Clients Section */}
        <Clients />
        <div className="section-divider" />

        {/* Contact With Me Section */}
        <Contact />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}

export default App;

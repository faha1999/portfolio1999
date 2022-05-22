import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Works } from './components/Works';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;

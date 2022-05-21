import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Works } from './components/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Works />
    </div>
  );
}

export default App;

import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;

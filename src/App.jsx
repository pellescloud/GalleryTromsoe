import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CuratedSeries from './components/CuratedSeries';
import MasterpieceEditions from './components/MasterpieceEditions';
import BespokeFraming from './components/BespokeFraming';
import LoupeFeature from './components/LoupeFeature';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <CuratedSeries />
        <MasterpieceEditions />
        <BespokeFraming />
        <LoupeFeature />
      </main>
      <Footer />
    </>
  );
}

export default App;

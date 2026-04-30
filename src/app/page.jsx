import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CuratedSeries from '../components/CuratedSeries';
import MasterpieceEditions from '../components/MasterpieceEditions';
import BespokeFraming from '../components/BespokeFraming';
import LoupeFeature from '../components/LoupeFeature';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CuratedSeries />
        <MasterpieceEditions />
        <BespokeFraming />
        <LoupeFeature />
      </main>
      <Footer />
    </div>
  );
}

import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import HowItWorks from './components/HowItWorks';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Modal />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default App;

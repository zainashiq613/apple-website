import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Modal />
    </main>
  );
}

export default App;

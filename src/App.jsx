import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Units from './components/Units';
import Facilities from './components/Facilities';
import LocationContact from './components/LocationContact';

function Footer() {
  return (
    <footer className="bg-[#121212] py-8">
      <div className="max-w-7xl mx-auto px-6 rounded-2xl border border-[#A7F3D0]/30 bg-white/5 backdrop-blur-xl text-center">
        <p className="py-4 text-[#F5F5F5]/90" style={{ fontFamily: 'SF Pro Text, -apple-system, system-ui, Inter, sans-serif' }}>
          © 2025 Jakarta Sky Liquida - Urban Future Living
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <main>
        <Hero />
        <Units />
        <Facilities />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}

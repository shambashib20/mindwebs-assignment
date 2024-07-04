
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sponsors from './components/Sponsors';
import ScalingSection from './components/ScalingSection';
import ProductsSection from './components/ProductsSection';
import OpenSourceSection from './components/OpenSourceSection';
import AboutUsSection from './components/AboutUsSection';
import FaqSection from './components/FAQSection';

function App() {
  return (
    <section className="h-full bg-[#09041C] text-white font-sans ">
      <Navbar />
      <main className="h-full p-10 mx-40">
        <HeroSection />

        <Sponsors />

        <ScalingSection />

        <ProductsSection />

        <OpenSourceSection />
        <FaqSection />

        <AboutUsSection />
      </main>

      <footer className="py-6 text-center">
        <p>&copy; Copyright © 2024 Phloem AI, Inc.</p>
      </footer>
    </section>
  );
}

export default App;

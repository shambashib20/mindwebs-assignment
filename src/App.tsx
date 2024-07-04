
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


        <section className="py-20  text-center">
          <h3 className="text-3xl font-bold mb-8">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
            <div>
              <h4 className="text-xl font-bold mb-2">Advanced Hardware</h4>
              <p>State-of-the-art hardware for efficient and fast training.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Personal Scalability</h4>
              <p>Scale up or down based on your needs.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Autonomous Training</h4>
              <p>Automated training pipelines with minimal intervention.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Secure Environment</h4>
              <p>Robust security features to protect your data.</p>
            </div>
          </div>
        </section>

        <ProductsSection />

        <OpenSourceSection />
        <FaqSection />
        {/* <section className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-8">We've got the answers</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-bold">Are you GDPR compliant?</h4>
              <p>Yes, we comply with all relevant regulations and standards.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold">Can I run this on my own cloud provider?</h4>
              <p>Yes, our platform is cloud-agnostic and supports multiple providers.</p>
            </div>
          </div>
        </section> */}

        <AboutUsSection />
      </main>

      <footer className="py-6 text-center">
        <p>&copy; Copyright © 2024 Xylem AI, Inc.</p>
      </footer>
    </section>
  );
}

export default App;

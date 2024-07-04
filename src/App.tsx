
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <section className="h-full bg-[#09041C] text-white font-sans ">
      <Navbar />
      <main className="h-full p-10 mx-40">
       <HeroSection />

        <Sponsors />

        <section className="py-20 text-center">
  <div className="flex justify-center">
    <div className="px-2  bg-[#09041C] text-white rounded-md  transition flex justify-between"
         style={{
           width: '14rem',
           minHeight: 0,
           backgroundImage: 'linear-gradient(85deg, rgba(107, 27, 251, .07), rgba(86, 17, 210, .04))',
           border: '1px solid rgba(112, 112, 112, .45)',
           borderRadius: '9999px',
           flexWrap: 'nowrap',
           justifyContent: 'center',
           alignItems: 'center',
           marginBottom: '0.5rem',
           marginLeft: 'auto',
           marginRight: 'auto',
           padding: '2px 2px',
           display: 'flex'
         }}
    >
      <h1 className="text-[#8b4bff] font-light">BUILT <span className="text-[#b48aff]">FOR</span> SCALING</h1>
    </div>
  </div>
           
  <h2 className="text-[2.4rem] font-light mt-2" style={{ fontFamily: 'Inter, sans-serif' }}><span className="text-[#C7C7C7]">10X LLM</span> Performance. 10X lower <span className='text-[#C7C7C7]'>costs.</span></h2>
  <p className="text-lg mb-8 text-[#C7C7C7] mt-2">Developers can experience a 10x faster cycle for LLM training and deployment, at a fraction of the cost and<br/> no added engineering efforts.</p>
</section>


        <section className="py-20 bg-gray-900 text-center">
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

        <section className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Cloud Infrastructure for your LLMs</h3>
          <p className="text-lg mb-8">Built on a dedicated cloud infrastructure to support your LLMs with ease and reliability.</p>
        </section>

        <section className="py-20 bg-gray-900 text-center">
          <h3 className="text-3xl font-bold mb-8">Build with the Best Open Source Models</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <img src="model1.png" alt="Model 1" className="h-12 mx-auto" />
            <img src="model2.png" alt="Model 2" className="h-12 mx-auto" />
            <img src="model3.png" alt="Model 3" className="h-12 mx-auto" />
            <img src="model4.png" alt="Model 4" className="h-12 mx-auto" />
          </div>
        </section>

        <section className="py-20 text-center">
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
        </section>

        <section className="py-20 bg-gray-900 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to go from Playground to Production?</h3>
          <p className="text-lg mb-8">Start with our free tier and scale as you grow. Join our platform today.</p>
          <a href="#" className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">Sign Up Now</a>
        </section>
      </main>

      <footer className="py-6 text-center">
        <p>&copy; 2024 xylem.ai. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default App;

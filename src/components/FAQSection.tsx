import { useState } from 'react';

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the accordion
    }
  };

  return (
    <section className="py-20 text-center">
        <div className="  bg-[#09041C] text-white rounded-md  transition flex justify-between"
                style={{
                    width: '4rem',
                    minHeight: 0,
                    backgroundImage: 'linear-gradient(85deg, rgba(107, 27, 251, .07), rgba(86, 17, 210, .04))',
                    border: '1px solid rgba(112, 112, 112, .45)',
                    borderRadius: '9999px',                    
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '2px',
                    display: 'flex'
                }}
            >
                <h1 className="text-[#8b4bff] font-light">F<span className="text-[#b48aff]">A</span>Q</h1>
            </div>
      <h2 className="md:text-5xl  font-light  mb-4 " style={{ fontFamily: 'Inter, sans-serif' }}>We've got the answers</h2>
      <div className="space-y-4">
        <div>
          <button
            className="w-full  text-left p-4 rounded-lg hover:bg-black focus:outline-none"
            onClick={() => toggleAccordion(1)}
          >
            <h4 className="text-xl font-bold text-[#C7C7C7]">Are you GDPR compliant?</h4>
            {activeIndex === 1 && (
            <p className="p-4 text-[#C7C7C7]">Yes, we comply with all relevant regulations and standards.</p>
          )}
          </button>
          
        </div>
        <div>
          <button
            className="w-full  text-left p-4 rounded-lg hover:bg-black focus:outline-none"
            onClick={() => toggleAccordion(2)}
          >
            <h4 className="text-xl font-bold text-[#C7C7C7]">Can I run this on my own cloud provider?</h4>
            {activeIndex === 2 && (
            <p className="p-4 text-[#C7C7C7]">Yes, our platform is cloud-agnostic and supports multiple providers.</p>
          )}
          </button>
          
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

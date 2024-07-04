
const AboutUsSection = () => {
  return (
    <section className="py-20  text-center">
          <h2 className="md:text-5xl lg:text-6xl font-light  mb-0 " style={{ fontFamily: 'Inter, sans-serif' }}>Ready to go from <br/><span className="text-[#C7C7C7]">Pla</span>yground to Product<span className="text-[#C7C7C7]">ion?</span></h2>
          <p className="text-lg md:text-[18px] mb-8 mt-6 font-light">Your team can focus on bigger problems and getting sh*t done, while we do the heavy lifting for <br/> all your needs around LLMs in production.</p>
          
          <div className="flex justify-center gap-4">
          <button className="btn-primary px-4 py-1 bg-[#6322D8] text-white rounded-md hover:bg-indigo-600 transition flex justify-between hover:shadow-purple-glow">Book a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            </button>

            <button className="btn-primary px-4 py-1 bg-[black] text-white rounded-md">Discord Community
           
            </button>
          </div>
          
        </section>
  )
}

export default AboutUsSection
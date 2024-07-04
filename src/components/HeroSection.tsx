

const HeroSection = () => {
  return (
    <>
     <section className="flex flex-col items-center justify-center my-20 bg-center">
          
          <div className="relative text-center">
          <h2 className="md:text-5xl lg:text-6xl font-light  mb-0 " style={{ fontFamily: 'Inter, sans-serif' }}><span className="text-[#C7C7C7]">Tra</span>in, Deploy and Sc<span className="text-[#C7C7C7]">ale</span> 
            <br>
            </br>
            <span className="text-[#C7C7C7]">
            LLM
            </span>
            s In Produc<span className="text-[#C7C7C7]">tion</span></h2>
            <p className="text-lg md:text-[18px] mb-8 mt-6 font-light">The fastest and most scalable cloud infrastructure for training, deploying and inferencing your<br></br> LLMs in production.</p>
            <div className="flex justify-center">
            <button className="btn-primary px-4 py-1 bg-[#6322D8] text-white rounded-md hover:bg-indigo-600 transition flex justify-between hover:shadow-purple-glow">Book a Consultation
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            </button>
            </div>
            
          </div>
        </section>
    </>
  )
}

export default HeroSection
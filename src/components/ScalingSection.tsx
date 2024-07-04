

const ScalingSection = () => {
    return (
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
            <p className="text-lg mb-8 text-[#C7C7C7] mt-2">Developers can experience a 10x faster cycle for LLM training and deployment, at a fraction of the cost and<br /> no added engineering efforts.</p>
        </section>
    )
}

export default ScalingSection


const OpenSourceSection = () => {
  return (
      <section className="py-20  text-center">
          <div className="  bg-[#09041C] text-white rounded-md  transition flex justify-between"
              style={{
                  width: '14rem',
                  minHeight: 0,
                  backgroundImage: 'linear-gradient(85deg, rgba(107, 27, 251, .07), rgba(86, 17, 210, .04))',
                  border: '1px solid rgba(112, 112, 112, .45)',
                  borderRadius: '9999px',

                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  padding: '2px 2px',
                  display: 'flex'
              }}
          >

              <h1 className="text-[#8b4bff] font-light">INFRA FOR <span className="text-[#b48aff]">OPEN</span> SOURCE AI</h1>
          </div>
          <h2 className="text-[2.4rem] font-light mt-4 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}><span className="text-[#C7C7C7]">Build with</span> the Best Open Source Mo<span className="text-[#C7C7C7]">dels</span></h2>
          <p className="text-lg mb-8 text-[#C7C7C7]">Future of AI is open-source, and we support that by enabling every developer<br />
              to build on top of the best open source model architectures.

          </p>
      </section>

  )
}

export default OpenSourceSection
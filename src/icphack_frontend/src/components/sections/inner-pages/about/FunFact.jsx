const FunFact = () => {
  return (
    <section id='about-funfact-section'>
      {/* Section Container */}
      <div className='global-container'>
        {/* Counter Scroll */}
        <ul className='grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4'>
          {/* Counter Items */}
          <li className='jos' data-jos_delay='0.1'>
            <h3
              className='text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px]'
              data-module='countup'
            >
              <span className='start-number' data-countup-number={2}>
                2
              </span>
              K+
            </h3>
            <span className='block text-lg font-normal text-black'>
              Successful Implementations
            </span>
          </li>
          {/* Counter Items */}
          {/* Counter Items */}
          <li className='jos' data-jos_delay='0.2'>
            <h3
              className='text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px]'
              data-module='countup'
            >
              <span className='start-number' data-countup-number={95}>
                95
              </span>
              %
            </h3>
            <span className='block text-lg font-normal text-black'>
              Client Satisfaction Rate
            </span>
          </li>
          {/* Counter Items */}
          {/* Counter Items */}
          <li className='jos' data-jos_delay='0.3'>
            <h3
              className='text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px]'
              data-module='countup'
            >
              <span className='start-number' data-countup-number={40}>
                40
              </span>
              +
            </h3>
            <span className='block text-lg font-normal text-black'>
              Awards and Recognitions
            </span>
          </li>
          {/* Counter Items */}
          {/* Counter Items */}
          <li className='jos' data-jos_delay='0.4'>
            <h3
              className='text-5xl text-colorOrangyRed md:text-6xl lg:text-7xl xl:text-[80px]'
              data-module='countup'
            >
              <span className='start-number' data-countup-number={73}>
                73
              </span>
              +
            </h3>
            <span className='block text-lg font-normal text-black'>
              Growth and Expansion
            </span>
          </li>
          {/* Counter Items */}
        </ul>
        {/* Counter Scroll */}
      </div>
      {/* Section Container */}
    </section>
  );
};

export default FunFact;

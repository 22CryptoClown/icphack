const CoreValue = () => {
  return (
    <section id='core-value'>
      {/* Section Spacer */}
      <div className='jos mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='mb-10 text-center lg:mb-12 xl:mb-20'>
            <div className='mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]'>
              <h2 className='text-white'>The core values behind our work</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Horizontal Separator */}
          <div className='mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0' />
          {/* Core Value list */}
          <ul className='grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap'>
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-1/core-value-icon-1.svg'
                    alt='core-value-icon-1'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Innovation</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                We’re committed to exploring new technologies, and finding
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-1/core-value-icon-2.svg'
                    alt='core-value-icon-2'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Excellence</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                We set high standards for our work &amp; we are dedicated team
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-1/core-value-icon-3.svg'
                    alt='core-value-icon-3'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Collaboration</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                We believe in the power of collaboration, working closely
              </p>
            </li>
            {/* Core Value Item */}
            {/* Core Value Item */}
            <li className='relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100'>
              <div className='mb-3 flex items-center gap-x-3 md:mb-6'>
                <div className='h-[30px] w-[30px]'>
                  <img
                    src='assets/img/th-1/core-value-icon-4.svg'
                    alt='core-value-icon-4'
                    width={30}
                    height={30}
                  />
                </div>
                <h4 className='flex-1 text-white'>Integrity</h4>
              </div>
              <p className='text-lg text-white lg:text-[21px]'>
                We uphold the highest ethical honesty in all our interactions
              </p>
            </li>
            {/* Core Value Item */}
          </ul>
          {/* Core Value list */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default CoreValue;

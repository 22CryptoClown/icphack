const Promo = () => {
  return (
    <div id='promo-section'>
      <div className='relative z-[1] pt-20 md:-mt-[135px] md:pt-0'>
        {/* Section Container */}
        <div className='global-container'>
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.1'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-promo-1.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Threat Detection
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                AI can identify patterns &amp; improve the detection of unknown
                threats.
              </p>
            </li>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.2'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-promo-2.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  24/7 Monitoring
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                Ensuring continuous protection against threats and working
                hours.
              </p>
            </li>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.3'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-promo-3.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Auto Response
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                Automate routine security tasks and patch management security.
              </p>
            </li>
          </ul>
        </div>
        {/* Section Container */}
      </div>
    </div>
  );
};

export default Promo;

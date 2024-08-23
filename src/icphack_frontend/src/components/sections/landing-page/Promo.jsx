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
                    src='assets/img/th-4/handshake-simple-solid.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                Forget the Hidden Platform Fees
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
              Say goodbye to exorbitant platform fees—keep more of what you earn with our fixed, transparent pricing.
              </p>
            </li>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.2'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/file-shield-solid.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Secure Your Agreements 
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
              Sign and store your contracts on a blockchain, ensuring transparency and security that traditional platforms can’t offer.
              </p>
            </li>
            <li
              className='jos rounded-[10px] bg-[#121212] p-[30px] text-white'
              data-jos_delay='0.3'
            >
              <div className='mb-6 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/hand-holding-dollar.svg'
                    alt='icon-black-promo'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Get Paid Safely and On Time
                </div>
              </div>
              <p className='text-[21px] leading-[1.4]'>
                With our escrow-like safe payment system, your earnings are protected and released only when the project is successfully completed.
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

const Content_02 = () => {
  return (
    <section id='section-content-2'>
      {/* Section Spacer */}
      <div className='py-20 xl:py-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid items-center gap-10 md:grid-cols-[1.1fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[110px]'>
            <div className='jos order-2' data-jos_animation='fade-left'>
              <div className='overflow-hidden rounded-[10px]'>
                <img
                  src='assets/img/th-4/content-img-2.jpg'
                  alt='content-img-2'
                  width={550}
                  height={550}
                  className='h-auto w-full'
                />
              </div>
            </div>
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                  Industries protect their digital assets
                </h2>
              </div>
              {/* Section Content Block */}
              <div className=''>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                  Cybersecurity solutions are used by a wide range of all types
                  of organizations across various industries use to protect
                  their digital assets, networks, and sensitive data.
                </p>
                <ul className='flex flex-col gap-y-5 font-spaceGrotesk text-xl leading-tight tracking-tighter lg:mt-12 lg:text-[28px]'>
                  <li className='flex items-start gap-x-3'>
                    <div className='mt-[2.5px] h-[30px] w-[30px]'>
                      <img
                        src='assets/img/th-4/icon-green-badge-check.svg'
                        alt='check-circle'
                        width={30}
                        height={30}
                        className='h-full w-full'
                      />
                    </div>
                    AI cybersecurity to secure cloud platforms
                  </li>
                  <li className='flex items-start gap-x-3'>
                    <div className='mt-[2.5px] h-[30px] w-[30px]'>
                      <img
                        src='assets/img/th-4/icon-green-badge-check.svg'
                        alt='check-circle'
                        width={30}
                        height={30}
                        className='h-full w-full'
                      />
                    </div>
                    Safeguard customer payment information
                  </li>
                  <li className='flex items-start gap-x-3'>
                    <div className='mt-[2.5px] h-[30px] w-[30px]'>
                      <img
                        src='assets/img/th-4/icon-green-badge-check.svg'
                        alt='check-circle'
                        width={30}
                        height={30}
                        className='h-full w-full'
                      />
                    </div>
                    Secure digital assets and donor information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_02;

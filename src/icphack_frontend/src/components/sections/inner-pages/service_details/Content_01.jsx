const Content_01 = () => {
  return (
    <section id='content-section-1'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/content-image-1.jpg'
                alt='content-image-2'
                width={526}
                height={450}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div className='jos order-1' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2>Analyze any data perfectly with AI</h2>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
                  AI data analysis, also known as artificial intelligence data
                  analysis or AI-driven data analysis, refers to the process of
                  using artificial intelligence and machine learning techniques.
                </p>
              </div>
              <ul className='mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2'>
                <li className='flex flex-col gap-y-4'>
                  <div className='h-[50px] w-[50px]'>
                    <img
                      src='assets/img/th-1/trending-up-icon.svg'
                      alt='trending-up-icon'
                      width={50}
                      height={50}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <h5>Data Preprocessing</h5>
                  <p className='text-lg'>
                    AI data analysis can begin, and raw data must be collected,
                    cleaned.
                  </p>
                </li>
                <li className='flex flex-col gap-y-4'>
                  <div className='h-[50px] w-[50px]'>
                    <img
                      src='assets/img/th-1/cog-icon.svg'
                      alt='cog-icon'
                      width={50}
                      height={50}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <h5>Predictive Analytics</h5>
                  <p className='text-lg'>
                    Algorithms use historical data to forecast future trends,
                    behaviors.
                  </p>
                </li>
              </ul>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_01;

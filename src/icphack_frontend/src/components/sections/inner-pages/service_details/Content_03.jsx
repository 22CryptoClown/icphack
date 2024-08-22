const Content_03 = () => {
  return (
    <section id='content-section-3'>
      {/* Section Spacer */}
      <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
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
                <h2>Manage large amounts of data</h2>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
                  AI data analysis also can handle vast amounts of data, making
                  it suitable for big data environments. Data analysis can
                  automate many aspects of data processing and analysis
                </p>
              </div>
              <ul className='mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2'>
                <li className='flex flex-col gap-y-4'>
                  <div className='h-[50px] w-[50px]'>
                    <img
                      src='assets/img/th-1/icon-orange-clock.svg'
                      alt='trending-up-icon'
                      width={50}
                      height={50}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <h5>Real-Time Analysis</h5>
                  <p className='text-lg'>
                    Some AI data analysis solutions are design to process making
                    instant.
                  </p>
                </li>
                <li className='flex flex-col gap-y-4'>
                  <div className='h-[50px] w-[50px]'>
                    <img
                      src='assets/img/th-1/icon-orange-cursor-click.svg'
                      alt='cog-icon'
                      width={50}
                      height={50}
                      className='h-full w-full object-cover'
                    />
                  </div>
                  <h5>Automation</h5>
                  <p className='text-lg'>
                    his leads to increased efficiency and quicker
                    decision-making.
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

export default Content_03;

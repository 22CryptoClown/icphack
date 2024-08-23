const Content_02 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]'>
              <h2>Widely used throughout the industry for work</h2>
            </div>
          </div>
          {/* Section Content Block */}
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1fr)_1.2fr] xl:gap-28 xxl:gap-32'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md md:order-1'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/content-image-4.jpg'
                alt='content-image-4'
                width={529}
                height={500}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div
              className='jos order-1 md:order-2'
              data-jos_animation='fade-right'
            >
              <ul className='flex flex-col gap-y-6'>
                <li>
                  <h5 className='mb-[10px]'>1. Businesses and Corporations:</h5>
                  <p className='mb-7 last:mb-0'>
                    Businesses use AI data analysis to gain competitive
                    advantages, optimize operations, &amp; make data-driven
                    decisions. This includes industries such as retail, finance,
                    manufacturing.
                  </p>
                </li>
                <li>
                  <h5 className='mb-[10px]'>
                    2. Data Scientists and Analysts:
                  </h5>
                  <p className='mb-7 last:mb-0'>
                    Data scientists and analysts leverage AI tools and
                    algorithms to extract actionable insights from large
                    datasets. They alsouse AI for predictive modeling, anomaly
                    detection, and data visualization.
                  </p>
                </li>
                <li>
                  <h5 className='mb-[10px]'>
                    3. Government and Public Sector:
                  </h5>
                  <p className='mb-7 last:mb-0'>
                    Government agencies use AI data analysis for various
                    purposes, including public policy development, law
                    enforcement, urban planning, and disaster.
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

export default Content_02;

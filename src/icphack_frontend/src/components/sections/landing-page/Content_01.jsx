import { Link } from 'react-router-dom';

const Content_01 = () => {
  return (
    <section id='section-content-1'>
      {/* Section Spacer */}
      <div className='py-20 xl:py-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]'>
            <div className='jos' data-jos_animation='fade-left'>
              <div className='overflow-hidden rounded-[10px]'>
                <img
                  src='assets/img/th-4/content-img-1.jpg'
                  alt='content-img-2'
                  width={550}
                  height={550}
                  className='h-auto w-full'
                />
              </div>
            </div>
            <div className='jos' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                  Securing networks, servers and data
                </h2>
              </div>
              {/* Section Content Block */}
              <div>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                  Large corporations &amp; businesses across industries use our
                  AI cybersecurity solutions to safeguard their networks,
                  servers, &amp; data from cyber threats.
                </p>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                  Our cyber security platform supercharges your security with
                  AI-powered security tools. Turn mountains of data into
                  actionable insights and respond in real-time.
                </p>
                <Link
                  rel='noopener noreferrer'
                  to='/about'
                  className='button inline-block h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white'
                >
                  Explore the Platform
                </Link>
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

export default Content_01;

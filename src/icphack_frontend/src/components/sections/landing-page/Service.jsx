import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <section id='service-section'>
      {/* Section Spacer */}
      <div className='pb-20 pt-20 xl:pb-[130px] xl:pt-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
              Get all the tools to tackle cybersecurity together
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Service List */}
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.1'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-1.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Threat Detection
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                AI can identify patterns &amp; improve the detection of unknown
                threats.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.2'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-2.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Phishing Detection
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                AI examines email content &amp; sender behavior to identify
                phishing links.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.3'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-3.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Network Security
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Network traffic attempts and can take automated actions to
                block.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.4'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-4.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Encryption Tools
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Encryption software and hardware protect data by converting it.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.5'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-5.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Password Managers
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Password managers help users create, store, &amp; unique
                passwords.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.6'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-6.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Secure Email
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                These solutions filter and block email-based threats emails,
                spam.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
          </ul>
          {/* Service List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Service;

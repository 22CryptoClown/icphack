import useAccordion from '../../../hooks/useAccordion';

const Content_04 = () => {
  const [activeIndex, handleAccordion] = useAccordion();
  return (
    <section id='content-section-4'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,_.75fr)_1fr] lg:gap-20 xl:gap-24'>
            {/* Process Accordion */}
            <ul
              className='accordion tab-content flex flex-col gap-y-6'
              id='process-accordian'
            >
              {/* Accordion items */}
              <li
                className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                  activeIndex == 0 ? 'active' : ''
                }`}
                data-jos_delay='0.1'
              >
                <div
                  onClick={() => handleAccordion(0)}
                  className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                >
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img
                      src='assets/img/th-4/icon-green-process-accordion-1.svg'
                      alt='icon-green-process-accordion'
                      width={36}
                      height={50}
                      className='h-[50px] w-auto'
                    />
                    <h5 className='font-spaceGrotesk text-white'>
                      Create a free account
                    </h5>
                  </div>
                  <div className='accordion-icon is-chevron'>
                    <img
                      src='assets/img/th-4/icon-white-cheveron-down.svg'
                      alt='chevron'
                      width={30}
                      height={30}
                    />
                    <img
                      src='assets/img/th-4/icon-green-cheveron-up.svg'
                      alt='chevron'
                      width={30}
                      height={30}
                      className='absolute inset-0'
                    />
                  </div>
                </div>
                <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px]'>
                  <p>
                    You can easily create a custom AI account. You need to input
                    some required information.
                  </p>
                </div>
              </li>
              {/* Accordion items */}
              {/* Accordion items */}
              <li
                className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                  activeIndex == 1 ? 'active' : ''
                }`}
                data-jos_delay='0.1'
              >
                <div
                  onClick={() => handleAccordion(1)}
                  className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                >
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img
                      src='assets/img/th-4/icon-green-process-accordion-2.svg'
                      alt='icon-green-process-accordion'
                      width={36}
                      height={50}
                      className='h-[50px] w-auto'
                    />
                    <h5 className='font-spaceGrotesk text-white'>
                      Define clear objectives
                    </h5>
                  </div>
                  <div className='accordion-icon is-chevron'>
                    <img
                      src='assets/img/th-4/icon-white-cheveron-down.svg'
                      alt='chevron'
                      width={30}
                      height={30}
                    />
                    <img
                      src='assets/img/th-4/icon-green-cheveron-up.svg'
                      alt='chevron'
                      width={30}
                      height={30}
                      className='absolute inset-0'
                    />
                  </div>
                </div>
                <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px]'>
                  <p>
                    You can easily create a custom AI account. You need to input
                    some required information.
                  </p>
                </div>
              </li>
              {/* Accordion items */}
              {/* Accordion items */}
              <li
                className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                  activeIndex == 2 ? 'active' : ''
                }`}
                data-jos_delay='0.1'
              >
                <div
                  onClick={() => handleAccordion(2)}
                  className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                >
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img
                      src='assets/img/th-4/icon-green-process-accordion-3.svg'
                      alt='icon-green-process-accordion'
                      width={36}
                      height={50}
                      className='h-[50px] w-auto'
                    />
                    <h5 className='font-spaceGrotesk text-white'>
                      Continuous improvement
                    </h5>
                  </div>
                  <div className='accordion-icon is-chevron'>
                    <img
                      src='assets/img/th-4/icon-white-cheveron-down.svg'
                      alt='chevron'
                      width={30}
                      height={30}
                    />
                    <img
                      src='assets/img/th-4/icon-green-cheveron-up.svg'
                      alt='chevron'
                      width={30}
                      height={30}
                      className='absolute inset-0'
                    />
                  </div>
                </div>
                <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px]'>
                  <p>
                    You can easily create a custom AI account. You need to input
                    some required information.
                  </p>
                </div>
              </li>
              {/* Accordion items */}
            </ul>
            {/* Process Accordion */}
            <div className='jos' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                  Optimize the highest security standards
                </h2>
              </div>
              {/* Section Content Block */}
              <div>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                  With AI cybersecurity solutions you can also save time and
                  money integrating disparate vendors, reduce training time, and
                  accelerate your time to discovery and response with everything
                  you need.
                </p>
              </div>
              {/* Counter Scroll */}
              <ul className='mt-[50px] grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-3'>
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number' data-countup-number={95}>
                      92
                    </span>
                    %
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Reduce Risk
                  </span>
                </li>
                {/* Counter Items */}
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number' data-countup-number={50}>
                      50
                    </span>
                    %
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Reduce Costs
                  </span>
                </li>
                {/* Counter Items */}
                {/* Counter Items */}
                <li>
                  <h3
                    className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                    data-module='countup'
                  >
                    <span className='start-number' data-countup-number={76}>
                      76
                    </span>
                    %
                  </h3>
                  <span className='mt-4 block text-[21px] font-normal'>
                    Maximize Value
                  </span>
                </li>
                {/* Counter Items */}
              </ul>
              {/* Counter Scroll */}
            </div>
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_04;

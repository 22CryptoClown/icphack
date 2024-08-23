import useAccordion from '../../../hooks/useAccordion';

const Content_04 = () => {
  const [activeIndex, handleAccordion] = useAccordion();
  return (
    <section id='content-section-4'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px] pt-20'>
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
                className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndex == 0 ? 'active' : ''
                  }`}
                data-jos_delay='0.1'
              >
                <div
                  onClick={() => handleAccordion(0)}
                  className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                >
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img
                      src='assets/img/th-4/play-solid.svg'
                      alt='icon-green-process-accordion'
                      width={36}
                      height={50}
                      className='h-[50px] w-auto'
                    />
                    <h5 className='font-spaceGrotesk text-white'>
                      Stage 1: MVP Development (Hackathon Phase)
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
                <div className='accordion-content disappear translate-y-3 text-sm leading-[1.42] lg:text-[21px]'>
                  <p>
                  In this initial stage, we are building our Minimum Viable Product (MVP) where users can create and sign contracts on-chain. The process includes emailing the client for signature and manually transferring payments to our wallet. Freelancers will be able to finalize projects, submit proof, and await client approval—all at a fixed fee.
                  </p>
                </div>
              </li>
              {/* Accordion items */}
              {/* Accordion items */}
              <li
                className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndex == 1 ? 'active' : ''
                  }`}
                data-jos_delay='0.1'
              >
                <div
                  onClick={() => handleAccordion(1)}
                  className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                >
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img
                      src='assets/img/th-4/rocket-solid.svg'
                      alt='icon-green-process-accordion'
                      width={36}
                      height={50}
                      className='h-[50px] w-auto'
                    />
                    <h5 className='font-spaceGrotesk text-white'>
                    Stage 2: Feature Finalization and Expansion
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
                <div className='accordion-content disappear translate-y-3 text-sm leading-[1.42] lg:text-[21px]'>
                  <p>
                  In the second stage, we will refine and complete the Threelancers platform. This includes integrating cross-chain payment methods, offering subscription options, and enabling users to add multiple payment terms. Our focus will be on enhancing functionality and providing more flexible payment solutions for freelancers and clients.
                  </p>
                </div>
              </li>
              {/* Accordion items */}
              {/* Accordion items */}
              <li
                className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndex == 2 ? 'active' : ''
                  }`}
                data-jos_delay='0.1'
              >
                <div
                  onClick={() => handleAccordion(2)}
                  className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                >
                  <div className='mb-3 flex items-center gap-x-6'>
                    <img
                      src='assets/img/th-4/globe-solid.svg'
                      alt='icon-green-process-accordion'
                      width={36}
                      height={50}
                      className='h-[50px] w-auto'
                    />
                    <h5 className='font-spaceGrotesk text-white'>
                      Stage 3: Global Scaling and Enterprise Solutions
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
                <div className='accordion-content disappear translate-y-3 text-sm leading-[1.42] lg:text-[21px]'>
                  <p>
                  In the final stage, we aim to scale Threelancers globally, expanding our reach to support not just freelancers but also enterprises. We will develop customized on-chain contract management solutions, enabling businesses worldwide to leverage our secure, transparent platform for managing complex contracts.
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
                  Building the Future, One Stage at a Time
                </h2>
              </div>
              {/* Section Content Block */}
              <div>
                <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                  Follow our journey as we build Threelancers from a groundbreaking MVP to a global solution. See how we’ll transform contract management for freelancers and enterprises alike. We believe Threelancers can significantly lower costs, greatly enhance value, and drastically reduce risks for freelancers and clients through our secure, transparent, and efficient on-chain platform.
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
                      72
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
                      44
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
                      52
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

import useAccordion from '../../../hooks/useAccordion';

const Faq = () => {
  const [activeIndexTwo, handleAccordionTwo] = useAccordion();
  return (
    <section className='faq-section'>
      {/* Section Spacer */}
      <div className='py-20 xl:pb-[150px] xl:pt-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
              Our experts are able to answer all your questions
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Accordion*/}
          <ul className='accordion flex flex-col gap-y-6'>
            {/* Accordion items */}
            <li
              className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                activeIndexTwo === 0 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(0)}
                className='accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl'
              >
                <h5 className='font-spaceGrotesk text-white'>
                  What is AI cybersecurity, and how does it differ from
                  traditional cybersecurity?
                </h5>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p>
                  AI refers to the simulation of human intelligence in machines,
                  enabling them to perform tasks that typically require human
                  intelligence, such as learning, reasoning, problem-solving,
                  and decision-making.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            {/* Accordion items */}
            <li
              className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                activeIndexTwo === 1 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(1)}
                className='accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl'
              >
                <h5 className='font-spaceGrotesk text-white'>
                  What types of threats can AI cybersecurity protect against?
                </h5>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p>
                  AI refers to the simulation of human intelligence in machines,
                  enabling them to perform tasks that typically require human
                  intelligence, such as learning, reasoning, problem-solving,
                  and decision-making.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            {/* Accordion items */}
            <li
              className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                activeIndexTwo === 2 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(2)}
                className='accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl'
              >
                <h5 className='font-spaceGrotesk text-white'>
                  How does AI help in threat detection and prevention?
                </h5>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p>
                  AI refers to the simulation of human intelligence in machines,
                  enabling them to perform tasks that typically require human
                  intelligence, such as learning, reasoning, problem-solving,
                  and decision-making.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            {/* Accordion items */}
            <li
              className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                activeIndexTwo === 3 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(3)}
                className='accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl'
              >
                <h5 className='font-spaceGrotesk text-white'>
                  Is AI cybersecurity effective against zero-day attacks?
                </h5>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p>
                  AI refers to the simulation of human intelligence in machines,
                  enabling them to perform tasks that typically require human
                  intelligence, such as learning, reasoning, problem-solving,
                  and decision-making.
                </p>
              </div>
            </li>
            {/* Accordion items */}
            {/* Accordion items */}
            <li
              className={`jos accordion-item is-2 rounded-[10px] bg-[#121212] px-7 py-[30px] ${
                activeIndexTwo === 4 ? 'active' : ''
              }`}
              data-jos_delay='0.1'
            >
              <div
                onClick={() => handleAccordionTwo(4)}
                className='accordion-header mb-[10px] flex items-center justify-between text-xl leading-[1.33] -tracking-[1px] lg:text-3xl'
              >
                <h5 className='font-spaceGrotesk text-white'>
                  What is the role of human cybersecurity professionals in AI
                  cybersecurity?
                </h5>
                <div className='accordion-icon is-outline-green'>
                  <span className='accordion-icon-plus' />
                </div>
              </div>
              <div className='accordion-content'>
                <p>
                  AI refers to the simulation of human intelligence in machines,
                  enabling them to perform tasks that typically require human
                  intelligence, such as learning, reasoning, problem-solving,
                  and decision-making.
                </p>
              </div>
            </li>
            {/* Accordion items */}
          </ul>
          {/* Accordion*/}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Faq;

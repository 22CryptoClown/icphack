import useAccordion from '../../../../hooks/useAccordion';
import useTabs from '../../../../hooks/useTabs';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import Contact from '../../../../components/contact/Contact';
import data from '../faq_01/data.json';
import data_02 from './data.json';

const Faq_02 = () => {
  const [accordion, setAccordion] = useAccordion(0);
  const [accordion_01, setAccordion_01] = useAccordion(0);
  const [accordion_02, setAccordion_02] = useAccordion(0);
  const [accordion_03, setAccordion_03] = useAccordion(0);

  const [activeTab, handleTab] = useTabs();

  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='FAQs' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className='faq-section'>
          {/* Section Spacer */}
          <div className='pb-20 xl:pb-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
                <div className='mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]'>
                  <h2>Our experts are able to answer all your questions</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Faq Wrapper */}
              <div className='grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-[minmax(0,_auto)_1fr] lg:grid-cols-[minmax(354px,_auto)_1fr] lg:gap-x-[86px]'>
                <div className='flex flex-col gap-y-6'>
                  <button
                    className={`tab-button faq-button ${
                      activeTab === 0 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(0)}
                    data-tab='general-questions'
                  >
                    General questions
                  </button>
                  <button
                    className={`tab-button faq-button ${
                      activeTab === 1 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(1)}
                    data-tab='about-the-company'
                  >
                    About the company
                  </button>
                  <button
                    className={`tab-button faq-button ${
                      activeTab === 2 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(2)}
                    data-tab='about-artificial-intelligence'
                  >
                    About artificial intelligence
                  </button>
                  <button
                    className={`tab-button faq-button ${
                      activeTab === 3 ? 'active' : ''
                    }`}
                    onClick={() => handleTab(3)}
                    data-tab='about-the-team'
                  >
                    About the team
                  </button>
                </div>
                <div>
                  {/* Accordion*/}
                  {activeTab === 0 && (
                    <ul
                      className='accordion tab-content flex flex-col gap-y-6'
                      id='general-questions'
                    >
                      {/* Accordion items */}
                      {data.map((item, index) => (
                        <li
                          key={index}
                          className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                            accordion === index ? 'active' : ''
                          }`}
                          data-jos_delay='0.1'
                          onClick={() => setAccordion(index)}
                        >
                          <div className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]'>
                            <h5>{item.title}</h5>
                            <div className='accordion-icon'>
                              <img src='assets/img/plus.svg' alt='plus' />
                            </div>
                          </div>
                          <div className='accordion-content text-[#2C2C2C]'>
                            <p>{item.content}</p>
                          </div>
                        </li>
                      ))}
                      {/* Accordion items */}
                    </ul>
                  )}
                  {/* Accordion*/}

                  {/* Accordion*/}

                  {activeTab === 1 && (
                    <ul
                      className='accordion tab-content flex flex-col gap-y-6'
                      id='about-the-company'
                    >
                      {/* Accordion items */}
                      {data_02.map((item, index) => (
                        <li
                          key={index}
                          className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                            accordion_01 === index ? 'active' : ''
                          }`}
                          data-jos_delay='0.1'
                          onClick={() => setAccordion_01(index)}
                        >
                          <div className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]'>
                            <h5>{item.title}</h5>
                            <div className='accordion-icon'>
                              <img src='assets/img/plus.svg' alt='plus' />
                            </div>
                          </div>
                          <div className='accordion-content text-[#2C2C2C]'>
                            <p>{item.content}</p>
                          </div>
                        </li>
                      ))}
                      {/* Accordion items */}
                    </ul>
                  )}
                  {/* Accordion*/}

                  {/* Accordion*/}
                  {activeTab === 2 && (
                    <ul
                      className='accordion tab-content flex flex-col gap-y-6'
                      id='about-artificial-intelligence'
                    >
                      {/* Accordion items */}
                      {data.map((item, index) => (
                        <li
                          key={index}
                          className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                            accordion_02 === index ? 'active' : ''
                          }`}
                          data-jos_delay='0.1'
                          onClick={() => setAccordion_02(index)}
                        >
                          <div className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]'>
                            <h5>{item.title}</h5>
                            <div className='accordion-icon'>
                              <img src='assets/img/plus.svg' alt='plus' />
                            </div>
                          </div>
                          <div className='accordion-content text-[#2C2C2C]'>
                            <p>{item.content}</p>
                          </div>
                        </li>
                      ))}
                      {/* Accordion items */}
                    </ul>
                  )}
                  {/* Accordion*/}

                  {/* Accordion*/}

                  {activeTab === 3 && (
                    <ul
                      className='accordion tab-content flex flex-col gap-y-6'
                      id='about-the-team'
                    >
                      {/* Accordion items */}
                      {data_02.map((item, index) => (
                        <li
                          key={index}
                          className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                            accordion_03 === index ? 'active' : ''
                          }`}
                          data-jos_delay='0.1'
                          onClick={() => setAccordion_03(index)}
                        >
                          <div className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[0.5px] lg:text-[28px]'>
                            <h5>{item.title}</h5>
                            <div className='accordion-icon'>
                              <img src='assets/img/plus.svg' alt='plus' />
                            </div>
                          </div>
                          <div className='accordion-content text-[#2C2C2C]'>
                            <p>{item.content}</p>
                          </div>
                        </li>
                      ))}
                      {/* Accordion items */}
                    </ul>
                  )}
                  {/* Accordion*/}
                </div>
              </div>
              {/* Faq Wrapper */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: FAQ Section End :::... */}
        {/*...::: About Contact Section Start :::... */}
        <Contact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </>
  );
};

export default Faq_02;

import useAccordion from '../../../../hooks/useAccordion';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import Contact from '../../../../components/contact/Contact';
import data from './data.json';

const Faq_01 = () => {
  const [activeIndex, handleAccordion] = useAccordion(0);

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
              {/* Accordion*/}
              <ul className='accordion flex flex-col gap-y-6'>
                {/* Accordion items */}
                {data.map((item, index) => (
                  <li
                    key={index}
                    className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${
                      activeIndex === index ? 'active' : ''
                    }`}
                    data-jos_delay='0.1'
                    onClick={() => handleAccordion(index)}
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
              {/* Accordion*/}
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

export default Faq_01;
